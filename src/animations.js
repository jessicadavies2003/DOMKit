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
 * Adds a typing animation to the inner text of a given HTML element.
 *
 * @param {HTMLElement} elementID ID of the HTML element where the effect will be applied, any type of HTML element will suffice.
 * @param {String} fontSize The size of the text's font.
 * @param {String} bgColour The background colour of either the parent element, or website `body`.
 * @param {String} isLooped Determines if the typing animation will loop continuously.
 * @param {String} typingMiliseconds Time (in miliseconds) between each character being "typed".
 * @example
 * typingAnimation("myText", "50px", [255, 255, 255], true, 250);
*/
const typingAnimation = (elementID, fontSize, bgColour, isLooped, typingMiliseconds) => {
    const myText = document.getElementById(elementID);
    let numChars = myText.innerText.length;

    myText.style.position = "absolute";
    myText.style.zIndex = "-1";
    myText.style.fontSize = fontSize;

    const overlap = document.createElement("h1");
    overlap.textContent = myText.innerText;
    overlap.style.position = "absolute";
    overlap.style.zIndex = "1";

    overlap.style.backgroundColor = `rgb(${bgColour[0]}, ${bgColour[1]}, ${bgColour[2]})`;
    overlap.style.color = `rgb(${bgColour[0]}, ${bgColour[1]}, ${bgColour[2]})`;
    overlap.style.fontSize = fontSize;

    document.body.appendChild(overlap);

    let originalLeft = overlap.getBoundingClientRect().left;
    let overlapWidth = overlap.getBoundingClientRect().width;

    let updatedOverlapWidth;
    let count = 0;
    const cooldown = setInterval(() => {
        numChars--;

        if (numChars < 0 && isLooped) {
            numChars = myText.innerText.length;
            overlap.textContent = myText.innerText;
            overlap.style.left = `${originalLeft}px`;
            count = -1;

        } else if (numChars < 0 && !isLooped) {
            clearInterval(cooldown);
            document.body.removeChild(overlap);
        }

        overlap.textContent = overlap.textContent.replace(overlap.textContent.charAt(count), " ");
        updatedOverlapWidth = overlap.getBoundingClientRect().width;
        overlap.style.left = `${(overlapWidth - updatedOverlapWidth) + originalLeft}px`;
        count++;

    }, typingMiliseconds)
}