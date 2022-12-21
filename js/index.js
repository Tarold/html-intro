form = document.querySelector('form');

form.onsubmit = (e) => {
  e.preventDefault();
  console.log(getData(e.target));
};

function getData(form) {
  let formData = Object.fromEntries(new FormData(form));
  return {
    name: `${formData['first-name']}${formData['last-name'] === '' ? '' : ' '}${
      formData['last-name']
    }`,
    email: formData['email'],
    telephone: `${formData['tel-number1']}-${formData['tel-number2']}-${formData['tel-number3']}`,
    subject: formData['subject'],
    message: formData['comment'].replace(/ {2,}/g, ' ').replace(/^ *| *$/g, ''),
  };
}
