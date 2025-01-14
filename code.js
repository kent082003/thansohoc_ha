function calculateLifePathNumber(day, month, year) {
  // Convert day, month, and year into individual digits
  const digits = (day + month + year).toString().split('').map(Number);

  // Sum the digits
  let sum = digits.reduce((acc, num) => acc + num, 0);

  // Reduce to a single digit or master number (11, 22, 33)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }

  return sum;
}
function calculateExpressionNumberByWord(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  // Function to reduce a number to a single digit, except for 11, 22, and 33
  function reduceToSingleDigitExeptMaster(number) {
    while (number > 9 && number !== 11 && number !== 22 && number !== 33) {
      number = number.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
    }
    return number;
  }

  // Split the name into words and process each word
  const nameLower = name.toLowerCase();
  const words = nameLower.split(' '); // Split name by spaces

  const reducedWordNumbers = words.map(word => {
    // Sum the letters of the word
    const sum = word.split('').reduce((acc, char) => {
      if (letterToNumber[char]) {
        return acc + letterToNumber[char];
      }
      return acc;
    }, 0);

    // Reduce the sum to a single digit
    return reduceToSingleDigitExeptMaster(sum);
  });

  // Sum up the final result of the reduced numbers from each word
  const totalSum = reducedWordNumbers.reduce((acc, num) => acc + num, 0);
  
  // Reduce the total sum to a single digit
  const finalResult = reduceToSingleDigitExeptMaster(totalSum);

  return finalResult;
}

function calculateDestinyNumber(name) {
  return calculateExpressionNumberByWord(name);
}

function calculatePersonalityNumber(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameLower = name.toLowerCase();
  const sum = nameLower.split('').reduce((acc, char) => {
    if (!'aeiou'.includes(char)) {
      return acc + (letterToNumber[char] || 0);
    }
    return acc;
  }, 0);

  let personalityNumber = sum;
  while (personalityNumber > 9 && personalityNumber !== 11 && personalityNumber !== 22 && personalityNumber !== 33) {
    personalityNumber = personalityNumber.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }
  return personalityNumber;
}

function calculateSoulUrgeNumber(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameLower = name.toLowerCase();
  const sum = nameLower.split('').reduce((acc, char) => {
    if ('aeiou'.includes(char)) {
      return acc + (letterToNumber[char] || 0);
    }
    return acc;
  }, 0);

  let soulUrgeNumber = sum;
  while (soulUrgeNumber > 9 && soulUrgeNumber !== 11 && soulUrgeNumber !== 22 && soulUrgeNumber !== 33) {
    soulUrgeNumber = soulUrgeNumber.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }
  return soulUrgeNumber;
}

function calculateMaturityNumber(lifePath, expressionNumber) {
  let sum = lifePath + expressionNumber;

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }

  return sum;
}

