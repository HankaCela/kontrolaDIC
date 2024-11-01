const isDIC = (inputStr) => {
    if (inputStr.length < 11 || inputStr.length > 12) {
      return false;
    }
    const prefix = inputStr.slice(0, 2);
  
    if (prefix !== "CZ") {
      return false;
    }
  
    const digits = inputStr.slice(2);
    if (!validator.isInt(digits)) {
      return false;
    }
  
    return true;
  };

console.log(isDIC("CZ123456789"));
console.log(isDIC("CZ1234567890"));

console.log(isDIC("123"));
console.log(isDIC("ABC"));
console.log(isDIC("1234567890"));
console.log(isDIC("001234567890"));
console.log(isDIC("1234567890CZ"));
console.log(isDIC("CZ12345678901"));
console.log(isDIC("CZ12345678"));
console.log(isDIC("CZA12345678"));