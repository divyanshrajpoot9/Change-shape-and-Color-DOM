# Change-shape-and-Color-DOM
### Hosted Link: https://divyanshrajpoot9.github.io/Change-shape-and-Color-DOM/
### Java Script DOM Manipulation:
The Document Object Model (DOM) is a programming interface for web documents. It provides a structured representation of a web page, allowing you to access and manipulate its elements and content using JavaScript. Here are some basic DOM properties and methods.
document: The document object represents the entire HTML document and serves as the entry point to the DOM. It provides properties and methods to access and modify the document's structure, content, and style.

### Element Selection and Traversal:

  ### getElementById(id): Retrieves an element by its unique id attribute.
  #### getElementsByClassName(className): Returns a collection of elements with a specific class name.
  ####  getElementsByTagName(tagName): Returns a collection of elements with a specific tag name.
  ####  querySelector(selector): Returns the first element that matches the CSS selector.
  ####  querySelectorAll(selector): Returns a list of all elements that match the CSS selector.


1. **Element Selection**: The code begins by selecting various elements from the DOM using `document.querySelector` and `getElementById`:
   - `triangleVar`, `squareVar`, and `circleVar` select elements with classes "triangle," "square," and "circle," respectively.
   - `ShapeContainerVar` selects an element with the ID "ShapeContainer."
   - `ColorBtnVar` and `ShapeBtnVar` select elements with IDs "ColorBtn" and "ShapeBtn," respectively.

2. **Color Array**: An array named `colors` is defined, which contains different color strings.

3. **ChangeColorfun Function**: This function is defined to change the background color of the `ShapeContainerVar` element to a random color from the `colors` array when the "ColorBtn" button is clicked.

4. **generateShapes Function**: This function is defined to generate and display a random shape within the `ShapeContainerVar` element when the "ShapeBtn" button is clicked. The function:
   - Creates a new `div` element with the class "shape."
   - Randomly selects a shape class ("circle," "square," or "triangle") and adds it to the `div` element.
   - Clears the contents of the `ShapeContainerVar` by setting its `innerHTML` to an empty string.
   - Appends the newly created shape `div` to the `ShapeContainerVar`.
   - Sets the display style of the shape to "block," making it visible.

5. **Event Listeners**: Event listeners are added to the "ColorBtn" and "ShapeBtn" elements to trigger the `ChangeColorfun` and `generateShapes` functions when these buttons are clicked.

In summary, this code sets up a basic web application where clicking the "ColorBtn" button changes the background color of the container to a random color from the `colors` array, and clicking the "ShapeBtn" button generates and displays a random shape (circle, square, or triangle) inside the container. The displayed shape replaces any existing shape within the container. The shape and color changes are made dynamically based on user interaction with the buttons.