function calculateBalanceNumber(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameParts = name.split(' '); // Split the name into parts (first name, last name)
  const firstLetters = nameParts.map(part => part[0].toLowerCase()); // Get the first letter of each part

  const sum = firstLetters.reduce((acc, char) => {
    return acc + (letterToNumber[char] || 0); // Add the numeric value of the first letter
  }, 0);

  let balanceNumber = sum;
  while (balanceNumber > 9 && balanceNumber !== 11 && balanceNumber !== 22 && balanceNumber !== 33) {
    balanceNumber = balanceNumber.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }

  return balanceNumber;
}
function calculateConnectionNumber(lifePath, expressionNumber) {
  const connectionNumber = Math.abs(reduceToSingleDigit(lifePath) - reduceToSingleDigit(expressionNumber));
  
  // Reduce to a single digit or master number (11, 22, 33)
  let result = connectionNumber;
  while (result > 9 && result !== 11 && result !== 22 && result !== 33) {
    result = result.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }

  return result;
}
function calculateBirthDayNumber(day) {
  let sum = day;

  // Reduce to a single digit or master number (11, 22, 33)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }

  return sum;
}
function getNumberName(number) {
  const numberNames = {
    1: "Sáng tạo, độc lập, lãnh đạo",
    2: "Hòa hợp, nhạy cảm, hợp tác",
    3: "Sáng tạo, giao tiếp, vui vẻ",
    4: "Công bằng, ổn định, thực tế",
    5: "Thay đổi, tự do, phiêu lưu",
    6: "Trách nhiệm, gia đình, yêu thương",
    7: "Tâm linh, suy tư, phân tích",
    8: "Thành công, quyền lực, vật chất",
    9: "Nhân ái, hoàn thiện, từ thiện",
    11: "Thần thánh, trực giác mạnh mẽ",
    22: "Xây dựng, sự nghiệp, vĩ đại",
    33: "Từ bi, phục vụ, lãnh đạo vĩ đại"
  };

  return numberNames[number] || "Chưa xác định";
}
function calculateSoulPersonalityConnection(soulUrgeNumber, personalityNumber) {
  const connectionNumber = Math.abs(reduceToSingleDigit(soulUrgeNumber) - reduceToSingleDigit(personalityNumber));

  // Reduce to a single digit or master number (11, 22, 33)
  let result = connectionNumber;
  while (result > 9 && result !== 11 && result !== 22 && result !== 33) {
    result = result.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }

  return result;
}
function calculateMissingNumbers(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameLower = name.toLowerCase();
  const presentNumbers = new Set();

  // Add present numbers based on the name
  nameLower.split('').forEach(char => {
    if (letterToNumber[char]) {
      presentNumbers.add(letterToNumber[char]);
    }
  });

  // Find missing numbers (1-9)
  const missingNumbers = [];
  for (let i = 1; i <= 9; i++) {
    if (!presentNumbers.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

function calculatetotalMissingNumbers(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameLower = name.toLowerCase().replace(/\s+/g, '');
  const presentNumbers = new Set();

  nameLower.split('').forEach(char => {
    if (letterToNumber[char]) {
      presentNumbers.add(letterToNumber[char]);
    }
  });

  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const missingNumbers = [];

  allNumbers.forEach(num => {
    if (!presentNumbers.has(num)) {
      missingNumbers.push(num);
    }
  });

  return missingNumbers.length;
}

function calculateSMTT(name) {
  const missingCount = calculatetotalMissingNumbers(name);
  return 9 - missingCount;
}

function calculateIntellectualNumber(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameLower = name.toLowerCase();
  const consonants = nameLower.split('').filter(char => !'aeiou'.includes(char)); // Lọc các phụ âm

  const sum = consonants.reduce((acc, char) => {
    return acc + (letterToNumber[char] || 0);
  }, 0);

  // Reduce the sum to a single digit or master number (11, 22, 33)
  let intellectualNumber = sum;
  while (intellectualNumber > 9 && intellectualNumber !== 11 && intellectualNumber !== 22 && intellectualNumber !== 33) {
    intellectualNumber = intellectualNumber.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }

  return intellectualNumber;
}

function calculatePassionNumbers(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameLower = name.toLowerCase().replace(/\s+/g, ''); // Remove spaces and convert to lowercase
  const letterCount = {};

  // Count the frequency of each letter in the name
  nameLower.split('').forEach(char => {
    if (letterToNumber[char]) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
  });

  // Map frequencies of numbers
  const numberCount = {};
  for (let char in letterCount) {
    const number = letterToNumber[char];
    numberCount[number] = (numberCount[number] || 0) + letterCount[char];
  }

  // List numbers that appear more than twice
  const passionNumbers = [];
  for (let number in numberCount) {
    if (numberCount[number] > 2) {
      passionNumbers.push(parseInt(number)); // Add the number to the list
    }
  }

  return passionNumbers;
}

function calculateRationalThinkingNumber(fullName, birthDay) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  // Extract last word from the full name
  const nameArray = fullName.trim().split(" ");
  const lastName = nameArray[nameArray.length - 1];

  // Calculate the numeric value of the last name
  const nameLower = lastName.toLowerCase();
  let nameSum = 0;
  nameLower.split('').forEach(char => {
    if (letterToNumber[char]) {
      nameSum += letterToNumber[char];
    }
  });

 const dayString = String(birthDay); // Cast birthDay to string if it's not
  const daySum = dayString.split('').reduce((sum, digit) => {
    return digit.match(/\d/) ? sum + parseInt(digit) : sum;
  }, 0);

  // Calculate the total sum
  let totalSum = nameSum + daySum;

  // Handle reduction, keeping master numbers
  const reduceToSingleDigitOrMaster = (num) => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
  };

  // Final reduced result
  return reduceToSingleDigitOrMaster(totalSum);
}
function reduceToSingleDigitOrMaster(num) {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = num
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}



// Function to calculate the stages based on day, month, and year
function calculateLifeStages(day, month, year) {
  // Reduce day, month, and year to single digits or master numbers
  const reducedDay = reduceToSingleDigitOrMaster(day);
  const reducedMonth = reduceToSingleDigitOrMaster(month);
  const reducedYear = reduceToSingleDigitOrMaster(year);

  // Stage 1: Month + Day
  const stage1 = reduceToSingleDigitOrMaster(reducedMonth + reducedDay);

  // Stage 2: Day + Year (sum digits of the year)
  const yearSum = reducedYear.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  const stage2 = reduceToSingleDigitOrMaster(reducedDay + yearSum);

  // Stage 3: Stage 1 + Stage 2
  const stage3 = reduceToSingleDigitOrMaster(stage1 + stage2);

  // Stage 4: Month + Year (sum digits of the year)
  const stage4 = reduceToSingleDigitOrMaster(reducedMonth + yearSum);

  // Return the results
  return { stage1, stage2, stage3, stage4 };
}
function reduceToSingleDigit(number) {
  let sum = number;
  while (sum > 9) {
    sum = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }
  return sum;
}
function calculatePersonalYear(day, month, year) {
  // Reduce day, month, and year to single digits (except for master numbers 11, 22, 33)
  const reducedDay = reduceToSingleDigit(day);
  const reducedMonth = reduceToSingleDigit(month);
  const reducedYear = reduceToSingleDigit(year);

  // Calculate Personal Year Number
  const personalYear = reducedDay + reducedMonth + reducedYear;

  // Final reduction of the Personal Year Number (except for master numbers 11, 22, 33)
  let finalPersonalYear = reduceToSingleDigit(personalYear);

  return finalPersonalYear;
}

function calculatePersonalMonth(personalYear) {
  // Get the current month (1 for January, 2 for February, etc.)
  const currentMonth = new Date().getMonth() + 1;

  // Calculate the personal month number
  const personalMonth = personalYear + currentMonth;

  // Reduce to a single digit (no exceptions for 11, 22, 33)
  const reducedPersonalMonth = personalMonth
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0);
console.log(reducedPersonalMonth);
  return reducedPersonalMonth;
}

