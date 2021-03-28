const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  console.log(typeof(members));
  if(typeof(members) == null) {
    return false;
    
  }
  
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
