const unfoldButtons = document.querySelectorAll('.faq__unfold--toggle');

unfoldButtons.forEach(button => {
    button.addEventListener('click',function(e){
        let triangle = this.firstChild;
        let content = this.nextElementSibling;
        triangle.classList.toggle('down');
        content.classList.toggle('hidden');
    })
})
