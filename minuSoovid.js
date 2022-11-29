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

loadSoovid();

function loadSoovid(){
    database.collection("soovitudmängud")
        .onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) => {
                looSoov(doc.id, doc.data().pealkiri, doc.data().kirjeldus, doc.data().pilt)
            });
        });
}

function looSoov(id, pealkiri, kirjeldus, pilt){
    const leht = document.getElementById("minuSoov")

    // elemendi div
    const soovdivhtml = document.createElement("div")
    soovdivhtml.classList.add("MinuSoovInner")
    soovdivhtml.id = id

    // pic div
    const picdivHTMIL = document.createElement("div")
    picdivHTMIL.classList.add("minuMangPilt")

    // pic itself
    const picHTML = document.createElement("img")
    picHTML.src = pilt
    picHTML.classList.add("PakkumisedImg")

    picdivHTMIL.appendChild(picHTML)
    soovdivhtml.appendChild(picdivHTMIL)

    //pealkirir + kirjeldus
    const pealkiriconteinerHTML = document.createElement("div")
    pealkiriconteinerHTML.classList.add("minuKirjeldus")

    const pealkiridivHTML = document.createElement("div")
    const pealkiriHTML = document.createElement("h2")
    pealkiriHTML.innerHTML = pealkiri

    pealkiridivHTML.appendChild(pealkiriHTML)
    pealkiriconteinerHTML.appendChild(pealkiridivHTML)

    const minuKirjeldusConteiner = document.createElement("div")
    minuKirjeldusConteiner.classList.add("minuKirjeldusTekstConteiner")

    const minuKirjekdusHTML = document.createElement("p")
    minuKirjekdusHTML.classList.add("minuKirjeldusTekst")
    minuKirjekdusHTML.innerHTML = kirjeldus

    minuKirjeldusConteiner.appendChild(minuKirjekdusHTML)
    pealkiriconteinerHTML.appendChild(minuKirjeldusConteiner)

    // buttons div
    const buttonsdivHTML = document.createElement("div");
    buttonsdivHTML.classList.add("minuNupud");

    // staatuse nupp div
    const staatusenuppdivHTML = document.createElement("div");

    // staatuse nupp
    const staatusenuppHTML = document.createElement("button");
    staatusenuppHTML.innerHTML = "Pakkumisi pole"
    staatusenuppHTML.classList.add("teadePakkumine")
    staatusenuppdivHTML.appendChild(staatusenuppHTML)
    buttonsdivHTML.appendChild(staatusenuppdivHTML)

    // muutuse nupp div
    const muutusenuppdivHTML = document.createElement("div");

    // muutuse nupp
    const muutusenuppHTML = document.createElement("button");
    muutusenuppHTML.innerHTML = "Muuda kuulutust"
    muutusenuppHTML.classList.add("muudaKuuludust")
    muutusenuppdivHTML.appendChild(muutusenuppHTML)
    buttonsdivHTML.appendChild(muutusenuppdivHTML)

    soovdivhtml.appendChild(pealkiriconteinerHTML)
    soovdivhtml.appendChild(buttonsdivHTML)
    leht.appendChild(soovdivhtml)

}