const fromText = document.querySelector("#from-text");
const toText = document.querySelector("#to-text");
const charCount = document.querySelector("#char-count");
const translateBtn = document.querySelector("#translate-btn");
const selectTag = document.querySelectorAll("select");
const swapBtn = document.querySelector("#swap-btn");
const icons = document.querySelectorAll(".icons button");
const themeBtn = document.querySelector("#theme-toggle");

// 1. Theme Logic
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
    themeBtn.innerText = document.body.classList.contains("theme-light") ? "🌑" : "☀️";
});

// 2. Character Counter
fromText.addEventListener("input", () => {
    charCount.innerText = `${fromText.value.length}/500`;
});

// 3. Main Translation logic
function translateText() {
    const text = fromText.value.trim();
    if(!text) return;
    toText.value = "";
    toText.setAttribute("placeholder", "Translating...");
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${selectTag[0].value}|${selectTag[1].value}`;
    
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        toText.setAttribute("placeholder", "Translation");
    }).catch(() => toText.setAttribute("placeholder", "Check Connection..."));
}

translateBtn.addEventListener("click", translateText);

// 4. Swap and Auto-Translate
swapBtn.addEventListener("click", () => {
    let tText = fromText.value; fromText.value = toText.value; toText.value = tText;
    let tLang = selectTag[0].value; selectTag[0].value = selectTag[1].value; selectTag[1].value = tLang;
    translateText();
});

// 5. Icons: Copy & Speech (With Safety Fallback)
icons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const target = e.currentTarget;
        const isFrom = target.id.includes("from");
        const text = isFrom ? fromText.value : toText.value;
        const lang = isFrom ? selectTag[0].value : selectTag[1].value;

        if(!text) return;

        if(target.id.includes("copy")) {
            navigator.clipboard.writeText(text);
        } else {
            // 1. Try ResponsiveVoice first (for Arabic, Swahili, etc.)
            const voiceMap = { "ar-SA": "Arabic Male", "bn-IN": "Bengali Male", "hi-IN": "Hindi Female", "sw-KE": "Swahili Male" };
            
            // CHECK: Is ResponsiveVoice actually loaded and is the lang in our map?
            if (typeof responsiveVoice !== 'undefined' && voiceMap[lang]) {
                responsiveVoice.speak(text, voiceMap[lang]);
            } else {
                // 2. FALLBACK: Use the browser's built-in engine if ResponsiveVoice is down
                console.log("Using browser fallback voice...");
                const speech = new SpeechSynthesisUtterance(text);
                speech.lang = (lang === "Autodetect") ? "en-GB" : lang;
                window.speechSynthesis.speak(speech);
            }
        }
    });
});
window.addEventListener("load", translateText);