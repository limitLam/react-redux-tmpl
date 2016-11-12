/**
 * 静态 server
 * 
 * by koen
 * 2016/10/10
 */
const express = require('express');
const path = require('path');

const app = express();

const PORT = 8001;
const STATIC_PATH = path.resolve(__dirname, '../dist'); // 静态目录

//static file
app.use(express.static(STATIC_PATH));

//server
app.listen(PORT);

console.log(`Build Server runing at port: ${PORT}.`);

