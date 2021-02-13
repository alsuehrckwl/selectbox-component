const Select1 = [
  {
    id: 1,
    name: '더기프팅컴퍼니',
    value: 'a',
  },
  {
    id: 2,
    name: '월간가슴',
    value: 'b',
  },
  {
    id: 3,
    name: '인더웨어',
    value: 'c',
  },
  {
    id: 4,
    name: '프론트엔드 엔지니어',
    value: 'd',
  },
  {
    id: 5,
    name: 'Disabled',
    value: 'e',
    disabled: true,
  },
];

const Select2 = generateSelect();

function generateSelect() {
  const size = 100;
  let arr = [];

  for (let i = 0; i < size; i++) {
    arr.push({ id: i, name: i + '', value: i });
  }

  return arr;
}

const Select3 = [
  {
    id: 1,
    name: 'a',
    value: 'a',
  },
  {
    id: 2,
    name: 'b',
    value: 'b',
    disabled: true,
  },
  {
    id: 3,
    name: 'c',
    value: 'c',
    disabled: true,
  },
  {
    id: 4,
    name: 'd',
    value: 'd',
  },
  {
    id: 5,
    name: 'e',
    value: 'e',
    disabled: true,
  },
];

export { Select1, Select2, Select3 };
