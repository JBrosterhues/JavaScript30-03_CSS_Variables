function processControlChange(evt) {
    console.log(evt);
    document.documentElement.style.setProperty(
        `--${evt.target.id}`,
        `${evt.target.value + evt.target.dataset.unit}`
    );
}

// main
const spacingEl = document.getElementById('spacing');
// set maximum padding/spacing value according to viewport size with maximum of 500px
spacingEl.max = Math.min(Math.floor(window.innerWidth / 2), 500);
const blurEl = document.getElementById('blur');
const colorEl = document.getElementById('color');
spacingEl.addEventListener('change', processControlChange);
spacingEl.addEventListener('mousemove', processControlChange);
blurEl.addEventListener('change', processControlChange);
blurEl.addEventListener('mousemove', processControlChange);
colorEl.addEventListener('change', processControlChange);
colorEl.addEventListener('mousemove', processControlChange);
