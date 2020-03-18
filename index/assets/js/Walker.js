/**
 * 网站设置
 *
 * @name 夏目友人帐
 *
 * Copyright (c) 夏目贵志 2020 修改
 */

Prism.highlightAll()

let mainNavLinks = document.querySelectorAll(".markdownIt-TOC li a");

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach((link, index) => {
    let section = document.getElementById(decodeURI(link.hash).substring(1));
    let nextSection = null
    if (mainNavLinks[index + 1]) {
      nextSection = document.getElementById(decodeURI(mainNavLinks[index + 1].hash).substring(1));
    }
    if (section.offsetTop <= fromTop) {
      if (nextSection) {
        if (nextSection.offsetTop > fromTop) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");    
        }
      } else {
        link.classList.add("current");
      }
    } else {
      link.classList.remove("current");
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll(".post-feature-image.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          lazyImage.style.backgroundImage = `url(${lazyImage.dataset.bg})`
          lazyImage.classList.remove("lazy")
          lazyImageObserver.unobserve(lazyImage)
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage)
    })
  } else {
    // Possibly fall back to a more compatible method here
  }
});

const menuContainer = document.querySelector('.menu-container')
const menus = document.querySelectorAll('.menu-container .menu')
const mask = document.querySelector('.mask')
const contentWrapper = document.querySelector('.content-wrapper')
const latestArticle = document.querySelector('.latest-article')
const readMore = document.querySelector('.read-more')
const indexPage = document.querySelector('.index-page')

const isHome = location.pathname === '/'
if (latestArticle) {
  latestArticle.style.display = isHome ? 'block' : 'none'
  readMore.style.display = isHome ? 'block' : 'none'
  indexPage.style.display = isHome ? 'none' : 'block'
}

const openMenu = () => {
  menuContainer.classList.add('open')
  menus.forEach(menu => {
    menu.classList.add('animated', 'fadeInLeft')
  })
  mask.classList.add('open')
  contentWrapper.classList.add('is-second')
}

const closeMenu = () => {
  menuContainer.classList.remove('open')
  menus.forEach(menu => {
    menu.classList.remove('animated', 'fadeInLeft')
  })
  mask.classList.remove('open')
  contentWrapper.classList.remove('is-second')
}