document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);

const list = document.querySelector('ul');

const newListItem = document.createElement('li');
// newListItem.textContent = 

});

const handleFormSubmit = function (event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  console.log(`${title}  ${author}`)
}




