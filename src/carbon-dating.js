const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  const sampleNum = Number.parseFloat(sampleActivity);
  if (typeof (sampleActivity) === 'string' && sampleNum > 0 && sampleNum <= MODERN_ACTIVITY) {
    
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleNum) * (HALF_LIFE_PERIOD / 0.693));
  }
  return false;
  
  
  
};
