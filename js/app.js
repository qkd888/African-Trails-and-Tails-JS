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
// MOBILE NAV BTN//

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const contentArray = ["span", "span", "span"];

for (let i = 0; i < contentArray.length; i++) {
  const span = document.createElement("span");
  mobileNavBtn.appendChild(span);
}

mobileNavBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileNavBtn.classList.toggle("change");

  if (mobileNavBtn.classList.contains("change")) {
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
}

// ***********MOBILE NAV**********//
// *******************************//
// *******************************//

function createMobileNavLinks(mobileArray, hrefArray) {
  const mbNav = document.querySelector(".mobile-nav");
  let linksHtml = "";

  for (let i = 0; i < mobileArray.length; i++) {
    linksHtml += `<a href="${hrefArray[i]}">${mobileArray[i]}</a>`;
  }

  mbNav.innerHTML = linksHtml;
}

// Attach event listener to mobileNavBtn
mobileNavBtn.addEventListener("click", () => {
  console.log("nav click");
  mobileNavBtn.classList.toggle("show-mobile-nav");
});

// Create mobile nav links
const mobileArray = ["Home", "About Us", "Videos", "Shop", "Contact"];
const hrefArray = ["#home", "#about", "#videos", "#shop", "#contact"]; // New array with href values

createMobileNavLinks(mobileArray, hrefArray);

// Attach event listener to document body to close mobile nav on click outside
document.body.addEventListener("click", (e) => {
  if (!mobileNavBtn.contains(e.target)) {
    mobileNavBtn.classList.remove("show-mobile-nav");
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
const sDBtn = document.createElement("a");

heading.textContent = "Welcome";
h3.textContent = "To";
h2.textContent = "African";
h5.textContent = "Trails & Tails";
subBtn1.textContent = "Subscribe";
para.textContent =
  "From the mountains to the beaches, we've got it all covered on our travel channel..";
sDBtn.textContent = "+";
sDBtn.href = "#about";
sDBtn.class = "scroll-down-button";

hero.appendChild(heading);
hero.appendChild(h3);
hero.appendChild(h2);
hero.appendChild(h5);
hero.appendChild(subBtn1);
hero.appendChild(para);
hero.appendChild(sDBtn);

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
  "African Trails & Tails travel channel around South Africa! We are avid travelers, adventurers, and explorers. We love to document our travels and share them with others, and we can't think of a better place to explore than South Africa! On this travel channel, we will be sharing our journey through the diverse landscapes of South Africa. From the beautiful beaches of Cape Town to the majestic safari parks of the Northern Cape, we will be taking you with us to experience the culture, people, and natural wonders that South Africa has to offer. We will be visiting some of the most renowned tourist attractions, as well as exploring some of the lesser known gems of South Africa.  We will be sharing our experiences and stories with you, so that you too can experience the beauty and adventure of South Africa. Along the way, we will also be providing travel tips and advice to help make your own trips to South Africa a success So please, Subscribe to our Youtube Channel and join us on our journey and explore South Africa!";
aboutContainer.appendChild(aboutPara);

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
