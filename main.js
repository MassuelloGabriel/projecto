function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/szzzWyUJD/model.json', modelReady);
}

function modelReady() {
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1; 
        random_number_g = Math.floor(Math.random() * 255) + 1; 
        random_number_b = Math.floor(Math.random() * 255) + 1; 
    
        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label ;
        document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

       img = document.getElementById('Monstro1');
       img1 = document.getElementById('Monstro2');
       img2 = document.getElementById('Monstro3');
       img3 = document.getElementById('Monstro4');

       if (results[0].label == "palmas") {
        img.src = 'monster.gif';
        img1.src = 'images.png';
        img2.src = 'passarinho.png';
        img3.src = 'images (1).gif';
       } else if (results[0].label == "batida na mesa") 
       {img.src = 'folha.png';
        img1.src = 'green-monster-cute-creatures.gif';
        img2.src = 'passarinho.png';
        img3.src = 'images (1).gif';
       } else if (results[0].label == "estalos") {
        img.src ='folha.png';
        img1.src ='images.png';
        img2.src ='passaro.gif';
        img3.src ='images (1).gif';
       }else{
        img.src ='folha.png';
        img1.src ='images.png';
        img2.src ='passarinho.png';
        img3.src ='morcego.gif';
       }
    }
}