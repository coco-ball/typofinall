class Grid {
  constructor(color, type) {
    this.color = color;
    this.type = type;
    this.div = null;
    this.grid = null;
  }
  createDOMElement() {
    this.div = document.createElement("div");
    this.div.className = `box ${this.color} ${this.type}`;
    const gridWrapper = document.getElementById("grid");
    gridWrapper.appendChild(this.div);
  }

  createGrid() {
    this.grid = document.querySelector(".grid");

    if (this.grid) {
      for (var i = this.grid.children.length; i >= 0; i--) {
        this.grid.appendChild(this.grid.children[(Math.random() * i) | 0]);
      }
    }
  }
}
