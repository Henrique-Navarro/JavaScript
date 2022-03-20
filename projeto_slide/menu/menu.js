function menuDrop() {
    let items = document.getElementsByClassName("item");

    //*menu aparecer config e pefil
    for (let i = 0; i <= items.length; i++) {
        if (items[i].className == "item show") {
            items[i].className = "item";
        }
        else {
            items[i].className += " show";
        }
    }
}

//*dark theme
function theme() {
    let theme = document.getElementsByClassName("light-theme");

    if (theme.className == "light-theme") {
        theme.className = "dark-theme";
    }
    else {
        theme.className = "light-theme";
    }
}