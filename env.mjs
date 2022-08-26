const env = new Proxy(process.env, {
  get(obj, key) {
    const value = obj[key.toString()];

    if (!value) {
      throw new Error(`Enviroment variable ${key.toString()} is not defined`);
    }

    return value;
  },
});

export const { BRAND } = env;
