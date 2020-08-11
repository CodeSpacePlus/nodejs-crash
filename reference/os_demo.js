const os = require('os');

function convertValues(amount, type = 'bytes', decimals = 2) {
  if (amount === 0) return '0 Bytes';

  let k = 0;
  let sizes = [];

  switch (type) {
    case 'bytes':
      k = 1024;
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      break;
    case 'time':
      k = 60;
      sizes = [
        'Seconds',
        'Minutes',
        'Hours',
        'Days',
        'Weeks',
        'Months',
        'Years',
      ];
      break;
  }

  const dm = decimals < 0 ? 0 : decimals;

  const i = Math.floor(Math.log(amount) / Math.log(k));
  return parseFloat((amount / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Platform
console.log('Platform:', os.platform());

// CPU Arch
console.log('Architecture:', os.arch());

// CPU Core Info
console.log('CPU Core Info:', os.cpus());

// Free memory
console.log('Free memory:', convertValues(os.freemem()));

// Total memory
console.log('Total memory:', convertValues(os.totalmem()));

// Home dir
console.log('Home directory:', os.homedir());

// Uptime
console.log('Uptime:', convertValues(os.uptime(), 'time'));
