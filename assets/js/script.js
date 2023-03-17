const pageTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'Come Back !';
});
window.addEventListener('focus', () => {
  document.title = pageTitle;
});

const menuBtn = document.getElementById('menubtn');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const noscroll = document.querySelector('html, body');
const events = document.getElementById('newEvents');
const programs = document.getElementById('allPrograms');
const movies = document.getElementById('moviesList');
const partners = document.getElementById('partnerList');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
  noscroll.classList.add('noscroll');
});
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  noscroll.classList.remove('noscroll');
});

// Datas

const newEvents = [
  {
    dates: ['2023.3.28', '2023.3.30'],
    eventTitle: 'Grammy Award',
  },
  {
    dates: ['2023.4.28', '2023.4.30'],
    eventTitle: 'Cinema Fest',
  },
  {
    dates: ['2023.5.28', '2023.5.30'],
    eventTitle: 'Hakuna matata movies',
  },
  {
    dates: ['2023.6.28', '2023.6.30'],
    eventTitle: 'London Movie',
  },
  {
    dates: ['2023.7.28', '2023.7.30'],
    eventTitle: 'Holly Spirit',
  },
];
const newProgram = [
  {
    programIcon: 'assets/icons/comedy.png',
    programName: 'Comedy',
    programDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus iure possimus vel.',
  },
  {
    programIcon: 'assets/icons/crime.png',
    programName: 'Crime',
    programDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus iure possimus vel.',
  },
  {
    programIcon: 'assets/icons/affection.png',
    programName: 'Affection',
    programDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus iure possimus vel.',
  },
  {
    programIcon: 'assets/icons/police.png',
    programName: 'Police',
    programDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus iure possimus vel.',
  },
  {
    programIcon: 'assets/icons/science-fiction.png',
    programName: 'Fiction',
    programDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus iure possimus vel.',
  },
];
const newMovie = [
  {
    coverImage: 'assets/img/img1.jpg',
    bgImage: 'assets/img/b&w.jpg',    
    movieName: 'No way home',
    movieDate: '2022-10-28',
    movieDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit voluptatem magni.',
  },
  {
    coverImage: 'assets/img/img2.jpg',
    movieName: 'Astro man',
    movieDate: '2022-11-28',
    movieDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit voluptatem magni.',
  },
  {
    coverImage: 'assets/img/img3.jpg',
    movieName: 'Mr Joker',
    movieDate: '2022-12-28',
    movieDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit voluptatem magni.',
  },
  {
    coverImage: 'assets/img/img4.jpg',
    movieName: 'The Demon',
    movieDate: '2023-1-28',
    movieDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit voluptatem magni.',
  },
  {
    coverImage: 'assets/img/img5.jpg',
    movieName: 'Free Mind',
    movieDate: '2023-4-28',
    movieDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit voluptatem magni.',
  },
];
const newPartner = [
  {
    partnerImage: 'assets/img/exa.png',
    partnerName: 'eXa Limited 01',
  },
  {
    partnerImage: 'assets/img/exa.png',
    partnerName: 'eXa Limited 02',
  },
  {
    partnerImage: 'assets/img/exa.png',
    partnerName: 'eXa Limited 03',
  },
  {
    partnerImage: 'assets/img/exa.png',
    partnerName: 'eXa Limited 03',
  },
];

