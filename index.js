let bookCoverImgElement = document.getElementById("ballerina-bright-book-cover-image");
let bookContainerElement = document.getElementById("book-container");
let leftPageImage = document.getElementById("left-page-image");
let rightPageImage = document.getElementById("right-page-image");
let turnPageForwardsButton = document.getElementById("flip-arrow-pointing-forwards");
let turnPageBackwardsButton = document.getElementById("flip-arrow-pointing-backwards");

bookCoverImgElement.onclick = function () {
    bookCoverImgElement.style.display = "none";
    bookContainerElement.style.display = "flex";
}

let pageTracker = [1, 2];
turnPageForwardsButton.onclick = function () {
    pageTracker[0] += 2;
    pageTracker[1] += 2;
    leftPageImage.src = `images/page-${pageTracker[0]}.jpg`;
    rightPageImage.src = `images/page-${pageTracker[1]}.jpg`
}

turnPageBackwardsButton.onclick = function () {
    if (pageTracker[0] === 1) {
        bookContainerElement.style.display = "none";
        bookCoverImgElement.style.display = "flex";
        pageTracker = [1, 2];
    } else {
        pageTracker[0] -= 2;
        pageTracker[1] -= 2;
        leftPageImage.src = `images/page-${pageTracker[0]}.jpg`;
        rightPageImage.src = `images/page-${pageTracker[1]}.jpg`;
    }
}