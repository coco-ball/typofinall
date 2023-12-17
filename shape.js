class Shape {
  constructor(array) {
    this.s = 40;
    this.ps = 4;
    this.text = array[0];
    this.fill = array[1];
    this.stroke = array[2];
    this.strokeW = array[3];
    this.shape = array[4];
    this.size = array[5] === "BIG" ? random(-20, 20) : random(-10, 10);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    console.log(array);
  }
  drawShape() {
    console.log(this.stroke);
    let cnv = createGraphics(width, height);
    cnv.background(255);
    cnv.fill(0);
    cnv.textSize(this.s);
    cnv.text(this.text, this.s / 6, this.s);
    cnv.loadPixels();
    // cnv.show();
    push();
    translate(this.s * 2.5, this.s * 2.5);

    for (let i = 0; i < cnv.width; i += this.ps) {
      for (let j = 0; j < cnv.height; j += this.ps) {
        let index = (i + j * cnv.width * 2) * 4;
        let r = cnv.pixels[index];
        let g = cnv.pixels[index + 1];
        let b = cnv.pixels[index + 2];
        // let a = cnv.pixels[index + 3];ß
        let c = color(r, g, b);
        if (brightness(c) < 100) {
          //handle fill
          switch (this.fill) {
            case "COLOR":
              fill(this.color);
              break;
            case "WHITE":
              fill(255);
              break;
          }

          //handle strokeWeight
          strokeWeight(this.strokeW);

          //handle stroke
          switch (this.stroke) {
            case "COLOR":
              stroke(this.color);
              break;
            case "WHITE":
              stroke(255);
              break;
            case "NONE":
              noStroke();
              break;
          }
          beginShape();
          switch (this.shape) {
            case "RECT":
              rect(i, j, this.ps * this.size, this.ps * this.size);
              break;
            case "ELLIPSE":
              ellipseMode(CORNER);
              ellipse(i, j, this.ps * this.size, this.ps * this.size);
              break;
            case "TRIANGLE":
              triangle(
                i + (this.ps * this.size) / 2,
                j,
                i,
                j + this.ps * this.size,
                i + this.ps * this.size,
                j + this.ps * this.size
              );
              break;
            case "X":
              let x = new X();
              x.drawX(i, j, this.ps, this.size);
              break;
          }
          endShape();
        }
      }
    }

    pop();
  }
}

class X {
  drawX(i, j, ps, size) {
    // rect(i, j, ps * size, ps * size);
    line(i, j, i + ps * size, j + ps * size);
    line(i, j + ps * size, i + ps * size, j);
  }
}
