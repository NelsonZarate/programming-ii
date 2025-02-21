import {Transform } from "./stream.js" ; 
const file = "lunaData.csv";
const transform = new Transform(file);
transform.start();