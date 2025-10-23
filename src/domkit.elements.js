/*! DOMKit v1.0 | (c) 2025 Jessica Davies | https://github.com/jessicadavies2003/DOMKit/blob/main/LICENSE */

let style;
if (document.getElementById("webStyle")) {
    style = document.getElementById("webStyle");
} else {
    style = document.createElement("style");
    style.id = "webStyle";
    document.head.appendChild(style);
}

if (typeof cssReset === 'undefined'){
    /**
     * Resets the browser's padding and margin values, so the HTML looks the same on all browsers.
    */
    cssReset = () => {
        const style = document.createElement("style");
        style.textContent += `* { margin: 0; padding: 0; }`;
        document.head.appendChild(style);
    };
}

/**
 * Creates and returns a video element, and adds it to the DOM.
 *
 * @param {String} filepath The filepath of the video.
 * @param {Boolean} controls Determines whether or not the user can control the video by playing, pausing, etc. Defaulted to `true`.
 * @param {String} parent ID of the parent element where the video should be added to. Defaulted to `body`.
 * @returns The HTML Video Element
 * @example 
 * const myVideo = createVideoEl("media/website-design.mp3", {parentID: "myDiv"});
*/
const createVideoEl = (filepath, {controls=true, parentID="body"}) => {
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
 * Creates and returns a nav element, with default styling for a navigation bar, and adds it to the top of the DOM.
 *
 * @param {Object} links An object containing data about each link of the nav bar, keys being the name and values being the filepaths for said name.
 * @param {List} bgColour A list containing three values: red, green, blue. For the background colour of the navigation bar.
 * @param {String} paddingSize Determines how much padding will be added to the nav bar. Defaulted to `15px`.
 * @param {List} textColour A list containing three values: red, green, blue for the text colour. Defaulted to `[0, 0, 0]` for black.
 * @param {Number} opacity A number to determine how transparent the navigation bar should be. Defaulted to `1` for no transparency.
 * @param {String} resetCSS Indicates whether or not the `cssReset()` function should be called. See the docs for more info. Defaulted to `true`.
 * @returns The HTML Nav Element
 * @example 
 * const myNav = createNavBar({'Home': '', 'About': 'about.html'}, [66, 106, 190]);
*/
const createNavBar = (links, bgColour, {paddingSize="15px", opacity=1, textColour=[0, 0, 0], resetCSS=true}) => {
    if (resetCSS) {
        cssReset();
    }

    const nav = document.createElement("nav");
    nav.style.backgroundColor = `rgb(${bgColour[0]}, ${bgColour[1]}, ${bgColour[2]})`;
    nav.style.opacity = opacity;
    nav.style.width = "100vw";
    nav.style.padding = paddingSize;
    
    const linkNames = Object.keys(links);
    linkNames.forEach((key) => {
        const linkEl = document.createElement("a");
        linkEl.textContent = key;
        linkEl.href = links[key];
        linkEl.style.padding = paddingSize;
        linkEl.style.textDecoration = "none";
        linkEl.style.color = `rgb(${textColour[0]}, ${textColour[1]}, ${textColour[2]})`;
        linkEl.style.fontSize = "1.1rem";
        if (opacity < 1) {
            linkEl.style.opacity = "1";
        }

        nav.appendChild(linkEl);
    });

    document.body.prepend(nav);
    return nav;
}

/**
 * Creates and returns a table element, and adds it to the DOM.
 *
 * @param {Array} headers A list containing the table headers.
 * @param {Array} rowData A list of lists, where each list represents a row of the table.
 * @param {String} hasBorders Determines if the table should have borders. Defaulted to `true`.
 * @param {String} parentID ID of the parent element where the table should be added to. Defaulted to `body`.
 * @returns The HTML Table Element
 * @example
 * const myTable = createTable(["header1", "header2"], [["item1-header1", "item1-header2"], ["item2-header1", "item2-header2"]], {parentID: "body"});
*/
const createTable = (headers, rowData, {hasBorders=true, parentID="body"}) => {
    let myDiv;
    if (parentID === "body") {
        myDiv = document.body;
    } else {
        myDiv = document.getElementById(parentID);
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

    if (hasBorders) {
        table.style.border = "1px solid black";
    }

    myDiv.appendChild(table);
    return table;
}

/**
 * Creates and returns a dropdown element, and adds it to the DOM.
 *
 * @param {String} dropdownName The name of the dropdown.
 * @param {Array} options A list of strings, where each string represents an option for the dropdown menu.
 * @param {String} label The string to label the dropdown menu.
 * @param {String} parentID ID of the parent element where the table should be added to. Defaulted to `body`.
 * @returns The HTML Dropdown Element
 * @example
 * const cars = createDropdown("cars", ["Volkswagen", "Kia", "Mercedes-Benz"], "Select your favourite car brand.");
*/
const createDropdown = (dropdownName, options, label, parentID="body") => {
    let myDiv;
    if (parentID === "body") {
        myDiv = document.body;
    } else {
        myDiv = document.getElementById(parentID);
    }

    const dropdown = document.createElement("select");
    dropdown.name = dropdownName; dropdown.id = dropdownName;
    const lbl = document.createElement("label");
    lbl.setAttribute("for", dropdownName);
    lbl.textContent = label;

    options.forEach((option) => {
        const optionEl = document.createElement("option");
        optionEl.value = option; optionEl.textContent = option;
        dropdown.appendChild(optionEl);
    });

    myDiv.appendChild(lbl);
    myDiv.appendChild(dropdown);
    return dropdown;
}

/**
 * Creates and returns a form element, and adds it to the DOM.
 *
 * @param {String} title The name of the form element.
 * @param {Object} inputData An object containing input data for the form. Keys are the labels, and the values are the type of input.
 * @param {String} gap A value (in pixels) that determines the gap between all elements.
 * @param {Boolean} centerVertically Boolean to determine if all input fields should be centered. Defaulted to `true`.
 * @param {String} actionPage An external page where the data should be sent. Usually a PHP page. Defaulted to `null`.
 * @param {String} parent ID of the parent element where the form should be added to. Defaulted to `body`.
 * @returns The HTML Form Element
 * @example
 * const signInForm = createForm("Sign In", {"Username": "text", "Password": "password"}, "20px", actionPage="action.php");
*/
const createForm = (title, inputData, gap, centerVertically=true, actionPage=null, parent="body") => {
    let myDiv;
    if (parent === "body") {
        myDiv = document.body;
    } else {
        myDiv = document.getElementById(parent);
    }

    const form = document.createElement("form");
    form.action = actionPage == null ? "" : actionPage;
    const titleElement = document.createElement("h1");
    titleElement.textContent = title;
    form.appendChild(titleElement);

    const inputLabels = Object.keys(inputData);
    inputLabels.forEach((lbl) => {
        const inputElement = document.createElement("input");

        if (inputData[lbl] === "button") {
            inputElement.type = inputData[lbl];
            inputElement.textContent = lbl;
        
        } else {
            const lblElement = document.createElement("label");
            lblElement.textContent = lbl;
            inputElement.type = inputData[lbl];
            inputElement.id = lbl.toLowerCase();
            lblElement.setAttribute("for", lbl.toLowerCase());
            form.appendChild(lblElement);
        }

        form.appendChild(inputElement);
    })

    form.style.gap = gap;

    if (centerVertically) {
        form.style.display = "flex";
        form.style.flexDirection = "column";
        form.style.alignItems = "center";
        form.style.justifyContent = "center";
        form.style.margin = "auto";
    }

    myDiv.appendChild(form);
    return form;
}

/**
 * Creates and returns a DIV element for a light and dark mode toggle switch, and adds it to the DOM.
 *
 * @param {String} width The width of the element. Height will be calculated using this value.
 * @param {List} toggleColour A list containing three values: red, green, blue. For the background colour of the toggle.
 * @param {List} switchColour A list containing three values: red, green, blue. For the colour of the toggle switch.
 * @param {Object} themes An object, where keys are `light` and `dark`, and values
 * @param {String} parentID ID of the parent element where the form should be added to. Defaulted to `body`.
 * @returns A HTML DIV Element containing the toggle switch.
 * @example
 * const toggleWrapper = createToggle("100px", [128, 128, 128], [255, 255, 255], {'light': [[0, 0, 0], [255, 255, 255]], 'dark': [[255, 255, 255], [37, 37, 38]]});
*/
const createToggle = (width, toggleColour, switchColour, themes, parentID="body") => {
    let myDiv;
    if (parent === "body") {
        myDiv = document.body;
    } else {
        myDiv = document.getElementById(parentID);
    }

    const toggleWrapper = document.createElement("div");
    toggleWrapper.style.width = width;
    toggleWrapper.style.height = `calc(${width} / 3)`;
    toggleWrapper.style.backgroundColor = `rgb(${toggleColour[0]}, ${toggleColour[1]}, ${toggleColour[2]})`;
    toggleWrapper.style.borderRadius = "30px";
    toggleWrapper.style.padding = "5px";

    const toggle = document.createElement("div");
    toggle.style.width = `calc(${width} / 3)`;
    toggle.style.height = `calc(${width} / 3)`;
    toggle.style.backgroundColor = `rgb(${switchColour[0]}, ${switchColour[1]}, ${switchColour[2]})`;
    toggle.style.borderRadius = "30px";

    style.textContent += `
@keyframes slideLeft {
    from {
        transform: translateX(calc(${width} / 1.5));
    }
    to {
        transform: translateX(0);
    }
}
@keyframes slideRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(${width} / 1.5));
    }
}
    
.slideLeftClass {
    animation: slideLeft 200ms linear 1;
    transform: translateX(0);
}

.slideRightClass {
    animation: slideRight 200ms linear 1;
    transform: translateX(calc(${width} / 1.5));
}`;

    let lightThemeTxt = themes['light'][0];
    let lightThemeBg = themes['light'][1];
    let darkThemeTxt = themes['dark'][0];
    let darkThemeBg = themes['dark'][1];

    let isLight = true;
    toggleWrapper.addEventListener("click", () => {
        if (isLight) {
            toggle.classList.add("slideRightClass");
            toggle.classList.remove("slideLeftClass");

            document.body.style.backgroundColor = `rgb(${darkThemeBg[0]}, ${darkThemeBg[1]}, ${darkThemeBg[2]})`;
            document.body.style.color = `rgb(${darkThemeTxt[0]}, ${darkThemeTxt[1]}, ${darkThemeTxt[2]})`;
            isLight = false;
        } else {
            toggle.classList.remove("slideRightClass");
            toggle.classList.add("slideLeftClass");

            document.body.style.backgroundColor = `rgb(${lightThemeBg[0]}, ${lightThemeBg[1]}, ${lightThemeBg[2]})`;
            document.body.style.color = `rgb(${lightThemeTxt[0]}, ${lightThemeTxt[1]}, ${lightThemeTxt[2]})`;
            isLight = true;
        }
    })

    toggleWrapper.appendChild(toggle);
    myDiv.appendChild(toggleWrapper);
    return toggleWrapper;
}