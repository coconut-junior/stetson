

gsap.from(".illust", {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".title-block",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

gsap.to(".logo", {opacity: 0,yPercent: -100,scrollTrigger: {trigger: ".title-block",scrub: true}});

gsap.from(".info-block", {opacity: 0,yPercent: -100,scrollTrigger: {trigger: ".info-block",scrub: true}});
gsap.from(".size-chart", {opacity: 0,yPercent: -100,scrollTrigger: {trigger: ".size-chart",scrub: true}});
  