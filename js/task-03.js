const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },

];

const list = document.querySelector('.gallery');

function createMarkup(arr) {
  const markUp = arr.map(({ url, alt, }) =>
    `<li>
    <img src="${url}" alt="${alt}" width = '300'>
    </li>`);
  
  list.insertAdjacentHTML('afterbegin', markUp);
  console.log(markUp);
};

list.style.listStyleType = 'none';
list.style.display = 'flex';
list.style.flexDirection  = 'row';
list.style.alignItems = 'center';
list.style.gap = '24px';
list.style.justifyContent = 'center';
list.style.flexWrap = 'wrap';


createMarkup(images);