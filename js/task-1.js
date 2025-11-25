const ulElems = document.querySelector('ul#categories');
const liElems = document.querySelectorAll('.item');
console.log(`Number of categories: ${liElems.length}`);

liElems.forEach((item) => {
    const title = item.querySelector('h2').textContent;
    const elemCount = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elemCount}`);
    });