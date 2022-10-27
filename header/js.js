const more = document.querySelector('.nav-more');
const dropMenu = document.querySelector('.more-drop-menu');
const tweetBtn = document.querySelector('.btn-tweet');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal-container');

more.addEventListener('click', function(e){
	dropMenu.classList.toggle('show-menu');
});

tweetBtn.addEventListener('click', function(){
	modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', function(){
  modal.classList.remove('show-modal');
});

function onClickUpload() {
	const mediaInput = document.querySelector('.media-input');
	mediaInput.click();
}