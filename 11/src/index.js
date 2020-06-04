import { render } from './html-render';
import formInput from './form-input';
import './todos.css';

const $result = document.querySelector('#result');

const todos = [];

$result.addEventListener('click', (event) => {
  const className = event.target.className;
  if (className === 'delete') {
    const index = event.target.parentElement.dataset.index;
    todos.splice(index, 1);
    render(todos);
  } else if (className === 'toggle-checked') {
    const index = event.target.parentElement.dataset.index;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
  }
});
formInput.init(todos);
render(todos);
