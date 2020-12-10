function addImages() {
    for (i = 1; i <= 5; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", "images/pic" + i + ".jpg");
        document.querySelector('#thumb-bar').appendChild(image);
        console.log("image added")
    }
}


addImages()
