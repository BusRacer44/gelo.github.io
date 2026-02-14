document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "image1"
    var images = document.querySelectorAll(".image1");
  
    // Function to set random position for an element
    function setRandomPosition(element) {
      element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }
  
    // Set random position for each image
    images.forEach(function (image) {
      setRandomPosition(image);
    });
  });
  
  function angry() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://media.tenor.com/xVBamXGc_isAAAAi/genshin-impact-emote.gif";
  
    absImg.style.display = "flex";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    });
  }
  function happy() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    absImg.style.display = "flex";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://media.tenor.com/IsbFFx1uPboAAAAi/genshin-impact-emote.gif";
  
    images.forEach(function (image) {
      image.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-klee/sticker_5.png?d4b57c496e7e4171441f889487c38e20&d=200x200";
    });
  }
  
  const sadCat = [
    "https://media.tenor.com/e9fCP7rnR_YAAAAi/neuvillette-genshin.gif",
    "https://media1.tenor.com/m/vRL2z5-nwa8AAAAd/furina-sad.gif",
    "https://media.tenor.com/FLiPfaiTRScAAAAi/terrified-panic.gif",
    "https://media.tenor.com/QwG0L8EEapYAAAAj/genshin-impact-emote.gif",
    "https://media1.tenor.com/m/sQf0cT8G5soAAAAC/cat.gif",
    "https://media1.tenor.com/m/nuTRrAkQK7gAAAAd/%E0%B8%AB%E0%B8%A1%E0%B8%B2-%E0%B8%AB%E0%B8%B7%E0%B8%A1.gif",
  ];
  
  const blackmail = [
    "Please",
    "I'm begging you",
    "I'm crying",
    "I'm sad",
    "HUHUHUHU",
    "Please Say Yes",
    "I'm gonna cry",
  ];
  
  function normal() {
    var absImg = document.getElementById("absImg");
    absImg.style.display = "none";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://media1.tenor.com/m/Yx0qktXK4msAAAAC/joe-keery-djo.gif";
  }
  
  let counter = 0;
  
  function no() {
    counter++;
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");
    happyMusic.pause();
    sadMusic.play();
    let model = document.getElementById("model");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      modelText.innerText =
        blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }
  
  function yes() {
    if (counter >= 3) {
        let model = document.getElementById("model2");
        let model2 = document.getElementById("model");
        let sadMusic = document.getElementById("sadMusic");
        sadMusic.pause();
        model2.style.display = "none";
        let happyMusic = document.getElementById("happyMusic");
        happyMusic.play();
        model.style.display = "none";
        setTimeout(() => {
            model.style.display = "flex";
        }, 100);
        const wedate = document.getElementById("wedate");
        const btns = document.getElementById("btns");
        btns.style.display = "none";
        wedate.innerText = "Happy Valentine's Day Sunshine! 💛😘";

        // Open index1.html in a new tab
        window.open("index1.html", "_blank");

    } else {
        alert("Don't say yes right away, cutie. Play around a bit 😉😘");
    }
}

  
  function ly2() {
    let model = document.getElementById("model2");
    model.style.display = "none";
    let model2 = document.getElementById("model");
    model2.style.display = "none";
  }
  