function calculatePersonalDay(personalMonth) {
  // Get the current day of the month
  const currentDay = new Date().getDate();

  // Calculate the personal day number
  const personalDay = personalMonth + currentDay;

  // Reduce to a single digit (no exceptions for 11, 22, 33)
  const reducedPersonalDay = personalDay
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  return reducedPersonalDay;
}

function reduceToPositiveDifference(num1, num2) {
  // Calculate the positive difference between two numbers
  return Math.abs(num1 - num2);
}

function calculateChallengeNumbers(day, month, year) {
  // Reduce day, month, and year to single digits (no exceptions)
  const reducedDay = reduceToSingleDigit(day);
  const reducedMonth = reduceToSingleDigit(month);
  const reducedYear = reduceToSingleDigit(year);

  // Challenge calculations
  const challenge1 = reduceToPositiveDifference(reducedMonth, reducedDay);
  const yearSum = year.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  const reducedYearSum = reduceToSingleDigit(yearSum);
  const challenge2 = reduceToPositiveDifference(reducedDay, reducedYearSum);
  const challenge3 = reduceToPositiveDifference(challenge1, challenge2);
  const challenge4 = reduceToPositiveDifference(reducedMonth, reducedYearSum);

  // Return all challenge numbers
  return { challenge1, challenge2, challenge3, challenge4 };
}

