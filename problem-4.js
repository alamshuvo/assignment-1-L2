function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
}
console.log(calculateShapeArea({
    shape: "circle",
    radius: 5
}));
