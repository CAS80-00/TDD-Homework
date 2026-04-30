/**
 * @param {number} num1 - First number to add.
 * @param {number} num2 - Second number to add.
 * @returns {number} The sum, unless the two values are the same,
 * then returns double their sum.
 *
 * @example
 * sumDouble(1, 2); // 3
 * @example
 * sumDouble(2, 2); // 8
 * @example
 * sumDouble(5, 5); // 20
 */
export function sumDouble(num1, num2) {
  const sum = num1 + num2;

  if (num1 === num2) {
    return sum * 2;
  } else {
    return sum;
  }
}

/**
 * @param {number} num1 - First number.
 * @param {number} num2 - Second number.
 * @returns {boolean} Whether at least one of the numbers is 10 or their sum is 10
 *
 * @example
 * makes10(10, 5); // true
 * @example
 * makes10(7, 3); // true
 * @example
 * makes10(4, 4); // false
 */
export function makes10(num1, num2) {
  //num1 must be 10, num2 mist be 10 or the sum is 10
  return num1 === 10 || num2 === 10 || num1 + num2 === 10;
}

/**
 * Hint: Math.abs(num) returns the absolute value of num.
 *
 * @param {number} n - The number to check.
 * @param {number} distance - The allowed distance from 100.
 * @returns {boolean} True if n is within the distance of 100, otherwise false.
 *
 * @example
 * near100(95, 5); // true
 * @example
 * near100(90, 5); // false
 * @example
 * near100(105, 10); // true
 */
export function near100(n, distance) {
  return Math.abs(100 - n) <= distance;
}

/**
 * Hint: use the remainder operator (%)
 *
 * @param {number} n - The number to check.
 * @returns {boolean} Whether n is a multiple of 3 or 5.
 *
 * @example
 * isMultiple35(3); // true
 * @example
 * isMultiple35(10); // true
 * @example
 * isMultiple35(7); // false
 */
export function isMultiple35(n) {
  return n % 3 === 0 || n % 5 === 0;
}

/**
 * Hint: use the remainder operator (%)
 *
 * @param {number} num1 - First positive number.
 * @param {number} num2 - Second positive number.
 * @returns {boolean} Whether both numbers share the same last digit
 *
 * @example
 * shareLastDigit(27, 7); // true
 * @example
 * shareLastDigit(123, 43); // true
 * @example
 * shareLastDigit(10, 21); // false
 */
export function shareLastDigit(num1, num2) {
  return num1 % 10 === num2 % 10;
}

/**
 * @param {number} temp1 - First temperature.
 * @param {number} temp2 - Second temperature.
 * @returns {boolean} True if one temperature is less than 0 and
 * the other is greater than 100
 *
 * @example
 * isColdAndHot(-5, 120); // true
 * @example
 * isColdAndHot(150, -1); // true
 * @example
 * isColdAndHot(10, 50); // false
 */
export function isColdAndHot(temp1, temp2) {
  return (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0);
}

/**
 * @param {string} A - First string.
 * @param {string} B - Second string.
 * @returns {string} A new string with the form ABBA
 *
 * @example
 * makeABBA("Hi", "Bye"); // "HiByeByeHi"
 * @example
 * makeABBA("Yo", "Alice"); // "YoAliceAliceYo"
 * @example
 * makeABBA("a", "b"); // "abba"
 */
export function makeABBA(A, B) {
  return `${A}${B}${B}${A}`;
}

/**
 * Returns a string of the form short+long+short, with the shorter string
 * on the outside and the longer string on the inside.
 *
 * You may assume that the strings will have different lengths.
 *
 * @param {string} str1 - First string.
 * @param {string} str2 - Second string.
 * @returns {string} The combined short-long-short string.
 *
 * @example
 * makeSLS("Hi", "Hello"); // "HiHelloHi"
 * @example
 * makeSLS("Puppy", "Dog"); // "DogPuppyDog"
 * @example
 * makeSLS("a", "abc"); // "aabca"
 */
export function makeSLS(str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}

/**
 * You and your date are trying to get into an exclusive club.
 * If either of you is very stylish (8 or more), the result is 2 (yes).
 * With the exception that if either of you has style 2 or less, the result is 0 (no).
 * Otherwise, the result is 1 (maybe).
 *
 * @param {number} you - Your style rating from 0 to 10.
 * @param {number} date - Your date's style rating from 0 to 10.
 * @returns {number} 0 for no, 1 for maybe, 2 for yes.
 *
 * @example
 * canEnterClub(9, 5); // 2
 * @example
 * canEnterClub(1, 10); // 0
 * @example
 * canEnterClub(5, 5); // 1
 */
export function canEnterClub(you, date) {
  // no condition
  if (you <= 2 || date <= 2) {
    return 0;
    //yes now
  }
  if (you >= 8 || date >= 8) {
    return 2;
  } else {
    return 1;
  }
}

/**
 * Your phone rings. Normally you answer, except:
 * - In the morning, you only answer if it is your boss calling.
 * - If you are asleep, you do not answer at all.
 *
 * @param {boolean} isMorning - True if it is morning.
 * @param {boolean} isBoss - True if the caller is your boss.
 * @param {boolean} isAsleep - True if you are asleep.
 * @returns {boolean} True if you should answer the phone, otherwise false.
 *
 * @example
 * shouldAnswerPhone(false, false, false); // true
 * @example
 * shouldAnswerPhone(true, false, false); // false
 * @example
 * shouldAnswerPhone(true, true, false); // true
 */
export function shouldAnswerPhone(isMorning, isBoss, isAsleep) {
  if (isAsleep) {
    return false;
  }
  if (isMorning) {
    return isBoss;
  } else {
    return true;
  }
}
