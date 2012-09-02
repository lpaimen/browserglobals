(function(window, document) {

// Document to push to iframe
// Purpose is simply to listen for messages, evaluate the payload of it,
// and return result to the caller.
var iframeSource = 
    "<!DOCTYPE html>" +
    "<html><head><script>" +
    "window.addEventListener('message', function (e) {" +
    "   e.source.postMessage(eval(e.data), '*');" +
    "})</script></head></html>";

// Function to execute on iframe. Returns a list of properties of window
// object, which is essentially a list of browser-defined global variables.
var evalFunc = 
    "(function() {" +
    "   var i, n = [];" +
    "   for (i in window) {" +
    "       n.push(i);" +
    "   }" +
    "   return n;" +
    "})()";

// Setup listener for iframe reply message.
function processReply(e) {

    window.removeEventListener("message", processReply);
    document.body.removeChild(iframe);

    // Compare globals of fresh window to globals of this window.
    var i, globals = [];
    for (i in window) {
        if (e.data.indexOf(i) == -1) {
            globals.push(i);
        }
    }
    window.console.log("New globals: " + globals.length, globals);
}
window.addEventListener("message", processReply, false);

// Inject iframe
var iframe = document.createElement("iframe");
iframe.onload = function () {
    iframe.contentWindow.postMessage(evalFunc, '*');
};
document.body.appendChild(iframe);
iframe.src = "data:text/html;charset=utf-8," + escape(iframeSource);;

})(window, document);
