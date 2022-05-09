window.onload = () => {
  const button = document.getElementById('btn');

  const num = document.getElementById('contador');
  localStorage.setItem('count', 0);
  num.innerText = '0';

  button.addEventListener('click', () => {
    const num = document.getElementById('contador');
    console.log(num);
    let count = parseInt(localStorage.getItem('count'), 10);
    count += 1;
    num.innerText = `${count}`;
    localStorage.setItem('count', count);
  });
}
