window.ThaanaKeyboard = {
	start: async function () {

		let i = document.querySelectorAll('.thaana-keyboard'),
			kv, // keydown value
			ss, // selection start
			se, // selection end
			kk, // keydown key
			ol // old length

		let that = this

		i.forEach(function (inp) {
			inp.addEventListener('input', function (e) {
				let et = e.target

				// if keydown key was Unidentified (by Android) use input value
				let ik = kk === 'Unidentified' ? e.data : kk

				// make sure you got the last typed char (Android autocomplete, autosuggest -.-)
				if (ik !== null) ik = ik.substring(ik.length - 1)

				// Android Backspace/Delete
				// Challenge!!

				// for only IE and Edge
				if (['Spacebar', 'Backspace'].indexOf(ik) === -1) {

					// set to null for special keyboard values, except for the IE and Edge (above)
					if (e.data !== null) {

						// Trying to handle Android autocorrect, next-word suggestion
						if (ik === et.value) {
							ik = et.value.split(kv).join('')
						}

						// remove the inserted character latin character
						et.value = kv.split(et.value).join('')


						let v = that.K[ik] || ik

						// It's a selection
						if (ss !== se) {
							et.value = et.value.substring(0, ss) + et.value.substring(se)
						}

						et.value = et.value.substring(0, ss) + v + et.value.substring(ss)

						// maintain cursor pointer after replacement
						et.selectionStart = ss + 1
						et.selectionEnd = ss + 1
					}
				}

				// stop word deletion and make sure it's not a selection, again Android autocorrect, next-word suggestion
				if (ol - et.value.length > 1 && ss === se) {
					et.value = kv.substring(0, ol - 1)
				}
			})

			inp.addEventListener('keydown', function (e) {
				kk = e.key
				kv = e.target.value
				ss = e.target.selectionStart
				se = e.target.selectionEnd
				ol = e.target.value.length
			})
		})
	},
	K: {
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
}

window.ThaanaKeyboard.start()