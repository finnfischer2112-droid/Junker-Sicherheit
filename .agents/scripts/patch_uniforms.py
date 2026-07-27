"""
Ersetzt Fremd-Logos auf Uniformen durch das Junker-Sicherheit-Logo.
Alle Bilder sind 1024×1024 px.
Backup: public/images/generated/_original/ (wird erstmalig angelegt)
"""

from PIL import Image, ImageFilter, ImageDraw
import numpy as np
import os, shutil

SRC  = "artifacts/junker-sicherheit/public/images/generated"
ORIG = os.path.join(SRC, "_original")
LOGO_DARK   = Image.open(".agents/outputs/logo-dunkel.png").convert("RGBA")  # weiß auf transparent
LOGO_LIGHT  = Image.open(".agents/outputs/logo-hell.png").convert("RGBA")    # blau auf transparent

os.makedirs(ORIG, exist_ok=True)


# ── Hilfsfunktionen ────────────────────────────────────────────────────────

def backup(name):
    src = os.path.join(SRC, name)
    dst = os.path.join(ORIG, name)
    if not os.path.exists(dst):
        shutil.copy2(src, dst)

def load(name):
    backup(name)
    return Image.open(os.path.join(ORIG, name)).convert("RGBA")

def save(img, name):
    img.convert("RGB").save(os.path.join(SRC, name), quality=95)
    print(f"  ✓ {name}")

def sample_color(img_arr, x, y, w=6, h=6):
    """Mittlere Farbe eines Bereichs (als Referenz für Uniformfarbe)."""
    region = img_arr[y:y+h, x:x+w, :3]
    return tuple(int(c) for c in region.mean(axis=(0,1)))

def cover_region(img, x1, y1, x2, y2, sample_x, sample_y, blur=True):
    """
    Überdeckt einen Bereich mit der Farbe, die bei (sample_x, sample_y)
    gemessen wird. Optional leichtes Blur für natürlichen Übergang.
    """
    arr = np.array(img)
    color = sample_color(arr, sample_x, sample_y)
    w, h = x2 - x1, y2 - y1

    # Füllen mit Uniformfarbe + leichtes Rauschen (sieht natürlicher aus)
    patch = np.zeros((h, w, 4), dtype=np.uint8)
    patch[:,:,:3] = color
    patch[:,:, 3] = 255

    region_arr = arr[y1:y2, x1:x2].copy()
    # Mische 85% Zielfarbe + 15% Original-Textur (Stoff-Struktur bleibt minimal)
    blended = (0.85 * patch[:,:,:3] + 0.15 * region_arr[:,:,:3]).astype(np.uint8)
    arr[y1:y2, x1:x2, :3] = blended
    arr[y1:y2, x1:x2,  3] = 255

    result = Image.fromarray(arr)
    if blur:
        # Nur die überschriebene Region weich glätten
        region = result.crop((x1, y1, x2, y2)).filter(ImageFilter.GaussianBlur(1.5))
        result.paste(region, (x1, y1))
    return result

def paste_logo(img, logo, cx, cy, target_width):
    """
    Fügt Logo mittig bei (cx,cy) ein, skaliert auf target_width px Breite.
    """
    ratio = target_width / logo.width
    nw = target_width
    nh = int(logo.height * ratio)
    resized = logo.resize((nw, nh), Image.LANCZOS)
    x = cx - nw // 2
    y = cy - nh // 2
    img.paste(resized, (x, y), resized)
    return img


# ══════════════════════════════════════════════════════════════════════════
# 1. construction.jpg
#    – SECURITAS + roter Text auf gelber Warnweste (Brust)
#    – kleines Logo am rechten Oberarm
# ══════════════════════════════════════════════════════════════════════════
print("construction.jpg")
img = load("construction.jpg")

# Brust-Logo (SECURITAS + rote Punkte) auf gelber Weste
img = cover_region(img, 448, 408, 585, 460,  sample_x=430, sample_y=490)
# Kleines Arm-Abzeichen rechts
img = cover_region(img, 610, 425, 675, 470,  sample_x=600, sample_y=500)
# Blaues Junker-Logo (gut lesbar auf Gelb) auf Brust, mittig
img = paste_logo(img, LOGO_LIGHT, cx=510, cy=430, target_width=120)

save(img, "construction.jpg")


# ══════════════════════════════════════════════════════════════════════════
# 2. event.jpg
#    – "EVENT SECURITY" Brustpatch linker Wachmann (Mitte)
#    – "EVENT SECURITY" Brustpatch rechter Wachmann
# ══════════════════════════════════════════════════════════════════════════
print("event.jpg")
img = load("event.jpg")