events.innerHTML += `
          <div class="events">
            <div class="events1">
              <p><b>${newEvents[0].dates[0]} ~ ${newEvents[0].dates[1]}</b></p>
              <p>${newEvents[0].eventTitle}</p>
            </div>
            <div class="events1">
              <p><b>${newEvents[1].dates[0]} ~ ${newEvents[1].dates[1]}</b></p>
              <p>${newEvents[1].eventTitle}</p>
            </div>
            <div class="events1">
              <p><b>${newEvents[2].dates[0]} ~ ${newEvents[2].dates[1]}</b></p>
              <p>${newEvents[2].eventTitle}</p>
            </div>
            <div class="events1">
              <p><b>${newEvents[3].dates[0]} ~ ${newEvents[3].dates[1]}</b></p>
              <p>${newEvents[3].eventTitle}</p>
            </div>
            <div class="events1">
              <p><b>${newEvents[4].dates[0]} ~ ${newEvents[4].dates[1]}</b></p>
              <p>${newEvents[4].eventTitle}</p>
            </div>
          </div>
`;
programs.innerHTML += `
        <li class="program">
        <div class="program-icon">
          <img src="${newProgram[0].programIcon}" alt="This is a comedy illustration picture">
        </div>
        <p class="program-tag">${newProgram[0].programName}</p>
        <p class="program-about">${newProgram[0].programDescription}</p>
        </li>
        <li class="program">
        <div class="program-icon">
          <img src="${newProgram[1].programIcon}" alt="This is a crime illustration picture">
        </div>
        <p class="program-tag">${newProgram[1].programName}</p>
        <p class="program-about">${newProgram[1].programDescription}</p>
        </li>
        <li class="program">
        <div class="program-icon">
          <img src="${newProgram[2].programIcon}" alt="This is a affection illustration picture">
        </div>
        <p class="program-tag">${newProgram[2].programName}</p>
        <p class="program-about">${newProgram[2].programDescription}</p>
        </li>
        <li class="program">
        <div class="program-icon">
          <img src="${newProgram[3].programIcon}" alt="This is a police illustration picture">
        </div>
        <p class="program-tag">${newProgram[3].programName}</p>
        <p class="program-about">${newProgram[3].programDescription}</p>
        </li>
        <li class="program">
        <div class="program-icon">
          <img src="${newProgram[4].programIcon}" alt="This is a fiction illustration picture">
        </div>
        <p class="program-tag">${newProgram[4].programName}</p>
        <p class="program-about">${newProgram[4].programDescription}</p>
        </li>
`;
movies.innerHTML += `
          <li class="top-movie-1">
            <div class="movi-cover-name">
              <div class="movie-cover">
                <div class="movie-bg"><img src="${newMovie[0].bgImage}" alt="This backgroun image"></div>
                <div class="movie-img">
                  <img src="${newMovie[0].coverImage}" alt="This is spiderman cover picture">
                </div>
              </div>
              <div class="movie-name">
                <div>
                  <p class="m-name">${newMovie[0].movieName}</p>
                  <p class="movie-date">${newMovie[0].movieDate}</p>
                </div>
                <p class="movie-description">${newMovie[0].movieDescription}</p>
              </div>
            </div>            
          </li>
          <li class="top-movie-1">
            <div class="movi-cover-name">
              <div class="movie-cover">
              <div class="movie-bg"><img src="${newMovie[0].bgImage}" alt="This backgroun image"></div>
                <div class="movie-img">
                  <img src="${newMovie[1].coverImage}" alt="This is spiderman cover picture">
                </div>
              </div>
              <div class="movie-name">
                <div>
                  <p class="m-name">${newMovie[1].movieName}</p>
                  <p class="movie-date">${newMovie[1].movieDate}</p>
                </div>
                <p class="movie-description">${newMovie[1].movieDescription}</p>
              </div>
            </div>
          </li>
          <li class="top-movie-1">
            <div class="movi-cover-name">
              <div class="movie-cover">
              <div class="movie-bg"><img src="${newMovie[0].bgImage}" alt="This backgroun image"></div>
                <div class="movie-img">
                  <img src="${newMovie[2].coverImage}" alt="This is spiderman cover picture">
                </div>
              </div>
              <div class="movie-name">
                <div>
                  <p class="m-name">${newMovie[2].movieName}</p>
                  <p class="movie-date">${newMovie[2].movieDate}</p>
                </div>
                <p class="movie-description">${newMovie[2].movieDescription}</p>
              </div>
            </div>
          </li>
          <li class="top-movie-1">
            <div class="movi-cover-name">
              <div class="movie-cover">
              <div class="movie-bg"><img src="${newMovie[0].bgImage}" alt="This backgroun image"></div>
                <div class="movie-img">
                  <img src="${newMovie[3].coverImage}" alt="This is spiderman cover picture">
                </div>
              </div>
              <div class="movie-name">
                <div>
                  <p class="m-name">${newMovie[3].movieName}</p>
                  <p class="movie-date">${newMovie[3].movieDate}</p>
                </div>
                <p class="movie-description">${newMovie[3].movieDescription}</p>
              </div>
            </div>
          </li>
          <li class="top-movie-1">
            <div class="movi-cover-name">
              <div class="movie-cover">
              <div class="movie-bg"><img src="${newMovie[0].bgImage}" alt="This backgroun image"></div>
                <div class="movie-img">
                  <img src="${newMovie[4].coverImage}" alt="This is spiderman cover picture">
                </div>
              </div>
              <div class="movie-name">
                <div>
                  <p class="m-name">${newMovie[4].movieName}</p>
                  <p class="movie-date">${newMovie[4].movieDate}</p>
                </div>
                <p class="movie-description">${newMovie[4].movieDescription}</p>
              </div>
            </div>
          </li>
`;
partners.innerHTML += `
          <li class="partner">
            <img src="${newPartner[0].partnerImage}" alt="This is a patner logo">
            <p>${newPartner[0].partnerName}</p>
          </li>
          <li class="partner">
            <p>${newPartner[1].partnerName}</p>
            <img src="${newPartner[1].partnerImage}" alt="This is a patner logo">
          </li>
          <li class="partner">
            <img src="${newPartner[2].partnerImage}" alt="This is a patner logo">
            <p>${newPartner[2].partnerName}</p>
          </li>
          <li class="partner">
            <p>${newPartner[3].partnerName}</p>
            <img src="${newPartner[3].partnerImage}" alt="This is a patner logo">
          </li>
`;