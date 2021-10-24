var SpeechRecognition =window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();
function Clicked(){
    document.getElementById("TEXTOUTPUT").innerHTML="";
    Recognition.start();

}
Recognition.onresult=function(event){
    console.log(event);
    content =event.results[0][0].transcript;
    document.getElementById("TEXTOUTPUT").innerHTML= content;
    console.log(content);
    if(content == "take my selfie"){
    speak();
    }

}
function speak(){
    synth= window.speechSynthesis;
    speakdata = "Taking Your Selfie in a Bit";
    utterThisNOW = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThisNOW);
    Webcam.attach("#Webcamcontainer");
    setTimeout(function(){
        take_selfie();
        save();
    },1000);


}
camera=document.getElementById("Webcamcontainer");
Webcam.set({
    width:360,
    height:290,
    image_format:"jpeg",
    jpeg_quality:100

});



function take_selfie(){
    Webcam.snap(function(data_uri){
     document.getElementById("selfie").innerHTML='<img id="Selfie_img" src="'+data_uri+'">' ;



    });
}
function save(){
    link= document.getElementById("link");
    image= document.getElementById("Selfie_img").src;
    link.href= image;
    link.click();
}


