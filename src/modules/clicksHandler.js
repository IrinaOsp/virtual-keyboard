import { keyArr } from './DOM.js';

export const textArea = document.querySelector('.textarea');

let cursorPosition = textArea.selectionStart;
textArea.selectionStart = cursorPosition;
textArea.selectionEnd = cursorPosition;

const keyboardArea = document.querySelector('.keyboard');

keyboardArea.addEventListener('mousedown', (event) => {
  if (event.target !== textArea) {
    event.preventDefault();
    textArea.focus();
  }
});

export const insertSymb = (symb) => {
  cursorPosition = textArea.selectionStart;
  const beforeCoursor = textArea.value.slice(0, textArea.selectionStart);
  const afetrCoursor = textArea.value.slice(textArea.selectionStart, textArea.value.length);
  textArea.value = `${beforeCoursor}${symb}${afetrCoursor}`;
  cursorPosition += 1;
  textArea.selectionStart = cursorPosition;
  textArea.selectionEnd = cursorPosition;
};

const delSymb = () => {
  cursorPosition = textArea.selectionStart;
  let beforeCoursor = textArea.value.slice(0, textArea.selectionStart);
  const afetrCoursor = textArea.value.slice(textArea.selectionStart, textArea.value.length);
  beforeCoursor = beforeCoursor.slice(0, beforeCoursor.length - 1);
  textArea.value = `${beforeCoursor}${afetrCoursor}`;
  cursorPosition -= 1;
  textArea.selectionStart = cursorPosition;
  textArea.selectionEnd = cursorPosition;
};

export function clicksHandler() {
  keyArr.forEach((key) => {
    key.addEventListener('mousedown', () => {
      if (!key.classList.contains('key_service')) {
        insertSymb(key.textContent);
      } else {
        switch (key.textContent) {
          case 'space':
            insertSymb(' ');
            break;
          case 'backspace':
            delSymb();
            break;
          case 'tab':
            insertSymb('\t');
            break;
          case 'enter':
            insertSymb('\n');
            break;
          case 'shift':
            break;
          case 'alt':
            break;
          case 'ctrl':
            break;
          case '⇐':
            if (textArea.selectionStart >= 1) {
              cursorPosition = textArea.selectionStart;
              textArea.selectionStart = cursorPosition - 1;
              textArea.selectionEnd = cursorPosition - 1;
            }
            break;
          case '⇒':
            if (textArea.selectionStart <= textArea.value.length) {
              cursorPosition = textArea.selectionStart;
              textArea.selectionStart = cursorPosition + 1;
              textArea.selectionEnd = cursorPosition + 1;
            }
            break;
          case '⇑':
            insertSymb('⇑');
            break;
          case '⇓':
            insertSymb('⇓');
            break;
          default: break;
        }
      }
    });
  });
}
