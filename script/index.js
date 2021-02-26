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

