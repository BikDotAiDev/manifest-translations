---
description: "Add/update translation keys across all language JSON files"
mode: agent
---

You will receive one or both inputs:

**Inputs:**

- `${input:translations}` — a JSON snippet of key-value pairs to add or update (English).
- `${input:languages}` — optional list of language codes to target (e.g. `fr,de`). If omitted, update all language files.

---

### How to apply changes

Do **not** create any intermediate or temporary files. Apply all changes directly using file-editing tools.

1. Read `en.json` to understand the structure and locate where new keys should be inserted.
2. Apply the new/updated keys directly into `en.json` and into every target language file using file-editing tools.
3. For each non-English file:
   - If a key already exists, update its value with a proper translation.
   - If a key is new, insert it at the same relative position as in `en.json` with a translated value.
   - Translate accurately — do not leave English strings in non-English files.
4. Preserve all existing keys and file structure.
5. After all edits, summarize which files were updated and what keys were changed.

---

### Notes

- Language files may be flat JSON or have a `"translations"` wrapper — handle both.
- Maintain the same key insertion order as `en.json`.
- Never use placeholder values like `"TODO"` or copy English text into other languages.
