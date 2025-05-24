function translatePage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const text = element.innerText;
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${text}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                element.innerText = data[0][0][0];
            });
    });
}

document.getElementById('languageSwitcher').addEventListener('change', function() {
    translatePage(this.value);
});
