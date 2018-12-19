// ==UserScript==
// @name         HackerNews New Tab
// @namespace    https://news.ycombinator.com/
// @match        https://news.ycombinator.com/
// @version      0.1
// @description  Open Hacker news stories in new tab
// @author       amrut.joshi@gmail.com
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(".storylink").each(function(idx, li) {
        $(li).attr("target", "_blank");
    });
})();