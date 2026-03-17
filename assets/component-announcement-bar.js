document.addEventListener("DOMContentLoaded",function(){
    const message = document.querySelectorAll('.message');
    const leftArrow = document.querySelectorAll('.arrow .left');
    const rightArrow = document.querySelectorAll('.arrow .right');

    let index = 0;
    if(message.length===0) return;

    function showMessage(i){
        
        message.forEach((msg)=>msg.classList.remove("active"));
        message[i].classList.add("active");
    }

    rightArrow?.addEventListener("click",()=>{
        index = (index+1) % message.length;
        showMessage(index);
    });

        leftArrow?.addEventListener("click",()=>{
        index = (index-1 + message.length) % message.length;
        showMessage(index);
    });
})