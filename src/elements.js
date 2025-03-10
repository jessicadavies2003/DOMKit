/**
 * Resets the browser's padding and margin values, so the HTML looks the same on all browsers.
*/
const cssReset = () => {
    const style = document.createElement("style");
    style.textContent = `* { margin: 0; padding: 0; }`;
    document.head.appendChild(style);
};

/**
 * Creates and returns a video element, and adds it to the DOM.
 *
 * @param {String} filepath The filepath of the video.
 * @param {Boolean} controls Determines whether or not the user can control the video by playing, pausing, etc. Defaulted to 'true'.
 * @param {String} parent ID of the parent element where the video should be added to. Defaulted to 'body'.
 * @returns The HTML Video Element
*/
const createVideoEl = (filepath, controls=true, parentID="body") => {
    let myDiv;
    if (parentID === "body") {
        myDiv = document.body;
    } else {
        myDiv = document.getElementById(parentID);
    }

    const vid = document.createElement("video");
    vid.controls = controls;

    const source = document.createElement("source");
    source.src = filepath;
    vid.appendChild(source);
    myDiv.appendChild(vid);

    return vid;
}

/**
 * Creates and returns a nav element, with default styling for a navigation bar, and adds it to the DOM.
 *
 * @param {Object} links An object containing data about each link of the nav bar, keys being the name and values being the filepaths for said name.
 * @param {List} bgColour A list containing three values: red, green, blue. For the background colour of the navigation bar.
 * @param {String} textColour (Optional) A string indicating what colour the text should be. Defaulted to "Black".
 * @param {String} resetCSS (Optional) Indicates whether or not the cssReset() function should be called. Defaulted to "true".
 * @returns The HTML Nav Element
 * @example 
 * // creates a navigation bar with a light-blue background, and makes the text black
 * const myNav = createNavBar({'Home': '', 'About': 'about.html'}, [66, 106, 190], "black");
*/
const createNavBar = (links, bgColour, textColour="black", resetCSS=true) => {
    if (resetCSS) {
        cssReset();
    }

    const paddingSize = "15px";
    const nav = document.createElement("nav");
    nav.style.backgroundColor = `rgb(${bgColour[0]}, ${bgColour[1]}, ${bgColour[2]})`;
    nav.style.width = "100vw";
    nav.style.padding = paddingSize;
    
    const linkNames = Object.keys(links);
    linkNames.forEach((key) => {
        const linkEl = document.createElement("a");
        linkEl.textContent = key;
        linkEl.href = links[key];
        linkEl.style.padding = paddingSize;
        linkEl.style.textDecoration = "none";
        linkEl.style.color = textColour;
        linkEl.style.fontSize = "1.1rem";

        nav.appendChild(linkEl);
    });

    document.body.appendChild(nav);
    return nav;
}

/**
 * Creates and returns a table element, and adds it to the DOM.
 *
 * @param {Array} headers A list containing the table headers.
 * @param {Array} rowData A list of lists, where each list represents a row of the table.
 * @param {String} parent ID of the parent element where the table should be added to. Defaulted to 'body'.
 * @returns The HTML Table Element
 * @example
 * const myTable = createTable(["header1", "header2"], [["item1-header1", "item1-header2"], ["item2-header1", "item2-header2"]]);
*/
const createTable = (headers, rowData, parent="body") => {
    let myDiv;
    if (parent === "body") {
        myDiv = document.body;
    } else {
        myDiv = document.getElementById(parent);
    }

    const table = document.createElement("table");

    // headers
    const headerRow = document.createElement("tr");
    for (let i = 0; i < headers.length; i++) {
        const headerEl = document.createElement("th");
        headerEl.textContent = headers[i];
        headerRow.appendChild(headerEl);
    }
    table.appendChild(headerRow);

    // table items
    for (let i = 0; i < rowData.length; i++) {
        const rowEl = document.createElement("tr");
        rowData[i].forEach((item) => {
            const currItemEl = document.createElement("td");
            currItemEl.textContent = item;
            rowEl.appendChild(currItemEl);
        })
        table.appendChild(rowEl);
    };

    myDiv.appendChild(table);
    return table;
}