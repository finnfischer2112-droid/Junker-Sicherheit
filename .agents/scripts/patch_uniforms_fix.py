"""
Korrekturen für hero, object, logistics, reception.
Arbeitet von den _original Backups aus (frischer Start).
"""

from PIL import Image, ImageFilter
import numpy as np
import os

SRC  = "artifacts/junker-sicherheit/public/images/generated"
ORIG = os.path.join(SRC, "_original")
LOGO_DARK   = Image.open(".agents/outputs/logo-dunkel.png").convert("RGBA")
LOGO_LIGHT  = Image.open(".agents/outputs/logo-hell.png").convert("RGBA")


def load_orig(name):
    return Image.open(os.path.join(ORIG, name)).convert("RGBA")

def save(img, name):
    img.convert("RGB").save(os.path.join(SRC, name), quality=95)
    print(f"  ✓ {name}")

def sample_color(img_arr, x, y, w=8, h=8):
    region = img_arr[y:y+h, x:x+w, :3]
    return tuple(int(c) for c in region.mean(axis=(0,1)))

def cover(img, x1, y1, x2, y2, sx, sy, blur_r=2.0):
    """Überdeckt Rechteck mit Uniformfarbe aus Referenzpunkt (sx,sy)."""
    arr = np.array(img)
    color = sample_color(arr, sx, sy)
    w, h = x2-x1, y2-y1
    region = arr[y1:y2, x1:x2].copy()
    blended = (0.88 * np.array(color) + 0.12 * region[:,:,:3]).astype(np.uint8)
    arr[y1:y2, x1:x2, :3] = blended
    arr[y1:y2, x1:x2,  3] = 255
    result = Image.fromarray(arr)
    if blur_r > 0:
        patch = result.crop((x1,y1,x2,y2)).filter(ImageFilter.GaussianBlur(blur_r))
        result.paste(patch, (x1,y1))
    return result

def logo(img, variant, cx, cy, tw):
    ratio = tw / variant.width
    nw, nh = tw, int(variant.height * ratio)
    r = variant.resize((nw, nh), Image.LANCZOS)
    img.paste(r, (cx - nw//2, cy - nh//2), r)
    return img


# ══════════════════════════════════════════════════════════════════════════
# hero.jpg  – "SECURITY" quer über den Rücken vollständig abdecken
# ══════════════════════════════════════════════════════════════════════════
print("hero.jpg")
img = load_orig("hero.jpg")

# Kleines Patch oben links am Rücken
img = cover(img, 340, 415, 435, 470,  sx=310, sy=510)
# "SECURITY" – breiter, niedrigerer Block (Jackenrücken)
img = cover(img, 340, 460, 815, 510,  sx=310, sy=530)
# Eventuell noch ein Rest darunter
img = cover(img, 450, 505, 780, 535,  sx=310, sy=555)

# Junker-Logo mittig auf Rücken, klar positioniert
img = logo(img, LOGO_DARK, cx=570, cy=475, tw=220)
save(img, "hero.jpg")


# ══════════════════════════════════════════════════════════════════════════
# object.jpg – Helm-Logo und Westen-Badges richtig platzieren
# Das Bild ist 1024×1024. Der Wachmann steht rechts, Helm ~(530-650, 200-310)
# ══════════════════════════════════════════════════════════════════════════
print("object.jpg")
img = load_orig("object.jpg")

# Helm: "SECURITY" Schriftzug auf dem Helm (weiß)  ~(530-640, 235-265)
img = cover(img, 512, 230, 650, 275,  sx=508, sy=290, blur_r=1.5)
# Helm: kleines Logo darunter                       ~(530-590, 265-290)
img = cover(img, 520, 265, 598, 295,  sx=508, sy=310, blur_r=1.5)

# Weste: linke Badge-Gruppe                         ~(490-560, 380-430)
img = cover(img, 485, 368, 565, 420,  sx=475, sy=440)
# Weste: rechte Badge-Gruppe                        ~(570-640, 355-415)
img = cover(img, 562, 350, 645, 420,  sx=650, sy=440)

# Junker-Logo auf Weste (blau auf neon-gelb)
img = logo(img, LOGO_LIGHT, cx=555, cy=400, tw=120)
save(img, "object.jpg")


# ══════════════════════════════════════════════════════════════════════════
# logistics.jpg – Mützen-Box weg, Brust sauber
# ══════════════════════════════════════════════════════════════════════════
print("logistics.jpg")
img = load_orig("logistics.jpg")

# Mützen-Logo (klein, auf dunkler Kappe)  ~(540-575, 308-335)
img = cover(img, 536, 305, 578, 340,  sx=520, sy=355, blur_r=1.5)
# Brust-Patch                             ~(510-600, 460-510)
img = cover(img, 505, 455, 608, 515,  sx=488, sy=535)
# Schulter-Abzeichen (roter Wappen-Patch) ~(605-655, 432-468)
img = cover(img, 600, 428, 660, 472,  sx=590, sy=490)

# Junker-Logo auf Brust
img = logo(img, LOGO_DARK, cx=550, cy=478, tw=115)
save(img, "logistics.jpg")


# ══════════════════════════════════════════════════════════════════════════
# reception.jpg – AXIS Schulter-Patch vollständig überdecken
# ══════════════════════════════════════════════════════════════════════════
print("reception.jpg")
img = load_orig("reception.jpg")

# AXIS Schulter-Patch (rechte Schulter, dunkle Uniform) ~(692-772, 462-530)
img = cover(img, 688, 458, 775, 532,  sx=668, sy=555)
# Junker-Logo als Schulter-Abzeichen
img = logo(img, LOGO_DARK, cx=728, cy=490, tw=95)
save(img, "reception.jpg")


print("\nKorrekturen fertig.")
