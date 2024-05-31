
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const company = document.getElementById('company');
const mobile = document.getElementById('mobile');
const software = document.getElementById('software');
const api = document.getElementById('api');
const sql = document.getElementById('sql');
const app = document.getElementById('app');
const digital = document.getElementById('digital');
const web = document.getElementById('web');
const ui = document.getElementById('ui');
const custom = document.getElementById('custom');




// function validateForm() {
//     const form = document.forms[myForm];
//     console.log(form)
//     return false;
// }


// console.log(form);
form.onsubmit = function (event) {
    event.preventDefault();
    console.log("form submit");
    console.log(form['name'].value);
    console.log(form['email'].value);
    console.log(form['phone'].value);
    console.log(form['company'].value);
    console.log(form['mobile'].value);
    // console.log(form[''].value);
    // console.log(form['name'].value);
}
