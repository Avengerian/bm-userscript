// ==UserScript==
// @name         BM
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Modifies the rcon panel for battlemetrics to help color code important events and details about players.
// @author       TempusOwl
// @match        https://www.battlemetrics.com/rcon*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=battlemetrics.com
// @grant        GM_addStyle
// ==/UserScript==

// Changes the CSS color for the activity log, to make full colored bars instead of small colored tags. Updates on refresh.
GM_addStyle(".css-1qmad0a {background-color: rgb(159 0 255 / 11%);width: 1920px;}");
GM_addStyle(".css-1rwnm41 {background-color: rgb(255 0 0 / 5%); width: 1920px;}");
GM_addStyle(".css-ipu2vg {background-color: rgb(16 255 0 / 11%); width: 1920px;}");
GM_addStyle(".css-gioqk9 {background-color: rgb(0 241 255 / 11%); width: 1920px;}");
// The z-index prevents above the backgrounds breaking clickablity when running over the text. Updates on refresh.
GM_addStyle(".css-ym7lu8 {z-index: 2;}");

// Highlights the squad leader text box as a golden color @ 250ms updates.
setInterval(function runSquadLead() {
    var b = false;
    var i = false;
    b = document.getElementsByClassName('small text-muted');
    console.log(b)
    for (i = 0; i < b.length; i++) {
        if ((b[i].innerText == "Squad Leader")){
            b[i].style.color = "#ffba23"
        }
    }
}, 250)

// Highlights the Admin User text box as a green color @ 250ms updates.
setInterval(function runAdmin() {
    var b = false;
    var i = false;
    b = document.getElementsByClassName('css-18s4qom');
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("Admin"))){
            b[i].style.color = "lime"
            b[i].style.fontWeight = "bold"
        }
    }
}, 250)

// Highlights the Admin User text box as a green color @ 250ms updates.
setInterval(function runClan() {
    var b = false;
    var i = false;
    b = document.getElementsByClassName('css-mjpog7');
    for (i = 0; i < b.length; i++) {
        if ((b[i].textContent.includes("『LiQr』"))){
            b[i].style.color = "#ff67d1"
        }
        else if((b[i].textContent.includes("『LiQ』"))){
            b[i].style.color = "darkturquoise"
        }
    }
}, 250)

// Adds a clickable URL to steamIDs that bring you to communty ban list. Updates @ 250ms.
setInterval(function runAdmin() {
    const spans = document.querySelectorAll('.css-q39y9k')
    spans.forEach(span => {
        const steamID = span.title /* or span.textContent */

        const a = document.createElement('a')

        ;[...span.attributes].forEach(attr => a.attributes.setNamedItem(attr.cloneNode()))

        a.href = `https://communitybanlist.com/search/${steamID}`
        a.innerHTML = steamID

        span.replaceWith(a)
    })
}, 250)

