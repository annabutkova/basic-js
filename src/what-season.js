const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {

  
  
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }
  
  if ( Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date)) {
    throw new Error('date argument is invalid');}
  
  
  let month = date.getMonth() + 1;
  
  if(month < 3 || month == 12) {
    return 'winter'
  } else if (month < 6) {
    return 'spring';
  } else if (month < 9) {
    return 'summer';
  } else if (month < 12){
    return 'fall';
  } else {
    return 'Unable to determine the time of year!';
  }
}

module.exports = {
  getSeason
};
