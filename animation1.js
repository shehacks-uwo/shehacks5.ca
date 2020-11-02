gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();
tl.to('.pic-fade1', {opacity: 0, duration: 1});
tl.to('.pic-vis1', {opacity: 1, duration: 1});
tl.to('.pic-vis1', {translateX: 940, translateY: 190, duration: 2, width: 35, height: 35})

ScrollTrigger.create({
  animation: tl,
  trigger: ".story-img1",
  markers: true,
  start: "+=133 40%",
  end: "+=200 20%",
  scrub: true
});

ScrollTrigger.create({
  trigger: '.pic-vis1',
  start: 'center center',
  end: '+=2000px',
  pin: '.pic-vis1',
  scrub: true,
  markers: true
});

var t2 = gsap.timeline();
t2.to('.pic-fade2', {opacity: 0, duration: 1});
t2.to('.pic-vis2', {opacity: 1, duration: 1});
t2.to('.pic-vis2', {translateX: 960, translateY: 210, duration: 2, width: 35, height: 35})

ScrollTrigger.create({
  animation: t2,
  trigger: ".story-img2",
  markers: true,
  start: "+=133 40%",
  end: "+=200 20%",
  scrub: true
});

ScrollTrigger.create({
  trigger: '.pic-vis2',
  start: 'center center',
  end: '+=1200px',
  pin: '.pic-vis2',
  scrub: true,
  markers: true
});

var t3 = gsap.timeline();
t3.to('.pic-fade3', {opacity: 0, duration: 1});
t3.to('.pic-vis3', {opacity: 1, duration: 1});
t3.to('.pic-vis3', {translateX: 940, translateY: 220, duration: 2, width: 35, height: 35})
ScrollTrigger.create({
  animation: t3,
  trigger: ".story-img3",
  markers: true,
  start: "+=133 40%",
  end: "+=200 20%",
  scrub: true
});

ScrollTrigger.create({
  trigger: '.pic-vis3',
  start: 'center center',
  end: '+=400px',
  pin: '.pic-vis3',
  scrub: true,
  markers: true
});
gsap.set('.pic-vis3', {maxWidth: 25, maxHeight: 25})
