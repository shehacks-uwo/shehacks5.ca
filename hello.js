// const path ={
// 	curviness: 0,
// 	autoRotate: true,
// 	values:[
// 		{x:700, y:50}
// 	]
// }

//     // ScrollTrigger.create({
//     //   trigger: pic2,
//     //   start: "+=133 40%",
//     //   end: "+=200 20%",
//     //   pin: true,
//     //   pinSpacing: false
//     // });


// const tween = new TimelineLite();
// tween.add(
//     TweenLite.to('.story-pin', 1, {
//         bezier: path,
//         ease: Power1.easeInOut	
//     })
// );
const controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
//     triggerElement: '.story-pin',
//     duration: 500,
//     triggerHook: 0

// })
// .setTween(tween)
// .addIndicators()
// .setPin(".story-pin")
// .addTo(controller);

// var tween1 = new TimelineMax();
// tween1.to(".story-pin", {opacity: 1});


var scene = new ScrollMagic.Scene({triggerElement: ".story-pin1", duration: 2200})
// .setTween(tween1)
.setPin(".story-pin1")
.addIndicators({name: "1 (duration: 900)"}) // add indicators (requires plugin)
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".story-pin2", duration: 1300})
// .setTween(tween1)
.setPin(".story-pin2")
.addIndicators({name: "2 (duration: 600)"}) // add indicators (requires plugin)
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".story-pin3", duration: 500})
// .setTween(tween1)
.setPin(".story-pin3")
.addIndicators({name: "3 (duration: 300)"}) // add indicators (requires plugin)
.addTo(controller);

// var controller = new ScrollMagic.Controller();

// //loop through all elements

//     // build a tween
//     var tween = TweenMax.to("story-pin-python", 1, {x: 950, startAt: {x:0}, y:100, ease: Power1.easeInOut, width: 75, height: 75});
  
//     // build a scene
//     var scene = new ScrollMagic.Scene({
//       triggerElement: this,
//         triggerHook: 0.7,
//     })
//     .setTween(tween)
//     .addTo(controller);
   