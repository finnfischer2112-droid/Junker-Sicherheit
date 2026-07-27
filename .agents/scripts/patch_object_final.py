"""
object.jpg – finale Korrektur mit gemessenen Koordinaten.
Weste (neon-gelb): x 620–780, y 330–530
Badges (dunkel auf Weste): links ca. (610-670, 330-420), rechts ca. (715-770, 330-420)
"""

from PIL import Image, ImageFilter
import numpy as np
import os

SRC  = "artifacts/junker-sicherheit/public/images/generated"
ORIG = os.path.join(SRC, "_original")
LOGO_LIGHT = Image.open(".agents/outputs/logo-hell.png").convert("RGBA")

img = Image.open(os.path.join(ORIG, "object.jpg")).convert("RGBA")
arr = np.array(img)

def sample_color(arr, x, y, w=10, h=10):
    r = arr[y:y+h, x:x+w, :3]
    return tuple(int(c) for c in r.mean(axis=(0,1)))

def cover(img, x1, y1, x2, y2, sx, sy, blend=0.88, blur_r=2.0):
    arr = np.array(img)
    color = np.array(sample_color(arr, sx, sy), dtype=float)
    region = arr[y1:y2, x1:x2].copy()
    blended = (blend * color + (1-blend) * region[:,:,:3]).astype(np.uint8)
    arr[y1:y2, x1:x2, :3] = blended
    arr[y1:y2, x1:x2, 3]  = 255
    result = Image.fromarray(arr)
    if blur_r > 0:
        patch = result.crop((x1,y1,x2,y2)).filter(ImageFilter.GaussianBlur(blur_r))
        result.paste(patch, (x1,y1))
    return result

def logo(img, variant, cx, cy, tw):
    ratio  = tw / variant.width
    nw, nh = tw, int(variant.height * ratio)
    r = variant.resize((nw, nh), Image.LANCZOS)
    img.paste(r, (cx - nw//2, cy - nh//2), r)
    return img

# Probe: Gelbe Westen-Farbe links vom Badge
vest_color = sample_color(arr, 635, 450, 12, 12)
print(f"Westen-Referenzfarbe: {vest_color}")

# Badge links auf Weste (dunkle Patches)
img = cover(img, 608, 328, 672, 422,  sx=690, sy=390, blend=0.92)
# Badge rechts auf Weste
img = cover(img, 714, 320, 775, 415,  sx=795, sy=390, blend=0.92)

# Helm: "SECURITY" Text (sehr klein, trotzdem abdecken)
img = cover(img, 573, 233, 649, 265,  sx=568, sy=280, blend=0.85, blur_r=1.2)

# Junker-Logo auf der Weste (blau auf gelb), links platziert
img = logo(img, LOGO_LIGHT, cx=660, cy=390, tw=120)

img.convert("RGB").save(f"{SRC}/object.jpg", quality=95)
print("✓ object.jpg")
