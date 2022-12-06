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

function uploadImg(){
    const ref = firebase.storage().ref()
    const gotten_pic = document.querySelector("#pilt").files[0]
    console.log(gotten_pic)

    const name = new Date() + "-" + gotten_pic.name

    const metadata = {
        contentType: gotten_pic.type
    }

    const task = ref.child(name).put(gotten_pic, metadata)

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url =>{
            console.log(url)
            const imgUpload = document.getElementById("piltHere")
            imgUpload.src = url
        })
}

function ChangeToActiveLiik(clickedId){
    const Active = document.getElementsByClassName("minuTag LiikActive")[0];
    const newActive = document.getElementById(clickedId);
    Active.classList.remove("LiikActive")
    Active.classList.add("LiikInactive")
    newActive.classList.remove("LiikInactive")
    newActive.classList.add("LiikActive")

}
function ChangeToActiveVanus(clickedID){
    const Active = document.getElementsByClassName("minuTag VanusActive")[0]
    const newActive = document.getElementById(clickedID)
    Active.classList.remove("VanusActive")
    Active.classList.add("VanusInactive")
    newActive.classList.remove("VanusInactive")
    newActive.classList.add("VanusActive")
}
function ChangeToActivePlayers(clickedid){
    const Active = document.getElementsByClassName("minuTag ArvActive")[0]
    const newActive = document.getElementById(clickedid)

    Active.classList.remove("ArvActive")
    Active.classList.add("ArvInactive")
    newActive.classList.remove("ArvInactive")
    newActive.classList.add("ArvActive")

}