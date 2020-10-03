const productNames = []
const productImg = []
const productPrice = []

var searchOutput = document.querySelector("#searchResults > div.searchOutput")

var pageDetails = document.getElementById('productsDiv').innerHTML

var desktops = document.querySelector("#productsDiv > section.desktops.allProducts")
var laptops = document.querySelector("#productsDiv > section.laptops.allProducts")
var headsets = document.querySelector("#productsDiv > section.headsets.allProducts")
var mice = document.querySelector("#productsDiv > section.mice.allProducts")

fetch (`http://localhost:8000/products`)

.then (response => {
    return response.json()
})

.then (data => {
    for (i = 0; i < data.length; i++) {

        productNames.push(data[i].pname)
        productImg.push(data[i].img)
        productPrice.push(data[i].price)

        var setProduct = `
        <div class='items'>
            <a href='productdetails.html'><img src=${data[i].img} alt="need to add image descriptions"></a>
            <p>${data[i].pname}</p>
            <p class='price'>${data[i].price}</p>
        </div>
        `

        if (data[i].category === 'desktop') {
            desktops.innerHTML += setProduct;
        } else if (data[i].category === 'laptop') {
            laptops.innerHTML += setProduct;
        } else if (data[i].category === 'headset') {
            headsets.innerHTML += setProduct;
        } else if (data[i].category === 'mouse') {
            mice.innerHTML += setProduct;
        } else {
            console.log('Category not defined.')
        }
    }
})

findIndex = (searchInput) => {
    const indexToShow = []
    for (i = 0; i < productNames.length; i++) {
        lowerProductNames = productNames[i].toLowerCase()
        if (lowerProductNames.match(searchInput)) {
            indexToShow.push(i)
        }
    }
    return indexToShow
} 

const searchProds = (searchInput) => {

    event.preventDefault()

    searchOutput.innerHTML = "";

    if (searchInput) {
    console.log(`Running product search for: ${searchInput}`)

    document.querySelector("#productsWithHeaders").style.display = "none";
    document.querySelector("#searchResults").style.display = "block";

    searchIndexNum = findIndex(searchInput.toLowerCase())

    for (i = 0; i < searchIndexNum.length; i++) {
        indexOutput = searchIndexNum[i]
        searchOutput.innerHTML += `
        <div class='items'>
            <a href='productdetails.html'><img src=${productImg[indexOutput]} alt="need to add image descriptions"></a>
            <p>${productNames[indexOutput]}</p>
            <p class='price'>${productPrice[indexOutput]}</p>
        </div>
        `
    }

    localStorage.searchText = "";
    }
} 

// document.querySelector("#searchBox").value

(function() {if (localStorage.searchText) {
    console.log('searching something')
    document.querySelector("#searchBox").value = localStorage.searchText
    searchProds(localStorage.searchText)
    localStorage.searchText = "";
} else {
    console.log("No search text found")
}
})();

(function() {
    if (localStorage.category) {
        if (localStorage.category == "Desktop") {
            document.querySelector("#product-type").value = "desktops"
        } else if (localStorage.category == "Laptop") {
            document.querySelector("#product-type").value = "laptops"
        } else if (localStorage.category == "Headset") {
            document.querySelector("#product-type").value = "headsets"
        } else if (localStorage.category == "Mouse") {
            document.querySelector("#product-type").value = "mice"
        } else {
            document.querySelector("#product-type").value = "all"
        }
    }
})();


const filterCategory = () => {
    
    // Returns an iterable node list
    var allProds = document.querySelectorAll(".allProducts")

    // 
    var categorySelect = document.getElementById("product-type").value

    // Displays a single category based on drop-down selection
    if (categorySelect) {

        // When filtering by category, will set default sections to display none
        document.querySelector(".desktops").style.display = "none";
        document.querySelector(".laptops").style.display = "none";
        document.querySelector(".headsets").style.display = "none";
        document.querySelector(".mice").style.display = "none";

        if (categorySelect == "desktops") {
            desktops.style.display = "inline-block";
        } else if (categorySelect == "laptops") {
            laptops.style.display = "inline-block";
        } else if (categorySelect == "headsets") {
            headsets.style.display = "inline-block";
        } else if (categorySelect == "mice") {
            mice.style.display = "inline-block";
        } else if (categorySelect == "all") {
            for (i = 0; i < allProds.length; i++) {
                allProds[i].style.display = "inline-block";
            }
        }
    }    
}

filterCategory();


// fetch (`http://localhost:8000/products`)
// .then (response => {
//     return response.json()
// })
// .then (data => {

//     productNames = []

//     for (i = 0; i < data.length; i++) {

//         productNames.push(data[i].pname)

//         var setProduct = `
//         <div class='items'>
//             <a href='productdetails.html'><img src=${data[i].img} alt="need to add image descriptions"></a>
//             <p>${data[i].pname}</p>
//             <p class='price'>${data[i].price}</p>
//         </div>
//         `

//         if (data[i].category === 'desktop') {
//             desktops.innerHTML += setProduct;
//         } else if (data[i].category === 'laptop') {
//             laptops.innerHTML += setProduct;
//         } else if (data[i].category === 'headset') {
//             headsets.innerHTML += setProduct;
//         } else if (data[i].category === 'mouse') {
//             mice.innerHTML += setProduct;
//         } else {
//             console.log('Category not defined.')
//         }
//     }
// })


