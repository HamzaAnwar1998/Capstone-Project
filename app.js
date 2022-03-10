const speakers = [
  {
    name: 'Youchai Benkler', img: './images/YochaiBenkler.jpg', status: 'Berkmen Professor of Enterpreneurial Legal Studies at Harward Law School', text: 'Benkler studies commons based peer production, and published his semanial book "The wealth of networks in 2006".',
  },
  {
    name: 'Kilnam Chon', img: './images/kilnamchon.jpg', status: '', text: 'Kilnam Chon helped bring internet to asia and is an outspoken advocate for the open net and digital commons. In 2012, he was inducted into the inaugural class of the internet societies ISOC Internet Hall of Fame',
  },
  {
    name: 'SohYeong Noh', img: './images/hae-young-noh.jpg', status: 'Director of Art Center Nabi and a board member of CC Korea', text: 'As the main venue for new media art production in Korea. nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts',
  },
  {
    name: 'Julia Leda', img: './images/julialeda.jpg', status: 'President of young pirates of Europe', text: 'European integration and political democracy and participation of youth through online as her major condemn. Redas report outlining potential changes to EU copyright law was approved by the parliament in July',
  },
  {
    name: 'Lila Tretikov', img: './images/lila_tretikov.jpg', status: 'Executive Director of Wikimedia Foundation', text: 'Lila Tretikov is the Executive Director of Wikimedia Foundation, the non profit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and is used by nearly half a billion people around the world every month',
  },
  {
    name: 'Ryan Merkley', img: './images/ryanmerkley1-full.jpg', status: 'CEO of Creative Commons, ex COO of Mozilla Foundation', text: 'Ryan had been leading open source projects at the Mozilla Foundation such as the open source movement',
  },
];

document.getElementById('body').onload = () => {
  speakers.forEach((speaker) => {
    const speakersBox = document.getElementById('speakers-box');
    speakersBox.innerHTML += `
        <div class="speaker">
                    <div class="left">
                        <div class="img">
                            <img src='${speaker.img}'/>
                        </div>
                    </div>
                    <div class="right">
                        <h4 class="name">${speaker.name}</h4>
                        <div class="status">${speaker.status}</div>
                        <p class="right-text">${speaker.text}</p>
                    </div>
                </div>`;
  });
};

// toggle menu

// declaring variable
const navbox = document.getElementById('navbox');
const itemsBox = document.getElementById('items-box');
const bars = document.getElementById('bars');
const cross = document.getElementById('cross');
const wrapper = document.getElementById('wrapper');
const navItems = document.querySelectorAll('.items');
document.getElementById('bars').addEventListener('click', () => {
  // activating header to full height
  navbox.classList.add('active');

  // hiding the bars
  bars.classList.add('active');

  // showing the cross
  cross.classList.add('active');

  // showing the links
  itemsBox.classList.add('active');

  // overflow hidden to wrapper
  wrapper.classList.add('active');
});

// clicking on cross icon
cross.addEventListener('click', () => {
  // deactivating header from full height to normal
  navbox.classList.remove('active');

  // showing the bars
  bars.classList.remove('active');

  // hiding the cross
  cross.classList.remove('active');

  // overflow auto to wrapper
  wrapper.classList.remove('active');
});

// clicking on nav items
navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    // deactivating header from full height to normal
    navbox.classList.remove('active');

    // showing the bars
    bars.classList.remove('active');

    // hiding the cross
    cross.classList.remove('active');

    // overflow auto to wrapper
    wrapper.classList.remove('active');
  });
});

// clicking on campaign btn
document.getElementById('campaign-btn').onclick = () => {
  // deactivating header from full height to normal
  navbox.classList.remove('active');

  // showing the bars
  bars.classList.remove('active');

  // hiding the cross
  cross.classList.remove('active');

  // overflow auto to wrapper
  wrapper.classList.remove('active');
};