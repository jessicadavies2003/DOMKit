/**
 * Creates and returns a flexbox container.
 *
 * @returns The HTML Div Element containing the flexbox
*/
const createFlexbox = () => {
    const myDiv = document.createElement("div");
    myDiv.style.display = "flex";

    return myDiv;
}

/**
 * Creates and returns a grid container.
 *
 * @returns The HTML Div Element containing the grid.
*/
const createGrid = () => {
    const myDiv = document.createElement("div");
    myDiv.style.display = "grid";

    return myDiv;
}