var ThaanaKeyboard = function () { function t(t, n) { void 0 === t && (t = ".thaana-keyboard"), void 0 === n && (n = !0), this.className = t, !0 === n && this.run() } return t.prototype.run = function () { var n = this; document.querySelectorAll(this.className).forEach(function (t) { return t.addEventListener("input", function (t) { return n.inputEvent(t) }) }) }, t.prototype.inputEvent = function (t) { var n, e = t; "insertText" === e.inputType && (n = e.target, " " !== (t = this.getChar(e.data)) && (n.value = n.value.split(e.data).join(""), e = n.value.substring(0, n.selectionStart), e += t, e += n.value.substring(n.selectionStart), n.value = e)) }, t.prototype.getChar = function (t) { return { q: "ް", w: "އ", e: "ެ", r: "ރ", t: "ތ", y: "ޔ", u: "ު", i: "ި", o: "ޮ", p: "ޕ", a: "ަ", s: "ސ", d: "ދ", f: "ފ", g: "ގ", h: "ހ", j: "ޖ", k: "ކ", l: "ލ", z: "ޒ", x: "×", c: "ޗ", v: "ވ", b: "ބ", n: "ނ", m: "މ", Q: "ޤ", W: "ޢ", E: "ޭ", R: "ޜ", T: "ޓ", Y: "ޠ", U: "ޫ", I: "ީ", O: "ޯ", P: "÷", A: "ާ", S: "ށ", D: "ޑ", F: "ﷲ", G: "ޣ", H: "ޙ", J: "ޛ", K: "ޚ", L: "ޅ", Z: "ޡ", X: "ޘ", C: "ޝ", V: "ޥ", B: "ޞ", N: "ޏ", M: "ޟ", ",": "،", ";": "؛", "?": "؟", "<": ">", ">": "<", "[": "]", "]": "[", "(": ")", ")": "(", "{": "}", "}": "{" }[t] || t }, t }();