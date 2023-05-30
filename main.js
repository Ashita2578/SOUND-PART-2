function record(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.SoundClassifier('https://teachablemachine.withgoogle.com/models/zmTk4uMGJ/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}