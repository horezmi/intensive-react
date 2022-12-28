enum ELSKeys {
  TOKEN = "TOKEN",
}

const setToken = (token: ELSKeys.TOKEN | string) => {
  localStorage.setItem(ELSKeys.TOKEN, token);
};

const getToken = () => {
  return localStorage.getItem(ELSKeys.TOKEN);
};

const createLocalStorage = () => {
  return {
    setToken,
    getToken,
  };
};

export const lsApi = createLocalStorage();
