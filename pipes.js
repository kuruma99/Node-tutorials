// Pipes and Pipelining

const fs = require('fs');
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('./uncompressed.txt');

//Reading and writing via pipe
//readStream.pipe(writeStream);

//Create a transform stream
const zlib = require('zlib');
// const gzip = zlib.createGzip();
// readStream.pipe(gzip).pipe(writeStream);

// Unzipping
// const gunzip = zlib.Gunzip();
// readStream.pipe(gunzip).pipe(writeStream);