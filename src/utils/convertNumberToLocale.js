export const convertNumberToLocale = (num) => {
  return parseInt(num).toLocaleString("en-US", {
    useGrouping: true,
    maximumFractionDigits: 0,
    groupingSeparator: ",",
  });
};
