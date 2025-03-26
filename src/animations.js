const style = document.createElement("style");
document.head.appendChild(style);

/**
 * Adds a rotation animation to a given HTML element.
 *
 * @param {HTMLElement} elementID ID of the HTML element where the effect will be applied, any type of HTML element will suffice.
 * @param {String} animationName The name of the animation.
 * @param {String} duration How long the element will rotate for
 * @param {Number} degrees How much the element will rotate in degrees.
 * @param {Number} iterationCount How many times the animation should be repeated. `Infinity` counts as a number.
 * @example
 * rotateAnimation(element, "rotating", "5s", 360, Infinity);
*/
const rotateAnimation = (elementID, animationName, duration, degrees, iterationCount) => {
    if (iterationCount === Infinity) {
        iterationCount = "infinite";
    }
    
    let keyframesStyling = `@keyframes ${animationName} {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(${degrees}deg); }
}
    
#${elementID} {
    animation-name: ${animationName};
    animation-duration: ${duration};
    animation-iteration-count: ${iterationCount};
}`
    console.log(keyframesStyling);
    style.textContent = keyframesStyling;
}