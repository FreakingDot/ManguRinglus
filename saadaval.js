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