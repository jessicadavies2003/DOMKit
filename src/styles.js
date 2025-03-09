// GLOBAL VARS  //
const style = document.createElement("style");

/**
 * Uses flexbox to center a given element. Does not return this element.
 *
 * @param {HTMLElement} element The element to be centered.
*/
const centerEl = (element) => {
    style.textContent += `
#${element.id} {
    display: flex;
    align-items: center;
    justify-content: center;
}`;
}

/**
 * Adds a background gradient to an element. Does not return this element.
 *
 * @param {HTMLElement} element The HTML element where the gradient will be applied, any type of HTML element will suffice.
 * @param {String} direction The direction of the gradient in `degrees`.
 * @param {String} gradientType Determines the gradient type to be used.
 * @param {Array} colours A list of lists, where each list contains RGB values for each colour, allowing more than 2 colours.
 * @param {String} textColour Colour of the text inside the element. Defaulted to 'black'
 * @example
 * gradientBG(element, "90deg", "linear", [[128, 0, 0], [0, 128, 0], [0, 0, 128]], "white");
*/
const gradientBG = (element, direction, gradientType, colours, textColour="black") => {
    if (gradientType === "linear") {
        let funcCall = `linear-gradient(${direction}`;
        colours.forEach((colour) => {
            funcCall += ", ";
            funcCall += `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;
        });
        funcCall = funcCall + ")";

        style.textContent += `
#${element.id} { background: ${funcCall}; color: ${textColour} }`;
        document.body.appendChild(style);
    }
}

/**
 * Adds a gradient to an element's text. Does not return this element.
 *
 * @param {HTMLElement} element The HTML element where the gradient will be applied, any type of HTML element will suffice.
 * @param {String} direction The direction of the gradient in `degrees`.
 * @param {Array} colours A list of lists, where each list contains RGB values for each colour, allowing more than 2 colours.
 * @example
 * textGradient(element, "90deg", [[128, 0, 0], [0, 128, 0], [0, 0, 128]]);
*/
const textGradient = (element, direction, colours) => {
    let funcCall = `-webkit-linear-gradient(${direction}`;
    colours.forEach((colour) => {
        funcCall += ", ";
        funcCall += `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;
    });
    element.style.background = funcCall;
    element.style.backgroundClip = "text";
    element.style.webkitTextFillColor = "transparent";
}