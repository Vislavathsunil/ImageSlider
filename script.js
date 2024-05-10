
const images = document.querySelectorAll("img");
let arr = Array.from(images);

var index = 0;

console.log("Length : ", arr.length)


// document.onload(starting());
document.addEventListener("DOMContentLoaded", starting);

function starting() {
    if (arr.length >= 0) {
        images[index].classList.add("display-block");
    }
}

function slideShow(index) {
    let a = index;
    if (a >= arr.length) {
        a = 0;

    } else if (a < 0) {
        a = arr.length - 1;

    }


    arr.forEach(Image => {
        Image.classList.remove("display-block");
    });

    console.log("index :", index);
    arr[a].classList.add("display-block");

    return a;


}

function prev() {
    index = slideShow(index - 1);
    console.log(index);

}


function next() {
    index = slideShow(index + 1);  //update the global index value every time.
    console.log(index);

}

