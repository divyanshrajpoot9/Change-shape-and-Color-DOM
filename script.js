
const triangleVar = document.querySelector(".triangle");
const squareVar = document.querySelector(".square");
const circleVar = document.querySelector(".circle");

const ShapeContainerVar = document.getElementById("ShapeContainer");
console.log(ShapeContainerVar);

const ColorBtnVar = document.getElementById("ColorBtn");
console.log(ColorBtnVar);

const ShapeBtnVar = document.getElementById("ShapeBtn");
console.log(ShapeBtnVar);

const colors = ["blue", "green", "yellow", "pink", "black", "red", "purple", "orange"];
function ChangeColorfun(){
    ShapeContainerVar.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
}

// ................................................................................................................................
// function ChangeShapefun(){
//       if(triangleVar.style.display === "block"){
//         squareVar.style.display = "block";
//        triangleVar.style.display = "none";
//        circleVar.style.display = "none";
//       }
//       else if(circleVar.style.display === "block"){
//        triangleVar.style.display = "block";
//        circleVar.style.display = "none";
//        squareVar.style.display = "none";
//       }
//       else if(squareVar.style.display === "block"){
//         squareVar.style.display = "none";
//        triangleVar.style.display = "none";
//        circleVar.style.display = "block";
//       }
// }
// ........................................................................................................

        function generateShapes() {
            const container = document.getElementById("ShapeContainer");

            // Create a new div inside the ShapeContainer that will contain the shapes and we add the css classes to it. 
            const shape = document.createElement("div");
            shape.className = "shape";

            //andomly choose  the shapes. 
            const shapeClasses = ["circle", "square", "triangle"];
            const randomShapeClass = shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
            shape.classList.add(randomShapeClass);
            // shape.classList.add(randomShapeClass);==  this will add the already ready made css classes ie circle ,squeare and triangle to the div(shape) area because the are in form of classes. 


            // Append the shape to the container
            container.innerHTML = "";  // empty the shape container 
            container.appendChild(shape);
            // Toggle visibility to "block"
            shape.style.display = "block";
            
        }
ColorBtnVar.addEventListener("click", ChangeColorfun);
ShapeBtnVar.addEventListener("click", generateShapes);
