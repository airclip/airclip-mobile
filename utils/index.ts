const EMAIL_RE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validateEmail = (text: string) => {
  return EMAIL_RE.test(text);
};
