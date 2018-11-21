"use strict";

const fs            = require("fs");
const path          = require("path");
const bufferEqual   = require("buffer-equal");
const createCollage = require("./index");

let options = {
  sources: [
    "./img/src1.jpg", // source can be a relative file path
    "./img/src2.jpg", // source can be a relative file path
    "./img/src3.jpg", // source can be a relative file path
    "./img/src4.jpg", // source can be a relative file path
    "./img/src5.jpg", // source can be a relative file path
  ],
  width: 3, // number of images per row
  height: 2, // number of images per column
  imageWidth: 350, // width of each image
  imageHeight: 250, // height of each image
  backgroundColor: "#cccccc", // optional, defaults to #eeeeee.
  spacing: 2, // optional: pixels between each image
  lines: [
    {font: "", color: "", text: "Sometimes we want to find out when a single one time event has"},
    {font: "", color: "", text: "Sometimes we want to find out when a single one time event has"},
    {font: "", color: "", text: "Sometimes we want to find out when a single one time event has"},
    {font: "", color: "", text: "Sometimes we want to find out when a single one time event has"},
    {font: "", color: "", text: "Sometimes we want to find out when a single one time event has"},
  ],
  //text: "Sometimes we want to find out when a single one time event has finished. For example - a stream is done. For this we can use new Promise. Note that this option should be considered only if automatic conversion isn't possible.Note that promises model a single value through time, they only resolve once - so while they're a good fit for a single event, they are not recommended for multiple event APIs."
  // textStyle: {color: "#fff", fontSize: 20, font: "Arial", height: 300}
  // we can use either lines or text
};

createCollage(options)
	.then((canvas) => canvas.toBuffer())
	.then((buffer) => fs.writeFileSync("./img/result_with_text.png", buffer))

const sources = [
  "./img/src1.jpg",
  "img/src2.jpg",
  path.join(__dirname, "img/src3.jpg"),
  fs.readFileSync("img/src4.jpg"),  
  "http://github.com/classdojo/photo-collage/blob/master/img/src5.jpg?raw=true",
  "https://github.com/classdojo/photo-collage/blob/master/img/src6.jpg?raw=true",
];

options = {
	sources: sources,
	width: 3,
	height: 2,
	imageWidth: 350,
	imageHeight: 250,
};

createCollage(options)
	.then((canvas) => canvas.toBuffer())
	.then((buffer) => fs.writeFileSync("./img/result_no_spacing.png", buffer))

options = {
	sources: sources,
	width: 3,
	height: 2,
	imageWidth: 350,
	imageHeight: 250,
	backgroundColor: "#f00",
	spacing: 2,
};

createCollage(options)
	.then((canvas) => canvas.toBuffer())
	.then((buffer) => fs.writeFileSync("./img/result_with_spacing.png", buffer))