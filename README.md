# manifest-translations

Translation files for the [Manifest AI](https://www.manifest.ai/) shopping assistant widget. Each JSON file contains localized strings used across the chat interface, product recommendations, order tracking, and other customer-facing features.

## Supported Languages

| Code    | Language              |
| ------- | --------------------- |
| `ar`    | Arabic                |
| `da`    | Danish                |
| `de`    | German                |
| `en`    | English (default)     |
| `es`    | Spanish               |
| `fi`    | Finnish               |
| `fr`    | French                |
| `hr`    | Croatian              |
| `hu`    | Hungarian             |
| `it`    | Italian               |
| `ja`    | Japanese              |
| `nb`    | Norwegian Bokmål      |
| `nl`    | Dutch                 |
| `no`    | Norwegian             |
| `pl`    | Polish                |
| `pt`    | Portuguese            |
| `ro`    | Romanian              |
| `ru`    | Russian               |
| `sv`    | Swedish               |
| `th`    | Thai                  |
| `tr`    | Turkish               |
| `vi`    | Vietnamese            |
| `zh`    | Chinese               |
| `zh_cn` | Chinese (Simplified)  |
| `zh_tw` | Chinese (Traditional) |

## File Structure

Each locale file is a JSON object with three top-level sections:

- **`welcomeMessageCollectionNamePage`** — greeting shown on collection pages
- **`translations`** — all UI strings (greetings, product cards, order tracking forms, feedback prompts, quick actions, etc.)
- **`others`** — context-dependent data such as suggested replies and pop-up messages, keyed by page type (`PRODUCT`, `COLLECTION`, `SEARCH`, `OTHER`)

Dynamic values use `{{placeholder}}` syntax (e.g. `{{storeName}}`, `{{collectionName}}`, `{{orderId}}`).

## Adding a New Language

1. Copy `en.json` to a new file named with the appropriate locale code (e.g. `ko.json`).
2. Translate all string values, keeping JSON keys and `{{placeholder}}` tokens unchanged.
3. Open a pull request targeting `main`.
