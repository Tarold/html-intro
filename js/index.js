'use strict';

let selectedList = [];
const userList = document.querySelector('#list');
const select = document.querySelector('.selectedUsers');
const buttonStart = document.querySelector('#start');
const buttonNext = document.querySelector('#next');
const buttonPrev = document.querySelector('#prev');
const buttonEnd = document.querySelector('#end');
const allInfo = document.querySelector('.allInfo');

const usersCount = 34;
let page = 0;
//TODO page counter, dont show standart allInfoCard, some persons dont show, street number: name:, dont fetch data wath we know, normalize code
function renderList() {
  fetch(
    `https://randomuser.me/api/?page=${page + 1}&results=${
      usersCount - page * 10 > 10 ? 10 : usersCount - page * 10
    }&inc=name,gender,picture,registered&seed=0458a254c596df4b&noinfo`
  )
    .then((response) => response.json())
    .then((data) => renderUsers(data.results))
    .catch((err) => console.log(err))
    .then(checkAvailable());
}

renderList();

function renderUsers(data) {
  userList.textContent = '';
  for (const user of data) {
    renderUserCard(user);
  }
}

function renderUserCard(data) {
  userList.append(createUserCard(data));
}

function createUserCard({ name, picture, gender, registered }) {
  name = objToString(name);

  const newLi = document.createElement('li');
  newLi.classList.add('user', gender);

  //перевірка чи була вибрана картка раніше
  if (selectedList.some((element) => element === name)) {
    newLi.classList.add('selected');
  }

  newLi.append(
    createImgElement('img', 'userImg', picture.medium),
    createContent(name, registered)
  );
  newLi.onclick = selecteUser;
  return newLi;
}

function createContent(name, { age }) {
  const element = createTextElement('div', 'userContent', '');
  element.append(
    createTextElement('p', 'userName', name),
    createTextElement('p', 'userAgeOnForum', `years at site: ${age}`)
  );
  return element;
}

function createTextElement(typeEL, classEL, texEL) {
  const element = document.createElement(typeEL);
  element.className = classEL;
  element.textContent = texEL;
  return element;
}

function createImgElement(typeEL, classEL, urlEL) {
  const element = document.createElement(typeEL);
  element.className = classEL;
  element.src = urlEL;
  element.onclick = imgClick;
  return element;
}

function selecteUser() {
  if (this.classList.contains('selected')) {
    this.classList.remove('selected');
    selectedList = selectedList.filter(
      (item) => item !== this.querySelector('.userName').textContent
    );
  } else {
    this.classList.add('selected');
    selectedList.push(this.querySelector('.userName').textContent);
  }
  reloadList();
}

function reloadList() {
  select.textContent = `Selected Users: ${selectedList.toString()}`;
}

function startPage() {
  page = 0;
  renderList();
}

function prevPage() {
  if (page - 1 > -1) {
    page -= 1;
  }
  renderList();
}

function nextPage() {
  if ((page + 1) * 10 < usersCount) {
    page += 1;
  }
  renderList();
}
function endPage() {
  while ((page + 1) * 10 < usersCount) {
    page += 1;
  }
  renderList();
}

function checkAvailable() {
  if (page === 0) {
    buttonPrev.setAttribute('disabled', '');
    buttonStart.setAttribute('disabled', '');
  } else {
    buttonPrev.removeAttribute('disabled');
    buttonStart.removeAttribute('disabled');
  }
  if ((page + 1) * 10 > usersCount) {
    buttonNext.setAttribute('disabled', '');
    buttonEnd.setAttribute('disabled', '');
  } else {
    buttonNext.removeAttribute('disabled');
    buttonEnd.removeAttribute('disabled');
  }
}

function imgClick(e) {
  e.stopPropagation();
  disabledScroll();
  getAllInfo(e);
  allInfo.classList.toggle('hide');
}
function getAllInfo(e) {
  fetch(
    `https://randomuser.me/api/?page=${page + 1}&results=${
      usersCount - page * 10 > 10 ? 10 : usersCount - page * 10
    }&exc=login,cell,id,nat,gender&seed=0458a254c596df4b&noinfo`
  )
    .then((response) => response.json())
    .then((data) => findUser(data.results, e))
    .catch((err) => console.log(err));
}

function findUser(data, e) {
  for (const user of data) {
    if (
      objToString(user.name) ===
      e.target.parentNode.querySelector('.userName').textContent
    ) {
      updateAllInfo(user);
      break;
    }
  }
}

function updateAllInfo({
  name,
  email,
  dob,
  registered,
  phone,
  picture: { large },
  location,
}) {
  const nameInfo = document.querySelector('.infoName');
  const locationInfo = document.querySelector('.infoLocation');
  const emailInfo = document.querySelector('.infoEmail');
  const dobInfo = document.querySelector('.infoDob');
  const regInfo = document.querySelector('.infoReg');
  const phoneInfo = document.querySelector('.infoPhone');
  const imgInfo = document.querySelector('.infoImg');

  nameInfo.textContent = objToString(name);
  const birthday = new Date(dob.date);
  dobInfo.textContent = `Date of birth: ${birthday.getFullYear()}-${birthday.getMonth()}-${birthday.getDate()}`;
  const registr = new Date(registered.date);
  regInfo.textContent = `Date of registration: ${registr.getFullYear()}-${registr.getMonth()}-${registr.getDate()}`;
  emailInfo.textContent = email;
  emailInfo.href = `mailto:${email}`;
  phoneInfo.textContent = `${phone}`;
  phoneInfo.href = `tel:${phone}`;
  imgInfo.src = large;
  delete location.coordinates;
  delete location.timezone;
  location.street.number = location.street.number;
  locationInfo.textContent = objToString(location, ', ', true);
}

function hideInfo() {
  enableScroll();
  allInfo.classList.toggle('hide');
}

function objToString(object, splitter, isShowKeys) {
  let str = '';
  if (splitter === undefined) {
    splitter = ' ';
  }
  if (isShowKeys === undefined) {
    for (const iterator in object) {
      if (typeof object[iterator] === 'object') {
        str += objToString(object[iterator], ' ', true);
      } else {
        str += object[iterator];
      }
      str += splitter;
    }
  } else {
    for (const iterator in object) {
      if (typeof object[iterator] === 'object') {
        str += iterator + ' ' + objToString(object[iterator], ' ', true);
      } else {
        str += iterator + ': ' + object[iterator];
      }
      str += splitter;
    }
  }

  return str.slice(0, splitter.length * -1);
}

buttonStart.onclick = startPage;
buttonNext.onclick = nextPage;
buttonPrev.onclick = prevPage;
buttonEnd.onclick = endPage;
allInfo.onclick = hideInfo;
