window.eval(`
Object.defineProperty(navigator, 'userAgent', {
  get: ()=>"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0"
})
`);


let topBannerContainer = document.getElementById("banners");
if (topBannerContainer !== null) {
    topBannerContainer.classList.add("hidden")
}


let topSpacerBar = document.getElementsByClassName("topbar-spacer");
if (topSpacerBar !== null && topSpacerBar[0] !== undefined) {
    topSpacerBar[0].style.paddingTop = "50px";
}


let searchWarningContainer = document.getElementsByClassName("BannersContainer");
if (searchWarningContainer !== null && searchWarningContainer[0] !== undefined) {
    searchWarningContainer[0].classList.add("hidden");
}


let searchObserver = new MutationObserver(mutations => {
    let searchWarningContainer = document.getElementsByClassName("BannersContainer");
    if (searchWarningContainer !== null && searchWarningContainer[0] !== undefined) {
        searchWarningContainer[0].classList.add("hidden");
        searchObserver.disconnect();
    }
});
searchObserver.observe(document.body, {childList: true, subtree: true});


