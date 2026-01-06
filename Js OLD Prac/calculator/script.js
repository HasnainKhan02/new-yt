const display = document.getElementById('display');
let current = '';

document.querySelectorAll('.btn-number').forEach(btn => {
  btn.addEventListener('click', () => {
    if (display.innerText === '0' || current === '0') {
      current = btn.innerText;
    } else {
      current += btn.innerText;
    }
    display.innerText = current;
  });
});

document.querySelectorAll('.btn-operator').forEach(btn => {
  btn.addEventListener('click', () => {
    const op = btn.innerText;

    if (op === '⌫') {
      current = current.slice(0, -1);
    } else {
      // Prevent multiple operators in a row
      if (/[+\-*/.]$/.test(current)) return;
      current += op;
    }

    display.innerText = current || '0';
  });
});

document.querySelector('.btn-clear').addEventListener('click', () => {
  current = '';
  display.innerText = '0';
});

document.querySelector('.btn-equal').addEventListener('click', () => {
  try {
    current = eval(current).toString();
  } catch {
    current = 'Error';
  }
  display.innerText = current;
});

document.getElementById("hi-button").addEventListener('click', () => {
  document.getElementById("display").innerText = "Thanks For Using Calculator "
  ;
  display.style.fontFamily = "Montserrat sans-serif";
});
