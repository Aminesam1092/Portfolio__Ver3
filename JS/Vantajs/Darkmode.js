//const VantaDark = function () {
    //document.querySelector('#JS-Background').style.display = "none";
    //document.querySelector('#JS-BackgroundDark').style.display = "block";
//};

const VantaLight = function () {
    document.querySelector('#JS-Background').style.display = "none";
    document.querySelector('JS-BackgroundDark').style.display = "block";
};

if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
    VantaDark();
} else {
    VantaLight();
}

//window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        VantaDark();

    } else {
        VantaLight();
    }
});
console.log("VantaDark");