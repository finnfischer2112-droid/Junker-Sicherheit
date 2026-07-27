import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
});

console.log("Sende Inpainting-Anfrage an OpenAI...");

const response = await openai.images.edit({
  model: "gpt-image-1",
  image: fs.createReadStream(".agents/outputs/inpaint_src.png"),
  mask: fs.createReadStream(".agents/outputs/inpaint_mask.png"),
  prompt:
    "Neon yellow hi-vis safety vest fabric with reflective silver stripe. Clean vest surface, no text, no logos, no patches, no brand markings. Photorealistic, matching the surrounding vest texture and lighting.",
  size: "1024x1024",
});

const b64 = response.data[0].b64_json;
const buf = Buffer.from(b64, "base64");
fs.writeFileSync(".agents/outputs/inpaint_result.png", buf);
console.log("Fertig → .agents/outputs/inpaint_result.png");
