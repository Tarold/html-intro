'use strict';

const userList = document.querySelector('#list');
const select = document.querySelector('.selectedUsers');
const buttonStart = document.querySelector('#start');
const buttonNext = document.querySelector('#next');
const buttonNumber = document.querySelector('#number');
const buttonPrev = document.querySelector('#prev');
const buttonEnd = document.querySelector('#end');
const allInfo = document.querySelector('.allInfo');
const nameInfo = document.querySelector('.infoName');
const locationInfo = document.querySelector('.infoLocation');
const emailInfo = document.querySelector('.infoEmail');
const dobInfo = document.querySelector('.infoDob');
const regInfo = document.querySelector('.infoReg');
const phoneInfo = document.querySelector('.infoPhone');
const imgInfo = document.querySelector('.infoImg');
const usersCount = 34;
let selectedList = [];
let page = 0;
let allData;

function renderList() {
  fetch(
    `https://randomuser.me/api/?page=${page + 1}&results=${
      usersCount - page * 10 > 10 ? 10 : usersCount - page * 10
    }&exc=login,cell,id,nat&seed=0458a254c596df4b&noinfo`
  )
    .then((response) => response.json())
    .then((data) => renderUsers(data.results))
    .catch((err) => console.log(err))
    .then((data) => saveData(data))
    .then(checkAvailable());
}

renderList();

function saveData(data) {
  allData = data;
}

function renderUsers(data) {
  userList.textContent = '';
  for (const user of data) {
    renderUserCard(user);
  }
  return data;
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

function setPage() {
  debugger;
  let temp = Number.parseInt(prompt('Set page:')) - 1;
  if (temp > -1 && temp * 10 < usersCount) {
    page = temp;
  } else {
    alert('Page not find');
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
  buttonNumber.textContent = page + 1;
}

function imgClick(e) {
  e.stopPropagation();
  disabledScroll();
  findUser(allData, e);
  allInfo.classList.toggle('hide');
}

function hideInfo() {
  enableScroll();
  allInfo.classList.toggle('hide');
  imgInfo.src = '#';
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
  dob: { date: dobDate },
  registered: { date: regDate },
  phone,
  picture: { large },
  location,
}) {
  changeName(name);
  changeDOB(dobDate);
  changeReg(regDate);
  changeEmail(email);
  changePhone(phone);
  changePic(large);
  changeLocation(location);
}

function changeName(name) {
  nameInfo.textContent = `Name:${objToString(name)}`;
}
function changeDOB(dob) {
  dobInfo.textContent = `Date of birth: ${
    new Date(dob).toLocaleString().split(',')[0]
  }  `;
}
function changeReg(regDate) {
  regInfo.textContent = `Date of registration: ${
    new Date(regDate).toLocaleString().split(',')[0]
  }`;
}
function changeEmail(email) {
  emailInfo.textContent = email;
  emailInfo.href = `mailto:${email}`;
}

function changePhone(phone) {
  phoneInfo.textContent = `Telephone: ${phone}`;
  phoneInfo.href = `tel:${phone}`;
}
function changePic(large) {
  imgInfo.src = large;
}
function changeLocation(location) {
  delete location.coordinates;
  delete location.timezone;
  locationInfo.textContent = objToString(location, ', ', true);
}

function objToString(object, splitter, isShowKeys) {
  let str = '';
  if (splitter === undefined) {
    splitter = ' ';
  }
  for (const key in object) {
    const addKey =
      isShowKeys === true && splitter !== undefined ? key + ':' : ' ';
    if (typeof object[key] === 'object') {
      str += `${addKey} [${objToString(object[key], ' ', isShowKeys)}]`;
    } else {
      str += `${addKey} ${object[key]}`;
    }
    str += splitter;
  }
  return str.slice(0, splitter.length * -1);
}

buttonStart.onclick = startPage;
buttonNext.onclick = nextPage;
buttonPrev.onclick = prevPage;
buttonEnd.onclick = endPage;
allInfo.onclick = hideInfo;
buttonNumber.onclick = setPage;
