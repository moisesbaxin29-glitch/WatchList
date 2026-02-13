console.log("js console");

var data;
var grid = document.querySelector(".grid-container");
if(localStorage.getItem("datalist")){
    data = JSON.parse(localStorage.getItem("datalist"));
    makeCard();
}
else{
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        data = JSON.parse(xhttp.responseText);
        console.log(data);
        localStorage.setItem("datalist", JSON.stringify(data));

    }
};

xhttp.open("GET", "movie.json", true);
xhttp.send();

}
function makeCard(){
        data.forEach(function (movie) {
            let card = document.createElement("div");
            card.classList.add("card");

            let textData =
                "<div class = 'movie-title'>" + movie.title + "</div>" +
                "<span>" +
                "Cast: " + movie.cast + "<br>" +
                "Release Date: " + movie.year + "<br>";

            card.innerHTML = textData;

            if (movie.imgSrc) {
                card.style.backgroundImage = "url('" + movie.imgSrc + "')";
            }
            if(grid){
                grid.appendChild(card);
            }
            
        });
}


var form = document.querySelector("form");
var titleInput = document.querySelector("#Movies");
var casInput = document.querySelector("#Cast");
var dateInput = document.querySelector("#Release-Date");





form.addEventListener("submit", function(e){
    e.preventDefault();
    let title = titleInput.value;
    let cast = casInput.value;
    let releaseDate = dateInput.value;
    let newObj = {
        "title":title,
        "Cast":Cast,
        "releaseDate":releaseDate
    };
    

        data.push(newObj);
        localStorage.setItem("datalist", JSON.stringify(data));
        console.log("Saved new items to local storage");

            
            makeCards();
            






        form.reset();
    });

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}