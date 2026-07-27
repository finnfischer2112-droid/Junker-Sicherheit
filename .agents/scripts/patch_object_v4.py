"""
object.jpg – v4: Logo direkt auf die Weste, ohne Cover-Rechtecke.
Die Badges sind kleine runde Embleme. Das Logo in passender Größe
direkt draufsetzen ist sauberer als ein flacher Farbblock.
"""

from PIL import Image, ImageFilter, ImageEnhance
import numpy as np, os

SRC  = "artifacts/junker-sicherheit/public/images/generated"
ORIG = os.path.join(SRC, "_original")
LOGO_LIGHT = Image.open(".agents/outputs/logo-hell.png").convert("RGBA")

img = Image.open(os.path.join(ORIG, "object.jpg")).convert("RGBA")

def logo(img, variant, cx, cy, tw, alpha=1.0):
    ratio  = tw / variant.width
    nw, nh = tw, int(variant.height * ratio)
    r = variant.resize((nw, nh), Image.LANCZOS)
    if alpha < 1.0:
        r_arr = np.array(r)
        r_arr[:,:,3] = (r_arr[:,:,3] * alpha).astype(np.uint8)
        r = Image.fromarray(r_arr)
    img.paste(r, (cx - nw//2, cy - nh//2), r)
    return img

# Badge-Cluster links auf Weste: ca. (618-680, 338-425)
# → Logo zentriert bei (648, 382), Breite 100px überdeckt die Badges direkt
img = logo(img, LOGO_LIGHT, cx=648, cy=382, tw=100)

img.convert("RGB").save(f"{SRC}/object.jpg", quality=95)
print("✓ object.jpg")
