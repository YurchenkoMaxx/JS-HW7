const products = [
  {
    url:
      'https://images.pexels.com/photos/4109990/pexels-photo-4109990.jpeg?auto=compress&dpr=2&w=500',
    alt: 'Fresh bread',
    name: 'Bread',
  },
  {
    url:
      'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&dpr=2&w=500',
    alt: 'Cheese on a wooden board',
    name: 'Cheese',
  },
  {
    url:
      'https://images.pexels.com/photos/143134/pexels-photo-143134.jpeg?auto=compress&dpr=2&w=500',
    alt: 'Milk in a glass bottle',
    name: 'Milk',
  },
];


const gallery = document.querySelector('.products-gallery');


function productTemplate(product) {
    return `<li class= "product-item">
    <img src="${product.url}" alt="${product.alt}" width="300">
    <h3>${product.name}</h3>
    </li>`;

}

function productsTemplate(products) {
    return products.map(productTemplate).join('')
    
};

const markup = productsTemplate(products);

gallery.insertAdjacentHTML('beforeend', markup);
