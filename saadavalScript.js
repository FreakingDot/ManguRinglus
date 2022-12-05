
var option = document.getElementById('saadavalFilters').value

function searchListing() {
    saveFilterOption()
    let input = document.getElementById('saadavalSearchInput').value
    input = input.toLowerCase();

    let x = document.getElementsByClassName('listing');
    console.log(x)

    for (i = 0; i < x.length; i++) {
        if (option != "none") {
            console.log("can indicate not none")
            console.log(input)
            if (!x[i].innerHTML.toLowerCase().includes(option, input)) {
                x[i].style.display = "none";
            }
            else {
                if (!x[i].innerHTML.toLowerCase().includes(input)) {
                    x[i].style.display = "none";
                }
                else {
                    x[i].style.display = "block";
                }

            }
        }
        else {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            }
            else {
                x[i].style.display = "block";
            }
        }

    }
}

function saveFilterOption() {
    console.log("filter")
    option = document.getElementById('saadavalFilters').value
}