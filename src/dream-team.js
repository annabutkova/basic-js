const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) return false; 
  
    let teamName = '';
    members.sort();
    members.forEach(element => {
    if(typeof(element) === 'string'){
      teamName += element.trim().slice(0,1).toUpperCase();
      teamName = teamName.split('').sort().join('');
    } 
    
  });

  return teamName;
};
