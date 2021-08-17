var options = [
  {
    name: "Brightness",
    property: "brightness",
    vaule: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    vaule: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturation",
    vaule: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    vaule: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    vaule: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    vaule: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    vaule: 0,
    range: {
      min: 0,
      max: 30,
    },
    unit: "px",
  },
];
var image = document.querySelector(".image-view");
var sidebar = document.querySelector(".sidebar");
var rng = document.getElementById("inValue"); //input value

function menuItem(name,x) {
  var option = document.createElement("div");
  option.classList.add("option");
  option.setAttribute("id", x)
  var prop = document.createElement("h3");
  prop.innerHTML = name;
  option.appendChild(prop);
  sidebar.appendChild(option);
}

for (let x in options){
    menuItem(options[x].name , x)
}