function reduceToSingleDigit(number) {
  while (number >= 10) {
    number = number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return number;
}
let currentTooltip = null;

function toggleTooltip(elementId, spanElement) {
  var tooltip = document.getElementById(elementId);

  // Check if a tooltip is already open
  if (currentTooltip && currentTooltip !== tooltip) {
    // Hide the previous tooltip
    currentTooltip.style.display = 'none';
  }

  // Check if the clicked tooltip is currently hidden
  if (tooltip.style.display === 'none') {
    // Show the tooltip
    tooltip.style.display = 'block';

    // Get the position of the span element
    var rect = spanElement.getBoundingClientRect();

    // Position the tooltip to the right of the span element
    tooltip.style.left = rect.right + 5 + 'px';  // 5px to the right of the number
    tooltip.style.top = rect.top + 'px';  // Align tooltip vertically with the number

    // Update the current tooltip
    currentTooltip = tooltip;
  } else {
    // Hide the tooltip if it's already visible
    tooltip.style.display = 'none';
    currentTooltip = null;
  }
}

// Handle form submission
document.getElementById('numerology-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the day, month, year, and name from the form
  const day = parseInt(document.getElementById('day').value, 10);
  const month = parseInt(document.getElementById('month').value, 10);
  const year = parseInt(document.getElementById('year').value, 10);
  const name = document.getElementById('name').value;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const personalYearNumber = calculatePersonalYear(day, month, currentYear);

const personalMonth = calculatePersonalMonth(personalYearNumber);
const personalDay = calculatePersonalDay(personalMonth);
  // Calculate numbers
  const lifePath = calculateLifePathNumber(day, month, year);  // Updated to take day, month, and year
  const expressionNumber = calculateExpressionNumberByWord(name);
  const destinyNumber = calculateDestinyNumber(name);
  const personalityNumber = calculatePersonalityNumber(name);
  const soulUrgeNumber = calculateSoulUrgeNumber(name);
  const maturityNumber = calculateMaturityNumber(lifePath, expressionNumber);
  const balanceNumber = calculateBalanceNumber(name);
 const connectionNumber = calculateConnectionNumber(lifePath, expressionNumber);
 const birthDayNumber = calculateBirthDayNumber(day);
 
  // Calculate the soul-personality connection number
  const soulPersonalityConnection = calculateSoulPersonalityConnection(soulUrgeNumber, personalityNumber);
  const missingNumbers = calculateMissingNumbers(name);
  
 const intellectualNumber = calculateRationalThinkingNumber(name,day);
 const subconsciousNumber = calculateSMTT(name);

  // Calculate the passion number
  const passionNumber = calculatePassionNumbers(name);
    const { challenge1, challenge2, challenge3, challenge4 } = calculateChallengeNumbers(day, month, year);

const { stage1, stage2, stage3, stage4 } = calculateLifeStages(day, month, year);

  // Display the results in the HTML
  document.getElementById('stage-number').textContent = `${stage1}, ${stage2}, ${stage3}, ${stage4}`;
  document.getElementById('stage-name').textContent = `Chặng 1: ${stage1}, Chặng 2: ${stage2}, Chặng 3: ${stage3}, Chặng 4: ${stage4}`;
  
  
   // Display the results in the HTML
  document.getElementById('challenge-number').textContent = `${challenge1}, ${challenge2}, ${challenge3}, ${challenge4}`;
  document.getElementById('challenge-name').textContent = `Thách thức chặng 1: ${challenge1}, Thách thức chặng 2: ${challenge2}, Thách thức chặng 3: ${challenge3}, Thách thức chặng 4: ${challenge4}`;
  

  // Set the calculated numbers and names
  document.getElementById('year-number').textContent = personalYearNumber;
  document.getElementById('year-name').textContent = getNumberName(personalYearNumber);
  
  
document.getElementById('month-number').textContent = personalMonth;
  document.getElementById('month-name').textContent = getNumberName(personalMonth);
  

  document.getElementById('day-number').textContent = personalDay;
  document.getElementById('day-name').textContent = getNumberName(personalDay);
  
  
  // Set the calculated numbers and names
  document.getElementById('subconscious-number').textContent = subconsciousNumber;
  document.getElementById('subconscious-name').textContent = getNumberName(subconsciousNumber);

  document.getElementById('passion-number').textContent = passionNumber;
  document.getElementById('passion-name').textContent = getNumberName(passionNumber);
  // Set the calculated intellectual number
  document.getElementById('intellectual-number').textContent = intellectualNumber;
  document.getElementById('intellectual-name').textContent = getNumberName(intellectualNumber);

  // Set the calculated missing numbers
  document.getElementById('missing-numbers').textContent = missingNumbers.join(', ') || 'Không có';
  document.getElementById('missing-numbers-name').textContent = missingNumbers.length ? "Thiếu các con số này" : "Không có con số thiếu";

  // Set the calculated numbers and names
  document.getElementById('life-path').textContent = lifePath;
  document.getElementById('life-path-name').textContent = getNumberName(lifePath);

  document.getElementById('expression-number').textContent = expressionNumber;
  document.getElementById('expression-name').textContent = getNumberName(expressionNumber);


  document.getElementById('personality-number').textContent = personalityNumber;
  document.getElementById('personality-name').textContent = getNumberName(personalityNumber);

  document.getElementById('soul-urge-number').textContent = soulUrgeNumber;
  document.getElementById('soul-urge-name').textContent = getNumberName(soulUrgeNumber);

  document.getElementById('maturity-number').textContent = maturityNumber;
  document.getElementById('maturity-name').textContent = getNumberName(maturityNumber);

  document.getElementById('balance-number').textContent = balanceNumber;
  document.getElementById('balance-name').textContent = getNumberName(balanceNumber);
  document.getElementById('birth-day-number').textContent = birthDayNumber;
  document.getElementById('birth-day-name').textContent = getNumberName(birthDayNumber);
  
    // Set the connection number
  document.getElementById('life-destiny-connection').textContent = connectionNumber;
  document.getElementById('life-destiny-name').textContent = getNumberName(connectionNumber);
  
   // Set the calculated soul-personality connection number
  document.getElementById('soul-personality-connection').textContent = soulPersonalityConnection;
  document.getElementById('soul-personality-name').textContent = getNumberName(soulPersonalityConnection);

  // Display the results section
  document.getElementById('results').style.display = 'block';
});

   // Modify handleFormSubmit to accept parameters
