import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { existsSync } from "node:fs";
import path from "node:path";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

if (process.env["NODE_ENV"] === "production") {
  const staticDir = path.resolve(
    process.env["STATIC_DIR"] ??
      path.join(process.cwd(), "..", "junker-sicherheit", "dist", "public"),
  );

  if (!existsSync(staticDir)) {
    throw new Error(
      `Frontend build directory not found at "${staticDir}". Build the frontend before starting the server.`,
    );
  }

  app.use(express.static(staticDir));

  app.use((req, res, next) => {
    if (
      req.method !== "GET" ||
      req.path.startsWith("/api") ||
      !req.accepts("html")
    ) {
      next();
      return;
    }

    res.sendFile(path.join(staticDir, "index.html"));
  });
}

export default app;
