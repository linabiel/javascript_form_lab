document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-button');
	deleteButton.addEventListener('click', handleButtonClick);


});

const handleFormSubmit = function (event) {
  event.preventDefault();
  const list = document.querySelector('#reading-list');

  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const listItem = document.createElement('li');

  const h2 = document.createElement('h2');
  h2.textContent = `${title}`;
  listItem.appendChild(h2)

  const h3 = document.createElement('h3');
  h3.textContent = `${author}`;
  listItem.appendChild(h3)

  const p = document.createElement('p');
  p.textContent = `${category}`;
  listItem.appendChild(p)

  list.appendChild(listItem);
  
  document.getElementById('new-item-form').reset();

  const handleButtonClick = function (event) {
    const readinglist = document.querySelector('#reading-list');
    readinglist.innerHTML = '';
    
    
  }
}
