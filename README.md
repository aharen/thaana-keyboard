# thaana-keyboard
Thaana keyboard replaces latin text to thaana unicode characters using JavaScript. 

Demo: [https://thaana-keyboard.khusaam.com](https://thaana-keyboard.khusaam.com)

## Installation & Usage

npm

```
npm i thaana-keyboard
```

or using yarn

```
yarn add thaana-keyboard
```

or link to build file in d

```
<script src="../dist/ThaanaKeyboard.min.js"></script>
```

To start using in the default config, setup the input by adding class `thaana-keyboard` to the element

```
<input type="text"
	class="thaana-keyboard">
```

and initiating the keyboard

```
<script>
window.addEventListener('DOMContentLoaded' , (e) => {
    new ThaanaKeyboard();
});
</script>
```

If you need to use a different class, you can specify it as the first argument. Example:

```
<script>
window.addEventListener('DOMContentLoaded' , (e) => {
    new ThaanaKeyboard('my-custom-thaana-class');
});
</script>
```

Just make sure that the same class is assigned to the input ot textarea

The second argument for the class is a boolean which determines to run the class immediately. If specified `false` you much run it manually. Example:

```
<script>
window.addEventListener('DOMContentLoaded' , (e) => {
    const tk = new ThaanaKeyboard(
        'my-custom-thaana-class', 
        false
    );

    tk.run();
});
</script>
```