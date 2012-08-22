# Browser globals

Compares current properties of `window` global to contents of fresh `window` object, effectively listing introduced Javascript globals. This works only on a browser (no NodeJS etc).

## Usage

Include browserGlobals.js as the last file to the page and open inspector (Ctrl+Shift+I in most browsers).

Alternately, copy-paste file contents to inspector console and run it (press Enter or Ctrl+Enter).

## Example

    // Surf to about:blank and open inspector
    > // Copy-paste and run the code
    New globals: 0 []
    // Introduce a new global
    > newGlobal = 5;
    > // Copy-paste and run the code
    New globals: 1 ["newGlobal"]

