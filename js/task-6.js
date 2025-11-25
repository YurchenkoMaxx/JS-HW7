
const liElements = document.querySelectorAll('#books .item');
console.log(`Number of categories: ${liElements.length}`);


liElements.forEach((item) => {
    const title = item.querySelector('h2').textContent;
    const booksCount = item.querySelectorAll('ul li').length;
    console.log(`Title: ${title}`);
    console.log(`Books: ${booksCount}`);
    
});



