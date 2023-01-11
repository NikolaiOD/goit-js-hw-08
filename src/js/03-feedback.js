// Инициализация lodash
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(localData, 500));

function localData(event) {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function getLocalData() {
    const localData = localStorage.getItem('feedback-form-state');
    const data = JSON.parse(localData);
    if (data) {
    Object.entries(data).forEach(([key, value]) => {
      feedbackForm.elements[key].value = value;
    });
  }
};

getLocalData();

feedbackForm.addEventListener('submit', submitData);

function submitData(event) {
    event.preventDefault();

    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
};
