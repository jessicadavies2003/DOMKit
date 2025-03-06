/**
 * Creates and returns a flexbox container.
 *
 * @param {String} flexDirection The flex direction of the container. Either 'row' or 'column'.
 * @param {Boolean} hideOverflow Determines if any overflowing elements should be hidden. Defaulted to 'true'.
 * @param {String} parent ID of the parent element where the video should be added to. Defaulted to 'body'.
 * @returns The HTML Div Element containing the flexbox
*/
const createFlexbox = (flexDirection, hideOverflow=true, parent="body") => {
    const myDiv = document.createElement("div");
    myDiv.style.display = "flex";
    myDiv.style.flexDirection = flexDirection;
    myDiv.style.overflow = hideOverflow ? "hidden" : "visible";

    if (parent === "body") {
        document.body.appendChild(myDiv);
    } else {
        document.getElementById(parent).appendChild(myDiv);
    }
    return myDiv;
}

/**
 * Creates and returns a grid container.
 *
 * @param {ArrayLike} boxIDs A list containing an ID for each element.
 * @param {ArrayLike} gridTemplateArea A list, where each list inside the main list represents a row for the grid-template-area value. Each box must be its ID, the function assigns a grid-area value itself.
 * @param {String} gap Sets the distance between all box elements in the grid.
 * @param {String} parent ID of the parent element where the element should be added to. Defaulted to 'body'.
 * @returns The HTML Div Element containing the grid.
 * @example 
 * // creates a grid DIV element that styles 3 DIV elements with IDs "box1", "box2" and "box3" respectfully
 * const myGrid = createGrid(["box1", "box2", "box3"], [
 *      ["box1", "box1", "box1"],
 *      ["box2", "box3", "box3"],
 *      ["box2", "box3", "box3"]
 * ], "10px");
*/
const createGrid = (boxIDs, gridTemplateArea, gap, parent="body") => {
    const myDiv = document.createElement("div");
    myDiv.style.display = "grid";

    for (let i = 0; i < boxIDs.length-1; i++) {
        const elementID = boxIDs[i];
        const currElement = document.getElementById(elementID);
        currElement.style.gridArea = elementID;
    }

    let gridTemplateAreaStr = ``;
    for (let i = 0; i < gridTemplateArea.length; i++) {
        const currRow = gridTemplateArea[i].join(" ");
        gridTemplateAreaStr += `"` + currRow + `"\n`;
    }
    myDiv.style.gridTemplateAreas = gridTemplateAreaStr;
    myDiv.style.gap = gap;

    if (parent === "body") {
        document.body.appendChild(myDiv);
    } else {
        document.getElementById(parent).appendChild(myDiv);
    }
    return myDiv;
}