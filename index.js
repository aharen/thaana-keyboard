const K = {
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
}

const I = ['Shift', 'Control', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Meta', 'Alt', 'Backspace', 'Escape', 'Tab']

function l2t(e) {
	if (!I.includes(e.key)) {
		e.preventDefault()
		e.stopPropagation()

		let et = e.target
		let ts = et.selectionStart
		let te = et.selectionEnd
		let v = K[e.key] || e.key

		if (ts !== te) {
			et.value = et.value.substring(0, ts) + et.value.substring(te)
		}

		et.value = et.value.substring(0, ts) + v + et.value.substring(ts)

		et.selectionStart = ts + 1
		et.selectionEnd = ts + 1
	}
}

export default l2t;