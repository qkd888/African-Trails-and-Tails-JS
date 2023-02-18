/// ********SPINNING LOGO**********//
// ********************************//
// ********************************//

const logo = document.querySelector('.logo');

let rotation = 0;
setInterval(function() {
  rotation = (rotation + 2);
  logo.style.transform = `rotate(${rotation}deg)`;
}, 50);

// *******************************//
// *******************************//
// *************NAV***************//

const nav = document.querySelector(".nav");
const linkText = ["Home |", "About Us |", "Videos |", "Shop |", "Contact |"];
const linkContainer = document.querySelector(".link-container");

for (let i = 0; i < linkText.length; i++) {
  const link = document.createElement("a");
  link.href = "#about-container" + linkText[i];
  link.textContent = linkText[i];
  linkContainer.appendChild(link);
}

// *************MOBILE NAV BTN*****************//

// ******************************//
// *********NAV TOGgLE***********//

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const contentArray = ["span", "span", "span"];

for (let i = 0; i < contentArray.length; i++) {
  const span = document.createElement("span");
  mobileNavBtn.appendChild(span);
}

// ***********MOBILE NAV**********//
// *******************************//
// *******************************//

document.addEventListener('DOMContentLoaded', () => {
  const mbNav = document.querySelector('.mobile-nav');
  const mobileArray = ['Home', 'About Us', 'Videos', 'Shop', 'Contact'];

  for (let i = 0; i < mobileArray.length; i++) {
    const mLinks = document.createElement('a');
    mLinks.textContent = mobileArray[i];
    mLinks.href = '#' + mobileArray[i];
    mbNav.appendChild(mLinks);
  }

  const mbNavBtn = document.querySelector('.mobile-nav-btn');
  mbNavBtn.addEventListener('click', () => {
    console.log("nav click");
    mbNavBtn.classList.toggle('show-mobile-nav');
  });

  document.body.addEventListener('click', (e) => {
    console.log("body click");
    if (!mbNavBtn.contains(e.target)) {
      mbNavBtn.classList.remove('show-mobile-nav');
    }
  });
});


// *******************************//
// *******************************//
// ***************H1**************//

const hero = document.querySelector(".hero");
const heading = document.createElement("h1");
heading.textContent = "Welcome To The Page!";
hero.appendChild(heading);

// *******************************//
// *******************************//
// ***************P***************//

const para = document.createElement("p");
para.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laboriosam aliquam, a placeat ut fuga.";
hero.appendChild(para);

// *******************************//
// *******************************//
// ************BUTTON*************//

const ctaBtn = document.createElement("button");
ctaBtn.textContent = "Contacts";
hero.appendChild(ctaBtn);

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
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet id tenetur tempore officiis repudiandae nisi excepturi eius, soluta quidem distinctio possimus temporibus dicta accusantium aliquam eveniet iure iste, corrupti omnis! Maiores adipisci perferendis quis ab qui sapiente, a tempora sint sunt possimus ratione consectetur eum, magni velit atque provident. Dolorum aliquam perspiciatis distinctio! Doloribus facilis officiis quia in iste saepe magni excepturi labore aliquid ducimus ea officia rerum veritatis facere eos ipsum nulla delectus minus libero similique, repellendus explicabo modi asperiores. Commodi voluptatem reprehenderit, corrupti provident laborum doloremque aut nobis facere placeat? Hic odit iusto architecto aliquam molestiae voluptatem iste officiis maxime deleniti esse. Autem ad quaerat nesciunt porro vel. Soluta asperiores vero nostrum, voluptatem voluptas perspiciatis nihil. Asperiores.";
aboutContainer.appendChild(aboutPara);
