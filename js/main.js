
// main selectors
const categorySection = document.querySelector('.category-section');
const carouselSection = document.querySelector('.great-deals-section .swiper .swiper-wrapper')
const recommendationSection = document.querySelector('.recommendation-section .recommendation-section__wrapper');
const sellersSection = document.querySelector('.bestsellers-section__wrapper');
// **** Category Section Function ****

function categoryFunc(categoryData) {
   // create element
   const categoryItems = document.createElement('ul');
   // add class
   categoryItems.classList.add('flexitem');
   // map data
   categoryData.map(item => {
      categoryItems.innerHTML += `
         <li class="category-section__item">
            <a href=${item?.href}>
               <img src=${item.image} alt="Ellipse">
               <p>${item.title}</p>
            </a>
         </li>
      `
      categorySection.appendChild(categoryItems)
   })
}
categoryFunc(categoryData);

/************ Swiper Carousel ***********/

let swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerGroup: 3,
   breakpoints: {
      '480': {
         slidesPerView: 2,
         spaceBetween: 5,
      },
      '312': {
         slidesPerView: 2,
         spaceBetween: 5,
      },
      '1280': {
         slidesPerView: 3,
         spaceBetween: 30
      }
   },
   loopFillGroupWithBlank: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});


// **** Great deals Section Function --- Carousel ****

function carouselFunc(productData) {
   productData.slice(0, 4).map(element => {
      carouselSection.innerHTML += `
         <div class="swiper-slide card">
            <div class="card__image">
               <img src=${element.image} alt="Image" />
               </div>
               <div class="rec flexcenter">
               <i class="icon icon__star"></i>Рекомендовано
            </div>
            <div class="card-info">
            <div class="card-info__header flexitem">
               <h4>${element.price} UZS<span> /месяц</span></h4>
               <button class="favourite-icon flexcenter">
                  <i class="icon icon__favourite"></i>
               </button>
            </div>
            <div class="card-info__body">
               <h5>
                  ${element.title}
               </h5>
               <p>${element.region}</p>
            </div>
            <div class="card-info__footer flexitem">
               <div class="info__item flexitem">
                  <i class="icon icon__bus"></i>
                  <p>${element.busMin}</p>
               </div>
               <div class="info__item flexitem">
                  <i class="icon icon__house"></i>
                  <p>${element.floor}</p>
               </div>
               <div class="info__item flexitem">
                  <i class="icon icon__demension"></i>
                  <p>${element.metre}</p>
               </div>
            </div>
            </div>
      </div>
      `

   })
}
carouselFunc(productData);

// **** Recommendations for you Section Function ****

function recommendationFunc(productData) {
   productData.map(element => {
      recommendationSection.innerHTML += `
         <div class="card card-display">
               <div class="card__image">
                  <img src=${element.image} alt="Image" />
                  </div>
               <div class="card-info">
               <div class="card-info__header flexitem">
                  <h4>${element.price} UZS<span> /месяц</span></h4>
                  <button class="favourite-icon flexcenter">
                     <i class="icon icon__favourite"></i>
                  </button>
               </div>
               <div class="card-info__body">
                  <h5>
                     ${element.title}
                  </h5>
                  <p>${element.region}</p>
               </div>
               <div class="card-info__footer flexitem">
                  <div class="info__item flexitem">
                     <i class="icon icon__bus"></i>
                     <p>${element.busMin}</p>
                  </div>
                  <div class="info__item flexitem">
                     <i class="icon icon__house"></i>
                     <p>${element.floor}</p>
                  </div>
                  <div class="info__item flexitem">
                     <i class="icon icon__demension"></i>
                     <p>${element.metre}</p>
                  </div>
               </div>
               </div>
         </div>
      `
   })
}
recommendationFunc(productData);

// Load More Button

let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 9;

loadMoreBtn.onclick = () => {
   let boxes = [
      ...document.querySelectorAll(".recommendation-section__wrapper .card"),
   ];
   for (var i = currentItem; i < currentItem + 9; i++) {
      boxes[i].style.display = "inline-block";
   }
   currentItem += 9;

   if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = "none";
   }
};

// **** Best Sellers Section Function ****

function sellerFunc(sellerData) {
   // create element
   const sellersItems = document.createElement('div');
   // add class
   sellersItems.classList.add('flexwrap');
   // map data
   sellerData.map(item => {
      sellersItems.innerHTML += `
         <div class="row">
            <div class="item flexcenter">
             <div class="left">
               <img
                  src=${item.image}
                  alt="Image"
               />
             </div>
            <div class="right">
               <h3>${item.name}</h3>
               <p>${item.desc}</p>
             </div>
            </div>
      </div>
   `
      sellersSection.appendChild(sellersItems);
   })
}
sellerFunc(sellerData);