/**
 * localStorage is available only on browser and not in server side.
 * Wrap the localStorge in a if statement
 */

export const setItem = async (key: string, value: any) => {
  if (typeof window !== "undefined") {
    await localStorage.setItem(key, JSON.stringify({ value }));
  }
};

export const getItem = async (key: string, def?: any) => {
  if (typeof window !== "undefined") {
    const data = await localStorage.getItem(key);

    if (data) {
      try {
        return JSON.parse(data).value;
      } catch (e) {
        return def;
      }
    }

    if (typeof def != "undefined") {
      return def;
    }
  }

  return undefined;
};

export const removeItem = async (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

const useStorage = () => {
  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useStorage;
