// TODO: Create thumbnail images so the user can click and see them in fullscreen format

// Step 1: Store image data
const imageData = [
    {
        imageName: "bird",
        imageSrc: "./images/birdFull.jpg",
        imageAlt: "image of bird",
    },
    {
        imageName: "golfFull.jpg",
        imageSrc: "./images/golfFull.jpg",
        imageAlt: "image of golf ball",
    },
    {
        imageName: "zebraFull.jpg",
        imageSrc: "./images/zebraFull.jpg",
        imageAlt: "image of zebra",
    },
    {
        imageName: "landscapeFull.jpg",
        imageSrc: "./images/landscapeFull.jpg",
        imageAlt: "image of landscape",
    }
]

// Step 2: Create thumbnail images
function createThumbnails(imageData){
    // select the DOM element (thumbnail-container) to contain our thumbnails
    // this is a repeatatve task -> for loop, forEach
    for(let i = 0 ; i < imageData.length ; i++){
        // create im element
        const imageElement = document.createElement("img");
        // update scr and alt attributes (properties) of the img element to 
        // match those in the array (parameters)
        imageElement.setAttribute('src', imageData[i].imageSrc);
        imageElement.setAttribute('alt', imageData[i].imageAlt);
        // give each img a className (img.className)
        imageElement.setAttribute('class', 'image-thumbnail');
        // add an eventListener to each image -> the event handler of this event is the function
        // you write to create the fullscreen images
        imageElement.addEventListener('click', () => {
            createFullScreenImages(i);
        })
        // append the created images to the thumbnail-container
        const thumbnailContainer = document.getElementById('thumbnail-container');
        thumbnailContainer.appendChild(imageElement);
    };
}

// Step 3: Create fullscreen images
function createFullScreenImages(i){
    // this the event handler
    // select the fullscreen-container
    const fullScreenContainer = document.getElementById('full-screen-container');
    // delete the current  fullscreen image
    fullScreenContainer.innerHTML = null;
    // create image
    const fullScreenImage = document.createElement('img');
    // update its values (properties)
    fullScreenImage.setAttribute('src', imageData[i].imageSrc);
    fullScreenImage.setAttribute('alt', imageData[i].imageAlt);
    // add className for styling (making the image fullscreen)
    fullScreenImage.setAttribute('class', 'image-fullscreen');
    // append the image to the container
    fullScreenContainer.appendChild(fullScreenImage);
    j = i; // Ensure when you click that the indicies match
}

function leftButton(){
    j = j - 1;
    // if <0, j = 0
    if (j < 0){
        j = imageData.length - 1;
    };
    // call createFullScreenImage(j)
    createFullScreenImages(j)
}

function rightButton(){
    j = j + 1;
    // if j = imagData.length, j = imageData.length - 1
    if (j == imageData.length){
        j = 0;
    };
    // call createFullScreenImage(j)
    createFullScreenImages(j)
}


let j = 0;

createFullScreenImages(0);
createThumbnails(imageData);

const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

// if leftBtn, decrease value of j
leftBtn.addEventListener('click', () => {
    leftButton();
})

// if rightBtn, increase value of j
rightBtn.addEventListener('click', () => {
    rightButton();   
})

document.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key == 'ArrowLeft'){
        leftButton();
    } else if(e.key == 'ArrowRight'){
        rightButton();
    }
});
