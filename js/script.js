
//  const second = document.querySelector(".second .number");
// const minutes =document.querySelector(".minutes .number");
// const hours=document.querySelector(".hours .number");
// const days =document.querySelector(".days .number");

// console.log(second,minutes,hours,days);
// let secValue =60;
// let minValue =60;
// let hourValue =24;
// let dayValue = 47;
// const timeFunction =setInterval(() =>{
//     secValue--;
//     if(secValue === 0){
//         minValue--;
//         secValue =60;
//     }
//     if(minValue === 0){
//         hourValue--;
//         minValue =60;
//     }
//     if(hourValue === 0){
//         dayValue --;
//         hourValue = 24;
//     }
//     if(dayValue === 0){
//         clearInterval(timeFunction);
//     }
//     console.log(secValue);
//     second.textContent =secValue < 10 ? `0${secValue}` : secValue;
//     minutes.textContent =minValue < 10 ? `0${minValue}` : minValue;
//     hours.textContent =hourValue < 10 ? `0${hourValue}` : hourValue;
//     days.textContent =dayValue < 10 ? `0${dayValue}` : dayValue;
// },1000);

// console.log("sonali");



const deadline = new Date("june 31, 2025 12:00:00").getTime();             
const x = setInterval(function() {
   const currentTime = new Date().getTime();       
   // console.log(currentTime);         
   const t = deadline - currentTime; 
   const days = Math.floor(t / (1000 * 60 * 60 * 24)); 
   // console.log(days)
   const hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
   const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
   const seconds = Math.floor((t % (1000 * 60)) / 1000); 
   document.getElementById("day").innerHTML =days; 
   document.getElementById("hour").innerHTML =hours; 
   document.getElementById("minute").innerHTML = minutes; 
   document.getElementById("second").innerHTML =seconds; 
   if (t < 0) {
      clearInterval(x); 
      document.getElementById("time-up").innerHTML = "TIME UP"; 
      document.getElementById("day").innerHTML ='0'; 
      document.getElementById("hour").innerHTML ='0'; 
      document.getElementById("minute").innerHTML ='0' ; 
      document.getElementById("second").innerHTML = '0'; 
   } 
}, 1000);  



const deadend = new Date("june 31, 2025 00:00:00").getTime();             
const y = setInterval(function() {
   const currentTimer = new Date().getTime();                
   const time = deadend - currentTimer; 
   const daysoffer = Math.floor(time / (1000 * 60 * 60 * 24)); 
   const hoursoffer = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
   const minutesoffer = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
   const secondsoffer = Math.floor((time % (1000 * 60)) / 1000); 
   document.getElementById("offer-day").innerHTML =daysoffer ; 
   document.getElementById("offer-hour").innerHTML =hoursoffer; 
   document.getElementById("offer-minute").innerHTML = minutesoffer; 
   document.getElementById("offer-second").innerHTML =secondsoffer; 
   if (time < 0) {
      clearInterval(x); 
      document.getElementById("times-end").innerHTML = "TIME UP"; 
      document.getElementById("offer-day").innerHTML ='0'; 
      document.getElementById("offer-hour").innerHTML ='0'; 
      document.getElementById("offer-minute").innerHTML ='0' ; 
      document.getElementById("offer-second").innerHTML = '0'; 
   } 
}, 1000);  




// responsive hamburger 
const humburger =document.querySelector(".hamburgermenu");

const menulist = document.querySelector(".hamburger-area");

humburger.addEventListener("click",()=>{
console.log(menulist.classList.toggle("menuitem"));

});





// Target the container div
// let container = document.getElementsByClassName("swiper-slide");
// console.log(container);
// Loop and insert HTML
// for (let i = 0; i < newArrivalproducts.length; i++) {
//   let product = newArrivalproducts[i];

//   let productHTML = `
//     <div class="product">
//       <img src="${product.image}" alt="${product.title}">
//       <h3>${product.title}</h3>
//       <p>Price: $${product.price}</p>
//     </div>
//   `;

//   container.innerHTML += productHTML;
//   console.log(product.image[i])
// }
















  function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function addToCart(name, price, image) {
    let cart = getCart();
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }

    saveCart(cart);
    alert("Item added/updated!");
  }

  function removeFromCartByName(name) {
    let cart = getCart();
    cart = cart.filter(item => item.name !== name);
    saveCart(cart);
    alert("Item removed!");
  }

  function incrementQuantity(name) {
    let cart = getCart();
    const item = cart.find(item => item.name === name);
    if (item) item.quantity += 1;
    saveCart(cart);
    showCart(); // optional if used in cart page
  }

  function decrementQuantity(name) {
    let cart = getCart();
    const item = cart.find(item => item.name === name);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart = cart.filter(i => i.name !== name);
    }
    saveCart(cart);
    showCart(); // optional if used in cart page
  }



   function displayCart() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const container = document.getElementById('cart-list');
      container.innerHTML = '';

      if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
        return;
      }

      cart.forEach((item, index) => {
        container.innerHTML += `
          <div style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
            <img src="${item.image}" alt="${item.name}" style="width:100px;"><br>
            <strong>${item.name}</strong><br>
            ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}
            <div style="margin-top:5px;">
              <button onclick="decrementQuantity('${item.name}')">−</button>
              <span style="margin: 0 10px;">${item.quantity}</span>
              <button onclick="incrementQuantity('${item.name}')">+</button>
              <button onclick="removeFromCartByName('${item.name}')" style="margin-left:10px;">🗑 Remove</button>
            </div>
          </div>
        `;
      });
    }

    function removeFromCart(index) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart(); // Refresh the list
    }


