let translateFrom = 'en';

async function translateText() {
    const sourceLang = document.getElementById('source-lang').value;
    const targetLang = document.getElementById('target-lang').value;
    const sourceText = document.getElementById('source-text').value;

    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(sourceText)}`);
    const data = await response.json();
    const translatedText = data[0][0][0];

    document.getElementById('target-text').value = translatedText;
}

document.getElementById('source-text').addEventListener('input', translateText);

document.getElementById('toggleTranslation').addEventListener('click', function () {
    const sourceLang = document.getElementById('source-lang').value;
    const targetLang = document.getElementById('target-lang').value;
    document.getElementById('source-lang').value = targetLang;
    document.getElementById('target-lang').value = sourceLang;

    translateFrom = translateFrom === 'en' ? 'es' : 'en';

    translateText();
});