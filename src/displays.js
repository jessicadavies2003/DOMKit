/**
 * Creates and returns a flexbox container.
 *
 * @param {String} flexDirection The flex direction of the container. Either 'row' or 'column'.
 * @param {Boolean} hideOverflow Determines if any overflowing elements should be hidden. Defaulted to 'true'.
 * @param {Boolean} textCentered Determines if all text elements should be centered. Defaulted to 'true'.
 * @param {Boolean} centered Determines if all elements in the flexbox should be centered. Defaulted to 'true'.
 * @param {String} parent ID of the parent element where the video should be added to. Defaulted to 'body'.
 * @returns The HTML Div Element containing the flexbox
*/
const createFlexbox = (flexDirection, textCentered=true, hideOverflow=true, centered=true, parent="body") => {
    let myDiv;
    if (parent === "body") {
        myDiv = document.body;
    } else {
        myDiv = document.getElementById(parent);
    }

    myDiv.style.display = "flex";
    myDiv.style.flexDirection = flexDirection;
    myDiv.style.overflow = hideOverflow ? "hidden" : "visible";

    if (textCentered) {
        myDiv.style.textAlign = "center";
    }
    if (centered) {
        myDiv.style.alignItems = "center";
        myDiv.style.justifyContent = "center";
    }

    return myDiv;
}

/**
 * Creates and returns a grid container.
 *
 * @param {Number} numBoxes The number of boxes that should be created inside the grid.
 * @param {List} boxColour A list containing three values: red, green, blue. For the background colour of each box element.
 * @param {Array} gridTemplateArea A list, where each list inside the main list represents a row for the grid-template-area value. An `i`th box will have an ID of `box{i}`.
 * @param {String} gap Sets the distance between all box elements in the grid.
 * @param {String} width Width of each box that will be created and stored in the main DIV.
 * @param {String} height Height of each box that will be created and stored in the main DIV.
 * @param {String} parent ID of the parent element where the element should be added to. Defaulted to 'body'.
 * @returns The HTML Div Element containing the grid.
 * @example 
 * // creates a grid DIV element that creates and styles 3 DIV elements with IDs "box1", "box2" and "box3" respectfully
 * const myGrid = createGrid(3, [0, 128, 0], [
 *      ["box1", "box1", "box1"],
 *      ["box2", "box3", "box3"],
 *      ["box2", "box3", "box3"]
 * ], "10px", "100px", "100px");
*/
const createGrid = (numBoxes, boxColour, gridTemplateArea, gap, width, height, parent="body") => {
    let myDiv;
    if (parent === "body") {
        myDiv = document.body;
    } else {
        myDiv = document.getElementById(parent);
    }

    myDiv.style.display = "grid";
    myDiv.style.gridTemplateColumns = `${width} `.repeat(gridTemplateArea[0].length);
    myDiv.style.gridTemplateRows = `${height} `.repeat(gridTemplateArea.length);

    for (let i = 1; i < numBoxes+1; i++) {
        const newEl = document.createElement("div");
        const elID = `box${i}`;
        newEl.id = elID;
        newEl.style.gridArea = elID;
        newEl.style.backgroundColor = `rgb(${boxColour[0]}, ${boxColour[1]}, ${boxColour[2]})`;
        myDiv.appendChild(newEl);
    }

    let gridTemplateAreaStr = ``;
    for (let i = 0; i < gridTemplateArea.length; i++) {
        const currRow = gridTemplateArea[i].join(" ");
        gridTemplateAreaStr += `"` + currRow + `"\n`;
    }
    myDiv.style.gridTemplateAreas = gridTemplateAreaStr;
    myDiv.style.gap = gap;

    return myDiv;
}