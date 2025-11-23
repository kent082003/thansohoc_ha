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
function calculateLifePathNumberNoSum(day, month, year) {
  // Convert day, month, and year into individual digits
  const digits = (day + month + year).toString().split('').map(Number);

  // Sum the digits
  let sum = digits.reduce((acc, num) => acc + num, 0);

  // Reduce to a single digit or master number (11, 22, 33) 

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
function calculateExpressionNumberByWordNoSum(name) {
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
  const finalResult = totalSum;

  return finalResult;
}
function calculateDestinyNumber(name) {
  return calculateExpressionNumberByWord(name);
}
function calculateDestinyNumberNoSum(name) {
  return calculateExpressionNumberByWordNoSum(name);
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

function calculatePersonalityNumberNoSum(name) {
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
 
  return personalityNumber;
}

function calculateSoulUrgeNumber(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8 // Y là phụ âm
  };

  const nameLower = name.toLowerCase();
  const sum = nameLower.split('').reduce((acc, char, index, arr) => {
    if ('aeiou'.includes(char)) {
      return acc + (letterToNumber[char] || 0);
    } else if (char === 'y') {
      // Nếu Y đứng giữa một cụm nguyên âm, không cộng số 7
      if (index > 0 && index < arr.length - 1 && 'aeiou'.includes(arr[index - 1]) && 'aeiou'.includes(arr[index + 1])) {
        return acc; // Không cộng gì cả
      }
      return acc + (letterToNumber[char] || 0); // Nếu Y là phụ âm
    }
    return acc;
  }, 0);

  let soulUrgeNumber = sum;
  while (soulUrgeNumber > 9 && soulUrgeNumber !== 11 && soulUrgeNumber !== 22 && soulUrgeNumber !== 33) {
    soulUrgeNumber = soulUrgeNumber.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
  }
  return soulUrgeNumber;
}

function calculateSoulUrgeNumberNoSum(name) {
  const letterToNumber = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8 // Y là phụ âm
  };

  const nameLower = name.toLowerCase();
  const sum = nameLower.split('').reduce((acc, char, index, arr) => {
    if ('aeiou'.includes(char)) {
      return acc + (letterToNumber[char] || 0);
    } else if (char === 'y') {
      // Nếu Y đứng giữa một cụm nguyên âm, không cộng số 7
      if (index > 0 && index < arr.length - 1 && 'aeiou'.includes(arr[index - 1]) && 'aeiou'.includes(arr[index + 1])) {
        return acc; // Không cộng gì cả
      }
      return acc + (letterToNumber[char] || 0); // Nếu Y là phụ âm
    }
    return acc;
  }, 0);

  let soulUrgeNumber = sum;

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



function getCanBangName(number) {
  const canBangNames = {
    7: "Họ ít khi thể hiện sự hứng khởi của mình ra ngoài. Đôi khi thấy họ hơi lạnh lùng, khó tính, khó hiểu. Họ luôn luôn hỏi 'Tại sao cái này cái kia'. Tuy nhiên thường kìm nén trong lòng nhiều nỗi đau, thường hay già trước tuổi.",
    9: "Thích gánh vác trách nhiệm, trọng trách lớn trên vai, cả nể, nghĩ cho cái của chúng ta (nghĩ cho cộng đồng, vì bức tranh lớn, nghĩ cho mọi người chứ không nghĩ cho mình). Thích giúp đỡ và lo cho người khác.",
    8: "Nói lên suy nghĩ, quan điểm, chính kiến của mình. Thẳng thắn bộc bạch nội tâm của mình ra bên ngoài. Có ý tưởng và nhạy cảm với cơ hội kinh doanh. Cần hành động mạnh mẽ, cần được thúc đẩy hành động, triển khai.",
    1: "Quyết liệt, tự giải quyết, dứt khoát. Không thích nhờ và hay phụ thuộc vào sự giúp đỡ của người khác.",
    2: "Ngại va chạm, cạnh tranh. Thích xử lý sự việc theo hướng 'dĩ hòa vi quý', nhẹ nhàng, ôn hòa. Khả năng hòa giải tốt. Không giải quyết vấn đề triệt để vì không thích xung đột. Nhường nhịn - nhún nhường.",
    3: "Luôn có thái độ sống tích cực, không thể hiện vấn đề ra bên ngoài. Đặc sản: nụ cười. Có suy nghĩ gì là thể hiện ra ngay bằng ngôn từ rất cảm xúc. Vui vẻ thì nói nhiều, có vấn đề là im lặng, bất cần.",
    4: "Khá điềm tĩnh khi vấn đề hay thách thức xảy ra. Tìm nguyên nhân gốc rễ của vấn đề trước (bằng chứng, dữ liệu để xác thực), sau đó mới đưa ra quyết định.",
    5: "Dễ tính, linh hoạt, nhiều khi khá trẻ. Nhìn nhận vấn đề đa chiều, không thích quy chụp người khác và cũng thích phản ứng gay gắt. Muốn kết thúc vấn đề theo hướng tích cực nhất - đơn giản hóa vấn đề.",
    6: "LV 1 - Quan tâm đến gia đình và mọi người, dễ bỏ lỡ cơ hội trong công việc, rất coi trọng và bị chi phối bởi tình cảm. LV 2 - Bao dung, vị tha, ôn hòa, chủ động làm việc vì lợi ích của người khác.",
    10: "Quyết liệt, tự giải quyết, dứt khoát. Không thích nhờ và hay phụ thuộc vào sự giúp đỡ của người khác.",
    11: "Ngại va chạm, cạnh tranh. Thích xử lý sự việc theo hướng 'dĩ hòa vi quý', nhẹ nhàng, ôn hòa. Khả năng hòa giải tốt. Không giải quyết vấn đề triệt để vì không thích xung đột. Nhường nhịn - nhún nhường.",
    22: "Luôn có thái độ sống tích cực, không thể hiện vấn đề ra bên ngoài. Đặc sản: nụ cười. Có suy nghĩ gì là thể hiện ra ngay bằng ngôn từ rất cảm xúc. Vui vẻ thì nói nhiều, có vấn đề là im lặng, bất cần."
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (canBangNames[number]) {
    return canBangNames[number];
  } else {
    return "Không có thông tin cho số này";
  }
}

// Function to get the Su Menh Name
function getSuMenhName(number) {
    const suMenhNames = {
        7: "SỨ MỆNH\nLV1: Cần có tri thức, kiến thức, đức tin đúng đắn để lan truyền và giúp đỡ mọi người\nLV2: Nâng tầm trí tuệ cho người khác, giúp mọi người phát triển bản thân\nLV3: Cần tìm ra triết lý, niềm tin, lý tưởng sống để mang lại lợi ích cho cộng đồng\nLV4: Thực hiện lý tưởng và ước mơ",
        9: "SỨ MỆNH\nTrở thành người thay đổi nhận thức, khai tâm cho người khác, làm thủ lĩnh tinh thần\nLV1: Nuôi dưỡng từ bi, trí tuệ để dẫn dắt chính mình\nLV2: Khai tâm, khai tuệ cho người khác\nLV3: Sử dụng tâm từ, trí tuệ của mình để giúp người khác\nLV4: Trở thành thủ lĩnh tinh thần của những tôn giáo, đứng đầu",
        8: "SỨ MỆNH\nChủ động độc lập về tài chính, tạo ra vật chất và tiền bạc\nLàm chủ và tạo ra nhiều mô hình kinh doanh giúp người khác tăng thu nhập\nTạo ra nhiều di sản để lại cho cuộc đời",
        1: "SỨ MỆNH\n1. Quyết đoán, tự chủ, độc lập\n2. Trở thành những người xuất sắc trong tổ chức\n3. Trở thành nhà đào tạo\n4. Nhân bản nhà đào tạo",
        2: "SỨ MỆNH\n1. Lắng nghe thấu hiểu, đồng cảm với mọi người\n2. Đóng vai trò liên kết, hòa giải, dàn xếp và thiết lập công bằng\n3. Tạo ra cộng đồng chia sẻ yêu thương và phát triển bản thân\n4. Chữa lành",
        3: "SỨ MỆNH\nÝ thức được vai trò của mình, học cách sử dụng ngôn từ của mình để tác động tích cực lên người khác\nTrở thành người kết nối, chia sẻ, truyền động lực, cảm hứng, lan tỏa tích cực cho người khác",
        4: "SỨ MỆNH\nTập trung vào nghiên cứu chuyên môn để trở thành chuyên gia\nNăng lực chia sẻ, dạy lại kiến thức cho người khác\nĐóng gói thành công thức, thành di sản cho cuộc đời\nTrở thành bậc thầy trong lĩnh vực chuyên môn",
        5: "SỨ MỆNH\nCấp độ 1: Mang lại niềm vui, tích cực và hài hước cho người khác\nCấp độ 2: Tạo ra sân chơi, mô hình, tổ chức để giúp mọi người được sống là chính họ\nCấp độ 3: Tạo môi trường sống tốt đẹp, hoạt động vui chơi hướng tới tinh thần",
        6: "SỨ MỆNH\nYêu thương bản thân đúng cách\nMang tình yêu thương ấm áp cho người khác, giúp họ vượt qua khó khăn trong cuộc sống bằng tình yêu và trí tuệ\nTạo ra môi trường hạnh phúc và lo cho cuộc sống của nhiều người",
        10: "SỨ MỆNH\n1. Quyết đoán, tự chủ, độc lập\n2. Trở thành những người xuất sắc trong tổ chức\n3. Trở thành nhà đào tạo\n4. Nhân bản nhà đào tạo",
        11: "SỨ MỆNH\n1. Lắng nghe thấu hiểu, đồng cảm với mọi người\n2. Đóng vai trò liên kết, hòa giải, dàn xếp và thiết lập công bằng\n3. Tạo ra cộng đồng chia sẻ yêu thương và phát triển bản thân\n4. Chữa lành",
        22: "SỨ MỆNH\nÝ thức được vai trò của mình, học cách sử dụng ngôn từ của mình để tác động tích cực lên người khác\nTrở thành người kết nối, chia sẻ, truyền động lực, cảm hứng, lan tỏa tích cực cho người khác"
    };

    // Check if the number exists in the suMenhNames object
    if (suMenhNames[number]) {
        return suMenhNames[number];
    } else {
        return "Không có thông tin cho số này";
    }
}

// Function to show the description in the popup
function showSMDescription(number) {
    const description = getSuMenhName(number);

    if (description) {
        document.getElementById('popup-content').innerText = description;
        document.getElementById('popup').style.display = 'block'; // Show the popup
    } else {
        alert('No description available for this number.');
    }
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
}

// Event listener for clicking on the expression number
document.getElementById('expression-number').addEventListener('click', function () {
    const expressionNumber = parseInt(document.getElementById('expression-number').innerText); // Get the number from the span text

    if (!isNaN(expressionNumber)) {
        showSMDescription(expressionNumber); // Show the description for the clicked number
    } else {
        alert("Please select a valid number.");
    }
});

// Event listener for closing the popup
document.getElementById('close-popup').addEventListener('click', closePopup);

function getConnectionName(number) {
  const connectionNames = {
    7: "LIÊN KẾT\nÝ thức về phát triển bản thân liên tục\n• Giá trị đến từ tri thức và sự hiểu biết\nCần có trách nhiệm với sự hiểu biết và liên tục nâng cấp bản thân\n• Cần dành thời gian cho những vấn đề về tâm linh",
    9: "LIÊN KẾT\nĐộc lập, tự chủ về tài chính\n• Làm những công việc hiểu về bản chất, vai trò, chức năng của đồng tiền\n• Lãnh đạo mô hình kinh doanh giúp đỡ nhiều người\nCàng cho đi nhiều, càng nhận lại được nhiều",
    8: "LIÊN KẾT\nCần rõ ràng trong những quan điểm của mình\n• Thực hành chia sẻ suy nghĩ\n• Trau dồi khả năng lãnh đạo\n• Rèn luyện khả năng làm việc với nhiều người",
    1: "LIÊN KẾT\nCần lắng nghe, biết cách kết nối với mọi người\n• Hòa bình\n• Phải biết đặt mình vào vị trí của người khác\n• Học cách giải quyết vấn đề bằng tinh tế, nhẹ nhàng",
    2: "LIÊN KẾT\nCần chia sẻ ra quan điểm, ý kiến, mong muốn của mình với người thân yêu\n• Cần có niềm tin vào bản thân và cần thời gian tái tạo năng lượng\n• Cần định vị, xây dựng hình ảnh cho bản thân rõ ràng",
    3: "LIÊN KẾT\nCần trở nên đúng giờ, tin cậy hơn, thượng tôn kỷ luật, đã nói là làm\n• Năng lực chia sẻ, dạy lại kiến thức cho người khác\n• Đóng gói thành công thức, thành di sản cho cuộc đời\n• Trở thành bậc thầy trong lĩnh vực chuyên môn",
    4: "LIÊN KẾT\nDám chấp nhận rủi ro, sáng tạo nhiều hơn\n• Cho mình nhiều cơ hội trải nghiệm hơn\n• Không để những nhận xét và thành kiến của người khác ảnh hưởng đến mình\n• Dám bảo vệ màu sắc của mình bằng hiểu biết đúng",
    5: "LIÊN KẾT\nLàm tốt vai trò của mình trong gia đình và quan tâm đến những người xung quanh\n• Học cách cho đi yêu thương, cân bằng giữa bản thân, gia đình và xã hội\n• Khuyến khích sáng tạo",
    6: "LIÊN KẾT\nCần rõ ràng trong những quan điểm của mình\n• Thực hành chia sẻ suy nghĩ\n• Trau dồi khả năng lãnh đạo\n• Rèn luyện khả năng làm việc với nhiều người",
    10: "LIÊN KẾT\nCần lắng nghe, biết cách kết nối với mọi người\n• Hòa bình\n• Phải biết đặt mình vào vị trí của người khác\n• Học cách giải quyết vấn đề bằng tinh tế, nhẹ nhàng",
    11: "LIÊN KẾT\nCần chia sẻ ra quan điểm, ý kiến, mong muốn của mình với người thân yêu\n• Cần có niềm tin vào bản thân và cần thời gian tái tạo năng lượng\n• Cần định vị, xây dựng hình ảnh cho bản thân rõ ràng",
    22: "LIÊN KẾT\nCần chia sẻ ra quan điểm, ý kiến, mong muốn của mình với người thân yêu\n• Cần có niềm tin vào bản thân và cần thời gian tái tạo năng lượng\n• Cần định vị, xây dựng hình ảnh cho bản thân rõ ràng"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (connectionNames[number]) {
    return connectionNames[number];
  } else {
    return "Không có thông tin cho số này";
  }
}

// Function to show the description in the popup
function showConnectionDescription(number) {
    const description = getConnectionName(number);

    if (description) {
        document.getElementById('popup-content').innerText = description;
        document.getElementById('popup').style.display = 'block'; // Show the popup
    } else {
        alert('No description available for this number.');
    }
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
}

// Event listener for clicking on the expression number
document.getElementById('life-destiny-connection').addEventListener('click', function () {
    const connection= parseInt(document.getElementById('life-destiny-connection').innerText); // Get the number from the span text

    if (!isNaN(connection)) {
        showConnectionDescription(connection); // Show the description for the clicked number
    } else {
        alert("Please select a valid number.");
    }
});

// Event listener for closing the popup
document.getElementById('close-popup').addEventListener('click', closePopup);


function getSoulDesire(number) {
  const soulDesires = {
    7: "LINH HỒN\nKhao khát kiến thức tri thức, trí tuệ và phát triển bản thân\n• Thích những thứ liên quan đến tâm linh huyền bí và không gian thiên nhiên\n• Thích ở 1 mình và nhìn nhận lại bản thân, có nhiều lúc như ngồi tự kỷ 1 mình",
    9: "LINH HỒN\nKhao khát gánh vác trọng trách lớn trên vai, được quyết định vấn đề của xã hội\n• Muốn được giúp đỡ, giáo dục, chỉ dạy người khác\n• Muốn vươn đến vấn đề ở tầm Vĩ mô",
    8: "LINH HỒN\nKhao khát thành công và danh vọng\n• Muốn độc lập, tự chủ về tài chính\n• Muốn chủ động về tiền bạc\n• Thích rõ ràng, thẳng thắn, sòng phẳng\n• Lo xa",
    1: "LINH HỒN\nKhao khát phải có được thành tích\n• Khao khát được tự chủ, tự lập và tự quyết\n• Muốn được khen, được ghi nhận\n• Chủ động, độc lập, quyết định mọi thứ theo cách riêng của mình",
    2: "LINH HỒN\nMuốn được yêu thương, muốn được chia sẻ và mở lòng, đồng cảm\n• Thích sống trong hòa bình, môi trường kết nối, đội nhóm\n• Muốn được khen ngợi và công nhận",
    3: "LINH HỒN\nKhao khát được thể hiện bản thân, thích tỏa sáng, được tung hô, bùng nổ\n• Muốn trở thành trung tâm của vũ trụ\n• Thích được trình diễn trước đám đông, muốn đưa ra lời khuyên để người khác làm theo\n• Thích được chia sẻ, muốn truyền cảm hứng, động lực cho người khác",
    4: "LINH HỒN\nKhao khát cảm giác an toàn, chắc chắn, tin tưởng\n• Thích làm mọi thứ rõ ràng, có tính quy trình, hệ thống, có tính chất dữ liệu\n• Thích giá trị truyền thống, thích làm trụ cột cho người khác, hạnh phúc khi chi trả các hóa đơn",
    5: "LINH HỒN\nKhao khát được tự do khám phá, được trải nghiệm cuộc sống, sản phẩm đẳng cấp\n• Mong muốn thoát khỏi khuôn mẫu, lập trình\n• Được tự do lựa chọn để sống tận hưởng từng khoảnh khắc",
    6: "LINH HỒN\nKhao khát được chăm sóc người khác, thích cảm giác sum vầy, ấm cúng, thích đông con, thích nuôi nấng, chỉ bảo người khác\n• Chu đáo, tình cảm, thích lãng mạn, thích được tặng quà tri ân, biết nghĩ cho người khác",
    10: "LINH HỒN\nKhao khát phải có được thành tích\n• Khao khát được tự chủ, tự lập và tự quyết\n• Muốn được khen, được ghi nhận\n• Chủ động, độc lập, quyết định mọi thứ theo cách riêng của mình",
    11: "LINH HỒN\nMuốn được yêu thương, muốn được chia sẻ và mở lòng, đồng cảm\n• Thích sống trong hòa bình, môi trường kết nối, đội nhóm\n• Muốn được khen ngợi và công nhận",
    22: "LINH HỒN\nKhao khát cảm giác an toàn, chắc chắn, tin tưởng\n• Thích làm mọi thứ rõ ràng, có tính quy trình, hệ thống, có tính chất dữ liệu\n• Thích giá trị truyền thống, thích làm trụ cột cho người khác, hạnh phúc khi chi trả các hóa đơn"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (soulDesires[number]) {
    return soulDesires[number];
  } else {
    return "Không có thông tin cho số này";
  }
}


function getBirthDayDescription(number) {
  const birthDayDescriptions = {
    7: "NGÀY SINH\n• Là con người của tri thức, thường đặt câu hỏi tại sao và mày mò tự tìm câu trả lời\n• Có khả năng tự học, năng lực quan sát tốt\n• Khi họ có năng lực cao quá thì sẽ hơi khó tính, kĩ tính\n• Thường có đôi mắt đẹp",
    9: "NGÀY SINH\n• Sẵn sàng chia sẻ, thân thiện, dễ mến\n• Thường gặp may mắn, đa tài, làm gì cũng được\n• Tinh thần trách nhiệm cao, hay đứng ra gánh vác, giải quyết công việc cho người khác\n• Giàu tình cảm, thông minh",
    8: "NGÀY SINH\n• Yêu đời, nhiều đam mê, nhiều ý tưởng kinh doanh\n• Nhiều khát khao, khát vọng\n• Sẵn sàng cật lực, khô máu vì kiếm tiền\n• Luôn mong muốn nâng cao chất lượng cuộc sống\n• Thích trang hoàng nhà cửa, thích những thứ luxury",
    1: "NGÀY SINH\nLà người mạnh mẽ và có năng lực lãnh đạo\n• Có khả năng khai phá, mớ Quang cực kì bản lĩnh\n• Cực kì độc lập và cá tính\n• Có trách nhiệm, luôn luôn nỗ lực đạt được mục tiêu\n• Dám nghĩ dám làm, thích tranh đua, nổi bật",
    2: "NGÀY SINH\n• Thấu hiểu, đồng cảm, có năng lực giao tiếp tốt, biết lắng nghe\n• Có năng lực kết nối, hỗ trợ, giúp đỡ người khác\n• Là người dịu dàng, ôn hòa",
    3: "NGÀY SINH\n• Thiên bẩm về ngôn từ và giao tiếp, tích cực, vui vẻ, nhanh nhẹn và thông minh\n• Biết cách thể hiện bản thân tự nhiên và thu hút, biết gây ấn tượng\n• Trung thành và có khả năng thiết lập trật tự, ngôn từ có trọng lượng, sức hút",
    4: "NGÀY SINH\n• Có tư duy logic cực tốt, mạnh trong việc đúc rút, đóng gói thành quy trình\n• Làm các công việc tỉ mỉ rất tốt. Sống chỉn chu, gọn gàng, ngăn nắp\n• Làm việc cẩn thận, chu đáo, kiên định với mục tiêu",
    5: "NGÀY SINH\n• Suy nghĩ sáng tạo, linh hoạt, có nhiều sáng kiến\n• Nhanh nhẹn, hào sảng, phóng khoáng, năng lực thu hút cao\n• Dũng cảm, bản lĩnh, nhiều màu sắc, nhiều ý tưởng",
    6: "NGÀY SINH\n• Duyên dáng, dễ mến, ấm áp, nấu ăn ngon, chu toàn nhà cửa\n• Sống tình cảm, chăm sóc người khác tốt\n• Bao dung, dễ tha thứ cho người khác\n• Giàu lòng trắc ẩn",
    10: "NGÀY SINH\nLà người mạnh mẽ và có năng lực lãnh đạo\n• Có khả năng khai phá, mớ Quang cực kì bản lĩnh\n• Cực kì độc lập và cá tính\n• Có trách nhiệm, luôn luôn nỗ lực đạt được mục tiêu\n• Dám nghĩ dám làm, thích tranh đua, nổi bật",
    11: "NGÀY SINH\n• Thấu hiểu, đồng cảm, có năng lực giao tiếp tốt, biết lắng nghe\n• Có năng lực kết nối, hỗ trợ, giúp đỡ người khác\n• Là người dịu dàng, ôn hòa",
    22: "NGÀY SINH\n• Thiên bẩm về ngôn từ và giao tiếp, tích cực, vui vẻ, nhanh nhẹn và thông minh\n• Biết cách thể hiện bản thân tự nhiên và thu hút, biết gây ấn tượng\n• Trung thành và có khả năng thiết lập trật tự, ngôn từ có trọng lượng, sức hút"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (birthDayDescriptions[number]) {
    return birthDayDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}

function getPersonalityDescription(number) {
  const personalityDescriptions = {
    7: "NHÂN CÁCH\n• Nhìn học thức, có vẻ thông minh, già dặn trước tuổi\n• Hơi khó hiểu, lạnh lùng, khó gần, khó hiểu",
    9: "NHÂN CÁCH\n• Nhiệt tình, tốt bụng, tin tưởng, bao dung\n• Nhìn có vẻ rất sang, trách nhiệm, ôn hòa, đáng tin cậy, đôi khi chịu thiệt về mình\n• Đáng tin cậy",
    8: "NHÂN CÁCH\n• Trông mạnh mẽ, lòng tự trọng cao, dễ tự ái\n• Nhìn quyền lực, sang trọng, phong cách giàu sang, quý phái\n• Giỏi trong điều hành, toát ra năng lượng thu hút ánh nhìn của người khác",
    1: "NHÂN CÁCH\n• Cá tính, độc lập, sáng tạo, tự chủ, kiêu hãnh, cái Tôi cao, tư duy áp đặt\n• Luôn ý thức hoàn thành công việc và được đồng nghiệp tôn trọng\n• Có mục tiêu, tính chiếm lĩnh cao, là người tràn đầy năng lượng",
    2: "NHÂN CÁCH\n• Sứ giả hòa bình, nhẹ nhàng, hòa nhã, thân thiện, ấm áp\n• Người khác cảm thấy bạn thụ động khi ở môi trường mới",
    3: "NHÂN CÁCH\n• Lôi cuốn, thân thiện, vui tươi, hóm hỉnh. Mang lại niềm vui cho người khác\n• Coi trọng ngoại hình, chăm chút hình ảnh, ăn mặc đẹp tới chốn đông người\n• Có thể mang lại năng lượng tích cực cho người khác",
    4: "NHÂN CÁCH\n• Nghiêm túc, ham học hỏi, thích chia sẻ kiến thức\n• Tính thực tế, đáng tin cậy\n• Quan tâm đến kết quả, và tuyệt đối tuân thủ luật lệ và quy trình\n• Hơi bảo thủ và keo kiệt",
    5: "NHÂN CÁCH\n• Tràn đầy năng lượng, hài hước, vui vẻ, thích nhộn nhịp và phiêu lưu\n• Nhìn đôi khi thời thượng và cá tính\n• Thích nghe câu chuyện cuộc đời của người khác",
    6: "NHÂN CÁCH\n• Trách nhiệm, uy tín\n• Quan tâm, chăm sóc, giúp đỡ\n• Tình cảm hài hòa thu hút",
    10: "NHÂN CÁCH\n• Cá tính, độc lập, sáng tạo, tự chủ, kiêu hãnh, cái Tôi cao, tư duy áp đặt\n• Luôn ý thức hoàn thành công việc và được đồng nghiệp tôn trọng\n• Có mục tiêu, tính chiếm lĩnh cao, là người tràn đầy năng lượng",
    11: "NHÂN CÁCH\n• Sứ giả hòa bình, nhẹ nhàng, hòa nhã, thân thiện, ấm áp\n• Người khác cảm thấy bạn thụ động khi ở môi trường mới",
    22: "NHÂN CÁCH\n• Lôi cuốn, thân thiện, vui tươi, hóm hỉnh. Mang lại niềm vui cho người khác\n• Coi trọng ngoại hình, chăm chút hình ảnh, ăn mặc đẹp tới chốn đông người\n• Có thể mang lại năng lượng tích cực cho người khác"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (personalityDescriptions[number]) {
    return personalityDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}
function getMaturityDescription(number) {
  const maturityDescriptions = {
    7: "TRƯỞNG THÀNH\n• Học tập và phát triển bản thân, chia sẻ hoặc truyền dạy kiến thức cho người khác\n• Thường gặp vấp ngã trong cuộc sống\n• Tìm về con đường phát triển tâm linh, phải có đức tin và tu tập",
    9: "TRƯỞNG THÀNH\n• Hãy tham vọng để giúp được nhiều người hơn, đánh thức tâm cho người khác, làm các công việc liên quan đến giáo dục, chuyển hóa, khai sáng con người càng tốt\n• Xây dựng cộng đồng thiện nguyện, cộng đồng có ý nghĩa, giá trị với cuộc đời",
    8: "TRƯỞNG THÀNH\n• Cần học và trang bị các kiến thức liên quan đến tài chính, đầu tư\n• Cần xây dựng mô hình kinh doanh để tạo công ăn việc làm cho nhiều người\n• Học bài học về kiểm soát tốc độ và ngôn từ\n• Nên mở rộng đầu tư, KD",
    1: "TRƯỞNG THÀNH\n• Học cách chịu trách nhiệm với quyết định của mình\n• Học cách tự chủ, tự quyết tự dùng trên đôi chân của mình\n• Học cách gánh vác trọng trách của 1 nhà lãnh đạo\n• Tự tạo cho mình 1 mô hình kinh doanh nào đó\n• Học cách làm việc nhóm và lắng nghe",
    2: "TRƯỞNG THÀNH\n• Học cách lắng nghe, kết nối\n• Tập trung xây dựng mối quan hệ chất lượng\n• Hỗ trợ giúp đỡ người khác\n• Xây dựng cộng đồng, giao lưu, chia sẻ\n• Cần nhạy cảm, tinh tế hơn\n• Cần tìm những liệu pháp chữa lành",
    3: "TRƯỞNG THÀNH\n• Ý thức nghiêm túc về xây dựng thương hiệu cá nhân, học kĩ năng giao tiếp, trau dồi ngôn ngữ, ngữ điệu\n• Cần viết nhật kí, viết sách hoặc viết ra suy nghĩ, trải nghiệm cuộc sống, cần ở môi trường tích cực\n• Nhận trách nhiệm đào tạo, cho mình cơ hội thể hiện bản thân",
    4: "TRƯỞNG THÀNH\n• Cần lên kế hoạch chi tiết cho từng giai đoạn trong cuộc đời mình\n• Làm mọi thứ cẩn trọng, tỉ mỉ hơn, chi tiết và có quy trình\n• Tập trung vào việc nghiên cứu, đào sâu chuyên môn để trở thành chuyên gia",
    5: "TRƯỞNG THÀNH\n• Cần có sự thay đổi, dịch chuyển, cải biến, chuyển đổi mô hình, công việc, sản phẩm hoặc cách làm khác\n• Cần làm những công việc tiên phong, cải cách\n• Chú ý tiểu tiết liên quan đến giấy tờ pháp lý, tránh kiện tụng",
    6: "TRƯỞNG THÀNH\n• Tập trung vào lo toan cho gia đình\n• Hãy biết cho đi\n• Làm những công việc có liên quan đến cộng đồng\n• Mang tình yêu thương vào trong công việc",
    10: "TRƯỞNG THÀNH\n• Học cách chịu trách nhiệm với quyết định của mình\n• Học cách tự chủ, tự quyết tự dùng trên đôi chân của mình\n• Học cách gánh vác trọng trách của 1 nhà lãnh đạo\n• Tự tạo cho mình 1 mô hình kinh doanh nào đó\n• Học cách làm việc nhóm và lắng nghe",
    11: "TRƯỞNG THÀNH\n• Học cách lắng nghe, kết nối\n• Tập trung xây dựng mối quan hệ chất lượng\n• Hỗ trợ giúp đỡ người khác\n• Xây dựng cộng đồng, giao lưu, chia sẻ\n• Cần nhạy cảm, tinh tế hơn\n• Cần tìm những liệu pháp chữa lành",
    22: "TRƯỞNG THÀNH\n• Ý thức nghiêm túc về xây dựng thương hiệu cá nhân, học kĩ năng giao tiếp, trau dồi ngôn ngữ, ngữ điệu\n• Cần viết nhật kí, viết sách hoặc viết ra suy nghĩ, trải nghiệm cuộc sống, cần ở môi trường tích cực\n• Nhận trách nhiệm đào tạo, cho mình cơ hội thể hiện bản thân"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (maturityDescriptions[number]) {
    return maturityDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}

function getDeficiencyDescription(number) {
  const deficiencyDescriptions = {
    7: "THIẾU\n• Thiếu khả năng tự học\n• Thiếu ấm áp, hay nghi ngờ\n• Thiếu sự sâu sắc, tính logic xâu chuỗi đúc kết\n• Hay nghi ngờ năng lực bản thân và người xung quanh",
    9: "THIẾU\n• Thiếu sự cho đi, vị kỉ, nghĩ cho bản thân nhiều hơn\n• Thiếu tham vọng, thiếu khả năng suy nghĩ cho người khác\n• Thiếu khát vọng để làm việc lớn, nhiều ý tưởng nhưng chỉ nằm trong đầu\n• Thiếu tính cộng đồng",
    8: "THIẾU\n• Thiếu khả năng tổ chức, ghi nhớ kém\n• Tính tham lam\n• Thiếu kiến thức về tài chính và đầu tư",
    1: "THIẾU\n• Thiếu mục tiêu, tự ti, do dự, dựa dẫm vào người khác\n• Thiếu kỉ luật, không có kế hoạch\n• Ngộ nhận trách nhiệm nhất.\n• Nhát, không dám thể hiện bản thân\n• Khá cô đơn\n• Bổ sung kỹ năng lắng nghe nhân\n• Không muốn bị chi phối bởi người khác",
    2: "THIẾU\n• Không giỏi trong việc phân tích vấn đề, dễ bị lừa và bị lợi dụng tình cảm\n• Thiếu lắng nghe, hay bị tổn thương vì những vấn đề trong chuyện tình cảm\n• Trực giác thấp, thiếu kiên nhẫn, kết nối kém\n• Chủ động kết nối, trao yêu thương, dám nói lên quan điểm\n• Học cách nhạy cảm hơn với nhu cầu và thái độ của người khác",
    3: "THIẾU\n• Năng lượng thấp, tụt mood\n• Kỹ năng giao tiếp, truyền thông chưa tốt\n• Cảm xúc không thể điều khiển, dễ bị chi phối, diễn đạt ý chưa tốt dễ gây hiểu lầm\n• Sợ đám đông và thiếu tự tin, tự giới hạn bản thân, nhạt nhẽo",
    4: "THIẾU\n• Thiếu tính thực tế, kỷ luật và kiên trì\n• Không bám đuổi mục tiêu đến cùng\n• Làm việc không có quy trình, kế hoạch\n• Không thích làm việc chi tiết, liên quan đến các con số",
    5: "THIẾU\n• Thiếu tính quyết liệt, không dám thay đổi, không dám đương đầu với thách thức\n• Thiếu sáng tạo, thiếu tính linh hoạt, né tránh khó khăn nên họ sẽ nhạt nhòa, tẻ nhạt",
    6: "THIẾU\n• Tuổi thơ thiếu thốn tình thương nên không có mô thức đó khi lớn lên\n• Với người ngoài họ rất nhiệt tình, với người thân họ khó chia sẻ, khó nói lời yêu thương, khó kết nối\n• Một phần khó đường con cái, gia đình hay gặp vấn đề",
    10: "THIẾU\n• Thiếu mục tiêu, tự ti, do dự, dựa dẫm vào người khác\n• Thiếu kỉ luật, không có kế hoạch\n• Ngộ nhận trách nhiệm nhất.\n• Nhát, không dám thể hiện bản thân\n• Khá cô đơn\n• Bổ sung kỹ năng lắng nghe nhân\n• Không muốn bị chi phối bởi người khác",
    11: "THIẾU\n• Không giỏi trong việc phân tích vấn đề, dễ bị lừa và bị lợi dụng tình cảm\n• Thiếu lắng nghe, hay bị tổn thương vì những vấn đề trong chuyện tình cảm\n• Trực giác thấp, thiếu kiên nhẫn, kết nối kém\n• Chủ động kết nối, trao yêu thương, dám nói lên quan điểm\n• Học cách nhạy cảm hơn với nhu cầu và thái độ của người khác",
    22: "THIẾU\n• Năng lượng thấp, tụt mood\n• Kỹ năng giao tiếp, truyền thông chưa tốt\n• Cảm xúc không thể điều khiển, dễ bị chi phối, diễn đạt ý chưa tốt dễ gây hiểu lầm\n• Sợ đám đông và thiếu tự tin, tự giới hạn bản thân, nhạt nhẽo"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (deficiencyDescriptions[number]) {
    return deficiencyDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}
function getRationalThinkingDescription(number) {
  const rationalThinkingDescriptions = {
    7: "TƯ DUY LÍ TRÍ\n• Hay đặt câu hỏi, nghi vấn, hoài nghi\n• Quyết định xong rồi vẫn hỏi tại sao mình lại quyết định như vậy",
    9: "TƯ DUY LÍ TRÍ\n• Cả nể, nghĩ cho người khác trước, sẵn sàng chịu thiệt cho bản thân\n• Nhìn vào bức tranh tổng thể, không nhìn vào chi tiết\n• Có khả năng nhìn xa trông rộng, lý tưởng hóa, cầu toàn hơn",
    8: "TƯ DUY LÍ TRÍ\n• Có tính toán tư duy và thực tế rồi quyết định\n• Rất cần 1 mentor cho niềm tin & chiến lược",
    1: "TƯ DUY LÍ TRÍ\n• Thích kiểm soát người khác\n• Nhanh, dứt khoát, quyết liệt, khi đã ra quyết định rất khó thay đổi, không lắng nghe ý kiến của người khác",
    2: "TƯ DUY LÍ TRÍ\n• Hay do dự, phụ thuộc vào ý kiến của người khác\n• Hay lo sợ, e ngại, khó đưa ra quyết định",
    3: "TƯ DUY LÍ TRÍ\n• Nhanh, sáng tạo, đưa ra các giải quyết độc đáo, nếu được ủng hộ sẽ rất mạnh mẽ, muốn quyết định",
    4: "TƯ DUY LÍ TRÍ\n• Khả năng phân tích, tư duy logic, ưu tiên sự an toàn\n• Chậm, cẩn trọng, chắc chắn, nhiều khi khó quyết định\n• Khả năng nhìn ra được mặt trái của vấn đề",
    5: "TƯ DUY LÍ TRÍ\n• Ra quyết định dựa trên cảm xúc, theo trào lưu\n• Lưu ý: đừng quyết định gì khi vui",
    6: "TƯ DUY LÍ TRÍ\n• Quyết định dựa trên tình cảm\n• Dựa theo ý kiến người xung quanh",
    10: "TƯ DUY LÍ TRÍ\n• Thích kiểm soát người khác\n• Nhanh, dứt khoát, quyết liệt, khi đã ra quyết định rất khó thay đổi, không lắng nghe ý kiến của người khác",
    11: "TƯ DUY LÍ TRÍ\n• Hay do dự, phụ thuộc vào ý kiến của người khác\n• Hay lo sợ, e ngại, khó đưa ra quyết định",
    22: "TƯ DUY LÍ TRÍ\n• Nhanh, sáng tạo, đưa ra các giải quyết độc đáo, nếu được ủng hộ sẽ rất mạnh mẽ, muốn quyết định"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (rationalThinkingDescriptions[number]) {
    return rationalThinkingDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}

function getSubconsciousPowerDescription(number) {
  const subconsciousPowerDescriptions = {
    7: "SỨC MẠNH TIỀM THỨC\n• Là con số kết nối tâm linh mạnh nhất, có thể nhìn thấy những thứ người khác không thấy,\n• Có khả năng cảm nhận được tương lai, trực giác tốt, thường xảy ra hiện tượng Deja Vu\n• Luật hấp dẫn đến nhanh nhất, là con số có thể san bằng tất cả\n• Phải rất cẩn trọng khi sử dụng SMTT 7 vì nghĩ điều tốt ra điều tốt, nghĩ điều xấu ra điều xấu, phải luôn lạc quan",
    9: "SỨC MẠNH TIỀM THỨC\n• Chỉ cần phát tâm hướng thiện, thiện lành, vị tha, biết ơn, cho đi càng nhiều thì càng nhiều phước\n• Khi họ gặp khó khăn sẽ có người tới giúp hay còn gọi là có quý nhân phù trợ",
    8: "SỨC MẠNH TIỀM THỨC\n• Nhạy bén với các cơ hội kinh doanh, xác định mục tiêu rõ ràng, lập kế hoạch tỉ mỉ, cụ thể, chi tiết. Càng tỉ mỉ càng nhanh thành công\n• Thu hút mạnh mẽ về tiền bạc, hết tiền lại có tiền. Nếu lo lắng về tiền thì càng không được như ý",
    1: "SỨC MẠNH TIỀM THỨC\n• Cần tập trung đẩy mạnh suy nghĩ của mình liên quan đến độc lập, phát triển tư duy nhất quán\n• Làm những công việc chuẩn năng lượng\n• Đặt ra những mục tiêu đề vượt ra khỏi vùng an toàn\n• Tìm cố vấn để tránh đi sai đường",
    2: "SỨC MẠNH TIỀM THỨC\n• Phát triển khả năng nhạy bén, tinh tế, luôn gắn với tư duy\n• Cần lắng nghe nhiều hơn",
    3: "SỨC MẠNH TIỀM THỨC\n• Cần có tư duy tích cực\n• Luôn định vị và tin vào việc mình là ai, muốn phát triển hay lan tỏa giá trị gì\n• Đọc sách để tăng từ vựng, giao tiếp và ở gần người hoạt ngôn và nhiều năng lượng\n• Xem, nghe nhiều chương trình ti vi\n• Thiền và tham gia các môi trường năng động",
    4: "SỨC MẠNH TIỀM THỨC\n• Phát triển khả năng về phân tích, đánh giá vấn đề, kiến thức, chuyên môn, vượt khỏi sự an toàn\n• Rèn luyện sự tập trung, kỉ luật, hành động quyết liệt\n• Đặt mình trong những môi trường áp lực. Đưa ra kế hoạch, mục tiêu",
    5: "SỨC MẠNH TIỀM THỨC\n• Dám nghĩ, dám làm, linh hoạt, sáng tạo\n• Quan tâm cao độ đến cảm xúc và trải nghiệm\n• Phải bứt phá và bước ra khỏi vùng an toàn",
    6: "SỨC MẠNH TIỀM THỨC\n• Nghĩ và yêu thương gia đình, kết nối với gia đình cực kỳ mạnh mẽ. Càng chăm lo cho gia đình thì bên ngoài càng tốt\n• Quan tâm đến người khác mà không được quên mình, cân bằng giữa bản thân và gia đình\n• Là người luôn gánh vác trách nhiệm trong cuộc sống",
    10: "SỨC MẠNH TIỀM THỨC\n• Cần tập trung đẩy mạnh suy nghĩ của mình liên quan đến độc lập, phát triển tư duy nhất quán\n• Làm những công việc chuẩn năng lượng\n• Đặt ra những mục tiêu đề vượt ra khỏi vùng an toàn\n• Tìm cố vấn để tránh đi sai đường",
    11: "SỨC MẠNH TIỀM THỨC\n• Phát triển khả năng nhạy bén, tinh tế, luôn gắn với tư duy\n• Cần lắng nghe nhiều hơn",
    22: "SỨC MẠNH TIỀM THỨC\n• Cần có tư duy tích cực\n• Luôn định vị và tin vào việc mình là ai, muốn phát triển hay lan tỏa giá trị gì\n• Đọc sách để tăng từ vựng, giao tiếp và ở gần người hoạt ngôn và nhiều năng lượng\n• Xem, nghe nhiều chương trình ti vi\n• Thiền và tham gia các môi trường năng động"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (subconsciousPowerDescriptions[number]) {
    return subconsciousPowerDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}
function getPassionDescription(number) {
  const passionDescriptions = {
    7: "ĐAM MÊ\n• Trở thành chuyên gia, truyền dạy kiến thức cho người khác\n• Thích nghiên cứu, tìm tòi\n• Thích được kết nối bên trong, thích kết nối với thiên nhiên\n• Muốn có không gian riêng của mình, thoáng đãng, thấy bị tù túng nếu ở trong phòng bí\n• Mong muốn kết nối tâm linh, tìm hiểu cội nguồn, khao khát tri thức",
    9: "ĐAM MÊ\n• Được cống hiến cho cộng đồng\n• Mong muốn có tầm ảnh hưởng với mọi người (Level thấp)\n• Mong muốn có giá trị với cộng đồng, xã hội\n• Được nâng tầm khai sáng tri thức cho người khác (level cao)\n• Thích ý tưởng lớn lao nhìn dưới lăng kính màu hồng",
    8: "ĐAM MÊ\n• Tiêu chuẩn cao trong cuộc sống\n• Yêu thích tiêu tiền và kiếm tiền, thích tài khoản hoặc tiền mặt luôn dư dả\n• Thích được vinh danh và ghi nhận\n• Đam mê trang hoàng nhà cửa, du lịch thích ở nơi tiện nghi, cao cấp",
    1: "ĐAM MÊ\n• Thích làm cái mới, cái có tính tiên phong\n• Thích đi thẳng vào vấn đề, chủ động giải quyết",
    2: "ĐAM MÊ\n• Thích lắng nghe, kết nối\n• Thích sự lãng mạn, ngọt ngào\n• Thích môi trường hòa bình",
    3: "ĐAM MÊ\n• Thích được thể hiện bản thân, thích được mọi người đồng tình với mình\n• Thích được chưng diện, làm đẹp, thích nhạc vui tươi, mạnh, có nhịp điệu\n• Thích làm chủ sân khấu, ở chốn đông người, thích được nói và muốn người khác nói về mình",
    4: "ĐAM MÊ\n• Thích sự an toàn, chắc chắn, ổn định\n• Làm quy trình, thiết lập quy trình cho riêng mình\n• Thích học hỏi, khám phá",
    5: "ĐAM MÊ\n• Yêu thích tự do, trải nghiệm, thích điều mới mẻ\n• Thích công việc có tính sáng tạo, mang lại giá trị khác biệt, khám phá vùng đất mới\n• Không thích bị kiểm soát, gò bó",
    6: "ĐAM MÊ\n• Thích chăm sóc yêu thương, có tính nghệ thuật trong trang trí nhà cửa, giúp đỡ người khác, cống hiến phụng sự",
    10: "ĐAM MÊ\n• Thích làm cái mới, cái có tính tiên phong\n• Thích đi thẳng vào vấn đề, chủ động giải quyết",
    11: "ĐAM MÊ\n• Thích lắng nghe, kết nối\n• Thích sự lãng mạn, ngọt ngào\n• Thích môi trường hòa bình",
    22: "ĐAM MÊ\n• Thích được thể hiện bản thân, thích được mọi người đồng tình với mình\n• Thích được chưng diện, làm đẹp, thích nhạc vui tươi, mạnh, có nhịp điệu\n• Thích làm chủ sân khấu, ở chốn đông người, thích được nói và muốn người khác nói về mình"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (passionDescriptions[number]) {
    return passionDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}


function getYearIndexDescription(number) {
  const yearDescriptions = {
    7: "CHỈ SỐ NĂM\n• Tập trung cho việc phát triển bản thân, quan sát, phân tích, đúc kết những kinh nghiệm trong cả một hành trình trước đó\n• Đưa ra những chiến lược cho năm số 8, 9 để gặt hái thành công; Dành thời gian tĩnh tâm, thiền định; Học tập và trở thành một Chuyên gia\n• Năm số 7 làm nhiều việc thiện, có một Đức tin thì sẽ gặp nhiều may mắn, cần tìm hiểu, học hỏi sâu về Tâm linh",
    9: "CHỈ SỐ NĂM\n• Đây là năm của sự kết thúc một chặng hành trình, hãy biết ơn về chặng đã qua và tìm kiếm cơ hội, tầm nhìn cho chặng đường mới\n• Gieo hạt, từ thiện; Chia sẻ, phụng sự, giúp đỡ người khác; Lan tỏa những giá trị Nhân văn tới Cộng đồng.\n• Từ bỏ công việc không làm cho bạn thỏa mãn; là năm giải quyết những xung đột nổi trội, buông bỏ những chuyện không vui trong quá khứ, hàn gắn những vết thương",
    8: "CHỈ SỐ NĂM\n• Lên kế hoạch ngân sách, hoạch định và sắp xếp lại các khoản tài chính. Học cách cho đi\n• Làm việc trung thực, chăm chỉ và giữ đạo đức nghề nghiệp. Học hỏi về chuyên môn hoặc những điều giúp thăng tiến\n• Hiện thực hóa những ước mơ hay mục tiêu, có dự định hay hoài bão gì thì phải thực hiện hành động ngay\n• Thay đổi những niềm tin đang là rào cản hoặc làm bạn thấy gò bó",
    1: "CHỈ SỐ NĂM\n• Nhanh - làm nhanh - sửa sai nhanh thì sẽ rất thành công.\n• Là năm có nhiều thay đổi lớn hoặc cơ hội sẽ xuất hiện, cần linh hoạt và chủ động năm bắt cơ hội. Cần phải nhanh, quyết liệt: học\n• Cần phải lên kế hoạch, mục tiêu cho 8 năm tiếp theo. Suy nghĩ tích cực và luôn tự tin vào bản thân.",
    2: "CHỈ SỐ NĂM\n• Lắng nghe, quan sát và cần biết phải làm gì để mang sản phẩm dịch vụ tốt hơn đến cho người khác\n• Tập trung xây dựng các mối quan hệ chất lượng\n• Dành nhiều thời gian cho người thân và chia sẻ cảm xúc thật của mình, kiểm soát cảm xúc",
    3: "CHỈ SỐ NĂM\n• Gặp gỡ và kết nối mọi người, hiện diện nhiều hơn và mang lại niềm vui, sự tích cực cho mọi người. Suy nghĩ lạc quan, tích cực, chia sẻ những suy nghĩ và cảm nhận của mình\n• Vui chơi khi nào bạn thích và làm điều mình thích nhiều hơn, kiểm soát chi tiêu\n• Xây dựng thương hiệu cá nhân, định vị bản thân",
    4: "CHỈ SỐ NĂM\n• Cần đầu tư về học tập và đào sâu về chuyên môn, trở thành chuyên gia trong lĩnh vực mình nghiên cứu; Học bài học về sự trung thành, trung thực, liêm chính; Rèn cho mình tính kỉ luật, trách nhiệm, làm mọi thứ phải có quy trình, kế hoạch rõ ràng\n• Cần phải sắp xếp và củng cố lại các nguồn lực: thời gian, cải tổ doanh nghiệp\n• Biểu tượng số 4 liên quan đến hành Thổ nên có lộc về đất đai, BDS, trong việc vay mượn trả nợ cũng rất dễ dàng",
    5: "CHỈ SỐ NĂM\n• Năm dịch chuyển nên chuyển nhà, chuyển chỗ ở, chuyển công ty\n• Trong 1 công ty thì cần có cải cách, cải tiến mạnh mẽ, sẵn sàng cho sự thay đổi và bứt phá\n• Đôi khi bạn sẽ thấy hơi mơ hồ vào nửa đầu năm\n• Lưu ý chi tiết, để ý về giấy tờ pháp lý để tránh kiện tụng",
    6: "CHỈ SỐ NĂM\n• Cần tập trung vào gia đình, cân bằng giữa gia đình, công việc và bản thân, cho đi tình yêu thương vô điều kiện\n• Chủ động gánh vác những trọng trách của gia đình\n• Có những hoạt động phụng sự, cống hiến cho xã hội",
    10: "CHỈ SỐ NĂM\n• Nhanh - làm nhanh - sửa sai nhanh thì sẽ rất thành công.\n• Là năm có nhiều thay đổi lớn hoặc cơ hội sẽ xuất hiện, cần linh hoạt và chủ động năm bắt cơ hội. Cần phải nhanh, quyết liệt: học\n• Cần phải lên kế hoạch, mục tiêu cho 8 năm tiếp theo. Suy nghĩ tích cực và luôn tự tin vào bản thân.",
    11: "CHỈ SỐ NĂM\n• Lắng nghe, quan sát và cần biết phải làm gì để mang sản phẩm dịch vụ tốt hơn đến cho người khác\n• Tập trung xây dựng các mối quan hệ chất lượng\n• Dành nhiều thời gian cho người thân và chia sẻ cảm xúc thật của mình, kiểm soát cảm xúc",
    22: "CHỈ SỐ NĂM\n• Gặp gỡ và kết nối mọi người, hiện diện nhiều hơn và mang lại niềm vui, sự tích cực cho mọi người. Suy nghĩ lạc quan, tích cực, chia sẻ những suy nghĩ và cảm nhận của mình\n• Vui chơi khi nào bạn thích và làm điều mình thích nhiều hơn, kiểm soát chi tiêu\n• Xây dựng thương hiệu cá nhân, định vị bản thân"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (yearDescriptions[number]) {
    return yearDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}

function getMonthIndexDescription(number) {
  const monthDescriptions = {
    7: "CHỈ SỐ THÁNG\n• Tháng của sự chiêm nghiệm bản thân, phát triển cá nhân và tâm linh, là lúc bạn nên lùi lại khỏi những xô bồ của cuộc sống, để nạp lại năng lượng bằng việc giành thời gian yên tĩnh 1 mình để chiêm nghiệm về mục đích sống và những cách để làm cuộc sống của bạn tốt đẹp hơn\n• Là lúc để tìm lại sợi dây kết nối tâm linh trong bạn\n• Là tháng rất phù hợp với việc tham gia các khoá học tập và phát triển bản thân và tốt nghiệp nó bạn sẽ có nhiều cơ hội phát triển",
    9: "CHỈ SỐ THÁNG\n• Là tháng của sự kết nối cộng đồng, cho đi nhiều hơn vì tháng này bạn sẽ khá may mắn và thuận lợi\n• Nếu bạn có những chuyện thị phi hay mâu thuẫn nội tâm, việc của bạn là phải học cân bằng cảm xúc, hãy cho đi bạn sẽ được nhận lại\n• Đây cũng là tháng của sự kết thúc và chuyển hoá, bạn cần phải lên kế hoạch chuẩn bị cho một dự án mới, sản phẩm mới để bắt đầu bước vào giai đoạn mới",
    8: "CHỈ SỐ THÁNG\n• Lên kế hoạch và sắp xếp lại các khoản tài chính\n• Làm việc chăm chỉ và hạn chế chi tiêu nhiều, nắm bắt lấy cơ hội để bứt phá gia tăng doanh thu\n• Tiền và những mối quan hệ chất lượng sẽ nảy nở mạnh khi tập trung cho công việc\n• Là thời điểm thuận lợi để có một nguồn lực tới giúp đỡ bạn trong việc phát triển sự nghiệp",
    1: "CHỈ SỐ THÁNG\n• Lên kế hoạch cho những dự án mới hoặc sản phẩm mới một cách rõ ràng và sáng tạo\n• Tháng của sự khởi đầu và hành động, bạn cần phải giải quyết và dứt bỏ hết những thứ tồn đọng trong quá khứ (hoặc tháng trước) quyết tâm, suy nghĩ quyết đoán, nhằm kiểm soát tay lái điều khiển, và nắm quyền chỉ huy. Hãy khác biệt đối mới và làm những điều bạn chưa bao giờ làm\n• Các cơ hội sẽ đến với bạn nên đừng ngại nắm bắt chúng, hãy dám tham vọng, hạ",
    2: "SỐ THÁNG\n• Tập trung vào các mối quan hệ.\n• Tháng cần lùi lại nghỉ ngơi và quan sát các thay đổi cả bên trong lẫn bên ngoài\n• Tập cách quản trị cảm xúc",
    3: "CHỈ SỐ THÁNG\n• Làm và đi những nơi mình thích, kết giao gặp gỡ mọi người, vui chơi và thử sức mình ở những lĩnh vực sáng tạo\n• Giữ thái độ lạc quan trước mọi việc, thể hiện bản thân, chia sẻ suy nghĩ, mục tiêu của bạn",
    4: "CHỈ SỐ THÁNG\n• Sắp xếp lại việc kinh doanh và cuộc sống, giữ cho bản thân có tổ chức, tập trung và chủ động, hoàn thành tất cả dự án còn dang dở; chăm chỉ và nỗ lực trong mọi lĩnh vực của cuộc sống\n• Xây dựng nền móng vững chãi và ổn định, lên kế hoạch trước, không trì hoãn, kiên trì vượt mọi thử thách",
    5: "CHỈ SỐ THÁNG\n• Làm những việc mình thích, dành thời gian gặp gỡ, khám phá, trải nghiệm, đi đến nơi mới, kết giao với những mối quan hệ mới\n• Năng lượng tháng khá dồi dào nên tự tin thể hiện bản thân nhiều hơn",
    6: "CHỈ SỐ THÁNG\n• Dành nhiều thời gian trang hoàng chăm sóc nhà cửa\n• Quan tâm và dành thời gian chia sẻ kết nối với người thân, gia đình\n• Dành nhiều thời gian cho tổ ấm và tỏa năng lượng yêu thương gia đình, làm việc thiện nguyện",
    10: "CHỈ SỐ THÁNG\n• Lên kế hoạch cho những dự án mới hoặc sản phẩm mới một cách rõ ràng và sáng tạo\n• Tháng của sự khởi đầu và hành động, bạn cần phải giải quyết và dứt bỏ hết những thứ tồn đọng trong quá khứ (hoặc tháng trước) quyết tâm, suy nghĩ quyết đoán, nhằm kiểm soát tay lái điều khiển, và nắm quyền chỉ huy. Hãy khác biệt đối mới và làm những điều bạn chưa bao giờ làm\n• Các cơ hội sẽ đến với bạn nên đừng ngại nắm bắt chúng, hãy dám tham vọng, hạ",
    11: "SỐ THÁNG\n• Tập trung vào các mối quan hệ.\n• Tháng cần lùi lại nghỉ ngơi và quan sát các thay đổi cả bên trong lẫn bên ngoài\n• Tập cách quản trị cảm xúc",
    22: "CHỈ SỐ THÁNG\n• Làm và đi những nơi mình thích, kết giao gặp gỡ mọi người, vui chơi và thử sức mình ở những lĩnh vực sáng tạo\n• Giữ thái độ lạc quan trước mọi việc, thể hiện bản thân, chia sẻ suy nghĩ, mục tiêu của bạn"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (monthDescriptions[number]) {
    return monthDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}

function getStageIndexDescription(number) {
  const stageDescriptions = {
    7: "CHỈ SỐ CHẶNG\n• Lan tỏa tri thức của mình với tầm nhìn lớn hơn, liên tục học tập và nâng cấp quản trị bản thân\n• Làm công việc liên quan đến tri thức, giáo dục\nCần phát triển năng lực của bản thân, có niềm tin và nhân sinh quan đúng đắn. Làm công việc có liên quan đến tâm linh rất tốt\n• Cần có danh vị trong cuộc đời này",
    9: "CHỈ SỐ CHẶNG\n• Giai đoạn có rất nhiều may mắn, cơ hội để nuôi dưỡng lòng trắc ẩn, sự khoan dung bằng cách hết lòng phụng sự người khác\n• May mắn: Danh vọng, tiền tài và giá trị Nhân đạo; Có cơ hội vươn tầm Quốc tế; Dòng tiền có thể tới từ nhiều nguồn\n• Làm các công việc liên quan tới Giáo dục Cộng đồng sẽ phù hợp trong giai đoạn này",
    8: "CHỈ SỐ CHẶNG\n• Lúc trẻ học bài học liên quan đến đầu tư, kinh doanh, bán hàng. Trải nghiệm mô hình kinh doanh và học các bài học về phát triển, điều hành, quản lý, đạo đức, kinh doanh, nghị lực và thành công\n• Linh hoạt và nhạy bén nắm bắt các cơ hội kinh doanh, nên cho mình vào môi trường áp lực mới kích hoạt được năng lượng về tiền bạc, cần tìm một người thầy thực chiến để dẫn dắt mình trên con đường kinh doanh\n• Cân bằng giữa gia đình và công việc",
    1: "CHỈ SỐ CHẶNG\n• Làm gì thì làm đi, khi bạn muốn vũ trụ sẽ sắp xếp lại cho bạn\n• Hãy cố gắng đứng trên đôi chân của chính mình; học cách lãnh đạo và dẫn dắt người khác\n• Chặng này sẽ đem tới cho bạn cơ hội để rèn luyện sự độc lập tự chủ, dễ được giao phó vai trò quản lý, lãnh đạo\n• Phù hợp để mở riêng, làm riêng trong sự nghiệp của mình",
    2: "CHỈ SỐ CHẶNG\n• Nên làm những công việc lắng nghe và kết nối với người khác. Cần kết nối hay thể hiện tình cảm với ai thì thể hiện ra\n• Học cách cân bằng cảm xúc để kết nối với chính mình. Cần có sự nhạy cảm tinh tế với nhu cầu của người khác thì trực giác sẽ được kích hoạt, mọi thứ cứ nhẹ nhàng đón nhận",
    3: "CHỈ SỐ CHẶNG\n• Trong chặng đầu của số 3 bạn sẽ là 1 người cực kì vui vẻ, cảm hứng, sáng tạo, bộc lộ những năng khiếu về nghệ thuật - trong giai đoạn này bạn sẽ học bài học về hoạt ngôn, giao tiếp\n• Trong giai đoạn trưởng thành bạn sẽ tạo dựng sự nghiệp trên sự sáng tạo và tính nghệ thuật, bạn cần là người tỏa sáng trên sân khấu, truyền cảm hứng cho người khác bằng nguồn năng lượng vô tận của bạn\n• Trong chặng cuối bạn cần chia sẻ kiến thức và kinh nghiệm cho người khác, có xu hướng kết giao và mở rộng mối quan hệ",
    4: "CHỈ SỐ CHẶNG\n• Tập trung phát triển, đào sâu về chuyên môn\n• Làm mọi thứ có quy trình, kế hoạch đầy đủ, bám đuổi mục tiêu đến cùng\n• Thượng tôn kỷ luật trong mọi mục tiêu đề ra\n• Chú ý đến những giấy tờ, thủ tục, quy trình, những yếu tố chi tiết, tỉ mỉ\n• Nếu đi chuẩn trường năng lượng thì sẽ có lộc về bất động sản",
    5: "CHỈ SỐ CHẶNG\n• Làm những công việc có tính chất sáng tạo, cần tạo ra sự đổi mới, nắm bắt, dẫn đầu xu hướng và cải cách trong giai đoạn này\n• Thời kỳ cho ta cơ hội để bứt phá, vượt ngưỡng, nên gặp gỡ giao lưu nhiều hơn thì gặp nhiều cơ hội, kiếm nhiều tiền hơn\n• Vì nguồn lực đến nhiều, dễ đạt được những đỉnh cao và đỉnh cao của thành công cũng là hồ sâu của vực thẳm, nên tiếp tục duy trì nguồn lực, giữ mục tiêu để chinh phục những mục tiêu cao hơn\n• Là con số thú vị nhất của tư do bản thể\n• Là 1 giai đoạn liên quan đến giấy tờ pháp lý kiện tụng (nếu đi chung thách thức 4 thì lưu ý hơn)",
    6: "CHỈ SỐ CHẶNG\n• Cần thực hiện trách nhiệm với gia đình, gánh vác trọng trách trong gia đình, thực hiện trọn vẹn vai trò với tình yêu thương vô điều kiện\n• Cần cống hiến và phụng sự cho xã hội, cho đi để còn mãi\n• Học cách cân bằng giữa bản thân, gia đình và công việc",
    10: "CHỈ SỐ CHẶNG\n• Làm gì thì làm đi, khi bạn muốn vũ trụ sẽ sắp xếp lại cho bạn\n• Hãy cố gắng đứng trên đôi chân của chính mình; học cách lãnh đạo và dẫn dắt người khác\n• Chặng này sẽ đem tới cho bạn cơ hội để rèn luyện sự độc lập tự chủ, dễ được giao phó vai trò quản lý, lãnh đạo\n• Phù hợp để mở riêng, làm riêng trong sự nghiệp của mình",
    11: "CHỈ SỐ CHẶNG\n• Nên làm những công việc lắng nghe và kết nối với người khác. Cần kết nối hay thể hiện tình cảm với ai thì thể hiện ra\n• Học cách cân bằng cảm xúc để kết nối với chính mình. Cần có sự nhạy cảm tinh tế với nhu cầu của người khác thì trực giác sẽ được kích hoạt, mọi thứ cứ nhẹ nhàng đón nhận",
    22: "CHỈ SỐ CHẶNG\n• Trong chặng đầu của số 3 bạn sẽ là 1 người cực kì vui vẻ, cảm hứng, sáng tạo, bộc lộ những năng khiếu về nghệ thuật - trong giai đoạn này bạn sẽ học bài học về hoạt ngôn, giao tiếp\n• Trong giai đoạn trưởng thành bạn sẽ tạo dựng sự nghiệp trên sự sáng tạo và tính nghệ thuật, bạn cần là người tỏa sáng trên sân khấu, truyền cảm hứng cho người khác bằng nguồn năng lượng vô tận của bạn\n• Trong chặng cuối bạn cần chia sẻ kiến thức và kinh nghiệm cho người khác, có xu hướng kết giao và mở rộng mối quan hệ"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (stageDescriptions[number]) {
    return stageDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}
function getChallengeIndexDescription(number) {
  const challengeDescriptions = {
    7: "THÁCH THỨC\nThiếu đức tin, hay hoài nghi\nThường gặp vấn đề với những hoài nghi, nghi ngờ này",
    9: "THÁCH THỨC\nHọc về đầu tư và tài chính\nHọc cách sử dụng và quản trị nhân lực, cần tránh áp đặt lên người khác\nQuản trị tâm tham về tiền, thành công, danh vọng\n• Cần chế ngự cái Tôi, cần cân bằng giữa vật chất và tinh thần",
    8: "THÁCH THỨC\nCần phải độc lập, quyết đoán\nCần học cách đứng trên đôi chân của chính mình\nTự đưa ra mục tiêu để phá vỡ giới hạn của bản thân\nHọc cách làm việc nhóm, học cách lắng nghe",
    1: "THÁCH THỨC\n• Kiểm soát được cảm xúc của mình\n• Cần chú ý đến kết nối, chia sẻ\n• Xây dựng các mối quan hệ chất lượng",
    2: "THÁCH THỨC\nCần học bài học liên quan đến quản trị cảm xúc, chậm lại để suy nghĩ trước khi nói\nGiao tiếp và truyền thông có mạnh mẽ\nCần nhận cơ hội để được đứng trên sân khấu, để thế giới biết bạn là ai",
    3: "THÁCH THỨC\n• Phải kỉ luật, tổ chức và tập trung trong mọi vấn đề của cuộc sống\n• Thay vì bỏ cuộc, trì hoãn hay trốn tránh, hãy kiên trì đối diện và vượt qua mọi thử thách\n• Chú ý đến giấy tờ, thủ tục, quy trình và những yếu tố tỉ mỉ",
    4: "THÁCH THỨC\n• Dám mạo hiểm, dám bước ra khỏi vùng an toàn của mình\n• Có hoạt động cải cách trong công việc, trong doanh nghiệp\n• Tránh việc thích nhiều thứ cùng lúc\n• Cẩn thận giấy tờ, kiện tụng",
    5: "THÁCH THỨC\nCần thực hiện trách nhiệm, gánh vác trọng trách, thực hiện trọn vẹn vai trò với tình yêu thương vô điều kiện\n• Cần cống hiến và phụng sự cho xã hội\n• Cân bằng bản thân - gia đình - công việc",
    6: "THÁCH THỨC\n• Kiểm soát được cảm xúc của mình\n• Cần chú ý đến kết nối, chia sẻ\n• Xây dựng các mối quan hệ chất lượng",
    10: "THÁCH THỨC\nCần học bài học liên quan đến quản trị cảm xúc, chậm lại để suy nghĩ trước khi nói\nGiao tiếp và truyền thông có mạnh mẽ\nCần nhận cơ hội để được đứng trên sân khấu, để thế giới biết bạn là ai",
    11: "THÁCH THỨC\n• Phải kỉ luật, tổ chức và tập trung trong mọi vấn đề của cuộc sống\n• Thay vì bỏ cuộc, trì hoãn hay trốn tránh, hãy kiên trì đối diện và vượt qua mọi thử thách\n• Chú ý đến giấy tờ, thủ tục, quy trình và những yếu tố tỉ mỉ",
    22: "THÁCH THỨC\n• Dám mạo hiểm, dám bước ra khỏi vùng an toàn của mình\n• Có hoạt động cải cách trong công việc, trong doanh nghiệp\n• Tránh việc thích nhiều thứ cùng lúc\n• Cẩn thận giấy tờ, kiện tụng"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (challengeDescriptions[number]) {
    return challengeDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
}

function getSolutionDescription(number) {
  const solutionDescriptions = {
    7: "Học phát triển bản thân liên tục\nCần đọc nhiều sách\nCần có sự tĩnh lặng để chiêm nghiệm về bản thân, cuộc đời\nHọc cách quan sát, phân tích và đúc kết mọi thứ",
    9: "Hãy tham vọng hơn trong việc giúp được bao nhiêu người\nNgười số 9 nhưng cảm xúc tiêu cực rất lâu và cảm xúc đó hay trồi lên",
    8: "Học kiến thức liên quan đến con số, đầu tư\nHọc cách chi tiết và thực tế hơn\nCần có người cố vấn",
    1: "Làm những công việc chuẩn năng lượng\nĐặt ra những mục tiêu để vượt ra khỏi vùng an toàn\nTìm cố vấn để tránh đi sai đường\nHãy là người dám nghĩ lớn và hành động mạnh mẽ",
    2: "Chủ động kết nối, trao yêu thương, dám nói lên quan điểm\nHọc cách nhạy cảm hơn với nhu cầu và thái độ của người khác",
    3: "Đọc sách để tăng từ vựng, giao tiếp và ở gần người hoạt ngôn và nhiều năng lượng (bộ 358 đi đúng)\nXem, nghe nhiều chương trình ti vi\nThiền và tham gia các môi trường năng động",
    4: "Đặt mình trong những môi trường áp lực. Đưa ra kế hoạch, mục tiêu\nXác định mục tiêu cụ thể, rõ ràng (mục tiêu SMART), chia nhỏ và hoàn thành mục tiêu mỗi ngày\nĐưa mình vào môi trường kỉ luật, duy trì thói quen tốt hàng ngày để duy trì và bám đuổi mục tiêu\nXây dựng quy trình trong các công việc mình làm, có timeline, checklist cụ thể để theo dõi",
    5: "Tìm được đam mê, biết sở thích của mình để tìm cơ hội trải nghiệm, khám phá cái mới\nSẵn sàng đương đầu với thử thách, rủi ro\nTham gia vào cộng đồng tích cực để phát triển bản thân, học cách đơn giản hóa vấn đề",
    6: "Phải đồng cảm, quan tâm chăm sóc gia đình và mọi người xung quanh\nCho đi tình yêu thương nhiều hơn\nGánh vác trách nhiệm và làm việc thiện",
    10: "Làm những công việc chuẩn năng lượng\nĐặt ra những mục tiêu để vượt ra khỏi vùng an toàn\nTìm cố vấn để tránh đi sai đường\nHãy là người dám nghĩ lớn và hành động mạnh mẽ",
    11: "Chủ động kết nối, trao yêu thương, dám nói lên quan điểm\nHọc cách nhạy cảm hơn với nhu cầu và thái độ của người khác",
    22: "Đọc sách để tăng từ vựng, giao tiếp và ở gần người hoạt ngôn và nhiều năng lượng (bộ 358 đi đúng)\nXem, nghe nhiều chương trình ti vi\nThiền và tham gia các môi trường năng động"
  };

  // Kiểm tra xem số nhập vào có trong số các số hợp lệ không
  if (solutionDescriptions[number]) {
    return solutionDescriptions[number];
  } else {
    return "Không có thông tin cho số này";
  }
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

  // Find letters that appear more than 2 times and convert them to numbers
  const frequentNumbers = [];
  for (let char in letterCount) {
    if (letterCount[char] > 2) {
      const number = letterToNumber[char];
      frequentNumbers.push(number);
    }
  }



  return frequentNumbers;
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
  let reducedPersonalMonth = personalMonth;

  // Reduce until the result is a single digit
  while (reducedPersonalMonth >= 10) {
    reducedPersonalMonth = reducedPersonalMonth
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  console.log(reducedPersonalMonth);
  return reducedPersonalMonth;
}


function calculatePersonalDay(personalMonth) {
  // Get the current day of the month
  const currentDay = new Date().getDate();

  // Calculate the personal day number
  const personalDay = personalMonth + currentDay;

  // Reduce the personal day number to a single digit
  let reducedPersonalDay = personalDay;

  while (reducedPersonalDay >= 10) {
    reducedPersonalDay = reducedPersonalDay
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }

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
function checkForKarmicDebtNumbers(day, month, year, name) {
  const karmicDebtNumbers = [13, 14, 16, 19];

  // Calculate the numbers
  const lifePathNoSum = calculateLifePathNumberNoSum(day, month, year);  // Updated to take day, month, and year
  const expressionNumberNoSum = calculateExpressionNumberByWordNoSum(name);
  const personalityNumberNoSum = calculatePersonalityNumberNoSum(name);
  const soulUrgeNumberNoSum = calculateSoulUrgeNumberNoSum(name);

  // Combine all numbers into an array
  const allNumbers = [lifePathNoSum, expressionNumberNoSum, personalityNumberNoSum, soulUrgeNumberNoSum];

  // Check if any of the numbers match karmic debt numbers
  const foundKarmicDebtNumbers = allNumbers.filter(num => karmicDebtNumbers.includes(num));

  if (foundKarmicDebtNumbers.length > 0) {
    console.log(`Karmic debt numbers found: ${foundKarmicDebtNumbers.join(', ')}`);

    // Create an array of karmic debt numbers with their corresponding values
    const karmicDebtResults = foundKarmicDebtNumbers.map(num => {
      switch(num) {
        case 14:
          return "14/5";
        case 16:
          return "16/7";
        case 19:
          return "19/1";
        case 13:
          return "13/4";
        default:
          return num; // Return the number itself if no match is found
      }
    });

    return karmicDebtResults;
  } else {
    console.log("No karmic debt numbers found.");
    return ["..."];
  }
}


function Phivatchat(day, month, year, name) {
  const karmicDebtNumbers = [11,2,6,9,33];

  // Calculate the numbers
  //No nghiep
	const lifePathNoSum = calculateLifePathNumber(day, month, year);  // Updated to take day, month, and year
	const expressionNumberNoSum = calculateExpressionNumberByWord(name);
	const personalityNumberNoSum = calculatePersonalityNumber(name);
	const soulUrgeNumberNoSum = calculateSoulUrgeNumber(name);

  // Combine all numbers into an array
  const allNumbers = [lifePathNoSum, expressionNumberNoSum, personalityNumberNoSum, soulUrgeNumberNoSum];

  // Check if any of the numbers match karmic debt numbers
  const foundKarmicDebtNumbers = allNumbers.filter(num => karmicDebtNumbers.includes(num));

  if (foundKarmicDebtNumbers.length > 0) {
  
    return foundKarmicDebtNumbers;
  } else {
   
   return ["..."];
  }
}
function Vatchat(day, month, year, name) {
  const karmicDebtNumbers = [4,7,22];

  // Calculate the numbers
  //No nghiep
	const lifePathNoSum = calculateLifePathNumber(day, month, year);  // Updated to take day, month, and year
	const expressionNumberNoSum = calculateExpressionNumberByWord(name);
	const personalityNumberNoSum = calculatePersonalityNumber(name);
	const soulUrgeNumberNoSum = calculateSoulUrgeNumber(name);

  // Combine all numbers into an array
  const allNumbers = [lifePathNoSum, expressionNumberNoSum, personalityNumberNoSum, soulUrgeNumberNoSum];

  // Check if any of the numbers match karmic debt numbers
  const foundKarmicDebtNumbers = allNumbers.filter(num => karmicDebtNumbers.includes(num));

  if (foundKarmicDebtNumbers.length > 0) {
  
    return foundKarmicDebtNumbers;
  } else {
   
    return ["..."];
  }
}
function Congcuphuongtien(day, month, year, name) {
  const karmicDebtNumbers = [1,3,5,8];

  // Calculate the numbers
  //No nghiep
	const lifePathNoSum = calculateLifePathNumber(day, month, year);  // Updated to take day, month, and year
	const expressionNumberNoSum = calculateExpressionNumberByWord(name);
	const personalityNumberNoSum = calculatePersonalityNumber(name);
	const soulUrgeNumberNoSum = calculateSoulUrgeNumber(name);

  // Combine all numbers into an array
  const allNumbers = [lifePathNoSum, expressionNumberNoSum, personalityNumberNoSum, soulUrgeNumberNoSum];

  // Check if any of the numbers match karmic debt numbers
  const foundKarmicDebtNumbers = allNumbers.filter(num => karmicDebtNumbers.includes(num));

  if (foundKarmicDebtNumbers.length > 0) {
  
    return foundKarmicDebtNumbers;
  } else {
   
    return ["..."];
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
 

		  /////
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
 const debtnumber = checkForKarmicDebtNumbers(day, month, year,name);

  // Calculate the passion number
  const passionNumber = calculatePassionNumbers(name);
   const phivatchat = Phivatchat(day, month, year,name);
      const vatchat = Vatchat(day, month, year,name);
	   const congcuphuongtien = Congcuphuongtien(day, month, year,name);
    const { challenge1, challenge2, challenge3, challenge4 } = calculateChallengeNumbers(day, month, year);

const { stage1, stage2, stage3, stage4 } = calculateLifeStages(day, month, year);

  // Display the results in the HTML
  document.getElementById('stage-number').textContent = `${stage1}, ${stage2}, ${stage3}, ${stage4}`;
  document.getElementById('stage-name').textContent = `Chặng 1: ${stage1}, Chặng 2: ${stage2}, Chặng 3: ${stage3}, Chặng 4: ${stage4}`;
  
  
   // Display the results in the HTML
  document.getElementById('challenge-number').textContent = `${challenge1}, ${challenge2}, ${challenge3}, ${challenge4}`;
  document.getElementById('challenge-name').textContent = `Thách thức chặng 1: ${challenge1}, Thách thức chặng 2: ${challenge2}, Thách thức chặng 3: ${challenge3}, Thách thức chặng 4: ${challenge4}`;
  
  document.getElementById('year-number').textContent = personalYearNumber;
  document.getElementById('year-name').textContent = getNumberName(personalYearNumber);

  // Set the calculated numbers and names
  document.getElementById('phivatchat-number').textContent = phivatchat;
 // document.getElementById('phivatchat-name').textContent = getNumberName(phivatchat);
  
   document.getElementById('vatchat-number').textContent = vatchat;
  //document.getElementById('vatchat-name').textContent = getNumberName(vatchat);
  
     document.getElementById('congcuphuongtien-number').textContent = congcuphuongtien;
  //document.getElementById('congcuphuongtien-name').textContent = getNumberName(congcuphuongtien);
  
document.getElementById('month-number').textContent = personalMonth;
  document.getElementById('month-name').textContent = getNumberName(personalMonth);
  
  document.getElementById('debt-number').textContent = debtnumber;
 // document.getElementById('debt-name').textContent = getNumberName(debtnumber);
  


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
  document.getElementById('missing-numbers').textContent = missingNumbers.join(', ') || '...';
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
// Function to get the Duong Doi Name
function getDuongDoiName(number) {
    const duongDoiNames = {
        1: "Là người có năng lực phân tích tốt, trực giác cao, kỹ tính, tiêu chuẩn cao. Hiểu biết sâu rộng, khả năng tập trung rất cao, tự học, giỏi chiến lược, tầm nhìn, tư duy logic, trí nhớ tốt. Giỏi nắm bắt được quy luật, sống độc lập, hay gặp may.",
        2: "Điềm đạm, hòa nhã, ấm áp, hay giúp đỡ người khác, có tấm lòng bao dung, rộng lượng, chu đáo, tinh tế. Có óc quan sát tốt, thông minh, có trách nhiệm, trực giác tốt, tâm lý, chỉn chu, nói được làm được. Dễ tha thứ, thích chia sẻ với người khác, cầu tiến, đào tạo, trách nhiệm.",
        3: "Là người có năng lượng mạnh mẽ, sáng tạo, hài hước, hoạt ngôn và thẳng thắn, rõ ràng. Hướng ngoại, kinh doanh tốt, giỏi nắm bắt cơ hội. Cân bằng tốt, chủ động trong công việc, chịu áp lực vô cùng lớn.",
        4: "Là người năng động tự lập và cần mẫn, khi đã quyết định thì rất khó thay đổi. Muốn hoàn thành mọi việc một cách tốt nhất, và hầu như luôn thành công. Không thích nhờ sự trợ giúp, bởi họ luôn muốn tự mình thực hiện công việc.",
        5: "Có năng lực hòa giải, kết nối mọi người. Khả năng lắng nghe và khéo léo trong giao tiếp. Trực giác tốt, lãng mạn và tinh tế. Tốt bụng và không thích xung đột, coi trọng tình cảm, không tính toán.",
        6: "Năng lực làm chủ sân khấu, truyền cảm hứng, khiếu hài hước, khả năng gây ảnh hưởng đến người khác bằng năng lượng và ngôn từ. Đỉnh cao giao tiếp, sáng tạo và nhiều ý tưởng, thông minh, quan sát để nắm bắt tâm lý người khác rất tốt.",
        7: "Ham học, chăm chỉ, có khả năng tự học cao. Cẩn thận, tỉ mỉ, chi tiết, rõ ràng, kỷ luật, quy trình, nguyên tắc, chỉn chu, chắc chắn. Kiên trì, kiên định, ổn định, an toàn, trách nhiệm, thực tế, chung thủy.",
        8: "Năng lượng tích cực cao, thông minh, sáng tạo, tự tỏa sáng, có khả năng quy tụ, xoay chuyển tình thế. Thích nghi tốt, hóa thân giỏi, linh hoạt, nhanh nhẹn, tự do. Thích chinh phục và trải nghiệm.",
        9: "Nuôi dưỡng, chăm sóc, bảo vệ tốt. Năng lực của sự kết nối, yêu thương, chăm sóc, tư vấn, chữa lành bằng tình yêu thương. Năng lực sáng tạo nhiều thứ theo kiểu nghệ thuật. Quản trị và điều hành con người.",
        10: "Là người năng động tự lập, và cần mẫn, khi đã quyết định thì rất khó thay đổi. Muốn hoàn thành mọi việc một cách tốt nhất, và hầu như luôn thành công. Không thích nhờ sự trợ giúp, bởi họ luôn muốn tự mình thực hiện công việc.",
        11: "Có năng lực hòa giải, kết nối mọi người. Khả năng lắng nghe và khéo léo trong giao tiếp. Trực giác tốt, lãng mạn và tinh tế. Tốt bụng và không thích xung đột, coi trọng tình cảm, không tính toán.",
        22: "Năng lực làm chủ sân khấu, truyền cảm hứng, khiếu hài hước, khả năng gây ảnh hưởng đến người khác bằng năng lượng và ngôn từ. Đỉnh cao giao tiếp, sáng tạo và nhiều ý tưởng, thông minh, quan sát để nắm bắt tâm lý người khác rất tốt."
    };

    // Check if the number exists in the duongDoiNames object
    if (duongDoiNames[number]) {
        return duongDoiNames[number];
    } else {
        return "Không có thông tin cho số này";
    }
}

// Function to show the description in the popup
function showDescription(number) {
    const description = getDuongDoiName(number);

    if (description) {
        document.getElementById('popup-content').innerText = description;
        document.getElementById('popup').style.display = 'block'; // Show the popup
    } else {
        alert('No description available for this number.');
    }
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
}

// Event listener for clicking on the Life Path number
document.getElementById('life-path').addEventListener('click', function () {
    const lifePathNumber = parseInt(document.getElementById('life-path').innerText); // Get the number from the span text

    if (!isNaN(lifePathNumber)) {
        showDescription(lifePathNumber); // Show the description for the clicked number
    } else {
        alert("Please select a valid Life Path number.");
    }
});






// Event listener for closing the popup
document.getElementById('close-popup').addEventListener('click', closePopup);
