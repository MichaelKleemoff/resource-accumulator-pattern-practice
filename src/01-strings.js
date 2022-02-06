/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  let unitedStr = '';

  for (let i = 0; i < words.length; i++) {
    unitedStr = words.join('');
  }

  return unitedStr;
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of double strings.
 */
function repeatAllWords(words) {
  let doubleStr = [];
  
  for (let i = 0; i < words.length; i++) {
    doubleStr.push(words[i] + words[i]); 
  }

  return doubleStr;
}


/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  // let fourCharArr = [];

  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].length <= 4) {
  //     fourCharArr.push(words[i]);
  //   }
  // }
  let fourCharArr = words.filter(word => word.length <= 4);
  
  return fourCharArr;
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
