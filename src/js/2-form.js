let formData = { email: '', message: '' };
let form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

if (localStorage.getItem(localStorageKey)) {
  formData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
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

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Please fill in all fields');
    return;
    }

    console.log('Submitted data:', formData);


    localStorage.removeItem(localStorageKey);
    formData = { email: '', message: '' };

    form.reset();
};