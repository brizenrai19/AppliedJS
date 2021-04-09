// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.getElementsByClassName("header-container")[0];
    const div = document.createElement("div");
    div.className = "header";
    const span = document.createElement("span");
    span.className = "date";
    span.innerHTML = "March 28, 2020";
    const h1 = document.createElement("h1");
    h1.innerHTML = "Lambda Times";
    const span1 = document.createElement("span");
    span1.className = "temp";
    span1.innerHTML = "98°"
    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span);
    headerDiv.appendChild(div);
}

Header();


