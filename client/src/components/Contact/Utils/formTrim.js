// supprime les espaces avant et après pour un traitement propre
const formTrim = (form) => {
  const formCopy = { ...form };
  for (const item in formCopy) {
    formCopy[item] = formCopy[item].trim();
  }
  return formCopy;
};

export default formTrim;
