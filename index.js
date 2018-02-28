let a = prompt('Enter first number (a)');
let b = prompt('Enter second number (b)');
let c = prompt('Enter second number (c)');
let x;
let x1;
let x2;
document.write("Squaree quation: ");
document.write(a + "*x*x" + "+" + b + "*x" + "+" + c + "=0");
document.write("<br>");
//a x2 + b x + c = 0

function discriminator(a, b, c) {
    const d = (b * 2) - (4 * a * c);
    return d;
}

function squaree(a, b, c) {
    const discr = discriminator(a, b, c);
    if (discr < 0) {
        document.write("D=0.....Then the equation has no real roots" + "<br>");
    }
    if (discr > 0) {
        x1 = (b * (-1)) + (Math.sqrt(discr) / 2 * a);
        x2 = (b * (-1)) - (Math.sqrt(discr) / 2 * a);
        document.write("First solution: ")
        document.write((a * x1 * x1) + (b * x1) + c);
        document.write("<br>");
        document.write("Second solution: ")
        document.write((a * x2 * x2) + (b * x2) + c);
        document.write("<br>");
    }

    if (discr=0) {
        x = (b * (-1)) / (2 * a);
        document.write((a * x * x) + (b * x) + c);
    }
}


document.write(squaree(a, b, c));
