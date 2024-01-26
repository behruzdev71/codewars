export const isPangram = (phrase) => new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;
  
