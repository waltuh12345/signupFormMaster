const form = document.querySelector('form');
const  formUl = form.querySelector('ul');
const li = Array.from(formUl.children);

const inputs = {
  fname: main.querySelector('#first-name'),
  lname: main.querySelector('#last-name'),
  email: main.querySelector('#email'),
  password: main.querySelector('#password'),
}
const { fname,lname,email,password } = inputs;


form.addEventListener('submit', e => {
  e.preventDefault();
  checkErr(fname);
  checkErr(lname);
  checkErr(password);
})













/*
const inputs = {
  firstName: li[0].querySelector('input'),
  lastName: li[1].querySelector('input'),
  email: li[2].querySelector('input'),
  password: li[3].querySelector('input')
}

const {firstName,lastName,email,password} = inputs;

firstName.setAttribute('id', 'name');
lastName.setAttribute('id', 'last-name');
email.setAttribute('type', 'email');
email.setAttribute('id','email');
password.setAttribute('type', 'password');
password.setAttribute('id', 'password');

form.addEventListener('submit', e => {
  const err = ['hi'];
  e.preventDefault()

  checkInput(firstName);
  checkInput(lastName)
  
  if (err.length > 0) {
    e.preventDefault();
  }
})
*/

/*
const inputs = {
  name: formUl.querySelector('#first-name'),
  lastName: formUl.querySelector('#last-name'),
  email: form.querySelector('#email'),
}
console.log(inputs.lastName)
*/