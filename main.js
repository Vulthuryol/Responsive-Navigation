const resizeNav = () => {
    const getNav = document.getElementById("myNavBar");
    if (getNav.className === "navbar") {
        getNav.className += " resize";
    } else {
        getNav.className = "navbar";
    }
}
