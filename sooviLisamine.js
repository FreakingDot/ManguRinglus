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

function addwishtofb(){
    const title = document.getElementById("pealkiri").value
    const description = document.getElementById("kirjeldus").value
    const comment = document.getElementById("komentaar").value
    const pic = document.getElementById("output").src;
    console.log(title)
    console.log(description)
    console.log(comment)
    console.log(pic)

    const wishdata = {
        "kirjeldus":description,
        "kommentaar":comment,
        "pealkiri":title,
        "pilt":pic
    }

    database.collection("soovitudmängud").add(wishdata).then(() => {
        console.log("Uploaded.");
        window.location="minuSoovid.html";
    });

}

function uploadImg(){
    const ref = firebase.storage().ref()
    const gotten_pic = document.querySelector("#photo").files[0]

    const name = new Date() + "-" + gotten_pic.name

    const metadata = {
        contentType: gotten_pic.type
    }

    const task = ref.child(name).put(gotten_pic, metadata)

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url =>{
            console.log(url)
            const imgupload = document.getElementById("output")
            imgupload.src = url
        })

}