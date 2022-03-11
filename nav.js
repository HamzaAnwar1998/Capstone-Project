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