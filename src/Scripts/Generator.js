import { alphabet } from "./Constants";

export const generateArrayN = (n) => {
  return [...Array(n).keys()];
};

export const generateCharacterKey = (n) => {
  const denomination = alphabet.length;
  const factor = n === 0 ? 1 : Math.ceil(n / denomination);
  let key = "";
  while (key.length < factor) {
    key += alphabet.charAt(n).toUpperCase();
  }
  return key;
};

export const calculateOperationAndReturnValue = ({
  firstCell,
  secondCell,
  operator,
}) => {
  const first = isNaN(Number(firstCell))
    ? getInputValueById(firstCell)
    : firstCell;
  const second = isNaN(Number(secondCell))
    ? getInputValueById(secondCell)
    : secondCell;
  if (operator === 1) {
    return `${Number(first) - Number(second)}`;
  }
  return `${Number(first) + Number(second)}`;
};

const getInputValueById = (id) => {
  const input = document?.body?.querySelector(`#${id}`);
  return input ? input.value : 0;
};
