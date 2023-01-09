var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var display = rootStyles.getPropertyValue('--display');






function scrollFunction() {
    root.style.setProperty('--display', 'none');
}

window.onscroll = scrollFunction;




