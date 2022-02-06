/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */

function getAllNames(people) {
  let peopleNames = [];

  for (let i = 0; i < people.length; i++) {
    peopleNames.push(people[i].name);
  }

  return peopleNames;
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
  
function findPersonByName(people, name) {
  let result = null;
  
  for (let i = 0; i < people.length; i++) {
    if (people[i].name.toLowerCase() === name || people[i].name.toUpperCase() === name || people[i].name === name) {
      result = people[i];
    }
  
  }
  return result;
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let youngAgeArr = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age < 25) {
      youngAgeArr.push(people[i]);
    }
  }

  return youngAgeArr;
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */

function getPeopleWithGmail(people) {
  let gmailPeople = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].email.includes('@gmail.com')) {
      gmailPeople.push(people[i]);
    }
  }

  return gmailPeople;
} 

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
