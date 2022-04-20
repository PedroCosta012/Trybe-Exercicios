function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let list = document.getElementById('days');
  for (let day of dezDaysList) {
    let filho = document.createElement('li');
    filho.innerText = day;

    if (day === 24 || day === 31) {
      filho.className = 'day holiday';
    } else if (day === 4 || day === 11 || day === 18) {
      filho.className = 'day friday';
    } else if (day === 25) {
      filho.className = 'day holiday friday';
    } else {
      filho.className = 'day';
    }
    list.appendChild(filho);
  }
}

createDays();

function createButtons(texto, id) {
  let button = document.createElement('button');

  button.id = id;
  button.innerText = texto;

  document.getElementsByClassName('buttons-container')[0].appendChild(button);
}

createButtons("Feriados", 'btn-holiday');

let execHoliday = true;

document.getElementById('btn-holiday').addEventListener('click', function () {
  let holidays = document.querySelectorAll('.holiday');
  if (execHoliday) {
    for (let holiday of holidays) {
      holiday.style.backgroundColor = 'white';
    }
    execHoliday = false;
  } else {
    for (let holiday of holidays) {
      holiday.style.backgroundColor = 'rgb(238,238,238)';
    }
    execHoliday = true;
  }
});

createButtons('Sexta-feira', 'btn-friday');

let execFriday = true;

document.getElementById('btn-friday').addEventListener('click', function () {
  let fridays = document.querySelectorAll('.friday');

  if (execFriday) {
    for (let friday of fridays) {
      friday.innerText = 'Sexta-feira';
    }
    execFriday = false;
  } else {
    const sextas = [4, 11, 18, 25]
    for (let friday in fridays) {
      fridays[friday].innerText = sextas[friday];
    }
    execFriday = true;
  }
});

function zoomToDays() {
  let dias = document.querySelectorAll('.day');

  for (let dia of dias) {
    dia.addEventListener('mouseover', function () {
      dia.style.fontSize = '40px';
    });
  }

  for (let dia of dias) {
    dia.addEventListener('mouseout', function () {
      dia.style.fontSize = '20px';
    });
  }
}

zoomToDays();

function addTasks(color) {
  let tasksBox = document.querySelector('.my-tasks');
  document.getElementById('btn-add').addEventListener('click', function () {
    let input = document.getElementById('task-input');
    if (input.value !== '') {
      let newTask = document.createElement('span');
      newTask.style.backgroundColor = color;
      newTask.innerText = input.value + '\n';
      tasksBox.appendChild(newTask);
    }
  })
}

addTasks('lime');

// function ;

