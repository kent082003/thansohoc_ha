// Hàm tính con số chủ đạo từ ngày sinh
function calculateLifePathNumber(dob) {
  const digits = dob.replace(/[^0-9]/g, '').split('').map(Number);
  let sum = digits.reduce((acc, num) => acc + num, 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }
  return sum;
}

// Hàm tính con số biểu hiện từ tên
function calculateExpressionNumber(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameLower = name.toLowerCase();
  const sum = nameLower.split('').reduce((acc, char) => {
    if (letterToNumber[char]) {
      return acc + letterToNumber[char];
    }
    return acc;
  }, 0);

  let expressionNumber = sum;
  while (expressionNumber > 9 && expressionNumber !== 11 && expressionNumber !== 22 && expressionNumber !== 33) {
    expressionNumber = expressionNumber.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }
  return expressionNumber;
}

// Hàm tính Số Sứ Mệnh
function calculateDestinyNumber(name) {
  return calculateExpressionNumber(name); // Cách tính tương tự như Expression Number
}

// Hàm tính Số Nhân Cách (chỉ dùng phụ âm)
function calculatePersonalityNumber(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameLower = name.toLowerCase();
  const sum = nameLower.split('').reduce((acc, char) => {
    if (!'aeiou'.includes(char)) {  // Phụ âm
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

// Hàm tính Số Linh Hồn (chỉ dùng nguyên âm)
function calculateSoulUrgeNumber(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const nameLower = name.toLowerCase();
  const sum = nameLower.split('').reduce((acc, char) => {
    if ('aeiou'.includes(char)) {  // Nguyên âm
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

// Hàm xử lý khi người dùng nhấn nút tính toán
document.getElementById('numerology-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const dob = document.getElementById('dob').value;
  const name = document.getElementById('name').value;

  const lifePath = calculateLifePathNumber(dob);
  const expressionNumber = calculateExpressionNumber(name);
  const destinyNumber = calculateDestinyNumber(name);
  const personalityNumber = calculatePersonalityNumber(name);
  const soulUrgeNumber = calculateSoulUrgeNumber(name);

  // Hiển thị kết quả
  document.getElementById('life-path').textContent = `Con số chủ đạo: ${lifePath}`;
  document.getElementById('expression-number').textContent = `Con số biểu hiện: ${expressionNumber}`;
  document.getElementById('destiny-number').textContent = `Số sứ mệnh: ${destinyNumber}`;
  document.getElementById('personality-number').textContent = `Số nhân cách: ${personalityNumber}`;
  document.getElementById('soul-urge-number').textContent = `Số linh hồn: ${soulUrgeNumber}`;
});
