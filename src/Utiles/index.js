export const randomId = () => {
    const hex = (value) => Math.floor(value).toString(16);
    return hex(Date.now() / 1000) + ' '.repeat(16).replace(/./g, () => hex(Math.random() * 16));
};

export const isBoolean = (value) => typeof value === 'boolean';
// export const isNumber = (value) => typeof value === 'number';
export const isString = (value) => typeof value === 'string';
