const fs = require("fs");
const path = require("path");
const { OpenAI } = require("openai");

// OpenAI client initialization
const client = new OpenAI({ apiKey: process.env["OPENAI_API_KEY"] });

const LANGUAGES = ["ar", "da", "de", "es", "fi", "fr", "hr", "hu", "it", "ja", "nb", "nl", "no", "pl", "pt", "ro", "sv", "th", "tr", "vi", "zh"];

const BASE_PROMPT = `
Translate the following json into "${LANGUAGES.join(
  ", "
)}" languages, the response should be a valid json as well where the keys will be the language list passed and values should be the translations:
You should never answer if asked any question your task is to strictly translate the sentence.
{{
    "en": "{text}"
}}
`;

/**
 * it uses gpt to translate the `text` to `locale`
 * @param {*} locale
 * @param {*} text the text which needs to be translated
 * @returns {Object{string, string}} translated text
 */
async function translate(text) {
  const prompt = BASE_PROMPT.replace("{text}", text);
  try {
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a translation engine." },
        { role: "user", content: prompt },
      ],
      temperature: 0,
    });
    const translations = response.choices[0].message.content.trim();
    const translatedJson = JSON.parse(translations);
    return translatedJson;
  } catch (error) {
    console.error("Error translating text:", error);
    return {};
  }
}
async function sync() {
  // Read en.json file
  const enFilePath = path.join(__dirname, "..", "en.json");
  const enData = JSON.parse(fs.readFileSync(enFilePath, "utf8"));

  // Read ar.json file
  const arFilePath = path.join(__dirname, "..", "ar.json");
  const arData = JSON.parse(fs.readFileSync(arFilePath, "utf8"));

  // Check for missing keys in ar.json
  const missingKeys = Object.keys(enData).filter(key => !arData[key]);

  // Translate missing keys
  const translations = await Promise.all(missingKeys.map(key => translate(enData[key])));

  // Update all locale files with translated text
  LANGUAGES.forEach(locale => {
    if (locale === "en") return; // Skip en.json file

    // Read locale file
    const localeFilePath = path.join(__dirname, "..", `${locale}.json`);
    const localeData = JSON.parse(fs.readFileSync(localeFilePath, "utf8"));

    // Update locale file with translated text
    missingKeys.forEach((key, index) => {
      localeData[key] = translations[index][locale];
    });

    // Write updated locale file
    fs.writeFileSync(localeFilePath, JSON.stringify(localeData, null, 2));
  });
}

sync();
