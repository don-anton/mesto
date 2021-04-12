
let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile-info__edit-button');
let popupClose = document.querySelector('.popup__close-icon');
let formElement = document.querySelector('.edit-form');
let nameInput = document.querySelector("input[name='name']"); 
let jobInput =  document.querySelector("input[name='profession']");
let profileName = document.querySelector('.profile-info__name');
let profileJob = document.querySelector('.profile-info__profession');


function showClick () {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

}

function hideClick () {
    popup.classList.remove('popup_opened')
}


function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    hideClick ()
   }

popupOpen.addEventListener('click', showClick);
popupClose.addEventListener('click', hideClick);
formElement.addEventListener('submit', formSubmitHandler);


// Массив начальных карточек
let elementCards = document.querySelector('.elements')

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]


  
  //открытие/закрытие формы новой карточки

let addCardButton = document.querySelector('.profile__add-button');
let addCardForm = document.querySelector('.popup_add');
let addCardCloseButton = addCardForm.querySelector('.popup__close-icon');

function openAddCardWindow () {
    addCardForm.classList.add('popup_opened')
}

function closeAddCardWindow () {
    addCardForm.classList.remove('popup_opened')
}

addCardButton.addEventListener('click', openAddCardWindow);
addCardCloseButton.addEventListener('click', closeAddCardWindow);

  // создание карточек
  let startCardTemplate = document.querySelector('.template').content.querySelector('.element')

  let newCardForm = addCardForm.querySelector('.new-card-form')
  let newCardImageInput = addCardForm.querySelector("input[name='link']");
  let newCardTitleInput = addCardForm.querySelector("input[name='title']")

  function addNewCard (e) {
    e.preventDefault()
    let inputTitle = newCardTitleInput.value
    let inputImage = newCardImageInput.value
    

    let cardTemplate = startCardTemplate.cloneNode(true)
    let startCardTitle = cardTemplate.querySelector('.element__name')
    let startCardImage = cardTemplate.querySelector('.element__image')
    startCardTitle.textContent = inputTitle;
    startCardImage.src = inputImage;
    startCardImage.alt = inputTitle;


    
    
    elementCards.prepend(cardTemplate)  

    
    closeAddCardWindow();
}
newCardForm.addEventListener('submit', addNewCard);



  function cardGenerate (item) { // генерация карточки
   
    let cardTemplate = startCardTemplate.cloneNode(true)
    let startCardTitle = cardTemplate.querySelector('.element__name')
    let startCardImage = cardTemplate.querySelector('.element__image')
    startCardTitle.textContent = item.name;
    startCardImage.src = item.link;
    startCardImage.alt = item.name;

    let deleteButton = cardTemplate.querySelector('.element__delete') //удаление карточки

    function deleteCard () {
      cardTemplate.remove()
    }

    deleteButton.addEventListener('click', deleteCard)


    let likeButton = cardTemplate.querySelector('.element__button'); // лайк

    function like () {
      likeButton.classList.toggle('element__button_active')
    } 

    likeButton.addEventListener('click', like);
    



    let popupImage = document.querySelector('.popup-image-open'); //открытие картинок
    let elementImage = cardTemplate.querySelector('.element__image');
    let elementName = cardTemplate.querySelector('.element__name');
    let image = popupImage.querySelector('.popup__image');
    let imageDescription = popupImage.querySelector('.popup__image_description');
    let imageClose = popupImage.querySelector('.popup__image_close');
    
    function openPopupImage () { 
      popupImage.classList.add('popup_opened')
      image.src = elementImage.src
      image.alt = elementName.textContent
      imageDescription.textContent = elementName.textContent
  
  }
  
  function closePopupImage () {
      popupImage.classList.remove('popup_opened')
  }
  
  elementImage.addEventListener('click', openPopupImage);
  imageClose.addEventListener('click', closePopupImage);
  
    
    
    elementCards.append(cardTemplate)  
  }

  let startCards = initialCards.forEach (function startCardsAdd (item) { // создание карточек из массива
    cardGenerate(item)
  });




// открытие попапа картинки 






// лайк карточки 






  

