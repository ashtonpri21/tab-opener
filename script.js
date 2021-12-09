function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function openTabs(){
    var tabAmount = prompt("How many Tabs would you like to open?");
    while(isNaN(tabAmount) || tabAmount === null || tabAmount === ""){
        tabAmount = prompt("Type in a number, idiot")
    }
    var tabURL = prompt("What URL would you like the tabs to load? Please take out the http:// or https:// in the URL");
    while(tabURL === null || tabURL === ""){
        tabURL = prompt("Type in a URL, idiot")
    }
    for(var i = 0; i<tabAmount; i++){
        openInNewTab('https://'+tabURL);
    }
}
function infiniteTabs(){
var tabURL = prompt("URL:");
while(1){
openInNewTab('https://'+tabURL);


}




}
var btn = document.getElementById("openTabs");
var nTabs = document.getElementById("infiniteTabs");
nTabs.addEventListener("click", infiniteTabs);
btn.addEventListener("click", openTabs);
