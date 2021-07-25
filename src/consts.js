export const Url = {
  MAIN: `/`,
  LOG_IN: `/login`,
  LOG_OUT: `/logout`,
  NOT_FOUND: `/404`
};

export const ListTypes = {
  IN_PROCESS: `В процессе`,
  IS_READY: `Готово`,
};

export const AuthorizationStatus = {
  AUTH: `Auth`,
  NO_AUTH: `NoAuth`
};

export const ToastTypes = {
  ERROR: `ERROR`,
  DEFAULT: `DEFAULT`,
  SUCCES: `SUCCES`
};

export const MAX_SYMBOLS = 110;

export const RegularExp = {
  PHONE: /^[+0-9]{1}[(0-9]{2}[0-9]{2}[)0-9]{2}[0-9]{4,7}$/,
  EMAIL: /^([\w-\.*]+@([\w-]+\.)+[\w-]{2,4})?$/,
};

export const MIN_PASSWORD_LENGTH = 3;
export const MIN_EMAIL_LENGTH = 3;

export const ValidationMessages = {
  PASSWORD_LENGTH: `Минимальная длина пароля - ${MIN_PASSWORD_LENGTH} символов`,
  EMAIL_LENGTH: `Минимальная длина e-mail - ${MIN_EMAIL_LENGTH} символа`,
  WRONG_EMAIL: `Не правильный формат e-mail`,
  MISMATCH_PASSWORDS: `Пароли не совпадают`,
};
