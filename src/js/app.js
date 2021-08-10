export const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(object, [...arg]) {
  const sorted = Object.fromEntries(Object.entries(object).sort());
  const rest = {};

  for (const prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      for (let i = 0; i < arg.length; i += 1) {
        if (prop === arg[i]) {
          rest[prop] = object[prop];
          delete sorted[prop];
        }
      }
    }
  }

  const result = { ...rest, ...sorted };
  return Object.entries(result).map(([key, value]) => ({ key, value }));
}

orderByProps(obj, ['name', 'level']);
