let fixBlocks = document.querySelectorAll('.fix-block');

// disable / enable scroll
let disableScroll = function() {
	let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
	document.body.classList.add('disable--scroll');
	fixBlocks.forEach((el) => {
		el.style.paddingRight = paddingOffset;
	});
	document.body.style.paddingRight = paddingOffset;
}

let enableScroll = function(){
	document.body.classList.remove('disable--scroll');
	fixBlocks.forEach((el) => {
		el.style.paddingRight = '0px';
	});
	document.body.style.paddingRight = '0px';
}