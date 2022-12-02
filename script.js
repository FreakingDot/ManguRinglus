// Scripti algus
const firebaseConfig = {
    apiKey: "AIzaSyDaaTmL8l857bvP32DCQYU0-zG-z2Hv2x8",
    authDomain: "manguringlus.firebaseapp.com",
    projectId: "manguringlus",
    storageBucket: "manguringlus.appspot.com",
    messagingSenderId: "570464946806",
    appId: "1:570464946806:web:3813b5c7a72ad00a5a2d57",
    measurementId: "G-Q88BY8F2X9"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

loadSaadaval();

function loadSaadaval(){
    database.collection("pakutavadmängud")
        .onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) => {
                looSaadavalListing(doc.id, doc.data().pealkiri, doc.data().kirjeldus, doc.data().pilt, doc.data().tagid)
            });

        });
}

function looSaadavalListing(dokument, pealkiri, kirjeldus, pilt, tagid){

    //make listing div
    const listingDivHTML=document.createElement("div");
    listingDivHTML.classList.add("listing");

    //make listing status icon
    const listingStatusIconHTML=document.createElement("img");
    listingStatusIconHTML.classList.add("status");
    listingStatusIconHTML.src="https://i.imgur.com/mYhqhCX.png";
    listingDivHTML.appendChild(listingStatusIconHTML)

    //make listing image
    const listingImageHTML=document.createElement("img");
    listingImageHTML.classList.add("listingImage");
    listingImageHTML.src=pilt;
    listingDivHTML.appendChild(listingImageHTML)

    //make listing text div
    const listingTextDivHTML=document.createElement("div");
    listingTextDivHTML.classList.add("listingText");
    listingDivHTML.appendChild(listingTextDivHTML)

    //make listing heading (game name)
    const listingHeadingHTML=document.createElement("h1");
    listingHeadingHTML.classList.add("listingHeading");
    listingHeadingHTML.innerHTML=pealkiri;
    listingTextDivHTML.appendChild(listingHeadingHTML)

    //make listing tags div
    const listingTagsDivHTML=document.createElement("div");
    listingTagsDivHTML.classList.add("listingTags");
    listingTextDivHTML.appendChild(listingTagsDivHTML)

    //single tag div - liik
    for (const [key, value] of Object.entries(tagid)) {

        const divHTML = document.createElement("div");
        divHTML.classList.add("minuTag");

        if (key === "liik" ){
            divHTML.classList.add("Liik");

            const tagHTML = document.createElement("span");
            tagHTML.innerHTML = value;

            divHTML.appendChild(tagHTML)
            listingTagsDivHTML.appendChild(divHTML)
        }
        else if (key === "vanusepiirang") {
            divHTML.classList.add("Vanus");

            const tagHTML = document.createElement("span");
            tagHTML.innerHTML = value;

            divHTML.appendChild(tagHTML)
            listingTagsDivHTML.appendChild(divHTML)
        }
        else{
            divHTML.classList.add("Arv")

            const tagHTML = document.createElement("span");
            tagHTML.innerHTML = value;

            divHTML.appendChild(tagHTML)
            listingTagsDivHTML.appendChild(divHTML)
        }
    }

    const allListingsDiv = document.getElementById("saadavalAllListingsDiv")
    allListingsDiv.appendChild(listingDivHTML)
}
loadSoovitakse();

function loadSoovitakse(){
    database.collection("soovitudmängud")
        .onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) => {
                looSoovitakseListing(doc.id, doc.data().pealkiri, doc.data().kirjeldus, doc.data().pilt, doc.data().tagid)
            });

        });
}

function looSoovitakseListing(dokument, pealkiri, kirjeldus, pilt, tagid){

    //make listing div
    const listingDivHTML=document.createElement("div");
    listingDivHTML.classList.add("listing");

    //make listing status icon
    const listingStatusIconHTML=document.createElement("img");
    listingStatusIconHTML.classList.add("status");
    listingStatusIconHTML.src="https://i.imgur.com/JZjACKV.png";
    listingDivHTML.appendChild(listingStatusIconHTML)

    //make listing image
    const listingImageHTML=document.createElement("img");
    listingImageHTML.classList.add("listingImage");
    listingImageHTML.src=pilt;
    listingDivHTML.appendChild(listingImageHTML)

    //make listing text div
    const listingTextDivHTML=document.createElement("div");
    listingTextDivHTML.classList.add("listingText");
    listingDivHTML.appendChild(listingTextDivHTML)

    //make listing heading (game name)
    const listingHeadingHTML=document.createElement("h1");
    listingHeadingHTML.classList.add("listingHeading");
    listingHeadingHTML.innerHTML=pealkiri;
    listingTextDivHTML.appendChild(listingHeadingHTML)

    const allListingsDiv = document.getElementById("soovitakseAllListingsDiv")
    allListingsDiv.appendChild(listingDivHTML)
}


setTimeout(function() { activateSlider1(); }, 1000)
setTimeout(function() { activateSlider2(); }, 1000)
//import { loadSaadaval } from './saadaval.js'
//loadSaadaval()
//import { loadSoovitakse } from './soovitakse.js'
//loadSoovitakse()
function activateSlider1() {

    const slider1 = tns({
        container: ".my-slider1",
        items: 3,
        gutter: 20,
        slideBy: 1,
        controlsPosition: "bottom",
        navPosition: "bottom",
        mouseDrag: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: "#custom-control1",
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: true
            },
            1440: {
                items: 3
            }
        }
        // mode: 'gallery',
        // speed: 2000,
        // animateIn: "scale",
        // controls: false,
        // nav: false,
        // edgePadding: 20,
        // loop: false,
    });
}
function activateSlider2() {

    const slider1 = tns({
        container: ".my-slider2",
        items: 3,
        gutter: 20,
        slideBy: 1,
        controlsPosition: "bottom",
        navPosition: "bottom",
        mouseDrag: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: "#custom-control2",
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: true
            },
            1440: {
                items: 3
            }
        }
        // mode: 'gallery',
        // speed: 2000,
        // animateIn: "scale",
        // controls: false,
        // nav: false,
        // edgePadding: 20,
        // loop: false,
    });
}
