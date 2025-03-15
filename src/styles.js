// GLOBAL VARS  //
const style = document.createElement("style");
document.body.appendChild(style);

/**
 * Resets the browser's padding and margin values, so the HTML looks the same on all browsers.
*/
const cssReset = () => {
    const style = document.createElement("style");
    style.textContent = `* { margin: 0; padding: 0; }`;
    document.head.appendChild(style);
};

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

/**
 * Adds a shadow effect to a given element. Does not return this element.
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
 * Adds a glassmorphism effect to a given section element. Does not return this element.
 *
 * @param {HTMLElement} element The HTML section element where the effect will be applied. The function assumes you have your desired elements placed inside of it.
 * @param {String} bgImgPath The path to the image that will be placed on the background.
 * @param {String} height (Optional) How tall the background image should be on the webpage. Defaulted to '100vh', the whole height viewpoint.
 * @param {String} padding (Optional) Determines the padding that'll get applied to all elements in `element`. Defaulted to '20px'.
 * @param {String} margin (Optional) Determines the margin that'll get applied to `element`. Defaulted to '20px'.
 * @param {String} addShadow (Optional) Determines if the glassmorphism effect should have a shadow effect. Defaulted to 'true'.
 * @param {String} blur (Optional) The amount of blur in the backdrop filter. Defaulted to '10px'.
 * @example
 * glassmorphism(element, "media/cool-bg.jpg");
*/
const glassmorphism = (element, bgImgPath, height="100vh", padding="20px", addShadow=true, blur="5px") => {
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";

    cssReset();

    element.style.backgroundImage = `url(${bgImgPath})`;
    element.style.backgroundRepeat = "no-repeat";
    element.style.height = height;
    element.style.backdropFilter = `blur(${blur})`

    style.textContent = `#${element.id} * {
    padding: ${padding};
}`;

    if (addShadow) {
        shadowEffect(element, "forward", "15px", "black");
    }
}