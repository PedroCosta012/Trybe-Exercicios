const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (object, key, value) => object[key] = value;

addTurn(lesson2, 'turno', 'noite');

const listKeys = (object) => Object.keys(object);

const objectSize = (object) => Object.entries(object).length;

const objectValues = (object) => Object.values(object);

const allLessons = {"lesson1": lesson1, "lesson2": lesson2, "lesson3": lesson3};

const totalStudents = () => {
  const lessons = Object.keys(allLessons);
  let total = 0;
  for (let lesson of lessons) {
    total += lesson['numeroEstudantes'];
  }
  return total;
}

const getValueByNumber = (object, position) => Object.entries(object)[position][1];

const verifyPair = (object, key, value) => object[key] === value;
