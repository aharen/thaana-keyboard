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

const l2t = function(e, k) {
	let et = e.target
	let v = K[k] || k

	// It's a selection
	if (ts !== te) {
		et.value = et.value.substring(0, ts) + et.value.substring(te)
	}
	et.value = et.value.substring(0, ts) + v + et.value.substring(ts)

	// maintain cursor pointer after replacement
	et.selectionStart = ts + 1
	et.selectionEnd = ts + 1
}

let i = document.querySelector('.thaana-keyboard'),
	o,
	ts,
	te,
	kk

i.addEventListener('input', function(e) {
	// if keydown key was Unidentified (by Android) use input value
	let ik = kk === 'Unidentified' ? e.data : kk

	// for only IE and Edge
	if (['Spacebar', 'Backspace'].indexOf(ik) === -1) {

		// set to null for special keyboard values, except for the IE and Edge (above)
		if (e.data !== null) {

			// Trying to handle android autocorrect, next-word suggestion
			if (ik === e.target.value) {
				ik = e.target.value.split(o).join('')
			}

			// remove the inserted character latin character
			e.target.value = o.split(e.target.value).join('')
			l2t(e, ik)
		}

		e.stopPropagation()
		e.preventDefault()
	}
})

i.addEventListener('keydown', function(e) {
	kk = e.key
	o = e.target.value
	ts = e.target.selectionStart
	te = e.target.selectionEnd
})