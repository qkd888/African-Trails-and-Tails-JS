/// ********SPINNING LOGO**********//
// ********************************//
// ********************************//
const logo = document.querySelector(".logo");

let rotation = 0;
setInterval(function () {
  rotation = rotation + 1;
  logo.style.transform = `rotate(${rotation}deg)`;
}, 80);

// *******************************//
// *******************************//
// *************NAV***************//

const nav = document.querySelector(".nav");
const linkContainer = document.querySelector(".link-container");
const linkText = ["Home", "About Us", "Videos", "Shop", "Contact"];
const hrefValues = ["#home", "#about", "#videos", "#shop", "#contact"];

for (let i = 0; i < linkText.length; i++) {
  const link = document.createElement("a");
  link.textContent = linkText[i] + " | ";
  link.setAttribute("href", hrefValues[i]);
  linkContainer.appendChild(link);
}

// ****************************************//
// ****************************************//
// MOBILE NAV BTN//

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const contentArray = ["span", "span", "span"];

for (let i = 0; i < contentArray.length; i++) {
  const span = document.createElement("span");
  mobileNavBtn.appendChild(span);
}



mobileNavBtn.addEventListener("click", () => {
  mobileNavBtn.classList.toggle("show-mobile-nav");

  if (mobileNavBtn.classList.contains("show-mobile-nav")) {
    document.body.addEventListener("click", onBodyClick);
  } else {
    document.body.removeEventListener("click", onBodyClick);
  }
});

function onBodyClick(e) {
  if (!mobileNavBtn.contains(e.target)) {
    mobileNavBtn.classList.remove("change");
    document.body.removeEventListener("click", onBodyClick);
  }
};

mobileNavBtn.addEventListener("click", () => {
  if (!mobileNavBtn.classList.contains("change")) {
    mobileNavBtn.classList.toggle("change");
    document.body.addEventListener("click", (e) => {
      if (!mobileNavBtn.contains(e.target)) {
        mobileNavBtn.classList.remove("change");
      }
    });
  } else {
    mobileNavBtn.classList.remove("change");
  }
});

// ***********MOBILE NAV**********//
// *******************************//
// *******************************//

function createMobileNavLinks(mobileArray, hrefArray) {
  const mbNav = document.querySelector(".mobile-nav");
  let linksHtml = "";

  for (let i = 0; i < mobileArray.length; i++) {
    linksHtml += `<a href="${hrefArray[i]}">${mobileArray[i]}</a>`;
  }

  // Set the HTML of the mobile nav element to the linksHtml string
  mbNav.innerHTML = linksHtml;

  // Add event listeners to mobile nav links to close the mobile nav
  const mbNavLinks = document.querySelectorAll(".mobile-nav a");
  mbNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mbNav.classList.remove("show-mobile-nav");
    });
  });
}

// Attach event listener to mobileNavBtn
mobileNavBtn.addEventListener("click", () => {
  const mbNav = document.querySelector(".mobile-nav");

  // Toggle the "show-mobile-nav" class on the mobile nav element
  mbNav.classList.toggle("show-mobile-nav");
});

// Create mobile nav links
const mobileArray = ["Home", "About Us", "Videos", "Shop", "Contact"];
const hrefArray = ["#home", "#about", "#videos", "#shop", "#contact"]; // New array with href values

createMobileNavLinks(mobileArray, hrefArray);

// Attach event listener to document body to close mobile nav on click outside
document.body.addEventListener("click", (e) => {
  const mbNav = document.querySelector(".mobile-nav");

  // Check if the clicked element is inside the mobile nav element or the mobile nav button
  if (!mbNav.contains(e.target) && !mobileNavBtn.contains(e.target)) {
    // Remove the "show-mobile-nav" class from the mobile nav element
    mbNav.classList.remove("show-mobile-nav");
  }
});








// HERO***************************//
// *******************************//
// *******************************//
// ***************H1**************//

const hero = document.querySelector(".hero");
const heading = document.createElement("h1");
const h3 = document.createElement("h3");
const h2 = document.createElement("h2");
const h5 = document.createElement("h5");
const subBtn1 = document.createElement("button");
const para = document.createElement("p");

heading.textContent = "Welcome";
h3.textContent = "To";
h2.textContent = "African";
h5.textContent = "Trails & Tails";
subBtn1.textContent = "Subscribe";
para.textContent =
  "From the mountains to the beaches, we've got it all covered on our travel channel..";

hero.appendChild(heading);
hero.appendChild(h3);
hero.appendChild(h2);
hero.appendChild(h5);
hero.appendChild(subBtn1);
hero.appendChild(para);

// *******************************//
// *******************************//
// *****************************//// **********************************//
// *******************************//
// *********ABOUT SECTION*********//

const aboutContainer = document.querySelector(".about-container");
const aboutUs = document.createElement("h2");
aboutUs.textContent = "About Us";
aboutContainer.appendChild(aboutUs);
const aboutPara = document.createElement("p");
aboutPara.textContent =
  "Welcome to African Trails & Tails WebShop and travel channel around South Africa! We are avid travelers, adventurers, and explorers. We love to document our travels and share them with others, and we can't think of a better place to explore than South Africa! On this travel channel, we will be sharing our journey through the diverse landscapes of South Africa. From the beautiful beaches of Cape Town to the majestic safari parks of the Northern Cape, we will be taking you with us to experience the culture, people, and natural wonders that South Africa has to offer. We will be visiting some of the most renowned tourist attractions, as well as exploring some of the lesser known gems of South Africa.  We will be sharing our experiences and stories with you, so that you too can experience the beauty and adventure of South Africa. Along the way, we will also be providing travel tips and advice to help make your own trips to South Africa a success So please, Subscribe to our Youtube Channel and join us on our journey and explore South Africa!";
aboutContainer.appendChild(aboutPara);
const scrollDownButton = document.getElementById('scrollDownButton');

scrollDownButton.addEventListener('click', () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

// *******************************//
// *******************************//
// *****************************//// **********************************//
// ********BACK TO TOP BTN********//

const backToTopBtn = document.querySelector("#back-to-top-btn");

window.onscroll = function () {
  if (window.pageYOffset > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// *******************************//
// *******************************//
// *****************************//// **********************************//
// ************VIDOES*************//
const vidoes = document.querySelector(".videos");
const vidh3 = document.querySelector(".vidh3");
vidh3.textContent ="Our Videos";
const vContainerPara = document.querySelector(".v-container-para");
vContainerPara.textContent ="Welcome to our Videos, where we take you on an adventure throughout South Africa! From the breathtaking landscapes of the Garden Route to the rich indigenous forrests and mountains of the Easter Cape, We'll show you the beauty and excitement that this country has to offer. We strive to capture the unique culture and history of this amazing country, so join us on this journey. With our videos, you'll get an up-close look at the diverse sights, sounds and experiences that South Africa has to offer. So, don't miss out and subscribe now to stay updated on all the amazing places we visit and experiences we have!";




const vidContainer = document.querySelector(".vid-container");


vidoes.appendChild(vContainerPara);
vidoes.appendChild(vidh3);


