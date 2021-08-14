export const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(object, [...arg]) {
  const res = {};

  if (Array.isArray(object)) {
    for (let i = 0; i < object.length; i += 1) {
      res[object[i].key] = object[i].value;
    }
  }

  const result = Object.keys(res).length !== 0 ? res : object;

  const sorted = Object.fromEntries(Object.entries(result).sort());
  const rest = {};

  for (const prop in result) {
    if (Object.prototype.hasOwnProperty.call(result, prop)) {
      for (let i = 0; i < arg.length; i += 1) {
        if (prop === arg[i]) {
          rest[prop] = result[prop];
          delete sorted[prop];
        }
      }
    }
  }

  const merged = { ...rest, ...sorted };
  return Object.entries(merged).map((key) => ({ key: key[0], value: key[1] }));
}

orderByProps(obj, ['name', 'level']);
