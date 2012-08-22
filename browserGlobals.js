(function(window, document) {

// Document to push to iframe
var iframeSource = 
    "<!DOCTYPE html>" +
    "<html><head><script>" +
    "window.addEventListener('message', function (e) {" +
    "   e.source.postMessage(eval(e.data), '*');" +
    "})</script></head></html>";
var iframeDataUrl = "data:text/html;charset=utf-8," + escape(iframeSource);

// Function to execute on iframe
var evalFunc = 
    "(function() {" +
    "   var i, n = [];" +
    "   for (i in window) {" +
    "       n.push(i);" +
    "   }" +
    "   return n" +
    "})()";

var iframe = document.createElement("iframe");
iframe.onload = function () {
    iframe.contentWindow.postMessage(evalFunc, '*');
};
function processReply(e) {
    window.removeEventListener("message", processReply);
    var i, globals = [];
    for (i in window) {
        if (e.data.indexOf(i) == -1) {
            globals.push(i);
        }
    }
    document.body.removeChild(iframe);
    window.console.log("New globals: " + globals.length, globals);
}
window.addEventListener("message", processReply, false);
document.body.appendChild(iframe);
iframe.src = iframeDataUrl;

})(window, document);
