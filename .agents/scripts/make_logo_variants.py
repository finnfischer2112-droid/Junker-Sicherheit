"""
Create logo variants for use on dark and light uniform backgrounds.
Input:  artifacts/junker-sicherheit/public/images/logo-junker-new.png
Output: .agents/outputs/logo-hell.png         (blue on transparent, for light/yellow surfaces)
        .agents/outputs/logo-dunkel.png        (white on transparent, for dark uniforms)
        .agents/outputs/logo-preview-dark.png  (preview on dark navy background)
        .agents/outputs/logo-preview-yellow.png (preview on yellow hi-vis background)
        .agents/outputs/logo-preview-black.png  (preview on black uniform)
"""

from PIL import Image
import numpy as np
import os

os.makedirs(".agents/outputs", exist_ok=True)

# ── load original ──────────────────────────────────────────────────────────
src = Image.open(
    "artifacts/junker-sicherheit/public/images/logo-junker-new.png"
).convert("RGBA")
w, h = src.size
print(f"Original logo: {w}×{h} px")

arr = np.array(src)

# White mask: pixels that are nearly white (background)
white_mask = (arr[:,:,0] > 230) & (arr[:,:,1] > 230) & (arr[:,:,2] > 230)
logo_pixels = ~white_mask

# ── Variant 1: blue logo, transparent background ───────────────────────────
arr_hell = arr.copy()
arr_hell[white_mask, 3] = 0
logo_hell = Image.fromarray(arr_hell)
logo_hell.save(".agents/outputs/logo-hell.png")
print("✓ logo-hell.png  (blau auf transparent, für helle Flächen)")

# ── Variant 2: white logo, transparent background ─────────────────────────
arr_dunkel = arr.copy()
arr_dunkel[logo_pixels, 0] = 255
arr_dunkel[logo_pixels, 1] = 255
arr_dunkel[logo_pixels, 2] = 255
arr_dunkel[white_mask, 3] = 0
logo_dunkel = Image.fromarray(arr_dunkel)
logo_dunkel.save(".agents/outputs/logo-dunkel.png")
print("✓ logo-dunkel.png (weiß auf transparent, für dunkle Uniformen)")

# ── Previews ───────────────────────────────────────────────────────────────
PAD = 60

def make_preview(logo_img, bg_color, filename):
    canvas = Image.new("RGBA", (w + PAD*2, h + PAD*2), bg_color)
    canvas.alpha_composite(logo_img, (PAD, PAD))
    canvas.convert("RGB").save(filename)
    print(f"✓ {filename}")

make_preview(logo_dunkel, (25, 30, 55, 255),   ".agents/outputs/logo-preview-dunkelblau.png")
make_preview(logo_dunkel, (15, 15, 15, 255),   ".agents/outputs/logo-preview-schwarz.png")
make_preview(logo_hell,   (210, 210, 0, 255),  ".agents/outputs/logo-preview-gelb.png")
make_preview(logo_hell,   (255, 255, 255, 255),".agents/outputs/logo-preview-weiss.png")

print("\nAlle Logo-Varianten fertig.")
