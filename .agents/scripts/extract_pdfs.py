import fitz
import os
import json
import glob

output_dir = ".agents/outputs/gallery"
os.makedirs(output_dir, exist_ok=True)

# Find files by pattern
def find_pdf(pattern):
    matches = glob.glob(f"attached_assets/*{pattern}*")
    return matches[0] if matches else None

pdfs = {
    "junker_text": find_pdf("Junker_Sicherheit_06"),
    "bericht":     find_pdf("Bericht"),
    "umschau":     find_pdf("Umschau"),
}

print("Found files:", pdfs)

summary = {}

for key, path in pdfs.items():
    if not path or not os.path.exists(path):
        print(f"SKIP {key}: not found")
        continue

    doc = fitz.open(path)
    page_count = doc.page_count
    summary[key] = {"pages": page_count, "images": [], "text_preview": ""}

    # Extract text from all pages
    text = ""
    for i in range(page_count):
        text += doc[i].get_text()
    summary[key]["text_preview"] = text[:5000]

    # Extract all embedded images
    img_count = 0
    for page_num in range(page_count):
        page = doc[page_num]
        images = page.get_images(full=True)
        for img_index, img in enumerate(images):
            xref = img[0]
            try:
                base_image = doc.extract_image(xref)
                img_bytes = base_image["image"]
                img_ext = base_image["ext"]
                w = base_image.get("width", 0)
                h = base_image.get("height", 0)
                if w < 300 or h < 300:
                    continue
                img_filename = f"{key}_p{page_num+1}_img{img_index}.{img_ext}"
                img_path = os.path.join(output_dir, img_filename)
                with open(img_path, "wb") as f:
                    f.write(img_bytes)
                summary[key]["images"].append({"file": img_filename, "w": w, "h": h, "page": page_num+1})
                img_count += 1
            except Exception as e:
                print(f"  img error: {e}")

    # Render full pages as PNG for visual review
    for page_num in range(page_count):
        page = doc[page_num]
        mat = fitz.Matrix(2, 2)
        pix = page.get_pixmap(matrix=mat)
        page_img = f"{key}_page{page_num+1}.png"
        pix.save(os.path.join(output_dir, page_img))

    doc.close()
    print(f"{key}: {page_count} pages, {img_count} embedded images extracted")

with open(os.path.join(output_dir, "summary.json"), "w", encoding="utf-8") as f:
    json.dump(summary, f, ensure_ascii=False, indent=2)

print("\n=== TEXT: junker_text ===")
print(summary.get("junker_text", {}).get("text_preview", ""))
print("\n=== TEXT: bericht ===")
print(summary.get("bericht", {}).get("text_preview", "")[:1000])
print("\n=== EMBEDDED IMAGES ===")
for key, v in summary.items():
    print(f"  {key}: {[i['file'] for i in v.get('images', [])]}")
