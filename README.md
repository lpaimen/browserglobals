# Browser globals

Compares current properties of `window` object to contents of fresh `window` object, effectively listing global Javascript variables from the page. This works only on a browser (no NodeJS etc).

Tested on Firefox 15, Opera 12.02 and Chromium 18.

## Usage

Include browserGlobals.js as the last file to the page and open inspector console (Ctrl+Shift+I in some browsers) to see the result.

Alternately, copy-paste contents of browserGlobals.js to inspector console and run it (press Enter or Ctrl+Enter).

## Example

    // Surf to about:blank and open inspector console
    > // Copy-paste and run the code
    New globals: 0 []
    // Introduce a new global:
    > newGlobal = 5;
    > // Copy-paste and run the code
    New globals: 1 ["newGlobal"]

