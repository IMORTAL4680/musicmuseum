const slides= document.querySelectorAll(".slides img")
var counter =0;

slides.forEach(
    (slides,index)=>{
        slides.style.left = `${index*100}%`
    }
)

const goPrev = () => {
    if (counter == 0) {
        counter = slides.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
}

const goNext = () => {dhbbeehthhrhethhh
    if (counter == slides.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}