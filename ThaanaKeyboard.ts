class ThaanaKeyboard {
    className: string

    char: string

    latinChar: string

    oldValue: string

    constructor(
        className = '.thaana-keyboard',
        autoStart = true
    ) {
        this.className = className

        if (true === autoStart) {
            this.run()
        }
    }
    
    run() {
        const inputs = document.querySelectorAll(this.className)
        inputs.forEach(input => input.addEventListener('beforeinput', (e) => this.beforeInputEvent(e)))
        inputs.forEach(input => input.addEventListener('input', (e) => this.inputEvent(e)))
    }

    beforeInputEvent(event) {
        const e = event as InputEvent
        const t = e.target as HTMLInputElement

        if (-1 !== ['insertCompositionText', 'insertText'].indexOf(e.inputType)) {
            this.latinChar = e.data
            this.char = this.getChar(this.latinChar)
            this.oldValue = t.value
        }
        return;
    }

    inputEvent(event) {
        const e = event as InputEvent
        const t = e.target as HTMLInputElement

        // run ONLY for insertText inputType (handles backspace)
        if (-1 === ['insertCompositionText', 'insertText'].indexOf(e.inputType)) return

        // run ONLY for charmap
        if (this.char === this.latinChar) return

        const target = e.target as HTMLInputElement
        
        const selectionStart = target.selectionStart
        const selectionEnd = target.selectionEnd

        // remove the original latin char
        target.value = '' // reset the value first
        target.value = this.oldValue.split(this.latinChar).join('')

        // recreate text with newChar
        let newValue = target.value.substring(0, selectionStart - 1)
        newValue += this.char
        newValue += target.value.substring(selectionStart - 1)

        // update the target with newChar
        target.value = newValue

        // maintain cursor location
        target.selectionStart = selectionStart
        target.selectionEnd = selectionEnd
    }

    getChar(char) {
        const keyMap = {
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
            '}': '{',
        }

        return keyMap[char] || char
    }

}

(window as any).ThaanaKeyboard = ThaanaKeyboard