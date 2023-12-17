import jsonData from "./nameratio.json" assert { type: "json" };

let textShapeArr = [];
// let font;
let firstArr = [];
let lastArr = [];
let set = [];
let set1 = [];
let set2 = [];
let set3 = [];
let gridArr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let colorArr = ["red", "white"];
  let typeArr = ["square", "tall", "wide"];

  for (let i = 0; i < 18; i++) {
    let c = int(0, 2);
    let t = int(0, 3);
    gridArr[i] = new Grid([colorArr[c], typeArr[t]]);
  }

  //create name Array
  for (let i = 0; i < 100; i++) {
    firstArr.push([jsonData[i].firstname, jsonData[i].firstweight]);
    if (jsonData[i].lastname !== undefined) {
      lastArr.push([jsonData[i].lastname, jsonData[i].lastweight]);
    }
  }
  console.log(0);

  for (let i = 0; i < 200; i++) {
    const nameTag = new NameTag(firstArr, lastArr);

    const body = document.getElementById("body");
    nameTag.createName();
    nameTag.createSex();
    nameTag.createPhone();
    nameTag.drawGraphic();
    body.appendChild(nameTag.createDOMElement());
  }
}

function draw() {}

window.setup = setup;
window.draw = draw;

// var sketch = new p5(function (p5) {
//   p5.setup = function () {

//   };
//   p5.draw = function () {};
// });

// function preload() {
//   font = loadFont("./WantedSans-Regular.otf");
// }
