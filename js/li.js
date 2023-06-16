const formLabels = [
  {
    pHolder: 'First Name',
    id: 'first-name',
    type: 'text'
  },
  {
    pHolder: 'Last Name',
    id: 'last-name',
    type: 'text'
  },
  {
    pHolder: 'Email Address',
    id: 'email',
    type: 'email'
  },
  {
    pHolder: 'Password',
    id: 'password',
    type: 'password'
  }
]

let labelsCode = ``;
formLabels.forEach(label => {
  const {pHolder,id,type} = label
  labelsCode += `
  <li>
    <div>
      <input type="${type}" id="${id}" placeholder="${pHolder}">
      <i></i>
    </div>
    <div class="error-message">....</div>
  </li>
  `
})

const main = document.querySelector('main');
const ul = main.querySelector('ul');

ul.innerHTML = labelsCode;
