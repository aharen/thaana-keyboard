var ThaanaKeyboard = /** @class */ (function () {
    function ThaanaKeyboard(className, autoStart) {
        if (className === void 0) { className = '.thaana-keyboard'; }
        if (autoStart === void 0) { autoStart = true; }
        this.selectionChange = function () {
            var activeElement = document.activeElement;
            activeElement.dataset.start = activeElement.selectionStart;
            activeElement.dataset.end = activeElement.selectionEnd;
        };
        this.className = className;
        if (true === autoStart) {
            this.run();
        }
    }
    ThaanaKeyboard.prototype.run = function () {
        var _this = this;
        var inputs = document.querySelectorAll(this.className);
        inputs.forEach(function (input) { return input.addEventListener('beforeinput', function (e) { return _this.beforeInputEvent(e); }); });
        inputs.forEach(function (input) { return input.addEventListener('input', function (e) { return _this.inputEvent(e); }); });
        document.addEventListener('selectionchange', this.selectionChange);
    };
    ThaanaKeyboard.prototype.beforeInputEvent = function (event) {
        var e = event;
        var t = e.target;
        if (-1 !== ['insertCompositionText', 'insertText'].indexOf(e.inputType)) {
            this.latinChar = e.data.charAt(e.data.length - 1);
            this.char = this.getChar(this.latinChar);
            this.oldValue = t.value;
        }
        return;
    };
    ThaanaKeyboard.prototype.inputEvent = function (event) {
        var e = event;
        var t = e.target;
        // run ONLY for insertText inputType (handles backspace)
        if (-1 === ['insertCompositionText', 'insertText'].indexOf(e.inputType))
            return;
        // run ONLY for charmap
        if (this.char === this.latinChar)
            return;
        var target = e.target;
        var cursorStart = target.selectionStart;
        var cursorEnd = target.selectionEnd;
        // remove the original latin char
        target.value = ''; // reset the value first
        target.value = this.oldValue.split(this.latinChar).join('');
        //remove selection 
        var selectionStart = Number(target.dataset.start);
        var selectionEnd = Number(target.dataset.end);
        if ((selectionEnd - selectionStart) > 0)
            target.value = target.value.substring(0, selectionStart) + target.value.substring(selectionEnd);
        // recreate text with newChar
        var newValue = target.value.substring(0, cursorStart - 1);
        newValue += this.char;
        newValue += target.value.substring(cursorStart - 1);
        // update the target with newChar
        target.value = newValue;
        // maintain cursor location
        target.selectionStart = cursorStart;
        target.selectionEnd = cursorEnd;
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
