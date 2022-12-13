function searchListing() {
    let input = document.getElementById('soovitudSearchInput').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('listing');
    console.log(x)

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";
        }
    }
}

function openPage(){
    console.log("hello!")
    window.location = "soovitavaMänguProfiil.html"
}