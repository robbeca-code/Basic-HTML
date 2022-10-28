var menu = document.querySelector('.menu');
var dropDown = document.querySelector('.drop-down');

function onClickUpload() {
	const mediaInput = document.querySelector('.media-input');
	mediaInput.click();
}

menu.addEventListener('click', function(){
	dropDown.classList.toggle('show-drop-down');
});