function handleFormSubmit(event, name = '', dob = '') {
  event?.preventDefault(); // Prevent form refresh only if event is passed
  
  // Use passed parameters if available
  const [day, month, year] = dob ? dob.split('/') : [document.getElementById('day').value, document.getElementById('month').value, document.getElementById('year').value];
  
  // Get the name parameter if available
  const userName = name || document.getElementById('name').value;

  // Create a new user data object
  const userData = {
    name: userName,
    dob: `${day}/${month}/${year}`,
  };

  // Retrieve existing data from localStorage or initialize an empty array
  let savedData = localStorage.getItem('userData');
  try {
    savedData = savedData ? JSON.parse(savedData) : [];
    if (!Array.isArray(savedData)) {
      savedData = [];
    }
  } catch (error) {
    console.error('Error parsing saved data:', error);
    savedData = [];
  }

  // Check if the data already exists in savedData (to prevent duplicates)
  const isDuplicate = savedData.some(entry => entry.name === userData.name && entry.dob === userData.dob);
  if (isDuplicate) {
    return; // Don't save duplicate data
  }

  // Add the new entry to the saved data array
  savedData.push(userData);

  // Save the updated data to localStorage
  localStorage.setItem('userData', JSON.stringify(savedData));

  // Optionally, hide the saved data list and show the numbers table
  document.getElementById('saved-data').style.display = 'none';
  document.getElementById('numbers-table').style.display = 'block';

  // Clear the form if needed
  document.getElementById('day').value = '';
  document.getElementById('month').value = '';
  document.getElementById('year').value = '';
  document.getElementById('name').value = '';
}


  // Attach event listener to form submission
  document.querySelector('form').addEventListener('submit', handleFormSubmit);

  // Function to load and display saved data from localStorage
  function loadSavedData() {
    const savedData = JSON.parse(localStorage.getItem('userData'));

    const savedDataListContainer = document.getElementById('saved-data-list');
    savedDataListContainer.innerHTML = ''; // Clear previous saved data

    if (savedData && savedData.length > 0) {
      savedData.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.style.marginBottom = '10px';
        entryDiv.style.padding = '10px';
        entryDiv.style.border = '1px solid #ccc';
        entryDiv.style.borderRadius = '5px';

        entryDiv.innerHTML = ` 
          <strong>Entry ${index + 1}:</strong><br>
          Name: ${entry.name}<br>
          Date of Birth: ${entry.dob}
        `;

        // Make the saved entry clickable
        entryDiv.style.cursor = 'pointer';
        entryDiv.addEventListener('click', function() {
          // Populate the form with the selected entry
          const [day, month, year] = entry.dob.split('/');
          document.getElementById('day').value = day;
          document.getElementById('month').value = month;
          document.getElementById('year').value = year;
          document.getElementById('name').value = entry.name;
        });

        savedDataListContainer.appendChild(entryDiv);
      });
    } else {
      savedDataListContainer.innerHTML = "<p>No saved data yet.</p>";
    }
  }

  // Load saved data when savedData.html is loaded
  if (window.location.href.includes('savedData.html')) {
    loadSavedData();
  }

  // Function to redirect to savedData.html
  document.getElementById('check-saved-data-btn').addEventListener('click', function() {
    window.location.href = "savedData.html"; // Adjust the URL as per your project structure
  });
  
  window.onload = function() {
  // Retrieve saved data from localStorage
  const selectedData = JSON.parse(localStorage.getItem('selectedData'));
  
  if (selectedData) {
    document.getElementById('name').value = selectedData.name;
    document.getElementById('dob').value = selectedData.dob;
  }
};

// Function to get query parameters from the URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    name: params.get('name'), // Fetches the 'name' parameter
    day: params.get('day'),   // Fetches the 'day' parameter
    month: params.get('month'), // Fetches the 'month' parameter
    year: params.get('year')  // Fetches the 'year' parameter
  };
}

// Populate the form fields with the query parameters
window.onload = function() {
  const { name, day, month, year } = getQueryParams();

  if (name && day && month && year) {
    document.getElementById('name').value = decodeURIComponent(name); // Decodes the 'name'
    document.getElementById('day').value = decodeURIComponent(day);
    document.getElementById('month').value = decodeURIComponent(month);
    document.getElementById('year').value = decodeURIComponent(year);

    // Optionally show the numbers table if needed
    document.getElementById('numbers-table').style.display = 'block';
  }
};
