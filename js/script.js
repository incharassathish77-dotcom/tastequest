/* =====================================
   HOME PAGE
   ===================================== */


function searchFood() {

    let food = document.getElementById("foodSearch").value;


    if (food == "") {

        alert("Please enter a dish name.");

    }


    else if (food.toLowerCase() == "mysore pak") {

        document.getElementById("searchResult").innerHTML =
            "Mysore Pak is a famous sweet from Karnataka.";

    }


    else if (food.toLowerCase() == "masala dosa") {

        document.getElementById("searchResult").innerHTML =
            "Masala Dosa is a popular South Indian dish.";

    }


    else if (food.toLowerCase() == "bisi bele bath") {

        document.getElementById("searchResult").innerHTML =
            "Bisi Bele Bath is a traditional Karnataka dish.";

    }


    else {

        document.getElementById("searchResult").innerHTML =
            "Sorry, this dish is not available yet.";

    }

}



function exploreState() {

    let state = document.getElementById("state").value;


    if (state == "") {

        alert("Please select a state.");

    }


    else if (state == "karnataka") {

        window.location.href = "pages/karnataka.html";

    }


    else {

        alert("Food details for this state are coming soon!");

    }

}



function showFact() {

    document.getElementById("fact").innerHTML =
        "Mysore Pak is a traditional sweet associated with Mysuru.";

}



/* =====================================
   STATES PAGE
   ===================================== */


function findState() {

    let state = document.getElementById("stateName").value;


    if (state == "") {

        alert("Please enter a state name.");

    }


    else if (state.toLowerCase() == "karnataka") {

        window.location.href = "karnataka.html";

    }


    else {

        document.getElementById("stateResult").innerHTML =
            "Food details for this state are coming soon!";

    }

}



/* =====================================
   KARNATAKA PAGE
   ===================================== */


function showDish() {

    let dish = document.getElementById("dish").value;


    if (dish == "") {

        alert("Please select a dish.");

    }


    else if (dish == "mysorepak") {

        document.getElementById("dishInfo").innerHTML =
            "Mysore Pak is a traditional Karnataka sweet made mainly with gram flour, ghee and sugar.";

    }


    else if (dish == "masaladosa") {

        document.getElementById("dishInfo").innerHTML =
            "Masala Dosa is a crispy South Indian dish usually filled with spiced potato and served with chutney and sambar.";

    }


    else if (dish == "bisibelebath") {

        document.getElementById("dishInfo").innerHTML =
            "Bisi Bele Bath is a traditional Karnataka dish prepared using rice, lentils, vegetables and spices.";

    }

}



/* =====================================
   PLACES PAGE
   ===================================== */


function searchPlace() {

    let place = document.getElementById("placeSearch").value;


    if (place == "") {

        alert("Please enter a place name.");

    }


    else if (
        place.toLowerCase() == "mysuru sweet shop"
    ) {

        document.getElementById("placeResult").innerHTML =
            "Mysuru Sweet Shop is available in our recommendations.";

    }


    else if (
        place.toLowerCase() == "traditional food corner"
    ) {

        document.getElementById("placeResult").innerHTML =
            "Traditional Food Corner is available in our recommendations.";

    }


    else if (
        place.toLowerCase() == "mysuru food street"
    ) {

        document.getElementById("placeResult").innerHTML =
            "Mysuru Food Street is available in our recommendations.";

    }


    else {

        document.getElementById("placeResult").innerHTML =
            "Sorry, this place is not available.";

    }

}



/* =====================================
   REVIEWS PAGE
   ===================================== */


/* Get information from the URL */

let url = new URLSearchParams(
    window.location.search
);

let selectedPlace = url.get("place");



/* Check whether the Reviews page is open */

if (
    document.getElementById("selectedPlace")
) {


    if (selectedPlace == "mysuru-sweet-shop") {

        document.getElementById("selectedPlace").innerHTML =
            "Reviews for Mysuru Sweet Shop";


        document.getElementById("place").value =
            "Mysuru Sweet Shop";

    }


    else if (
        selectedPlace == "traditional-food-corner"
    ) {

        document.getElementById("selectedPlace").innerHTML =
            "Reviews for Traditional Food Corner";


        document.getElementById("place").value =
            "Traditional Food Corner";

    }


    else if (
        selectedPlace == "mysuru-food-street"
    ) {

        document.getElementById("selectedPlace").innerHTML =
            "Reviews for Mysuru Food Street";


        document.getElementById("place").value =
            "Mysuru Food Street";

    }


    else {

        document.getElementById("selectedPlace").innerHTML =
            "All Place Reviews";

    }

}



/* Submit Review */

function submitReview() {


    let name =
        document.getElementById("name").value;


    let place =
        document.getElementById("place").value;


    let rating =
        document.getElementById("rating").value;


    let review =
        document.getElementById("review").value;



    /* Check name */

    if (name == "") {

        alert("Please enter your name.");

        return false;

    }



    /* Check place */

    if (place == "") {

        alert("Please select a place.");

        return false;

    }



    /* Check rating */

    if (rating == "") {

        alert("Please enter a rating.");

        return false;

    }



    if (rating < 1 || rating > 5) {

        alert("Rating must be between 1 and 5.");

        return false;

    }



    /* Check review */

    if (review.trim() == "") {

        alert("Please write your review.");

        return false;

    }



    /* Create stars */

    let stars = "";


    for (
        let i = 1;
        i <= rating;
        i++
    ) {

        stars = stars + "⭐";

    }



    /* Add review to page */

    document.getElementById(
        "newReviews"
    ).innerHTML +=


        "<div class='review-card'>" +


        "<h3>" +
        name +
        "</h3>" +


        "<p><b>Place:</b> " +
        place +
        "</p>" +


        "<p><b>Rating:</b> " +
        stars +
        "</p>" +


        "<p>" +
        review +
        "</p>" +


        "<button onclick='deleteReview(this)'>" +
        "Delete Review" +
        "</button>" +


        "</div>";



    /* Success message */

    document.getElementById(
        "reviewResult"
    ).innerHTML =


        "Thank you, " +
        name +
        "! Your review has been submitted successfully.";



    /* Clear form */

    document.getElementById(
        "name"
    ).value = "";


    document.getElementById(
        "rating"
    ).value = "";


    document.getElementById(
        "review"
    ).value = "";



    return false;

}



/* Delete Review */

function deleteReview(button) {

    button.parentElement.remove();

}