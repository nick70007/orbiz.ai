AOS.init({
  // duration: 1200,
  once: true,
});

$(document).ready(function(){
  $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
  
});

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 2000) {
//     $('.partner').addClass('sticky');
//   }
//   else {
//     $('.partner').removeClass('sticky');
//   }
// });

$(document).ready(function(){
  skrollr.init({
    forceHeight: false,
    smoothScrolling: true
  });
});

function isInViewport(el) {
  var rect = $('#use-cases-div')[0].getBoundingClientRect();
  console.log(rect.top,rect.top-rect.bottom , rect.bottom - $(window).height());
  return {"isInElement" : (rect.top < 0 && rect.top > rect.top-rect.bottom) , "addPixel" : Math.abs(rect.top/5)}
}


let sidePixel = 0;
$(window).scroll(function(){
  var targetElement = $('#use-cases-div');
  let res = isInViewport(targetElement)
   if (res.isInElement) {
    console.log("res.addPixel -> ",res.addPixel)
    if(res.addPixel > 140){
      res.addPixel = 140
    }
      sidePixel = 70 - res.addPixel;
      console.log(sidePixel,": sidePixel");
      // if(sidePixel >= 0){
      //   sidePixel = 45 - sidePixel;
      // }
      targetElement.find('#movable-second-div').css('transform', `translateY(${res.addPixel}px)`);  // Example of event
      // targetElement.find('#movable-first-div').css('transform', `translateY(${sidePixel}px)`);  // Example of event
      // targetElement.find('#movable-third-div').css('transform', `translateY(${sidePixel}px)`);  // Example of event
    }else{
      targetElement.find('#movable-first-div').css('transform', `translateY(0px)`);  // Example of event
      targetElement.find('#movable-third-div').css('transform', `translateY(0px)`);  // Example of event
    }
});


// var traslatePixel = 0;
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const intersecting = entry.isIntersecting
//     console.log(entry.target.style.transform);
//     traslatePixel++
//     entry.target.style.transform = `translateY(${traslatePixel}px)`
//   }, { threshold: [0, 0.25, 0.5, 0.75, 1] })
// })

// observer.observe(document.getElementById("movable-div"))


$(".feature1").on("click", () => {
  $("[data-code-genrator]").removeAttr("data-aos")
  $("[data-code-genrator-img]").removeAttr("data-aos")
  $("[data-test-environment]").removeAttr("data-aos")
  $("[data-test-environment-img]").removeAttr("data-aos")
  $("[data-ai-hub-img], [data-ai-hub]").removeClass("aos-animate")
  $("[data-ai-hub]").attr("data-aos", "fade-up")
  $("[data-ai-hub-img]").attr("data-aos", "fade-up-right")

  $("[data-ai-hub-img], [data-ai-hub]").addClass("aos-init")
  setTimeout(() => {
    $("[data-ai-hub-img], [data-ai-hub]").addClass("aos-animate")
  }, 100)
})
$(".feature2").on("click", () => {
  $("[data-ai-hub]").removeAttr("data-aos")
  $("[data-ai-hub-img]").removeAttr("data-aos")
  $("[data-test-environment]").removeAttr("data-aos")
  $("[data-test-environment-img]").removeAttr("data-aos")
  $("[data-code-genrator-img], [data-code-genrator]").removeClass("aos-animate")
  $("[data-code-genrator]").attr("data-aos", "fade-up")
  $("[data-code-genrator-img]").attr("data-aos", "fade-up-right")

  $("[data-code-genrator-img], [data-code-genrator]").addClass("aos-init")
  setTimeout(() => {
    $("[data-code-genrator-img], [data-code-genrator]").addClass("aos-animate")
  }, 100)
})
$(".feature3").on("click", () => {
  $("[data-ai-hub]").removeAttr("data-aos")
  $("[data-ai-hub-img]").removeAttr("data-aos")
  $("[data-code-genrator]").removeAttr("data-aos")
  $("[data-code-genrator-img]").removeAttr("data-aos")
  $("[data-test-environment-img], [data-test-environment]").removeClass("aos-animate")
  $("[data-test-environment]").attr("data-aos", "fade-up")
  $("[data-test-environment-img]").attr("data-aos", "fade-up-right")

  $("[data-test-environment-img], [data-test-environment]").addClass("aos-init")
  setTimeout(() => {
    $("[data-test-environment-img], [data-test-environment]").addClass("aos-animate")
  }, 100)
})