gsap.registerPlugin(
  ScrollTrigger,
  TextPlugin,
  ScrambleTextPlugin,
  SplitText,
  DrawSVGPlugin,
  ScrollSmoother
);

ScrollSmoother.create({
  smooth: 0,
  effects: true,
});

/* Home Page */
var heroH1 = new SplitText(".hero-left h1 i", {
  type: "chars, words, lines",
});
var signupH1 = new SplitText(".signup-content-left h1", {
  type: "chars, words, lines",
});
let landingAnim = gsap.timeline({
  delay: 1,
});
landingAnim
  /* .from(heroH1.lines, {
    opacity: "0",
    duration: 0.75,
    y: "5rem",
    ease: Power1.easeInOut,
    stagger: {
      each: 0.15,
    },
  }) */
  .from("#fight-line", {
    duration: 0.75,
    drawSVG: 0,
  });

let featuresAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".features-grid",
    start: "top 85%",
  },
});
featuresAnim.from(".features-card", {
  opacity: 0,
  y: "5rem",
  stagger: 0.15,
  duration: 1,
});

/* let servicesAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-grid",
    start: "top 85%",
  },
});
servicesAnim.from(".services-card", {
  opacity: 0,
  y: "5rem",
  stagger: 0.15,
  duration: 1,
}); */

let caseStudiesAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".casestudies-grid",
    start: "top 85%",
  },
});
caseStudiesAnim.from(".casestudies-grid-card", {
  opacity: 0,
  y: "5rem",
  stagger: 0.15,
  duration: 1,
});

let freedomAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".freedom-grid",
    start: "top 85%",
  },
});
freedomAnim.from(".freedom-grid-card", {
  opacity: 0,
  y: "5rem",
  stagger: 0.15,
  duration: 1,
});

/* About Page */

let networkPointAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".network-point-box",
    start: "top 85%",
  },
});
networkPointAnim.from(".network-point", {
  opacity: 0,
  y: "5rem",
  stagger: 0.15,
  duration: 1,
});

/* Services Page */
let servicesLandingAnim = gsap.timeline();
servicesLandingAnim
  .from(".services-content h1", {
    y: "5rem",
    opacity: 0,
    duration: 1,
  })
  .from(
    ".services-content h4",
    {
      y: "5rem",
      opacity: 0,
      duration: 1,
    },
    0.25
  )
  .from(
    ".services-content p",
    {
      y: "5rem",
      opacity: 0,
      duration: 1,
    },
    0.5
  );

let solutionsGridAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".solutions-grid-left",
    start: "top 85%",
  },
});
solutionsGridAnim.from(".solutions-step-link", {
  opacity: 0,
  y: "5rem",
  stagger: 0.15,
  duration: 1,
});

let solutions1Anim = gsap.timeline({
  scrollTrigger: {
    trigger: ".solution-box-1",
    start: "top 85%",
  },
});
solutions1Anim.from(".solution-box-1 .sb-grid-right img", {
  opacity: 0,
  y: "5rem",
  stagger: 0.5,
  duration: 1,
});

let solutions2Anim = gsap.timeline({
  scrollTrigger: {
    trigger: ".solution-box-2",
    start: "top 85%",
  },
});
solutions2Anim.from(".solution-box-2 .sb-grid-right img", {
  opacity: 0,
  y: "5rem",
  stagger: 0.5,
  duration: 1,
});

let solutions3Anim = gsap.timeline({
  scrollTrigger: {
    trigger: ".solution-box-3",
    start: "top 85%",
  },
});
solutions3Anim.from(".solution-box-3 .sb-grid-right img", {
  opacity: 0,
  y: "5rem",
  stagger: 0.5,
  duration: 1,
});

let solutions4Anim = gsap.timeline({
  scrollTrigger: {
    trigger: ".solution-box-4",
    start: "top 85%",
  },
});
solutions4Anim.from(".solution-box-4 .sb-grid-right img", {
  opacity: 0,
  y: "5rem",
  stagger: 0.5,
  duration: 1,
});

/* Know Your Rights */
let kyrLandingAnim = gsap.timeline();
kyrLandingAnim.fromTo(
  ".kyr-grid-card",
  {
    y: "10rem",
    opacity: 0,
  },
  {
    y: "0",
    opacity: 1,
    duration: 1,
    stagger: 0.15,
  }
);

let faqsAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".kyrfaq-acc",
    start: "top 85%",
  },
});
faqsAnim.fromTo(
  ".kyrfaq-item",
  {
    opacity: 0,
    y: "5rem",
  },
  {
    opacity: 1,
    y: "0",
    stagger: 0.25,
    duration: 1,
  }
);

/* Real Results */
let realResultsAnim = gsap.timeline();
realResultsAnim
  .from(".rr-info-box h1", {
    y: "5rem",
    opacity: 0,
    duration: 1,
  })
  .from(
    ".rr-info-box p",
    {
      y: "5rem",
      opacity: 0,
      duration: 1,
    },
    0.25
  );

let documentBox1Anim = gsap.timeline({
  scrollTrigger: {
    trigger: ".documents-box-1 .db-grid-2",
    start: "top 85%",
  },
});
documentBox1Anim.from(".documents-box-1 .db-grid-2-card", {
  opacity: 0,
  y: "5rem",
  stagger: 0.25,
  duration: 1,
});

let documentBox2Anim = gsap.timeline({
  scrollTrigger: {
    trigger: ".documents-box-2 .db-grid-2",
    start: "top 85%",
  },
});
documentBox2Anim.from(".documents-box-2 .db-grid-2-card", {
  opacity: 0,
  y: "5rem",
  stagger: 0.25,
  duration: 1,
});

/* Contact Us */
let contactUsAnim = gsap.timeline();
contactUsAnim.from(signupH1.chars, {
  y: "2.5rem",
  rotate: "5deg",
  opacity: 0,
  duration: 1,
  stagger: 0.075,
});