# Linker Wachmann – Brustpatch
img = cover_region(img, 418, 498, 545, 545,  sample_x=400, sample_y=560)
# Linker Wachmann – Schulter-Patch rechts
img = cover_region(img, 505, 455, 555, 490,  sample_x=490, sample_y=520)
# Rechter Wachmann – Brustpatch
img = cover_region(img, 648, 490, 765, 535,  sample_x=630, sample_y=560)
# Rechter Wachmann – Schulter-Patch
img = cover_region(img, 718, 450, 760, 485,  sample_x=700, sample_y=520)

# Junker-Logo auf linkem Wachmann (Brust)
img = paste_logo(img, LOGO_DARK, cx=478, cy=515, target_width=110)
# Junker-Logo auf rechtem Wachmann (Brust)
img = paste_logo(img, LOGO_DARK, cx=703, cy=507, target_width=100)

save(img, "event.jpg")


# ══════════════════════════════════════════════════════════════════════════
# 3. reception.jpg
#    – "AXIS" Schulter-Patch der Wächterin (rechte Schulter)
# ══════════════════════════════════════════════════════════════════════════
print("reception.jpg")
img = load("reception.jpg")

# AXIS-Patch auf Schulter
img = cover_region(img, 695, 468, 768, 520,  sample_x=680, sample_y=545)
# Junker-Logo auf Schulter (leicht kleiner = realistisches Arm-Abzeichen)
img = paste_logo(img, LOGO_DARK, cx=730, cy=490, target_width=90)

save(img, "reception.jpg")


# ══════════════════════════════════════════════════════════════════════════
# 4. hero.jpg
#    – kleines Logo oberer Rücken links
#    – "SECURITY" groß auf dem Rücken
# ══════════════════════════════════════════════════════════════════════════
print("hero.jpg")
img = load("hero.jpg")

# Kleines Patch-Logo oben links (Rücken)
img = cover_region(img, 355, 420, 430, 475,  sample_x=340, sample_y=500)
# "SECURITY" Schriftzug quer über den Rücken
img = cover_region(img, 365, 430, 795, 498,  sample_x=340, sample_y=520)
# Junker-Logo mittig auf Rücken
img = paste_logo(img, LOGO_DARK, cx=570, cy=455, target_width=200)

save(img, "hero.jpg")


# ══════════════════════════════════════════════════════════════════════════
# 5. logistics.jpg
#    – "SICHERHEITSDIENST" Brustpatch + Schulter-Patch
# ══════════════════════════════════════════════════════════════════════════
print("logistics.jpg")
img = load("logistics.jpg")

# Brustpatch (Mitte-rechts)
img = cover_region(img, 508, 458, 600, 510,  sample_x=490, sample_y=530)
# Schulter-Abzeichen (kleiner roter Wappen-Patch)
img = cover_region(img, 608, 430, 658, 468,  sample_x=595, sample_y=490)
# Mützen-Logo
img = cover_region(img, 523, 300, 578, 335,  sample_x=510, sample_y=350)

# Junker-Logo auf Brust
img = paste_logo(img, LOGO_DARK, cx=550, cy=480, target_width=110)

save(img, "logistics.jpg")


# ══════════════════════════════════════════════════════════════════════════
# 6. alarm.jpg
#    – "SICHERHEIT" auf dem Rücken des vorderen Mitarbeiters (links)
#    – Brust-Abzeichen des rechten Mitarbeiters (vorne)
# ══════════════════════════════════════════════════════════════════════════
print("alarm.jpg")
img = load("alarm.jpg")

# "SICHERHEIT" Rücken-Schriftzug (linker Mitarbeiter, von hinten)
img = cover_region(img, 148, 480, 305, 540,  sample_x=135, sample_y=555)
img = paste_logo(img, LOGO_DARK, cx=228, cy=505, target_width=130)

# Brust-Abzeichen rechter Mitarbeiter
img = cover_region(img, 770, 750, 840, 785,  sample_x=755, sample_y=810)
img = paste_logo(img, LOGO_DARK, cx=803, cy=762, target_width=85)

save(img, "alarm.jpg")


# ══════════════════════════════════════════════════════════════════════════
# 7. object.jpg
#    – "SECURITY" + Logo auf Helm
#    – Abzeichen auf der Warnweste
# ══════════════════════════════════════════════════════════════════════════
print("object.jpg")
img = load("object.jpg")

# Helm: "SECURITY" Schriftzug
img = cover_region(img, 488, 174, 624, 225,  sample_x=480, sample_y=240, blur=False)
# Helm: kleines Logo darunter
img = cover_region(img, 488, 225, 580, 255,  sample_x=480, sample_y=265, blur=False)

# Weste: Abzeichen links oben
img = cover_region(img, 478, 352, 548, 395,  sample_x=462, sample_y=415)
# Weste: Badge-Cluster rechts
img = cover_region(img, 568, 330, 638, 395,  sample_x=555, sample_y=415)

# Junker-Logo auf Weste (blau gut lesbar auf gelb/neon)
img = paste_logo(img, LOGO_LIGHT, cx=540, cy=390, target_width=115)

save(img, "object.jpg")


print("\nAlle 7 Bilder fertig.")
