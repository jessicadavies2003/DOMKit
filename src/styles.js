/**
 * Centers a given DIV element. Does not return this element.
 *
 * @param {HTMLDivElement} element The DIV element to be centered
 * @param {String} rowOrColumn Determines if the elements inside the DIV element should be horizontal or vertical.
*/
const centerDiv = (element, rowOrColumn) => {
    element.style.display = "flex";
    element.style.flexDirection = rowOrColumn;
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.textAlign = "center";
}

/**
 * Adds a background gradient to an element. Does not return this element.
 *
 * @param {HTMLElement} element The HTML element where the gradient will be applied, any type of HTML element will suffice.
 * @param {String} direction The direction of the gradient in `degrees`.
 * @param {String} gradientType Determines the gradient type to be used.
 * @param {Array} colours A list of list, where each list contains RGB values for each colour, allowing more than 2 colours.
 * @example
 * gradientBG(element, "90deg", "linear", [[128, 0, 0], [0, 128, 0], [0, 0, 128]]);
*/
const gradientBG = (element, direction, gradientType, colours) => {
    if (gradientType === "linear") {
        element.style.background = `linear-gradient(${direction}, ${colours})`;
    }
}