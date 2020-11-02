// const path ={
// 	curviness: 0,
// 	autoRotate: true,
// 	values:[
// 		{x:500, y:10}
// 	]
// }

//   const tl = gsap.timeline( { 
//     scrollTrigger: {
//       trigger: ".story-img",
//       start: "+=133 40%",//80% original
//       end: "+=200 20%", // 40% original
//       scrub: true,
//       markers: true,
//       toggleActions: "play reverse play reverse",
//     }
//   })
// const boxes = gsap.utils.toArray('.story-img');
// var section1 = document.querySelector('.pic-fade')
// var section2 = document.querySelector('.pic-vis')
// boxes.forEach(box => {
 
//   let tl = gsap.timeline();

//   ScrollTrigger.create({

//       trigger: box,
//       start: "+=133 40%",
//       end: "+=200 20%",
//       markers: true,
//       scrub: true 
//   });
//   tl.to(section1, {opacity: 0, duration: 0.5});
//   tl.to(section2, {opacity: 1, duration: 0.5});
//   tl.to(section2, {x: 950, y:100, duration: 1.5, width: 70, height: 70})
// });

// gsap.to('.pic-vis1', {
//   scrollTrigger: {
//     trigger: '.pic-vis1',
//     start: 'center center',
//     scrub: 1,
//     end: '+=3000px',
//     pin: '.pic-vis1',
//     markers: true
//   }
// })

// proper gsap code here 
// gsap.registerPlugin(ScrollTrigger);
// var tl = gsap.timeline();
// tl.to('.pic-fade1', {opacity: 0, duration: 1});
// tl.to('.pic-vis1', {opacity: 1, duration: 1});
// tl.to('.pic-vis1', {translateX: 940, translateY: 190, duration: 2, width: 35, height: 35})

// ScrollTrigger.create({
//   animation: tl,
//   trigger: ".story-img1",
//   markers: true,
//   start: "+=133 40%",
//   end: "+=200 20%",
//   scrub: true
// });

// ScrollTrigger.create({
//   trigger: '.pic-vis1',
//   start: 'center center',
//   end: '+=3000px',
//   pin: '.pic-vis1',
//   scrub: true,
//   markers: true
// });

// var t2 = gsap.timeline();
// t2.to('.pic-fade2', {opacity: 0, duration: 1});
// t2.to('.pic-vis2', {opacity: 1, duration: 1});
// t2.to('.pic-vis2', {translateX: 960, translateY: 210, duration: 2, width: 35, height: 35})

// ScrollTrigger.create({
//   animation: t2,
//   trigger: ".story-img2",
//   markers: true,
//   start: "+=133 40%",
//   end: "+=200 20%",
//   scrub: true
// });

// ScrollTrigger.create({
//   trigger: '.pic-vis2',
//   start: 'center center',
//   end: '+=2200px',
//   pin: '.pic-vis2',
//   scrub: true,
//   markers: true
// });

// var t3 = gsap.timeline();
// t3.to('.pic-fade3', {opacity: 0, duration: 1});
// t3.to('.pic-vis3', {opacity: 1, duration: 1});
// t3.to('.pic-vis3', {translateX: 940, translateY: 220, duration: 2, width: 35, height: 35})
// ScrollTrigger.create({
//   animation: t3,
//   trigger: ".story-img3",
//   markers: true,
//   start: "+=133 40%",
//   end: "+=200 20%",
//   scrub: true
// });

// ScrollTrigger.create({
//   trigger: '.pic-vis3',
//   start: 'center center',
//   end: '+=1400px',
//   pin: '.pic-vis3',
//   scrub: true,
//   markers: true
// });
//gsap.set('.pic-vis3', {maxWidth: 25, maxHeight: 25})

    // end here

// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray('.story-img').forEach((sec, i)=>{
//     let tl = gsap.timeline();
//     tl.to(sec.querySelectorAll('.pic-fade'), {opacity: 0, duration: 0.5});
//     tl.to(sec.querySelectorAll('.pic-vis'), {opacity: 1, duration: 0.5});
//     tl.to(sec.querySelectorAll('.pic-vis'), {translateX: 930, translateY: 210, duration: 1.5, width: 40, height: 40})

//     ScrollTrigger.create({
//       animation: tl,
//       trigger: sec,
//       markers: true,
//       start: "+=133 40%",
//       end: "+=200 20%",
//       scrub: true
//     });
//     console.log (sec.querySelectorAll('.pic-fade'))
//     ScrollTrigger.create({
//       trigger: sec,
//       start: 'center center',
//       end: '+=2000',
//       pin: sec.querySelectorAll('.pic-vis'),
//       markers: true
//     });
//     // tl.to(sec.querySelectorAll('.pic-vis'), {width: 70, height: 70})
//     //gsap.set(sec.querySelectorAll('.pic-vis'), {position: absolute});
    
// });


//tl.to(sec.querySelectorAll('.pic-vis'), {width: 70, height: 70})

// gsap.utils.toArray('.story-img').forEach((sec, i)=>{
//   let tl = gsap.timeline();

//   ScrollTrigger.create({

//       trigger: '.story-img',
//       start: "+=133 40%",
//       end: "+=200 20%",
//       markers: true,
//       scrub: true 
//   });
//   tl.to(".pic-fade", {opacity: 0, duration: 0.5});
//   tl.to(".pic-vis", {opacity: 1, duration: 0.5});
//   tl.to(".pic-vis", {x: 950, y:100, duration: 1.5, width: 70, height: 70})
// }); 
// var tl = gsap.timeline({
//   ScrollTrigger: {
//     trigger: '.story-img',
//     start: "+=133 40%",
//     end: "+=200 20%",
//     markers: true,
//     scrub: true 
//   }
// })
// tl.to(".pic-fade", {opacity: 0, duration: 0.5});
// tl.to(".pic-vis", {opacity: 1, duration: 0.5});
// tl.to(".pic-vis", {x: 950, y:100, duration: 1.5, width: 70, height: 70})




// tl.to('.java-pic', {opacity: 0, duration: 0.5});
// tl.to('.java-pin-vis', {opacity: 1, duration: 0.5});
// tl.to('.java-pin-vis', {x: 950, y:100, duration: 1.5, width: 70, height: 70})

// tl.to('.ruby-pic', {opacity: 0, duration: 0.5});
// tl.to('.ruby-pin-vis', {opacity: 1, duration: 0.5});
// tl.to('.ruby-pin-vis', {x: 950, y:100, duration: 1.5, width: 70, height: 70})
var controller = new ScrollMagic.Controller();
//var tween1 = new TweenMax.to(".story-pin1", 1, {x: 970, startAt: {x:0}, y:150, ease: Power1.easeInOut, width: 70, height: 70});
var tween1 = new TimelineMax();
tween1.to(".pic-fade1", 1, {opacity: 0});
tween1.to(".pic-vis1", 1, {opacity: 1});
tween1.to(".pic-vis1", {x: 950, y:100, duration: 1.5, width: 70, height: 70});
// build a scene
var scene1 = new ScrollMagic.Scene({
  triggerElement: ".story-img1",
  triggerHook: 0,
  duration: 2000, 
  offset: 100,
  reverse: true
})
.setTween(tween1)
.addIndicators()
.setPin(".pic-vis1")
.addTo(controller);

var tween2 = new TimelineMax();
tween2.to(".pic-fade2", 1, {opacity: 0});
tween2.to(".pic-vis2", 1, {opacity: 1});
tween2.to(".pic-vis2", {x: 950, y:100, duration: 1.5, width: 70, height: 70});
// build a scene
var scene2 = new ScrollMagic.Scene({
  triggerElement: ".story-img2",
  triggerHook: 0,
  duration: 1000, 
  offset: 100,
  reverse: true
})
.setTween(tween2)
.addIndicators()
.setPin(".pic-vis2")
.addTo(controller);

