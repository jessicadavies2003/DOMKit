# DOMKit
**Simplifying the creation of essential HTML elements while applying some default styling.**

## Introduction
Simplicity. All developers love it, and it makes creating projects easier and faster. I'm exactly the same. If I can find a more simple solution to an issue that creates the same output, of course I'm going straight for the simple solution. Gets the job done, you know?

## The Solution
I wanted to make creating website easier and quicker than ever, and still be able to customise my DOM elements and place them exactly where I wanted them. I wanted to use Flexbox and Grid layouts, but didn't want to write countless lines of CSS code to style them to my satisfaction.

So, I created DOMKit, written entirely in JavaScript. It contains a wide range of functions for all your needs and wants for a website, while allowing you to customise these elements as you wish. Flexbox, navigation bars, grid layouts, you name it.

## Getting Started with DOMKit
Simply download this repository into your code, then add the following line above any `<script>` tags, allowing your HTML page to import the functions.

```
<script src="/path/to/DOMKit"></script>
```

## Testing DOMKit
To ensure DOMKit works correctly, try copying and running the following code right underneath the line above:

```
<script>
  const myNav = createNavBar({'Home': '', 'About': 'about.html'}, [66, 106, 190]);
</script>
```

If it works, you should see the following:

![A light-blue coloured navigation bar with the links "Home" and "About" in black.](Isolated.png "DOMKit Test - Navigation Bar")
