const themes = [
    document.querySelector('link[data-theme="white"]'),
    document.querySelector('link[data-theme="black"]'),
    document.querySelector('link[data-theme="red"]'),
    document.querySelector('link[data-theme="blue"]')
]

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const theme = btn.dataset.theme;
        themeSwitch(theme);
    });
})

function themeSwitch(theme){
    themes.forEach((_theme)=>{
        if(_theme.dataset.theme === theme)
            _theme.disabled = false;
        else
            _theme.disabled = true;
    })
}