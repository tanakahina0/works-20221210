let images = ['../images/Duomo1.jpg','../images/Duomo2.jpg','../images/NewYork.jpg','../images/NotreDameCathedral.jpg']
let current = 0;

let pageNum = function() {
    document.getElementById('page').textContent = (current + 1) + '/' + images.length;
}

let changeImage = function(num) {
    if(current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById('main_image').src = images[current];
        pageNum();
    }
};

pageNum();

document.getElementById('prev').onclick = function() {
    changeImage(-1);
}

document.getElementById('next').onclick = function() {
    changeImage(1);
};

// スライドショー２

let thumbs = document.querySelectorAll('.thumb');
for(let i =0; i < thumbs.length; i++){
    thumbs[i].addEventListener('click',function(){
        document.getElementById('main-image').src = this.dataset.image;
    });
}

// スライドショー３

let images2 = ['./images/Duomo1.jpg','./images/Duomo2.jpg','./images/NewYork.jpg','./images/NotreDameCathedral.jpg']
let current2 = 0;

let pageNum2 = function() {
    document.getElementById('page2').textContent = (current2 + 1) + '/' + images2.length;
}

let changeImage2 = function(num) {
    if(current2 + num >= 0 && current2 + num < images2.length) {
        current2 += num;
        document.getElementById('slide3_main-image').src = images2[current2];
        pageNum2();
    }
};

pageNum2();

document.getElementById('prev2').onclick = function() {
    changeImage2(-1);
}

document.getElementById('next2').onclick = function() {
    changeImage2(1);
};

let thumbs2 = document.querySelectorAll('.thumb2');
for(let i =0; i < thumbs.length; i++){
    thumbs2[i].addEventListener('click',function(){
        document.getElementById('slide3_main-image').src = this.dataset.image;
    });
}

document.getElementById('img1').onclick = function(){
    current2 = 0;
    pageNum2();
}

document.getElementById('img2').onclick = function(){
    current2 = 1;
    pageNum2();
}

document.getElementById('img3').onclick = function(){
    current2 = 2;
    pageNum2();
}

document.getElementById('img4').onclick = function(){
    current2 = 3;
    pageNum2();
}