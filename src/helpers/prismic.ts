export const extractMeta = ({ data }: any): Record<string, unknown> => {
  const result: Record<string, unknown> = {};
  Object.keys(data).forEach((prop: any) => {
    if (prop.includes('meta')) {
      result[prop] = data[prop];
    }
  });

  return result;
};
export const extractContent = ({ data }: any): Record<string, unknown> => {
  const result: Record<string, unknown> = {};
  Object.keys(data).forEach((prop) => {
    if (!prop.includes('meta')) {
      result[prop] = data[prop];
    }
  });

  return result;
};
export const extractConfig = (data: any): any => {
  const result = { ...data };
  delete result.data;
  return result;
};

export const extractTheme = (settings: any): any => settings;
