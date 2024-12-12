const OpenBtn = document.querySelector('#OpenModal');
const Dialog = document.querySelector('#dialog');
const CloseBtn = document.querySelector('#CloseModal');
OpenBtn.addEventListener('click', () => Dialog.showModal());
CloseBtn.addEventListener('click', () => Dialog.close());


Dialog.addEventListener('click', event => {
    const rect = Dialog.getBoundingClientRect();
    const isInDialog = 
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

    if(!isInDialog){
        Dialog.close();
    }

})