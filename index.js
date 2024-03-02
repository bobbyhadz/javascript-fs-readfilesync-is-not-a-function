// TypeError: fs.readFilesync is not a function

// Using the `readFileSync` method in Node.js

import * as fs from 'fs';

const result = fs.readFileSync('example.txt', {
  encoding: 'utf-8',
});
console.log(result);
