import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");

let dataForm = {};

form.addEventListener("input", throttle (event => {
    event.preventDefault();
    dataForm[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(dataForm));
}, 500))

window.addEventListener("load", () => {
    const savedForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedForm) {
        dataForm = savedForm;
        populateDataForm(dataForm);
    }
}),
    
    form.addEventListener("submit", evt => {
        evt.preventDefault();
        console.log(dataForm)
        localStorage.removeItem("feedback-form-state");
        dataForm = {};
        form.reset ();
    });

function populateDataForm(data) {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            form.elements[key].value = data[key];
            }
        }
    }
