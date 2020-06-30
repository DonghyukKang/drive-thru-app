`use strict`
// TODO
// 1. button 추가하기
//  각 카테고리 클릭했을 떄, restaurantlist의
//  카테고리에 해당하는 페이지로 이동할 수 있도록
//  event delegation 쓰자.
// 2. banner slider
//  3초 마다 배너가 바뀌도록 slider 추가
// 3. search 했을 떄 페이지 이동 추가 (나중에)
//  search 결과 보여줄 수 있는 페이지 마크업 추가 필요

const container = document.querySelector(".container");
const categoryItem = document.querySelectorAll(".category__item");
const NUM_BANNER_IMG = 3;

function handleCategoryClick(e) {
    const titleChild = e.currentTarget.querySelector(".category__item__title");
    const clickedCategory = titleChild.innerText
    
    localStorage.setItem('category', clickedCategory);
    window.location.href = "restaurant-list.html";
}

function slideBanner() {
    const mainBannerImgs = document.querySelectorAll(".main-banner__img");
    let currentBannerImg = 0;
    mainBannerImgs.forEach((img, idx) => {
        if (!img.classList.contains("hide")) {
            currentBannerImg = idx;
            img.classList.add("hide");
        }
    });

    const nextBannerImg = (currentBannerImg + 1) % NUM_BANNER_IMG;
    mainBannerImgs[nextBannerImg].classList.remove("hide");

    setTimeout(slideBanner, 3000);
}

function init() {
    localStorage.clear();

    categoryItem.forEach(item => {
        item.addEventListener("click", handleCategoryClick)
    })

    slideBanner();
}

init();
