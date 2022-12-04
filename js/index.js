'user strict';

const users = [
  {
    firstName: 'Test1',
    lastName: 'Testovich1',
    age: 28,
    photoSrc:
      'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
  },
  {
    firstName: 'Test2',
    lastName: 'Testovich2',
    age: 31,
    photoSrc:
      'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    firstName: 'Test3',
    lastName: 'Testovich3',
    age: 70,
    photoSrc:
      'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    firstName: 'Test4',
    lastName: 'Testovich4',
    age: 20,
    photoSrc:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    firstName: 'Test5',
    lastName: 'Testovich5',
    age: 28,
    photoSrc:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const usersListEl = document.querySelector('.usersList');

users.forEach((u) => {
  const usersListItemEl = document.createElement('li');
  usersListItemEl.classList.add('usersListItem');
  usersListEl.append(usersListItemEl);

  const userPhotoEl = document.createElement('img');
  userPhotoEl.classList.add('userProfilePhoto');
  userPhotoEl.src = u.photoSrc;
  userPhotoEl.alt = `${u.firstName} ${u.lastName}`;
  usersListItemEl.append(userPhotoEl);

  const userNameEl = document.createElement('p');
  userNameEl.classList.add('userName');
  userNameEl.textContent = `${u.firstName} ${u.lastName}`;
  usersListItemEl.append(userNameEl);

  const userAge = document.createElement('div');
  userAge.textContent = u.age;
  usersListItemEl.append(userAge);

  const removeUserBtn = document.createElement('button');
  removeUserBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  usersListItemEl.append(removeUserBtn);
});
