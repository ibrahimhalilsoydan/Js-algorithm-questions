export const userValidation = (str) => {
  if (
    str.length >= 4 &&
    str.length <= 25 &&
    /[a-zA-Z]/.test(str.slice(0, 1)) &&
    /^\w+$/.test(str) &&
    /[a-zA-Z0-9]/.test(str.slice(-1))
  ) {
    return true;
  } else {
    return false;
  }
};

/* Rules

1. The username is between 4 and 25 characters.
2.It must start with a letter.
3.ıt can only contain letters, numbers, and the underscore character.
4.ıt cannot end with an underscore character.

ıf the username is valid then your program should return the string true

test input : u_hello_world123
*/
