// Hàm tính con số chủ đạo từ ngày sinh
function calculateLifePathNumber(dob) {
  const digits = dob.replace(/[^0-9]/g, '').split('').map(Number); // Tách tất cả các chữ số
  let sum = digits.reduce((acc, num) => acc + num, 0); // Tính tổng các chữ số

  // Rút gọn cho đến khi có một con số duy nhất (hoặc là số master 11, 22, 33)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }
    console.log('Reduced Sum:', sum);  // Debugging output
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

  // Rút gọn đến con số đơn
  let expressionNumber = sum;
  while (expressionNumber > 9 && expressionNumber !== 11 && expressionNumber !== 22 && expressionNumber !== 33) {
    expressionNumber = expressionNumber.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }

  return expressionNumber;
}

// Hàm xử lý khi người dùng nhấn nút tính toán
document.getElementById('numerology-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const dob = document.getElementById('dob').value; // Ngày sinh
  const name = document.getElementById('name').value; // Tên

  const lifePath = calculateLifePathNumber(dob);
  const expressionNumber = calculateExpressionNumber(name);

  // Hiển thị kết quả
  document.getElementById('life-path').textContent = `Con số chủ đạo: ${lifePath}`;
  document.getElementById('expression-number').textContent = `Con số biểu hiện: ${expressionNumber}`;
 
});
