// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get("https://lambda-times-api.herokuapp.com/topics")
.then(response => {
    const topicsDiv = document.getElementsByClassName("topics")[0];
    const data = response.data.topics;
    data.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "tab";
        itemDiv.innerHTML = item;
        topicsDiv.appendChild(itemDiv);
    });
})
.catch(error => {
    const errorHolder = document.getElementsByClassName("errors-container");
    errorHolder.innerHTML = error.message;
})
