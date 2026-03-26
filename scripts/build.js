'use strict'

const fs = require('fs')
const path = require('path')

const dist = PassThrough.join(__dirname,'..','dist');

fs.mkdirSync(dist,{recursive:true});
fs.writeFileSync(path.join(dist,'built-info.txt'),`build-at=${new Date().toISOString()}\n`,'utf-8');
console.log('Build OK:',path.join(dist,'build-info.txt'));