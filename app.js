const thumbBar = document.querySelector('#thumb-bar')
const displayedImage = document.querySelector('.displayed-img')
const effectSection = document.querySelector('.effects')
const submitButton = document.querySelector('button')


function addImages() {
    for (i = 1; i <= 5; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", "images/pic" + i + ".jpg");
        document.querySelector('#thumb-bar').appendChild(image);
        console.log("images added")
    }
}

addImages()


thumbBar.addEventListener("mouseover", mouseOverObject => {
    effectSection.classList.add("effects_visible")
    newImage = mouseOverObject.target.src
    displayedImage.src = newImage
    console.log(newImage)
})

submitButton.addEventListener("click", () => {
    const userInput = document.querySelector('#effect').value
    var imageToBlur = displayedImage
    if (userInput == 'blur') {
        imageToBlur.src = imageToBlur.src.replace('.', 'b.')
    } else {
        document.querySelector('#effect').value = "Invalid input! Try 'blur'"
    }
})