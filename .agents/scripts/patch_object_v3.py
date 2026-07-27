"""
object.jpg – dritte Version.
Gemessene gelbe Vest-Pixel: (750,370)=245,178,71  (660,390)=194,214,21  (630,410)=249,193,44
Vest-Bereich: x 600–800, y 340–520
Badge-Cluster (dunkle Flächen auf Weste): ca. x 618–680, y 340–425
Logo klein und klar auf die Weste setzen.
"""

from PIL import Image, ImageFilter
import numpy as np, os

SRC  = "artifacts/junker-sicherheit/public/images/generated"
ORIG = os.path.join(SRC, "_original")
LOGO_LIGHT = Image.open(".agents/outputs/logo-hell.png").convert("RGBA")

img = Image.open(os.path.join(ORIG, "object.jpg")).convert("RGBA")

def cover_with_color(img, x1, y1, x2, y2, fill_rgb, blend=0.85, blur_r=2.0):
    """Überdeckt mit explizit angegebener Farbe (statt Sample)."""
    arr = np.array(img)
    fill = np.array(fill_rgb, dtype=float)
    region = arr[y1:y2, x1:x2].copy()
    blended = (blend * fill + (1-blend) * region[:,:,:3]).astype(np.uint8)
    arr[y1:y2, x1:x2, :3] = blended
    arr[y1:y2, x1:x2,  3] = 255
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

# Gemessene gelbe Westen-Farbe: Mittelwert aus drei Punkten
VEST_YELLOW = (226, 195, 45)   # Durchschnitt (245+194+249)/3, (178+214+193)/3, (71+21+44)/3

# Badge-Cluster links (dunkle Patches auf der Weste)
img = cover_with_color(img, 616, 338, 682, 428,  VEST_YELLOW, blend=0.88)

# Badge rechts (zweiter Cluster)
img = cover_with_color(img, 716, 330, 778, 420,  VEST_YELLOW, blend=0.88)

# Helm: SECURITY-Text (dezent überschreiben, weißer Helm)
img = cover_with_color(img, 574, 232, 652, 267,  (230, 228, 232), blend=0.82, blur_r=1.2)

# Junker-Logo mittig auf linker Weste-Hälfte (über den überdeckten Badges)
img = logo(img, LOGO_LIGHT, cx=648, cy=380, tw=115)

img.convert("RGB").save(f"{SRC}/object.jpg", quality=95)
print("✓ object.jpg")
