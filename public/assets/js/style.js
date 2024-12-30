
const otpInputs = document.querySelectorAll('.otp-box');
const nextButton = document.getElementById('next-button');

// Automatically focus on the next input
otpInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

// Handle the Next button click
nextButton.addEventListener('click', () => {
  const otpCode = Array.from(otpInputs).map((input) => input.value).join('');
  alert(`Entered OTP: ${otpCode}`);
});

