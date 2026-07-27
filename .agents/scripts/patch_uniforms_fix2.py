"""
Finale Korrekturrunde – hero, object, logistics (von Original-Backups).
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

def sample_color(arr, x, y, w=10, h=10):
    r = arr[y:y+h, x:x+w, :3]
    return tuple(int(c) for c in r.mean(axis=(0,1)))

def cover(img, x1, y1, x2, y2, sx, sy, blend=0.90, blur_r=2.5):
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


# ══════════════════════════════════════════════════════════════════════════
# hero.jpg  – "SECURITY" vollständig abdecken (Jackenrücken schwarz)
#
# Bild 1024×1024. Person steht mittig, zeigt Rücken.
# Jacke (schwarz): ca. x 290–850, y 380–700
# "SECURITY" Schriftzug: ca. y 455–510, x 355–820 (sehr breit)
# Kleines Patch oben links: ca. x 350–435, y 405–460
# ══════════════════════════════════════════════════════════════════════════
print("hero.jpg")
img = load_orig("hero.jpg")

# Referenzfarbe: reines Schwarz der Jacke neben dem Text
# Cover kleines Patch oben
img = cover(img, 345, 400, 440, 468,  sx=310, sy=500, blend=0.92)
# Cover "SECURITY" – volle Breite der Jacke
img = cover(img, 295, 450, 840, 520,  sx=290, sy=540, blend=0.92)
# Ein letzter schmaler Streifen darunter (Buchstaben-Unterlängen)
img = cover(img, 350, 515, 825, 545,  sx=290, sy=560, blend=0.92)

# Logo mittig auf Rücken
img = logo(img, LOGO_DARK, cx=575, cy=478, tw=230)
save(img, "hero.jpg")


# ══════════════════════════════════════════════════════════════════════════
# object.jpg  – Wachmann läuft RECHTS im Bild
#
# Bild 1024×1024.
# Helm (weiß): ca. x 565–685, y 195–310
# "SECURITY" auf Helm: ca. x 573–648, y 235–262
# SECU… neben Lüftung: ca. x 627–660, y 240–268
# Weste (neon-gelb): ca. x 555–740, y 330–520
# Badge links-oben auf Weste: ca. x 560–635, y 345–400
# Badge rechts auf Weste: ca. x 640–720, y 335–415
# ══════════════════════════════════════════════════════════════════════════
print("object.jpg")
img = load_orig("object.jpg")

# Helm: Schriftzug "SECURITY" (weiß auf weiß – kaum sichtbar, trotzdem überschreiben)
img = cover(img, 565, 230, 660, 272,  sx=558, sy=285, blend=0.85, blur_r=1.5)

# Weste Badge links (Badge/Emblem oben links)
img = cover(img, 556, 342, 638, 408,  sx=545, sy=430, blend=0.88)
# Weste Badge rechts
img = cover(img, 635, 325, 728, 415,  sx=728, sy=440, blend=0.88)

# Junker-Logo auf Weste (blau auf neon-gelb, gut lesbar)
img = logo(img, LOGO_LIGHT, cx=645, cy=390, tw=130)
save(img, "object.jpg")


# ══════════════════════════════════════════════════════════════════════════
# logistics.jpg  – Mützen-Box im Hintergrund entfernen
#
# Das orangefarbene Rechteck war bei ca. (536-578, 305-340) – trifft LKW/Hintergrund.
# Echter Mützen-Bereich: die Mütze ist bei ca. x 525–580, y 310–350
# Aber die Person trägt eine DUNKLE Kappe – Farbe fast schwarz
# Außerdem: das orangefarbene kam vom falschen Sample-Punkt auf dem LKW
# ══════════════════════════════════════════════════════════════════════════
print("logistics.jpg")
img = load_orig("logistics.jpg")

# Mütze – richtiger Sample-Punkt: dunkles Material der Kappe selbst
# Kappe ca. x 527–577, y 313–348
img = cover(img, 523, 308, 582, 352,  sx=524, sy=360, blend=0.90, blur_r=1.5)

# Brust-Patch
img = cover(img, 505, 455, 608, 515,  sx=488, sy=535, blend=0.88)
# Schulter-Wappen
img = cover(img, 598, 428, 662, 472,  sx=588, sy=490, blend=0.88)

# Junker-Logo auf Brust
img = logo(img, LOGO_DARK, cx=550, cy=478, tw=115)
save(img, "logistics.jpg")


print("\nFertig.")
