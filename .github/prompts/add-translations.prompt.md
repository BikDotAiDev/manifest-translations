---
description: "Add translation keys to en.json and generate placeholder translations for other languages"
mode: agent
---

You will receive multiple inputs.

**Inputs:**
- `${input:translations}` — a JSON object containing key-value pairs (English).
- `${input:languages}` — an optional array of language codes to update (e.g., ["fr","de"]).  
  If not provided, update all available language json files.

---

### Tasks

1. Add `${input:translations}` into `en.json`.
2. For each language in `${input:languages}` (or all locales if none provided):
   - Add the same keys with translations or placeholders.
3. Keep all existing keys intact.
4. Summarize which files were updated and how many keys were added.

---

### Example

**Inputs:**
```json
translations = {
  "welcomeMessage": "Welcome to our app!",
  "logoutButton": "Log out"
}
languages = ["fr","es"]