const newArrivalproducts = [
  { image: "images/oil → 1-2-500x500.jpg.png", title: "100 Percent Mango Juice 64fl oz Bottle", price: 10 ,rating: 4  },
  { image: "images/Link → 1-87-500x500.jpg.png", title: "100 Percent Rising Pizza Crust – Pack", price: 8 ,rating: 3.5},
  { image: "images/Link → 1-12-500x500.jpg.png", title: "100 Percent Orange Juice 64 fl oz Bottle", price: 16 ,rating: 3},
  { image: "images/Link → 1-30-500x500.jpg.png", title: "100 Percent Margerita Pizza Crust Pack", price: 12 ,rating: 4.5},
  { image: "images/Link → 1-500x500.jpg.png", title: "100 Percent Evolve Protein Shake pack", price: 14 ,rating: 5 },
  { image: "images/Link → 1-9-500x500.jpg.png", title: "100 Percent Angel Soft Mega Rolls 64 pack", price: 18,rating: 4.5 },
  { image: "images/Apple-Juice-Drink-is-a-healthy-natural-product-500ml-can-Brand-Nawon.jpg", title: "100 Percent Mango Juice 64fl oz Bottle", price: 10 ,rating: 3.5},
  { image: "images/40199584_3-tropicana-mixed-fruit-delight.webp", title: "100 Percent Rising Pizza Crust – Pack", price: 8 ,rating: 4.5},
  { image: "images/250ml-paper-boat-swing-yummy-guava-juice.png", title: "100 Percent Orange Juice 64 fl oz Bottle", price: 16 ,rating: 4.5},
  { image: "images/paloma.png", title: "100 Percent Margerita Pizza Crust Pack", price: 12 ,rating: 3.5},
  { image: "images/Link → 1-140-500x500.jpg.png", title: "100 Percent Evolve Protein Shake pack", price: 14 ,rating: 5},
  { image: "images/Link → 1-6can-500x500.jpg.png", title: "100 Percent Angel Soft Mega Rolls 64 pack", price: 18 ,rating: 4.5},
  { image: "images/Link → 1-115-500x500.jpg.png", title: "100 Percent Mango Juice 64fl oz Bottle", price: 10 ,rating: 4.5},
  { image: "images/Link → 1-104-500x500.jpg.png", title: "100 Percent Rising Pizza Crust – Pack", price: 8 ,rating: 4.5},
  { image: "images/Link → 1-12-500x500.jpg.png", title: "100 Percent Orange Juice 64 fl oz Bottle", price: 16 ,rating: 4.5},
  { image: "images/Link → 1-30-500x500.jpg.png", title: "100 Percent Margerita Pizza Crust Pack", price: 12 ,rating: 3.5},
  { image: "images/Link → 1-124-500x500.jpg.png", title: "100 Percent Evolve Protein Shake pack", price: 14 ,rating: 4.5},
  { image: "images/Link → 1-22-500x500.jpg.png", title: "100 Percent Angel Soft Mega Rolls 64 pack", price: 18 ,rating: 4.5},
 
];

const sliderTrack = document.getElementById("slider-track");




function getStarRating(rating) {
  // full star: ★, empty star: ☆
  let fullStars = Math.floor(rating);
  let halfStar = rating % 1 >= 0.5;
  let emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) starsHTML += "★";
  if (halfStar) starsHTML += "⯨"; // or you can use a half star unicode or SVG
  for (let i = 0; i < emptyStars; i++) starsHTML += "☆";

  return starsHTML;
}
// Render cards
newArrivalproducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h4>${product.title}</h4>
    <p>₹${product.price}</p>
    <div class="rating">${getStarRating(product.rating)}</div>
    <button class="add-to-cart-btn">Add to Cart</button>
  `;
  sliderTrack.appendChild(card);
});

// Variables
let currentPosition = 0;
let slidingForward = true;

function getVisibleCount() {
  const width = window.innerWidth;
  if (width >= 1024) return 6; // Desktop
  if (width >= 768) return 3;  // Tablet
  return 2;                    // Mobile
}

function getCardWidth() {
  // Get width of one card dynamically
  const card = document.querySelector('.product-card');
  if (!card) return 0;
  const style = window.getComputedStyle(card);
  return card.offsetWidth + parseFloat(style.marginRight);
}

document.getElementById("arrivalbtn").addEventListener("click", () => {
  const visibleCount = getVisibleCount();
  const cardWidth = getCardWidth();
  const totalCards = newArrivalproducts.length;

  // Maximum left slide (negative value)
  const maxSlide = -cardWidth * (totalCards - visibleCount);

  if (slidingForward) {
    currentPosition -= cardWidth * visibleCount;
    if (currentPosition <= maxSlide) {
      currentPosition = maxSlide;
      slidingForward = false;
    }
  } else {
    currentPosition += cardWidth * visibleCount;
    if (currentPosition >= 0) {
      currentPosition = 0;
      slidingForward = true;
    }
  }

  sliderTrack.style.transform = `translateX(${currentPosition}px)`;
});

// Optional: Recalculate on window resize
window.addEventListener("resize", () => {
  // Reset position and direction on resize for safety
  currentPosition = 0;
  slidingForward = true;
  sliderTrack.style.transform = `translateX(${currentPosition}px)`;
});



document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const title = e.target.parentElement.querySelector("h4").innerText;
    alert(`${title} added to cart!`);
    // Or push to a cart array here
  }
});
