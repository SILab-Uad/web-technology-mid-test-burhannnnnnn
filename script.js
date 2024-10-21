const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()_+{}[]|:;<>,.?/";

document.getElementById('generate').addEventListener('click', function () {
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSpecial = document.getElementById('special').checked;

  let characterPool = '';

  if (includeUppercase) characterPool += uppercase;
  if (includeLowercase) characterPool += lowercase;
  if (includeNumbers) characterPool += numbers;
  if (includeSpecial) characterPool += special;

  if (characterPool === '') {
    alert('Please select at least one character set!');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});