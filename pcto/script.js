
function setLanguage(lang) {

    document.body.className = 'lang-' + lang;
    
    
    localStorage.setItem('pref_lang', lang);


    var btnIt = document.getElementById('btn-it');
    var btnEn = document.getElementById('btn-en');


    if (lang === 'it') {
        btnIt.classList.add('active');
        btnEn.classList.remove('active');
    } else {
        btnEn.classList.add('active');
        btnIt.classList.remove('active');
    }
}


window.onload = function() {

    var savedLang = localStorage.getItem('pref_lang');
    
    if (savedLang == null) {
        savedLang = 'it';
    }

    // Applica la lingua all'avvio
    setLanguage(savedLang);
};


