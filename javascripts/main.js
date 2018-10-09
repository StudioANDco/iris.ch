var getCookie = function (name, defaultValue) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }

    return defaultValue;
};

function changeCountry(locale) {
    document.cookie = "lang=" + locale + "; path=/" + window.CHANGE_COUNTRY_PATH;
    updateLanguage(locale);
}

function updateLanguage(locale) {
    document.querySelector('html').setAttribute('lang', locale);
}

document.addEventListener("DOMContentLoaded", function() {
    var countrySelects = document.querySelectorAll('.country-switch');
    Array.prototype.forEach.call(countrySelects, function(countrySelect) {
        countrySelect.addEventListener('click', function(e) {
            e.preventDefault();

            var locale = e.target.getAttribute('href').replace('#', '');
            changeCountry(locale);
        });
    });

    updateLanguage(getCookie('lang', 'fr'));
});
