# Global Translator Pro 

Global Translator Pro is a sleek, high-performance web application designed for real-time language translation and text-to-speech synthesis. It features a modern, interactive UI with a focus on reliability and accessibility.

## How to Use

1. Enter Text: Type or paste the text you want to translate into the left-hand text box.
2. Select Languages: - Use the first dropdown to select the source language (or leave it on "Detect Language").
   - Use the second dropdown to choose your target language.
3. Translate: Click the "Translate Now" button. The translation will appear in the right-hand box.
4. Listen: Click the "Listen" button under either box to hear the text spoken aloud. 
   - Note: The app will automatically try to use the best available voice for that language.
5. Copy Text: Click the "Copy" button to quickly save the text to your clipboard.
6. Swap Languages: Click the ⇄ button to quickly flip the "From" and "To" languages and re-translate.
7. Change Theme: Click the icon in the top left to switch between Light and Dark modes.

## Key Technical Features

* Dual-Engine Speech (Listen): * Primary: ResponsiveVoice for high-fidelity cloud audio.
    * Fallback: Web Speech API to ensure functionality even on slow connections.
* Smart Automation: * Auto-Translate on Load: Instantly translates the default text upon opening.
    * Reactive UI: Rotating "Snake" borders and real-time character counting.

## Technical Stack

* Frontend: HTML5, CSS3 (Custom Variables & Keyframes)
* Logic: Vanilla JavaScript (ES6+)
* APIs: [MyMemory API](https://mymemory.translated.net/) & [ResponsiveVoice.js](https://responsivevoice.org/)

## Project Structure
* `index.html` - UI Structure
* `style.css` - Animations & Themes
* `script.js` - Logic & API handling

## Setup
Simply open `index.html` in any modern browser. An active internet connection is required for full feature support.
Simply open `index.html` in any modern browser. An active internet connection is required for full feature support.
