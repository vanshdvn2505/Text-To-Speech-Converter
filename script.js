let btn = document.querySelector('.btn button');

btn.addEventListener('click',()=>{

    let input = document.getElementById('text');
    let text = input.value;
    if(!text){
        alert("Nothing To Convert!");
        return;
    }
    let speaks = new SpeechSynthesisUtterance(text);
    speaks.text = text;
    speaks.voice = window.speechSynthesis.getVoices[0];
    window.speechSynthesis.speak(speaks);
});