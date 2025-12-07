// script.js

const loginBox = document.getElementById('loginBox');
const editorBox = document.getElementById('editorBox');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const numberInput = document.getElementById('numberInput');
const meaningText = document.getElementById('meaningText');
const statusText = document.getElementById('status');

window.login = function() {
  const email = emailInput.value;
  const password = passwordInput.value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      loginBox.style.display = 'none';
      editorBox.style.display = 'block';
      statusText.textContent = 'Logged in successfully.';
    })
    .catch(error => {
      statusText.textContent = 'Login failed: ' + error.message;
    });
};

window.logout = function() {
  auth.signOut().then(() => {
    loginBox.style.display = 'block';
    editorBox.style.display = 'none';
    emailInput.value = '';
    passwordInput.value = '';
    numberInput.value = '';
    meaningText.value = '';
    statusText.textContent = 'Logged out.';
  });
};

window.loadMeaning = function() {
  const num = numberInput.value.trim();
  if (!num) {
    statusText.textContent = 'Please enter a number.';
    return;
  }

  db.collection('meanings').doc(num).get()
    .then(doc => {
      if (doc.exists) {
        meaningText.value = doc.data().meaning;
        statusText.textContent = 'Loaded meaning for number ' + num;
      } else {
        meaningText.value = '';
        statusText.textContent = 'No meaning found for number ' + num;
      }
    })
    .catch(error => {
      statusText.textContent = 'Error loading meaning: ' + error.message;
    });
};

window.saveMeaning = function() {
  const num = numberInput.value.trim();
  const meaning = meaningText.value.trim();

  if (!num || !meaning) {
    statusText.textContent = 'Number and meaning cannot be empty.';
    return;
  }

  db.collection('meanings').doc(num).set({ meaning })
    .then(() => {
      statusText.textContent = 'Meaning saved for number ' + num;
    })
    .catch(error => {
      statusText.textContent = 'Failed to save meaning: ' + error.message;
    });
};
