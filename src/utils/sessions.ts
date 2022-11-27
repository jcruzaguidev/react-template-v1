export const setLocalStorage = (key: string, value: string) => {
   try {
      window.localStorage.setItem(key, JSON.stringify(value));
   } catch (e) {
      return "";
   }
};

export const getLocaleStorage = (key: string, initialValue: any) => {
   try {
      const persistedData = window.localStorage.getItem(key);
      return persistedData ? JSON.parse(persistedData) : initialValue;
   } catch (e) {
      return initialValue;
   }
};

export const removeLocaleStorage = (key: string) => {
   try {
      window.localStorage.removeItem(key);
   } catch (e) {
      return null;
   }
};
