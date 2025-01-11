// Hàm tính Con số chủ đạo từ ngày sinh (Life Path Number)
function calculateLifePathNumber(dob) {
    const digits = dob.replace(/[^0-9]/g, '').split('').map(Number);
    let sum = digits.reduce((acc, num) => acc + num, 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
    }
    return sum;
}

// Hàm tính Số sứ mệnh từ tên đầy đủ (Destiny Number)
function calculateDestinyNumber(name) {
    return calculateExpressionNumber(name);
}

// Hàm tính Con số biểu hiện từ tên (Expression Number)
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

// Hàm tính Số nhân cách (Personality Number)
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

// Hàm tính Số linh hồn (Soul Urge Number)
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

// Hàm tính Số trưởng thành (Maturity Number)
function calculateMaturityNumber(lifePath, expressionNumber) {
    let sum = lifePath + expressionNumber;

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
    }

    return sum;
}

// Hàm tính Chỉ số Cân bằng (Balance Number)
function calculateBalanceNumber(name) {
    const letterToNumber = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
        'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
        's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
    };

    const nameParts = name.split(' '); // Tách tên thành các phần (họ, tên)
    const firstLetters = nameParts.map(part => part[0].toLowerCase()); // Lấy chữ cái đầu tiên của mỗi phần

    const sum = firstLetters.reduce((acc, char) => {
        return acc + (letterToNumber[char] || 0); // Tính tổng các số tương ứng với chữ cái đầu tiên
    }, 0);

    let balanceNumber = sum;
    while (balanceNumber > 9 && balanceNumber !== 11 && balanceNumber !== 22 && balanceNumber !== 33) {
        balanceNumber = balanceNumber.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
    }

    return balanceNumber;
}

// Hàm tính Chỉ số kết nối giữa đường đời và sứ mệnh (Life-Destiny Connection)
function calculateLifeDestinyConnection(lifePath, destinyNumber) {
    return Math.abs(lifePath - destinyNumber); // Hiệu số giữa đường đời và sứ mệnh
}

// Xử lý khi người dùng nhấn nút tính toán
document.getElementById('numerology-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const dob = document.getElementById('dob').value;
    const name = document.getElementById('name').value;

    const lifePath = calculateLifePathNumber(dob);
    const balanceNumber = calculateBalanceNumber(name);
    const expressionNumber = calculateExpressionNumber(name);
    const destinyNumber = calculateDestinyNumber(name);
    const personalityNumber = calculatePersonalityNumber(name);
    const soulUrgeNumber = calculateSoulUrgeNumber(name);
    const maturityNumber = calculateMaturityNumber(lifePath, expressionNumber);
    const lifeDestinyConnection = calculateLifeDestinyConnection(lifePath, destinyNumber);

    // Hiển thị kết quả
    document.getElementById('life-path').textContent = `Con số chủ đạo: ${lifePath}`;
    document.getElementById('balance-number').textContent = `Chỉ số cân bằng: ${balanceNumber}`;
    document.getElementById('destiny-number').textContent = `Số sứ mệnh: ${destinyNumber}`;
    document.getElementById('personality-number').textContent = `Số nhân cách: ${personalityNumber}`;
    document.getElementById('soul-urge-number').textContent = `Số linh hồn: ${soulUrgeNumber}`;
    document.getElementById('maturity-number').textContent = `Số trưởng thành: ${maturityNumber}`;
    document.getElementById('life-destiny-connection').textContent = `Chỉ số kết nối giữa đường đời và sứ mệnh: ${lifeDestinyConnection}`;
});
