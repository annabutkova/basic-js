const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  let isDate = new Date(date);
  /* if(isDate !== 'date') {
    throw e;
  }; */
  
  
  
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }
  
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
  
};
