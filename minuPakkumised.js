// Script

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// lisa kõik pakkumised "Minu pakkumised"


loadPakkumised();

function loadPakkumised(){
    database.collection("pakutavadmängud")
        .onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) => {
                looPakkumine(doc.id, doc.data().pealkiri, doc.data().kirjeldus, doc.data().pilt, doc.data().tagid)
            });

        });
}

function looPakkumine(dokument, pealkiri, kirjeldus, pilt, tagid){
    // conteiner
    // inner conteiner
    const itemdivinnerHTML = document.createElement("div");
    itemdivinnerHTML.classList.add("MinuPakkumineInner");
    itemdivinnerHTML.id = dokument
    itemdivinnerHTML.setAttribute("onclick", "get_id(});")

    // img div
    const imagedivHTML = document.createElement("div");
    imagedivHTML.classList.add("minuMangPilt");

    // img
    const imageHTML = document.createElement("img");
    imageHTML.classList.add("PakkumisedImg");
    imageHTML.src = pilt;
    imagedivHTML.appendChild(imageHTML);

    // kirjeldus div conteiner
    const minukirjeldusHTML = document.createElement("div");
    minukirjeldusHTML.classList.add("minuKirjeldus");

    // pealkiri div
    const pealkiridivHTML = document.createElement("div");

    // pealkiri
    const pealkiriHTML = document.createElement("h2");
    pealkiriHTML.innerHTML = pealkiri;
    pealkiridivHTML.appendChild(pealkiriHTML);

    //kirjelduse div
    const kirjeldusedivHTML = document.createElement("div");
    kirjeldusedivHTML.classList.add("minuKirjeldusTekstConteiner")

    // kirjeluds
    const kirjeldusHTML = document.createElement("p");
    kirjeldusHTML.innerHTML = kirjeldus;
    kirjeldusHTML.classList.add("minuKirjeldusTekst");
    kirjeldusedivHTML.appendChild(kirjeldusHTML);



    //tags div
    const tagsconteinerDiv = document.createElement("div");
    tagsconteinerDiv.classList.add("minuTags");

    //single tag div - liik
    for (const [key, value] of Object.entries(tagid)) {
        
        const divHTML = document.createElement("div");
        divHTML.classList.add("minuTag");

        if (key === "liik" ){
            divHTML.classList.add("Liik");

            const tagHTML = document.createElement("span");
            tagHTML.innerHTML = value;

            divHTML.appendChild(tagHTML)
            tagsconteinerDiv.appendChild(divHTML)
        }
        else if (key === "vanusepiirang") {
            divHTML.classList.add("Vanus");

            const tagHTML = document.createElement("span");
            tagHTML.innerHTML = value;

            divHTML.appendChild(tagHTML)
            tagsconteinerDiv.appendChild(divHTML)
        }
        else{
            divHTML.classList.add("Arv")

            const tagHTML = document.createElement("span");
            tagHTML.innerHTML = value;

            divHTML.appendChild(tagHTML)
            tagsconteinerDiv.appendChild(divHTML)
        }
    }

    // buttons div
    const buttonsdivHTML = document.createElement("div");
    buttonsdivHTML.classList.add("minuNupud");

    // staatuse nupp div
    const staatusenuppdivHTML = document.createElement("div");

    // staatuse nupp
    const staatusenuppHTML = document.createElement("button");
    staatusenuppHTML.innerHTML = "Soove ei ole"
    staatusenuppHTML.classList.add("teadePakkumine")
    staatusenuppdivHTML.appendChild(staatusenuppHTML)

    // muutuse nupp div
    const muutusenuppdivHTML = document.createElement("div");

    // muutuse nupp
    const muutusenuppHTML = document.createElement("button");
    muutusenuppHTML.innerHTML = "Muuda kuulutust"
    muutusenuppHTML.classList.add("muudaKuuludust")
    muutusenuppdivHTML.appendChild(muutusenuppHTML)

    buttonsdivHTML.appendChild(staatusenuppdivHTML)
    buttonsdivHTML.appendChild(muutusenuppdivHTML)

    minukirjeldusHTML.appendChild(pealkiridivHTML)
    minukirjeldusHTML.appendChild(kirjeldusHTML)
    minukirjeldusHTML.appendChild(tagsconteinerDiv)

    itemdivinnerHTML.appendChild(imagedivHTML)
    itemdivinnerHTML.appendChild(minukirjeldusHTML)
    .appendChild(buttonsdivHTML)

    itemdivinnerHTML.appendChild(buttonsdivHTML)

    var leht = document.getElementById("minuPakkumine1")
    leht.appendChild(itemdivinnerHTML)
}

function get_id(){
    console.log(this.id);
}
