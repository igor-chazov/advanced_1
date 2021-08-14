import orderByProps, { obj } from '../app';

test('должна сортировать объект', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(obj, ['name', 'level']);
  expect(received).toEqual(expected);
});

test('должна преобразовать массив объектов в объект', () => {
  const received = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },
  ];

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(received, ['name', 'level'])).toEqual(expected);
});

test('должна перебирать собственные свойства', () => {
  const test = {
    apple: 1,
    banana: 2,
  };
  const received = {};
  Object.setPrototypeOf(received, test);
  const expected = [];
  expect(orderByProps(received, ['name', 'level'])).toEqual(expected);
});
