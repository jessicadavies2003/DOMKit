/*! DOMKit v1.0 | (c) 2025 Jessica Davies | https://github.com/jessicadavies2003/DOMKit/blob/main/LICENSE */

// 'cssReset' is defined in multiple files. We use this to allow devs to use multiple files.
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
 * Uses flexbox to center a given element.
 *
 * @param {HTMLElement} element The element to be centered.
 * @example
 * centerEl(element);
*/
const centerEl = (element) => {
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.margin = "auto";
}

/**
 * Centers the inner text of a given element.
 *
 * @param {HTMLElement} element The element that contains text to be centered.
 * @param {String} horizontalOrVertical Determines if the text should be centered horizontally or vertically. Accepted values: `horizontal`, `vertical`. Default `horizontal`
 * @param {String} sizeOfElement The size of the element in pixels. Defaulted to `null`.
 * @example
 * centerText(element, "vertical", "20px");
*/
const centerText = (element, horizontalOrVertical="horizontal", sizeOfElement=null) => {
    if (horizontalOrVertical === "horizontal") {
        element.style.textAlign = "center";
    } else if (horizontalOrVertical === "vertical") {
        const padding = sizeOfElement == null ? `${element.offsetHeight}px` : sizeOfElement;
        element.style.padding = `${padding} 0`;
    }
}

/**
 * Adds a background gradient to an element.
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

        element.style.background = funcCall;
        element.style.color = textColour;
    }
}

/**
 * Adds a gradient to an element's text.
 *
 * @param {HTMLElement} elementID The HTML element where the gradient will be applied, any type of HTML element will suffice.
 * @param {Array} colours A list of lists, where each list contains RGB values for each colour, allowing more than 2 colours.
 * @example
 * textGradient(element, [[128, 0, 0], [0, 128, 0], [0, 0, 128]]);
*/
const textGradient = (elementID, colours) => {
    const element = document.getElementById(elementID);

    let funcCall = `-webkit-linear-gradient(90deg`;
    colours.forEach((colour) => {
        funcCall += ", ";
        funcCall += `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;
    });

    element.style.background = funcCall;
    element.style.backgroundClip = "text";
    element.style.webkitTextFillColor = "transparent";
}

/**
 * Adds a shadow effect to a given element.
 *
 * @param {HTMLElement} element The HTML element where the effect will be applied, any type of HTML element will suffice.
 * @param {String} facing The direction that the element will face. Either `top-left`, `bottom-left`, `top-right`, `bottom-right`, or 'forward'.
 * @param {String} spread How far the shadow should spread in pixels.
 * @param {Array} colour A list containing RGB values for the chosen colour.
 * @example
 * shadowEffect(element, "top-right", "20px", [128, 0, 0]);
*/
const shadowEffect = (element, facing, spread, colour) => {
    // box-shadow: offset-x offset-y blur spread colour
    const directions = {
        'top-left': `10px 10px ${spread}`,
        'bottom-left': `10px -10px ${spread}`,
        'top-right': `-10px 10px ${spread}`,
        'bottom-right': `-10px -10px ${spread}`,
        'forward': `0px 0px ${spread}`
    }
    const formattedColour = `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;
    element.style.boxShadow = `${directions[facing]} ${formattedColour}`;
}

/**
 * Adds a glassmorphism effect to a given section element.
 *
 * @param {HTMLDivElement} wrapperID The HTML DIV element that includes the section element where the effect will be applied.
 * @param {HTMLElement} elementID The section element within `wrapperEl`. This will include things like a header, text, a CTA button, etc.
 * @param {String} bgImgPath The path to the image that will be placed on the background.
 * @param {String} width (Optional) The width of the element with ID `sectionID`. Defaulted to '50%', half of the width of its parent element.
 * @param {String} padding (Optional) Determines the padding that'll get applied to all elements in the element with ID `sectionID`. Defaulted to '20px'.
 * @param {String} addShadow (Optional) Determines if the glassmorphism effect should have a shadow effect. Defaulted to 'true'.
 * @param {String} blur (Optional) The amount of blur in the backdrop filter. Defaulted to '5px'.
 * @example
 * glassmorphism("wrapper", "myElement", "media/cool-bg.jpg");
*/
const glassmorphism = (wrapperID, elementID, bgImgPath, {width="50%", padding="20px", addShadow=true, blur="5px"}) => {
    cssReset();

    const wrapperEl = document.getElementById(wrapperID);
    const section = document.getElementById(elementID);

    wrapperEl.style.backgroundImage = `url(${bgImgPath})`;
    wrapperEl.style.backgroundSize = "cover";
    wrapperEl.style.backgroundRepeat = "no-repeat";
    wrapperEl.style.padding = padding;

    section.style.display = "flex";
    section.style.flexDirection = "column";
    section.style.alignItems = "center";
    section.style.justifyContent = "center";
    section.style.width = width;
    section.style.margin = "auto";
    section.style.backdropFilter = `blur(${blur})`;

    if (addShadow) {
        shadowEffect(section, "forward", "15px", [255, 255, 255]);
    };
}

/**
 * Adds a customised border to a HTML element.
 *
 * @param {HTMLElement} element The element that the border will be applied to.
 * @param {String} thickness Determines the thickness of the border.
 * @param {String} borderType One of the following: [`solid`, `dotted`, `double`, `groovy`]
 * @param {ArrayLike} colour A list that contains RGB value for the desired colour.
 * @param {String} borderPadding Hiw much padding to be added to the border.
 * @example
 * addBorder(element, "2px", "solid", [128, 0, 0], "10px");
*/
const addBorder = (element, thickness, borderType, colour, borderPadding) => {
    element.style.border = `${thickness} ${borderType} rgb(${colour[0]}, ${colour[2]}, ${colour[2]})`;
    element.style.padding = borderPadding; 
}

/**
 * Adds text to an element that is only viewed when hovered over.
 *
 * @param {HTMLElement} element The element that the border will be applied to.
 * @param {String} text Determines the thickness of the border.
 * @example
 * addBorder(element, "Hello world!");
*/
const hoverOverText = (element, hoverText) => {
    element.title = hoverText;
}