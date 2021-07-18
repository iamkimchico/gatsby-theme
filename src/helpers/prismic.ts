export const extractMeta = ({ data }:any) => {
  const result:Record<string,unknown> = {};
  Object.keys(data).forEach((prop:any) => {
    if (prop.includes('meta')) {
      result[prop] = data[prop];
    }
  });

  return result;
};
export const extractContent = ({ data }:any) => {
  const result:Record<string,unknown> = {};
  Object.keys(data).forEach((prop) => {
    if (!prop.includes('meta')) {
      result[prop] = data[prop];
    }
  });

  return result;
};
export const extractConfig = (data:any) => {
  let result = {};

  delete data.data;

  result = {
    ...data,
  };

  return result;
};

export const extractTheme = (settings:any) => {
  console.log(settings);
  return settings;
}
