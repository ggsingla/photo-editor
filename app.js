var options = [
    {
        name:"Brightness",
        property:"brightness",
        vaule: 100,
        range:{
            min:0,
            max:200
        },
       unit:'%'
    },
    {
        name:"Contrast",
        property:"contrast",
        vaule: 100,
        range:{
            min:0,
            max:200
        },
       unit:'%'
    },
    {
        name:"Saturation",
        property:"saturation",
        vaule: 100,
        range:{
            min:0,
            max:200
        },
       unit:'%'
    },
    {
        name:"Grayscale",
        property:"grayscale",
        vaule: 0,
        range:{
            min:0,
            max:100
        },
       unit:'%'
    },
    {
        name:"Sepia",
        property:"sepia",
        vaule: 0,
        range:{
            min:0,
            max:100
        },
       unit:'%'
    },
    {
        name:"Hue Rotate",
        property:"hue-rotate",
        vaule: 0,
        range:{
            min:0,
            max:360
        },
       unit:'deg'
    },
    {
        name:"Blur",
        property:"blur",
        vaule: 0,
        range:{
            min:0,
            max:30
        },
       unit:'px'
    }
]
var image = document.querySelector(".image-view")