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

loadSoovitakse();

function loadSoovitakse(){
    database.collection("pakutavadmängud")
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