var tween3 = new TimelineMax();
tween3.to(".pic-fade3", 1, {opacity: 0});
tween3.to(".pic-vis3", 1, {opacity: 1});
tween3.to(".pic-vis3", {x: 950, y:100, duration: 1.5, width: 70, height: 70});
// build a scene
var scene3 = new ScrollMagic.Scene({
  triggerElement: ".story-img3",
  triggerHook: 0,
  duration: 1000, 
  offset: 100,
  reverse: true
})
.setTween(tween3)
.addIndicators()
.setPin(".pic-vis3")
.addTo(controller);

// var tween2 = TweenMax.to(".story-pin2", 1, {x: 1000, startAt: {x:0}, y:150, ease: Power1.easeInOut, width: 70, height: 70});

// // build a scene
// var scene2 = new ScrollMagic.Scene({
//   triggerElement: ".story-pin2",
//   triggerHook: 0.7,
//   //reverse: false
// })
// .setTween(tween2)
// .addTo(controller);

// var tween3 = TweenMax.to(".story-pin3", 1, {x: 970, startAt: {x:0}, y:150, ease: Power1.easeInOut, width: 70, height: 70});

// // build a scene
// var scene3 = new ScrollMagic.Scene({
//   triggerElement: ".story-pin3",
//   triggerHook: 0.7,
//   //reverse: false
// })
// .setTween(tween3)
// .addTo(controller);




// //tl.to(".pic-vis", {xPercent: 1000, duration: 1, width: 70, height: 70})
// ScrollTrigger.create({
//   trigger: ".pic-vis",
//   start: "top top+=75",
//   endTrigger: "html",
//   end: "bottom bottom",
//   pin: true,
//   pinSpacing: false,
//   scrub: 1
// });
// TweenLite.defaultEase = Linear.easeNone;
// var controller = new ScrollMagic.Controller();

// $(".story-img").each(function(i) {
//   var target = $(this).find(".pic-fade");
//   var targ2 = $(this).find(".pic-vis");
//   var tl = new TimelineMax();
  
//   tl.from(target, 0.25, { opacity:0 });
//   tl.to(target, 0.25, { opacity:0 }, 1);
  
//   new ScrollMagic.Scene({
//     triggerElement: this,
//     triggerHook: 0.2,
//     duration: '150%'
//   })
//     .setPin(this)
//     .setTween(tl)
//     .addIndicators()
//     .addTo(controller);
// });

// const checkpoint = 300;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= checkpoint) {
//     opacity = 1 - currentScroll / checkpoint;
//   } else {
//     opacity = 0;
//   }
//   document.querySelector(".img-visible").style.opacity = opacity;
// });


// var documentEl = $(document),
// fadeElem = $('.img-fade');
// visibleElm = $('.img-visible');

// documentEl.on('scroll', function() {
// var currScrollPos = documentEl.scrollTop();

//   fadeElem.each(function() {
//       var $this = $(this),
//           elemOffsetTop = $this.offset().top;
//       if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/150);
//   }); 

//   visibleElm.each(function() {
//     var tag = $(this).find(".img-visible");
//         elemOffsetTop = $this.offset().top;
//         if (currScrollPos > elemOffsetTop) {
//          $(tag).addClass("visible");
//     }); 
// });



// //loop through all elements
// $('.story-pin').each(function() {

//   // build a tween
//   var tween = TweenMax.to($(this), 1, {x: 950, startAt: {x:0}, y:100, ease: Power1.easeInOut, width: 75, height: 75});
//   console.log($(this).text());
//   // build a scene
//   var scene = new ScrollMagic.Scene({
//     triggerElement: this,
// 	  triggerHook: 0.7,
//   })
//   .setTween(tween)
//   .addTo(controller);
 
// });