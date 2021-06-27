export const limitDescription = (descriptionText, maxSymbols) =>
  descriptionText.length > maxSymbols
    ? `${descriptionText.substring(0, maxSymbols - 1)}...`
    : `${descriptionText}`;
