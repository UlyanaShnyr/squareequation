let a = +prompt('Enter first number (a)');
let b = +prompt('Enter second number (b)');
let c = +prompt('Enter second number (c)');
let x;
let x1;
let x2;
document.write("Squaree quation: ");
document.write(a + "*x*x" + "+" + b + "*x" + "+" + c + "=0");
document.write("<br>");

function discriminator(a, b, c) {
    const d = (b ** 2) - (4 * a * c);
    return d;
}

function squaree(a, b, c) {
    const discr = discriminator(a, b, c);
    if (discr < 0) {
        return "D=0.....Then the equation has no real roots" + "<br>";
    }
    if (discr > 0) {
        x1 = ((b * (-1)) + Math.sqrt(discr)) / (2 * a);
        x2 = ((b * (-1)) - Math.sqrt(discr)) / (2 * a);
        return "D="+discr+"<br>"+"x1= " + x1 + "<br>" +"x2= " + x2;
    }

    if (discr == 0) {
        x = (b * (-1)) / (2 * a);
        return "D="+discr+"<br>"+"x= " + x;
    }
}

document.write(squaree(a, b, c));
