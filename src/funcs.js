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
 * @param {String} parent ID of the parent element where the video should be added to. Defaulted to 'body'.
 * @param {Boolean} controls Determines whether or not the user can control the video by playing, pausing, etc. Defaulted to 'true'.
 * @returns The HTML Video Element
*/
const createVideoEl = (filepath, parent="body", controls=true) => {
    const vid = document.createElement("video");
    vid.controls = controls;

    const source = document.createElement("source");
    source.src = filepath;
    vid.appendChild(source);

    if (parent === "body") {
        document.body.appendChild(vid);
    } else {
        document.getElementById(parent).appendChild(vid);
    }

    return vid;
}

/**
 * Creates and returns a nav element, styled to be a navigation bar, and adds it to the DOM.
 *
 * @param {Object} links An object containing data about each link of the nav bar, keys being the name and values being the filepaths for said name.
 * @param {List} bgColour A list containinng three values: red, green, blue. For the background colour of the navigation bar.
 * @param {String} textColour (Optional) A string indicating what colour the text should be. Defaulted to "Black".
 * @param {String} resetCSS (Optional) Indicates whether or not the cssReset() function should be called. Defaulted to "true".
 * @returns The HTML Nav Element
 * @example 
 * // creates a light-blue background on a small nav bar, and makes the text black
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

/**
 * Creates and returns a flexbox container.
 *
 * @returns The HTML Div Element containing the flexbox
*/
const createFlexbox = () => {
    
}