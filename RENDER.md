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
- `CONTACT_FROM_EMAIL` is a verified Resend sender address.
- `RESEND_API_KEY` is created in Resend and stored only as a Render secret.

## Contact-form email

Create a Resend account and API key, then add these environment variables to
the Render Web Service:

```text
CONTACT_EMAIL=f.fischer@almaron.de
CONTACT_FROM_EMAIL=Junker-Sicherheit <onboarding@resend.dev>
RESEND_API_KEY=<your Resend API key>
```

The Resend test sender is suitable for initial testing. For production delivery
to arbitrary recipients, verify a sending domain in Resend and replace
`CONTACT_FROM_EMAIL` with an address on that domain.

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
