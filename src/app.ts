const test = document.querySelector('.test');

const testDom = document.createElement('article');

testDom.textContent = 'this is typescript file';

test?.appendChild(testDom);
