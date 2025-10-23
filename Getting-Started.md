## Adding DOMKit to your Site
Download this repository into your code, then add the following line inside the `<head>` tags.
```
<script src="/path/to/DOMKit/src/[scriptName].js"></script>
```
where `[scriptName]` is one of the source files, depending on what styling or elements you need.

For instance, if you want animations on your webpage, you'd write the following:
```
<script src="/path/to/DOMKit/src/domkit.animations.js"></script>
```

## Testing
Let's create a test script to ensure DOMKit works correctly!

1. Download this GitHub respository as a `ZIP` file.
2. Head to your favourite IDE and create a new directory, followed by a HTML file inside that directory. We'll call it `index.html`, but you can name it as you like.
3. Extract the contents of DOMKit's repository, and move the extracted folder into your new directory.
4. Paste the following code into your HTML file:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- scripts go here -->
    <script src="DOMKit-main/src/domkit.elements.js"></script>
    <script src="DOMKit-main/src/domkit.styles.js"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home</title>
</head>
<body>
    <script>
        // When a function has optional parameters inside curly brackets,
        // and you want to stick with the default parameters, put {} at the end of the function call.
        const myNav = createNavBar({'Home': '', 'About': 'about.html'}, [66, 106, 190], {});
    </script>
</body>
</html>
```
5. Execute/Run the code. If it works, you should see the following:

![A light-blue coloured navigation bar with the links "Home" and "About" in black.](imgs/working-DOMKit-nav.png "DOMKit Test - Navigation Bar")
