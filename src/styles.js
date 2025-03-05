/**
 * Centers a given DIV element.
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