# Change-shape-and-Color-DOM
### Hosted Link: https://divyanshrajpoot9.github.io/Change-shape-and-Color-DOM/



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
