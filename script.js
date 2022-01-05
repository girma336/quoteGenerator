 const buttonBtn=document.querySelector('button'),
 authorb=document.querySelector('.person'),
          speechBtn=document.querySelector('.speech'),
          contentPart=document.querySelector('.quote-part p');
          
          
          buttonBtn.addEventListener("click", changeQuote);



 function changeQuote(){
    
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        console.log(result);
        contentPart.innerHTML=result.content;
        authorb.innerHTML=result.author;
    });
 }
 speechBtn.addEventListener("click", ()=>{
     
let utterance =new SpeechSynthesisUtterance(`${contentPart.innerHTML} by ${authorb.innerHTML}`)
      speechSynthesis.speak(utterance);

});