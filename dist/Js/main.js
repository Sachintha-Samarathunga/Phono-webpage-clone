const submit = document.querySelector('.submit');
const emailForm = document.querySelector('.email-form');
const formControl = document.querySelector('.form-control')

$(function() {
    const $gallery = $('.gallery a').simpleLightbox();
});

submit.addEventListener('click', () => {
    formControl.style.backgroundColor = '#555';
})

function validateEmail()  
{  
	var x=document.myform.email.value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");

	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){ 
		
		emailForm.style.borderColor = 'red';
		formControl.style.borderColor = '#555';
		submit.style.backgroundColor = '#bf8040';
		return false;   
	}  

	else {
		emailForm.style.borderColor = 'green';
	}
}  