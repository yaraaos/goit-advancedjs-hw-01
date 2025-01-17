let formData = { email: '', message: '' };
let form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

if (localStorage.getItem(localStorageKey)) {
  formData = JSON.parse(localStorage.getItem(localStorageKey));
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', readData);
function readData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
  evt.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  };
};