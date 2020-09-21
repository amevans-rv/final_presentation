/* Shared JS */

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

document.querySelector('.header-div').innerHTML = `
<div class="backdrop"></div>
<div class='background'></div>
        <header>
            <div class='logo'>
                <a href='index.html' id="logo-image">main<img src='images/rg-nav.png' alt="Reg gamers corner icon"></a>
            </div>
            <nav class='navbar'>
                <ul>
                    <li class='navbar__search'>
                        <a href='products.html'>Search</a>
                        <ul class='searchDrop'>
                            <form action='products.html'>
                                <input id='searchText' type='text' placeholder='What are you looking for?'>
                                <input type='submit' value="Search" onclick='return getSearchResults()'>
                            </form>
                        </ul>
                    </li>
                    <li class='navbar__categories'>
                        <a href='products.html'>Categories</a>
                        <ul class='categoryDrop'>
                            <p><a href='products.html' onclick="desktopFilter()">-Desktops</a></li></p>
                            <p><a href='products.html' onclick="laptopFilter()">-Laptops</a></li></p>
                            <p><a href='products.html' onclick="headsetFilter()">-Headsets</a></p>
                            <p id='last'><a href='products.html' onclick="mouseFilter()">-Mice</a></p>
                        </ul>
                    </li>
                    <li class='navbar__li'>
                        <a href='products.html' onclick="resetLocalStorage()">All Products</a>
                    </li>
                    <li class='navbar__li'>
                        <a href='contactus.html'>Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div class='cart-logo'>
                <a href='cart.html'>cart</a>
            </div>
            <div>
                <button class="toggle-button" onclick='return showList()'>Hamburger 
                    <img id="hamgmenu" src="images/hambmenu.png" alt="hamburger menu icon">
                </button>
            </div>
        </header>
        <nav class="mobile-nav">
            <ul class="mobile-nav__items">
                <li class="mobile-nav__item">
                    <a href="cart.html">Cart</a>
                </li>
                <li class="mobile-nav__item">
                    <a href="products.html">Categories</a>
                </li>
                <li class="mobile-nav__item">
                    <a href="products.html">All Products</a>
                </li>
                <li class="mobile-nav__item">
                    <a href="contactus.html">Contact Us</a>
                </li>
            </ul>
        </nav>`

document.querySelector('.footer-div').innerHTML =`
        <footer>
            <h1><span class='redtext'>Red</span>Gamers</h1>
            <ul class='footer-bottom'>
                <li>&copy; 2020 RedGamers</li>
                <li><a href='#'>Contact Us</a>
                <li><a href='#'>Privacy Policy</a>
                <li><a href='#'>Return Policy</a>
                <li><a href='#'>Careers</a>
            </ul>
        </footer>`

var mobileNav = document.querySelector('.mobile-nav');

const showList = () => {   
    if (mobileNav.style.display === '' || mobileNav.style.display === 'none') {
        mobileNav.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
    }
}

const getSearchResults = () => {
    var searchText = (document.querySelector('#searchText').value);
    localStorage.searchText = searchText;
}

const resetLocalStorage = () => {
    localStorage.category = "";
    localStorage.searchText = "";
}

const desktopFilter = () => {
    localStorage.category = "Desktop";
}

const laptopFilter = () => {
    localStorage.category = "Laptop";
}

const headsetFilter = () => {
    localStorage.category = "Headset";
}

const mouseFilter = () => {
    localStorage.category = "Mouse";
}