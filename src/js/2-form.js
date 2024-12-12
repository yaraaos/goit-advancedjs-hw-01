let formData = {
    email: "",
    message: "",
};

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.elements.email;
const messageEl = formEl.elements.message;

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  emailEl.value = formData.email || '';
  messageEl.value = formData.message || '';
}

formEl.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedabck-form-state', JSON.stringify(formData));
});

formEl.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message){
        alert ('Fill please all fields');
        return;
    }

    console.log(formData);
    
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    formEl.reset();
});