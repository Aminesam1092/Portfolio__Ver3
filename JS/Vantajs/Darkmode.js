const VantaDark = function () {
    document.querySelector('#JS-Background').style.display = "none";
    document.querySelector('#JS-BackgroundDark').style.display = "block";
};

const VantaLight = function () {
    document.querySelector('#JS-Background').style.display = "block";
    document.querySelector('#JS-BackgroundDark').style.display = "none";
};

const NotSmart = function () {
    document.querySelector('#JS-Background').style.display = "none";
    document.querySelector('#JS-BackgroundDark').style.display = "none";
};

function VantaNoneSp() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
        VantaDark();
    } else {
        VantaLight();
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (e.matches) {
            VantaDark();

        } else {
            VantaLight();
        }
    });
}



if (window.matchMedia('(max-device-width: 530px)').matches == true) {
    NotSmart();
} else {
    YesColor();
}


window.matchMedia('(max-device-width: 530px)').addEventListener('change', (e) => {
    if (e.matches) {
        NotSmart();

    } else {
        YesColor();
    }
});