const toggleMenu = document.querySelector('#toggleMenu');
const navigation = document.querySelector('.navigation');
const listA = document.querySelectorAll('.listA');

toggleMenu.addEventListener('click' , ()=> {
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
});

listA.forEach( (list) => {
    list.addEventListener('click', () => {
        toggleMenu.classList.remove('active');
        navigation.classList.remove('active');
    });
});


let imgIndex = 1;
const sliderBox = document.querySelector('.sliderBox');
const sliderBoximg = document.querySelector('.sliderBox img');
const bntLeft = document.querySelector('.bntLeft');
const bntRight = document.querySelector('.bntRight');

bntLeft.addEventListener('click', ()=> {
    imgIndex -= 1;
    if(imgIndex == 0) {
        imgIndex = 8;
    }
    sliderBoximg.setAttribute('src',`img/flyaer/img${imgIndex}.png`);
});

bntRight.addEventListener('click', ()=> {
    imgIndex += 1;
    if(imgIndex == 8) {
        imgIndex = 1;
    }
    sliderBoximg.setAttribute('src',`img/flyaer/img${imgIndex}.png`);
});

setInterval(()=> {
    imgIndex +=1;
    if(imgIndex == 8) {
        imgIndex = 1;
    }
    sliderBoximg.setAttribute('src',`img/flyaer/img${imgIndex}.png`);
}, 3000);