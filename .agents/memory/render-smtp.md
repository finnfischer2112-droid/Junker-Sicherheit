---
name: Render SMTP limitation
description: Why IONOS SMTP needs a paid Render Web Service compute plan
---

Render Free Web Services block outbound SMTP ports 25, 465, and 587. Do not assume valid IONOS credentials prove that contact-form email will work in production; local SMTP authentication and production network reachability are separate checks.

**Why:** A locally successful SMTP verification masked a production contact form that remained pending while the Free Render service attempted an outbound connection. Render documents this Free-service restriction.

**How to apply:** When debugging contact notifications on Render, verify the **Web Service's compute plan** and outbound SMTP connectivity before changing credentials. A paid workspace plan alone does not lift the Free service restriction. Keep SMTP operations time-bounded and distinguish a stored inquiry from a delivered notification.