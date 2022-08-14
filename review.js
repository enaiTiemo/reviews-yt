// local reviews data

const reviews  = [
  {
    id: 1,
    name: 'Stan Smith',
    job: 'Web Developer',
    img: 'image/alien.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur illum similique totam labore veritatis illo quibusdam autem fuga. Ad?'
  },
  {
    id: 2,
    name: 'Anna Jonah',
    job: 'Web Designer',
    img: 'image/black.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur illum similique totam labore veritatis illo quibusdam autem fuga. Ad?'
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'Intern Employee',
    img: 'image/minion.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur illum similique totam labore veritatis illo quibusdam autem fuga. Ad?'
  },
  {
    id: 1,
    name: 'Billy Batson',
    job: 'Shazam The Boss',
    img: 'image/theweeknd.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur illum similique totam labore veritatis illo quibusdam autem fuga. Ad?'

  }
];

// select items 

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showFunction();
});

function showFunction() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prevBtn.addEventListener('click', function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showFunction();
});

nextBtn.addEventListener('click', function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showFunction();
});

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showFunction();
});