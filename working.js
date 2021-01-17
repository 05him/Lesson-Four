
var buttonTranslate = document.querySelector("#button-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");


var url="https://api.funtranslations.com/translate/minion.json";

function clickHandler(){
            var finalUrl= url+"?text="+textInput.value;
            fetch(finalUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                var translatedText = json.contents.translated;
                textOutput.innerText = translatedText;
                
                
            })
            .catch(()=> alert("some error occured"));
        
};





buttonTranslate.addEventListener("click" , clickHandler);




