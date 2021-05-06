document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);



});

const list = document.querySelector('ul');
const handleFormSubmit = function (event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const listTitle = document.createElement('li');
  listTitle.textContent = `${title}`;
  list.appendChild(listTitle)

  const listAuthor = document.createElement('li');
  listAuthor.textContent = `${author}`;
  list.appendChild(listAuthor)

  const listCategory = document.createElement('li');
  listCategory.textContent = `${category}`;
  list.appendChild(listCategory)

}