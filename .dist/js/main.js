function hideHeader(){document.querySelector(".header").classList.add("header--hidden")}function showHeader(){document.querySelector(".header").classList.remove("header--hidden")}function openClose(){document.querySelector(".hero__sinopsis").classList.toggle("hero__sinopsis--is-open")}document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".hero").clientHeight;var e=document.querySelector(".hero__sinopsis__button");let t=!1;window.addEventListener("scroll",function(){var e=window.scrollY;const o=document.getElementById("video");500<=e&&!t&&(o.src+="&autoplay=1",t=!0),(e>n?hideHeader:showHeader)()}),e.addEventListener("click",openClose)});