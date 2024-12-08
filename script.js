let main = document.querySelector(".main")
let secondmain = document.querySelector(".secondmain")
let images = document.querySelectorAll(".images")
let imageedit = document.querySelectorAll(".imageedit")
let imageedits = document.querySelectorAll(".imageedits")
let options = document.querySelectorAll(".options")
let sortby = document.querySelector(".sortby")
let buttons = document.querySelectorAll(".buttons")
let img = document.getElementById("img-card")
let h3 = document.getElementById("heading")
let input = document.getElementById("search")
let moviecard = document.getElementById("moviecard")
let buttons2 = document.getElementById("buttons2")
let gaps = document.getElementById("gaps")
let forerror = document.getElementById("forerror")


let apikey = "0e3bcc0aa01b60c4b1df45303179e8fb";
let baseApiUrl = "https://api.themoviedb.org/3/search/movie";

function getMovies(inputs) {
  let apiurl = `${baseApiUrl}?api_key=${apikey}&language=en-US&query=${encodeURIComponent(inputs)}`;

  fetch(apiurl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.results.length > 0) {
        console.log(data);
        img.src = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
        h3.innerHTML = data.results[0].original_title;
        main.style.display = "none ,margintop=100px" ;
        secondmain.style.display = "none";
        buttons2.style.display = "none";
        options.forEach((element) => element.style.display = "none");
        sortby.style.display = "none";
        imageedit.forEach((element) => element.style.display = "none");
        imageedits.forEach((element) => element.style.display = "none");
        images.forEach((element) => element.style.display = "none");
        buttons.forEach((element) => element.style.display = "none");
        document.querySelector("body").style.backgroundColor = "black"
        gaps.innerHTML = data.results[0].release_date;
        forerror.innerHTML=""
        moviecard.style.display = "block";        
      } else {
        forerror.innerHTML=`RESULT NOT FOUND FOR"${inputs}"`
        images.forEach((element) => element.style.display = "none");  
        secondmain.style.display = "none";
        buttons2.style.display = "none";
        imageedit.forEach((element) => element.style.display = "none");
        imageedits.forEach((element) => element.style.display = "none");
        options.forEach((element) => element.style.display = "none");
        sortby.style.display = "none";
        moviecard.style.display = "none";
        
       
      }
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
        
    });
}
document.getElementById("button").addEventListener("click", function () { getMovies(input.value) });
