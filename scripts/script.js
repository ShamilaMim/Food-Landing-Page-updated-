// JavaScript code to add and remove the "active" class on click
const menuItems = document.querySelectorAll('.menu-item-side-bar li');
const menuItemsMobile = document.querySelectorAll('.menu-item-side-bar-m li')
const scrollBarOut = document.querySelector('.scroll-bar-out');
const scrollBarIn = document.querySelector('.scroll-bar-in');
const account = document.querySelector('#account');
const sideBar = document.querySelector('#btn-food-menu');
const menu = document.querySelector('.side-bar-m');
const selectFood = document.querySelector("#select-menu-m")

// JavaScript code for dark/light theme toggle
const toggleButton = document.getElementById('theme-toggle');
const toggleButtonM = document.getElementById('theme-toggle-m');
const body = document.body;



const food = [
    {
        id: 1,
        foodName: "Burger",
        foodItem: [
            {
                pName: "Burger1",
                price: "6",
                Image: "./Image/Product/Burger1.jpg"
            },
            {
                pName: "Burger2",
                price: "7.5",
                Image: "./Image/Product/Burger2.jpg"
            },

        ]


    },
    {
        id: 2,
        foodName: "Pizza",
        foodItem: [
            {
                pName: "Pizza1",
                price: "8",
                Image: "./Image/Product/Pizza14.png"
            },
            {
                pName: "Pizza2",
                price: "7.5",
                Image: "./Image/Product/Pizza15.png"
            },
        ]


    },
    {
        id: 3,
        foodName: "Cupcake",
        foodItem: [
            {
                pName: "Cupcake1",
                price: "9",
                Image: "./Image/Product/Cupcake1.jpg"
            },
            {
                pName: "Cupcake2",
                price: "5",
                Image: "./Image/Product/Cupcake2.jpg"
            },

        ]


    },
    {
        id: 4,
        foodName: "Ramen",
        foodItem: [
            {
                pName: "Ramen1",
                price: "8",
                Image: "./Image/Product/Ramen1.jpg"
            },
            {
                pName: "Ramen2",
                price: "7.5",
                Image: "./Image/Product/Ramen2.jpeg"
            },

        ]


    },
    {
        id: 5,
        foodName: "Ice Cream",
        foodItem: [
            {
                pName: "Ice Cream1",
                price: "8",
                Image: "./Image/Product/IceCream.jpg"
            },
            {
                pName: "Ice Cream2",
                price: "7.5",
                Image: "./Image/Product/IceCreame2.jpg"
            },
        ]


    }
]




// Function to create a card
function createCard(price, name, im) {
    // Create a new div element with the "Item" class
    const card = document.createElement('div');
    card.classList.add('Item');

    // Create an img element for the image
    const image = document.createElement('img');
    image.src = `${im}`;
    image.alt = '';

    // Create span elements for the food name and price
    const foodName = document.createElement('span');
    foodName.classList.add('food-name');
    foodName.textContent = name;

    const foodPrice = document.createElement('span');
    foodPrice.classList.add('food-price');
    const pLogo = document.createElement('span');
    pLogo.classList.add('p-logo');
    pLogo.textContent = '$';
    const priceValue = document.createElement('span');
    priceValue.textContent = price;

    // Append elements to the card
    card.appendChild(image);
    card.appendChild(foodName);
    card.appendChild(foodPrice);
    foodPrice.appendChild(pLogo);
    foodPrice.appendChild(priceValue);

    return card;
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove "active" class from all items
        menuItems.forEach(i => i.classList.remove('active'));

        // Add "active" class to the clicked item
        item.classList.add('active');

        // Get the index of the clicked item
        const cardContainer = document.querySelector(".food-item-image");
        console.log(cardContainer);
        cardContainer.innerHTML = "";
        const index = Array.from(menuItems).indexOf(item);
        food[index].foodItem.forEach(foodList => {

            cardContainer.appendChild(createCard(foodList.price, foodList.pName, foodList.Image))

        });

        // Calculate the height based on the clicked item index
        const heightPercentage = (index + 1) * 20;
        scrollBarIn.style.height = `${heightPercentage}%`;
    });
});


menuItemsMobile.forEach(item => {
    item.addEventListener('click', () => {
        // Remove "active" class from all items
        menuItemsMobile.forEach(i => i.classList.remove('active-m'));

        // Add "active" class to the clicked item
        item.classList.add('active-m');

        // Get item from item and add it selectFood
        selectFood.innerHTML = item.innerHTML;

        const cardContainer = document.querySelector(".food-item-image-m");
        cardContainer.innerHTML = "";
        const index = Array.from(menuItemsMobile).indexOf(item);
        food[index].foodItem.forEach(foodList => {
            cardContainer.appendChild(createCard(foodList.price, foodList.pName, foodList.Image))

        });

    });
});




toggleButton.addEventListener('click', () => {
    // Toggle dark mode class on body
    body.classList.toggle('dark-mode');

    // Toggle CSS variables for dark/light theme
    if (body.classList.contains('dark-mode')) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});
toggleButtonM.addEventListener('click', () => {
    // Toggle dark mode class on body
    body.classList.toggle('dark-mode');

    // Toggle CSS variables for dark/light theme
    if (body.classList.contains('dark-mode')) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});

function setDarkTheme() {
    document.documentElement.style.setProperty('--body-color', '#251819');
    document.documentElement.style.setProperty('--body-color-dark', '#FFF');
    document.documentElement.style.setProperty('--title-color', '#F3F2F2');
    document.documentElement.style.setProperty('--side-bar-text', '#F3F2F2');
    // Change the image source to night.png
    toggleButton.src = './Image/Icon/night.png';
    account.src = './Image/Icon/dark_accounts.png';
}

function setLightTheme() {
    document.documentElement.style.setProperty('--body-color', '#FFF');
    document.documentElement.style.setProperty('--body-color-dark', '#251819');
    document.documentElement.style.setProperty('--title-color', '#282525');
    document.documentElement.style.setProperty('--side-bar-text', '#000');
    // Add more variables for light theme
    // Change the image source to light.png
    toggleButton.src = './Image/Icon/light.png';
    account.src = './Image/Icon/account.png';

}


// Add this in your JavaScript file

// document.addEventListener('DOMContentLoaded', function () {
//     const mobileMenuIcon = document.getElementById('mobile-menu-icon');
//     const mobileNavigation = document.getElementById('mobile-navigation');

//     mobileMenuIcon.addEventListener('click', function () {
//         mobileNavigation.style.display = mobileNavigation.style.display === 'flex' ? 'none' : 'flex';
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileNavigation = document.getElementById('mobile-navigation');

    mobileMenuIcon.addEventListener('click', function () {
        mobileNavigation.style.display = mobileNavigation.style.display === 'flex' ? 'none' : 'flex';
    });

    // Show default food category (e.g., Burger)
    if (menuItems.length > 0) {
        menuItems[0].click(); // This will simulate a click on the first sidebar menu item
    }

    // Show default for mobile too (optional)
    if (menuItemsMobile.length > 0) {
        menuItemsMobile[0].click();
    }
});


// Add this in your JavaScript file

sideBar.addEventListener('click', function () {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
