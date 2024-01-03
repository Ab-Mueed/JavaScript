// 'HTML events' are "things" that happen to HTML elements.
// An HTML event can be something the browser does (A Webpage has finished loading), or something a user does (An HTML Button was clicked).
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.
// JavaScript lets you execute code when events are detected.
// HTML allows 'event handler' attributes, with JavaScript code, to be added to HTML elements.
// <element event = 'Some jS code'>
// jS code is often several lines long. It is more common to see event attributes calling functions.
// <element event = 'function()'>
function displayTimeDate() {
    // To check the working of this code, open index.html file of the current director.
    document.getElementById('p2').innerHTML = Date();
}

// Event handlers can be used to handle and verify user input, user actions, and browser actions.

// Many different methods can be used to let JavaScript work with events:
/*
1) HTML event attributes can execute JavaScript code directly.
2) HTML event attributes can call JavaScript functions.
3) You can assign your own event handler functions to HTML elements.
4) You can prevent events from being sent or being handled.
*/

