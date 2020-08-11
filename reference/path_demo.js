const path = require('path');

// Basename - base file name
console.log(path.basename(__filename));

// Dirname - directory name
console.log(path.dirname(__filename));

// Extname - file extension
console.log(path.extname(__filename));

// Parse - create path object
console.log(path.parse(__filename));

// Join - concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
