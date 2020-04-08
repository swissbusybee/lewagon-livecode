const authorization = "Bearer YOUR_API_KEY_HERE";

const giveUrl = email => `https://person.clearbit.com/v1/people/email/${email}`;
const capitalize = word => `${word[0].toUpperCase()}${word.substring(1)}`;


// select form value
const email = document.querySelector('#clearbitEmail');
const form = document.querySelector('#clearbitForm');

// event listener on the form 'submit'
form.addEventListener('submit', event => {
  event.preventDefault();
  // call the clearbit api 
  const searchValue = email.value
  callClearbitApi(searchValue);
});

const setUserData = (data) => {
  const { 
    email, 
    bio, 
    location, 
    name: { fullName } 
  } = data;

  const tableData = {
    email, bio, location, name: fullName
  };

  Object.keys(tableData).forEach((property) => {
    document.querySelector(
      `#user${capitalize(property)}`
    ).innerText = tableData[property];
  })
}

const callClearbitApi = (email) => {
  fetch(giveUrl(email), { headers: { Authorization: authorization } })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUserData(data);
    });
}

