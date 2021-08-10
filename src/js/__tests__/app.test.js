import orderByProps, { obj } from '../app';

test('должна правильно сортировать объект', () => {
  const received = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const expected = orderByProps(obj, ['name', 'level']);
  expect(received).toEqual(expected);
});

test('должна перебирать собственные свойства', () => {
  const test = {
    apple: 1,
    banana: 2,
  };
  const test1 = {};
  Object.setPrototypeOf(test1, test);

  const received = [];
  const expected = orderByProps(test1, ['name', 'level']);
  expect(received).toEqual(expected);
});
