function typeWrite(element,time){
    const textArray = element.innerHTML.split('')
    element.innerHTML='';
    textArray.forEach((letter, i) =>{
        setTimeout(function(){
            element.innerHTML+=letter;
        },time*i)
    });
}
    const script = document.querySelector('.typed-script');
    typeWrite(script,50);
