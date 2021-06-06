class ThaanaKeyboard {
    className: string

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
        inputs.forEach(input => input.addEventListener('input', (e) => this.inputEvent(e)))
    }

    inputEvent(event) {
        const e = event as InputEvent
        // run ONLY for insertText inputType (handles backspace)
        if ('insertText' !== e.inputType) return

        const target = e.target as HTMLInputElement

        const newCharInput = this.getChar(e.data)

        // handle "spacebar"
        if (" " === newCharInput) return

        // remove the original latin char
        target.value = target.value.split(e.data).join('')

        let newValue = target.value.substring(0, target.selectionStart)
        newValue += newCharInput
        newValue += target.value.substring(target.selectionStart)

        target.value = newValue
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