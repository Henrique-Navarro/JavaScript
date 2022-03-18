function menuDrop() {
    let items = document.getElementsByClassName("item");
    let profile = document.getElementsByClassName("profile");
    let config = document.getElementsByClassName("config");

    for (let i = 0; i <= items.length; i++) {
        if (items[i].className == "item show") {
            items[i].className = "item";
            profile.className = "item profile";
            config.className = "item config";
        }
        else {
            items[i].className += " show";
            profile.className += " show";
            config.className += " show";
        }
    }
}

function theme(){
    let theme= document.getElementsByClassName("light-theme");

    if(theme.className=="light-theme"){
        theme.className="dark-theme";
    }
    else{
        theme.className="light-theme";
    }
}