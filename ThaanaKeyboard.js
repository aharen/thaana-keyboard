var ThaanaKeyboard = /** @class */ (function () {
    function ThaanaKeyboard(className, autoStart) {
        if (className === void 0) { className = '.thaana-keyboard'; }
        if (autoStart === void 0) { autoStart = true; }
        this.className = className;
        if (true === autoStart) {
            this.run();
        }
    }
    ThaanaKeyboard.prototype.run = function () {
        var _this = this;
        var inputs = document.querySelectorAll(this.className);
        inputs.forEach(function (input) { return input.addEventListener('input', function (e) { return _this.inputEvent(e); }); });
    };
    ThaanaKeyboard.prototype.inputEvent = function (event) {
        var e = event;
        // run ONLY for insertText inputType (handles backspace)
        if ('insertText' !== e.inputType)
            return;
        var target = e.target;
        var newCharInput = this.getChar(e.data);
        var selectionStart = target.selectionStart;
        var selectionEnd = target.selectionEnd;
        // handle "spacebar"
        if (" " === newCharInput)
            return;
        // remove the original latin char
        target.value = target.value.split(e.data).join('');
        // insert the new char where the cursor was at
        var newValue = target.value.substring(0, selectionStart - 1);
        newValue += newCharInput;
        newValue += target.value.substring(selectionStart - 1);
        target.value = newValue;
        // maintain cursor location
        target.selectionStart = selectionStart;
        target.selectionEnd = selectionEnd;
    };
    ThaanaKeyboard.prototype.getChar = function (char) {
        var keyMap = {
            'q': 'ް',
            'w': 'އ',
            'e': 'ެ',
            'r': 'ރ',
            't': 'ތ',
            'y': 'ޔ',
            'u': 'ު',
            'i': 'ި',
            'o': 'ޮ',
            'p': 'ޕ',
            'a': 'ަ',
            's': 'ސ',
            'd': 'ދ',
            'f': 'ފ',
            'g': 'ގ',
            'h': 'ހ',
            'j': 'ޖ',
            'k': 'ކ',
            'l': 'ލ',
            'z': 'ޒ',
            'x': '×',
            'c': 'ޗ',
            'v': 'ވ',
            'b': 'ބ',
            'n': 'ނ',
            'm': 'މ',
            'Q': 'ޤ',
            'W': 'ޢ',
            'E': 'ޭ',
            'R': 'ޜ',
            'T': 'ޓ',
            'Y': 'ޠ',
            'U': 'ޫ',
            'I': 'ީ',
            'O': 'ޯ',
            'P': '÷',
            'A': 'ާ',
            'S': 'ށ',
            'D': 'ޑ',
            'F': 'ﷲ',
            'G': 'ޣ',
            'H': 'ޙ',
            'J': 'ޛ',
            'K': 'ޚ',
            'L': 'ޅ',
            'Z': 'ޡ',
            'X': 'ޘ',
            'C': 'ޝ',
            'V': 'ޥ',
            'B': 'ޞ',
            'N': 'ޏ',
            'M': 'ޟ',
            ',': '،',
            ';': '؛',
            '?': '؟',
            '<': '>',
            '>': '<',
            '[': ']',
            ']': '[',
            '(': ')',
            ')': '(',
            '{': '}',
            '}': '{'
        };
        return keyMap[char] || char;
    };
    return ThaanaKeyboard;
}());
window.ThaanaKeyboard = ThaanaKeyboard;
