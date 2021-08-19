var options = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 30,
    },
    unit: "px",
  },
];

var image = document.querySelector(".image-view");
var sidebar = document.querySelector(".sidebar");
var option = document.querySelectorAll('.option')
var sliderV = document.getElementById("inValue"); //input value

function brightness(){
  image.style.filter = `${options[0].property}(${sliderV.value}${options[0].unit})`
}

for( i = 0; i<option.length;i++){
  option[i].addEventListener('click', function selector() {
    for(let j = 0; j<option.length;j++){
      option[j].classList.remove('selected')
    }
    this.classList.add('selected')
    var sel = this.getAttribute('id')
    console.log(sel)
    sliderV.setAttribute('min', options[sel].range.min)
    sliderV.setAttribute('max', options[sel].range.max)
    sliderV.setAttribute('value', options[sel].value)
    sliderV.oninput = (()=>{
      image.style.filter = `${options[sel].property}(${sliderV.value}${options[sel].unit})`
    })
  })
}