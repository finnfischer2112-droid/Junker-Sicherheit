# Render deployment

This repository is prepared for a Render Blueprint deployment.

## Architecture

- One Node Web Service serves both the React SPA and the Express API.
- The API remains available under `/api`.
- Express serves the built frontend and falls back to `index.html` for client-side routes.
- A Render PostgreSQL database stores contact requests.
- The health check is available at `/api/healthz`.

## Deploy

1. Push the repository to GitHub.
2. In Render, choose **New > Blueprint**.
3. Connect the `finnfischer2112-droid/Junker-Sicherheit` repository.
4. Render reads `render.yaml` and creates the web service and PostgreSQL database.
5. Review the generated resources and apply the Blueprint.

The Blueprint installs dependencies with the locked pnpm version, applies the
database schema, builds the frontend and API, and starts the API server.

## Required behavior

- Keep the service root at the repository root.
- Do not override the Blueprint build or start commands.
- Render supplies `PORT` automatically at runtime.
- `DATABASE_URL` is linked from the Blueprint database.
- `CONTACT_EMAIL` is the address that receives contact-form notifications.
- `CONTACT_FROM_EMAIL` is the visible sender address.
- `SMTP_PASSWORD` is the IONOS mailbox password and is stored only as a Render secret.

## Contact-form email

Add these environment variables to the Render Web Service:

```text
CONTACT_EMAIL=info@junker-sicherheit.de
CONTACT_FROM_EMAIL=Junker-Sicherheit <g.junker@junker-sicherheit.de>
SMTP_HOST=smtp.ionos.de
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=g.junker@junker-sicherheit.de
SMTP_PASSWORD=<IONOS mailbox password>
```

Store `SMTP_PASSWORD` as a secret. Do not commit it to the repository.

## Local production verification

From the repository root:

```bash
pnpm install --frozen-lockfile
PORT=10000 BASE_PATH=/ NODE_ENV=production \
  pnpm --filter @workspace/junker-sicherheit run build
pnpm --filter @workspace/api-server run build
DATABASE_URL=postgresql://... NODE_ENV=production PORT=10000 \
  STATIC_DIR=../junker-sicherheit/dist/public \
  pnpm --filter @workspace/api-server run start
```

Then check:

```bash
curl http://localhost:10000/api/healthz
curl -I http://localhost:10000/
curl -I http://localhost:10000/galerie
```
