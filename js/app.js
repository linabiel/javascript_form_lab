document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-button');
	button.addEventListener('click', handleButtonClick);


});

const handleFormSubmit = function (event) {
  const list = document.querySelector('ul');
  event.preventDefault();

  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const listTitle = document.createElement('li');
  const h2 = document.createElement('h2');
  listTitle.textContent = `${title}`;
  list.appendChild(h2)
  h2.appendChild(listTitle)


  const listAuthor = document.createElement('li');
  const h3 = document.createElement('h3');
  listAuthor.textContent = `${author}`;
  list.appendChild(h3)
  h3.appendChild(listAuthor)

  const listCategory = document.createElement('li');
  listCategory.textContent = `${category}`;
  list.appendChild(listCategory)
  document.getElementById('new-item-form').reset();

  const handleButtonClick = function () {
    const deleteButton = document.querySelector('delete-button')

    
  }
}
