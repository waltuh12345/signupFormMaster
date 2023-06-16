function warning(input,message) {
  const li = input.closest('li');
  const err = li.querySelector('.error-message');
  if (message.length > 3) {
    err.innerHTML = message;
    li.classList.add('warning');
  } else {
    err.innerHTML = message;
    li.classList.remove('warning');
  }
}
function checkErr(input) {
  const invalidChar = /[\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  const isValid = invalidChar.test(input.value.trim());
  const forNames = input.value.length < 4 || input.value.length > 15 ? true : false;
  const isEmpty = input.value === '' ?  true : false;

  
  if (input === fname) {

    if (isEmpty) {
      warning(input,'cannot be empty')

    } else if (isValid) {
      warning(input,'invalid')

    } else if (forNames) {
      warning(input,'Length requirements not met')

    } else {
      warning(input,'...')

    } 

  } else if (input === lname) {

    if (lname.value === '') {
      warning(lname,'error')
    } else if (isValid) {
      warning(lname,'invalid last name')
    } else if (forNames) {
      warning(input,'length requirements not met')
    }  else {
      warning(lname,'...')
    } 

  } else if (input === password) {

    const pass = input.value;
    if (isEmpty) {
      warning(input,'password required')
    } else if (pass.length < 8) {
      warning(input,'password must be at least 8 characters')
    } else if (!/[a-z]/.test(pass)) {
      warning(input,'must at least one lowercase letter')
    } else if (!/[A-Z]/.test(pass)) {
      warning(input,'should contain at least one uppercase')
    } else if (!/\d/.test(pass)) {
      //warning(input,'should contain at least one digit')
    } else {
      warning(input,'...')
    }
  
  }

  
}