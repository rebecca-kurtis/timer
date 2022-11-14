//use for beep process.stdout.write('\x07');

//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments


// Example usage:

// node timer1.js 10 3 5 15 9
// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

const args = process.argv;
let numOfAlarms = args.slice(2).filter(num => num > 0);

const alarmClock = function() {
  let alarmLength = 0;
  for (let x = 0; x < numOfAlarms.length; x++) {
    let newNum = Number(numOfAlarms[x]);
    
    if (numOfAlarms.length === 0 || typeof newNum !== 'number') {
      return;
    }
    alarmLength = newNum * 1000;

    setTimeout(() => {
      process.stdout.write('\x07');
    }, alarmLength);
  }
};

alarmClock();

