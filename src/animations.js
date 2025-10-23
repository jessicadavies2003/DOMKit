/*! DOMKit v1.0 | (c) 2025 Jessica Davies | https://github.com/jessicadavies2003/DOMKit/blob/main/LICENSE */

let style;
if (document.getElementById("webStyle")) {
    style = document.getElementById("webStyle");
} else {
    style = document.createElement("style");
    style.id = "webStyle";
    document.head.appendChild(style);
}

const timingFunctions = {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
}

/**
 * Adds a rotation animation to a given HTML element.
 *
 * @param {HTMLElement} elementID ID of the HTML element where the effect will be applied, any type of HTML element will suffice.
 * @param {String} animationName The name of the animation.
 * @param {String} duration How long the element will rotate for
 * @param {Number} degrees How much the element will rotate in degrees.
 * @param {Number} iterationCount How many times the animation should be repeated. `Infinity` counts as a number.
 * @param {String} timingFunction the time an animation uses to change from one set of CSS styles to another.
 * @param {String} animationName The name of the animation. Defaulted to `rotateAnimation`.
 * @example
 * rotateAnimation("mySquare", "5s", 360, Infinity, "linear");
*/
const rotateAnimation = (elementID, duration, degrees, iterationCount, timingFunction, animationName="rotateAnimation") => {
    if (iterationCount === Infinity) {
        iterationCount = "infinite";
    }
    
    let keyframesStyling = `
@keyframes ${animationName} {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(${degrees}deg); }
}
    
#${elementID} {
    animation-name: ${animationName};
    animation-duration: ${duration};
    animation-iteration-count: ${iterationCount};
    animation-timing-function: ${timingFunctions[timingFunction]};
}`
    style.textContent += keyframesStyling;
}

/**
 * Adds a slide-in animation to the inner text of a given HTML element.
 *
 * @param {HTMLElement} elementID ID of the HTML element where the effect will be applied, any type of HTML element will suffice.
 * @param {String} direction The direction that the element will slide from.
 * @param {String} duration How long the element will slide for.
 * @param {String} timingFunction the time an animation uses to change from one set of CSS styles to another.
 * @param {String} animationName The name of the animation. Defaulted to `slidein`.
 * @example
 * slideInText("myText", "left", "2s", "linear");
*/
const slideInText = (elementID, direction, duration, timingFunction, animationName="slidein") => {
    const directions = {
        'left': ['translateX(-100vw);', 'translateX(0);'],
        'right': ['translateX(100vw);', 'translateX(0);'],
        'top': ['translateY(-100vh);', 'translateY(0);'],
        'bottom': ['translateY(100vh);', 'translateY(0);']
    }

    let keyframesStyling = `@keyframes ${animationName} {
    0% { transform: ${directions[direction][0]} }
    100% { transform: ${directions[direction][1]} }
}
    
#${elementID} {
    animation-name: ${animationName};
    animation-duration: ${duration};
    animation-timing-function: ${timingFunctions[timingFunction]};
}`

    style.textContent += keyframesStyling;
}

/**
 * Adds a "fade in scroll" effect to all elements inside a given parent element ID.
 *
 * @param {HTMLElement} parentID Parent ID of all HTML element where the effect will be applied.
 * @param {Number} duration How long each element will fade in for (in seconds). Default value is `5`.
 * @example
 * fadeInScrollEffect("paragraphs");
*/
const fadeInScrollEffect = (parentID, duration=5) => {
    const cssEntry = `
.hidden {
    opacity: 0;
    transition: all ${duration}s;
}

.show {
    opacity: 1;
}`;
    style.textContent += cssEntry;

    const allChildrenNodes = document.getElementById(parentID).children;
    for (let i = 0; i < allChildrenNodes.length; i++){
        const current = allChildrenNodes.item(i);
        current.classList.add("hidden");
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if ((entry.isIntersecting) && (entry.target.parentNode.id == parentID)) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        })
    })

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
}