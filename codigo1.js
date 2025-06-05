const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text) {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';
  }
});