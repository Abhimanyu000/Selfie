var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult=function(event){
console.log(event);
content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
if(content=="Take my selfie."){
    console.log("Taking ur selfie in panch seconds");
    speak();
}
}

function speak(){
    var Synth=window.speechSynthesis;
    var SpeakData="Taking selfie in 5 seconds";
    var Utter=new SpeechSynthesisUtterance(SpeakData);
    Synth.speak(Utter);
    Webcam.attach(CamAccess);
    setTimeout(function()
    {
        snapshot();
        save();
    },5000)
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

CamAccess=document.getElementById("camera");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="selfieoutputimageinclass100" src="'+data_uri+'">';
    })
}

function save(){
    anchor=document.getElementById("anchor");
    image=document.getElementById("selfieoutputimageinclass100").src;
    anchor.href=image;
    anchor.click();
}