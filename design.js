/* exported inspirations, initialize, render, mutate */

function inspirations() {
    return [
        { name: "Chocolate Chip Cookie", assetUrl: "./assets/Chip-Cookie.png" },
        { name: "Pepperoni Pizza", assetUrl: "./assets/Pepperoni-Pizza.png" },
        { name: "Pink Donut", assetUrl: "./assets/Pink-Donut.png" },
        { name: "Sliced Lemon", assetUrl: "./assets/Sliced-Lemon.png" }
    ]
}

function initialize(inspiration) {
    resizeCanvas(inspiration.image.width / 4, inspiration.image.height / 4);
    let design = { backgroundColor: 0, shapes: [] };
    if (inspiration.name == "Chocolate Chip Cookie") {
        for (let i = 0; i < 200; i++) {
            design.shapes.push({ colors: ["#694520", "#D7A651"], size: 20, x: 0, y: 0 });
        }
    }
    else if (inspiration.name == "Pepperoni Pizza") {
        for (let i = 0; i < 200; i++) {
            design.shapes.push({ colors: ["#EBB536", "#B9140D", "#F9CD6F"], size: 20, x: 0, y: 0 });
        }
    }
    else if (inspiration.name == "Pink Donut") {
        for (let i = 0; i < 200; i++) {
            design.shapes.push({ colors: ["#D4A766", "#EC5A9F", "#307753", "#863547", "#7A4F65"], size: 20, x: 0, y: 0 });
        }
    }
    else if (inspiration.name == "Sliced Lemon") {
        for (let i = 0; i < 200; i++) {
            design.shapes.push({ colors: ["#E8E10B", "#F7D624", "#FFFFFF"], size: 20, x: 0, y: 0 });
        }
    }
    return design;
}

function render(design, inspiration) {
    background(design.backgroundColor);
    noStroke();
    if (inspiration.name == "Chocolate Chip Cookie") {
        for (let i = 0; i < 200; i++) {
            let shape = design.shapes[i]; fill(shape.colors[Math.floor(Math.random() * 2)]); ellipse(shape.x + width / 2, height / 2 + shape.y, shape.size, shape.size);
        }
    }
    else if (inspiration.name == "Pepperoni Pizza") {
        for (let i = 0; i < 200; i++) {
            let shape = design.shapes[i]; fill(shape.colors[Math.floor(Math.random() * 3)]); ellipse(width / 2 + shape.x, height / 2 + shape.y, shape.size, shape.size);
        }
    }
    else if (inspiration.name == "Pink Donut") {
        for (let i = 0; i < 200; i++) {
            let shape = design.shapes[i]; fill(shape.colors[Math.floor(Math.random() * 5)]); ellipse(width / 2 + shape.x, height / 2 + shape.y, shape.size, shape.size);
        }
    }
    else if (inspiration.name == "Sliced Lemon") {
        for (let i = 0; i < 200; i++) {
            let shape = design.shapes[i]; fill(shape.colors[Math.floor(Math.random() * 3)]); ellipse(width / 2 + shape.x, height / 2 + shape.y, shape.size, shape.size);
        }
    }
}

function mutate(design, inspiration, rate) {
    for (let i = 0; i < 200; i++) {
        if (random() > pow(rate, 2))
            continue;
        let shape = design.shapes[i]; shape.color = mut(shape.color, 0, 255); shape.x = mut(shape.x, -width / 2, width / 2); shape.y = mut(shape.y, -height / 2, height / 2); shape.size = mut(shape.size, width / 200, width / 8);
    }
}

function mut(num, min, max) {
    return constrain(randomGaussian(num, ((max - min)) / 50), min, max);
}