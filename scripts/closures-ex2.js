


//An object containing methods for manipulating the inner variables of the outer function can be returned.

var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || 
        newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
console.log(' ---- line 32 ---- ' + (pet.getName() ));                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
console.log(' ---- line 36---- '+ (pet.getSex()));                   // male
console.log(' ---- line 37 ---- '+ (pet.getName()));                  // Oliver