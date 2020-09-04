var shFullPage = new fullpage("#fullpage", {
  scrollBar: true,
  navigation: true,
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
  scrollSpeed: 800,

  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const storyText = section.querySelector("#tween-text");
    const tl = new TimelineMax({ delay: 1.0 });
    // python page animation
    if (destination.index === 1) {
      const pythonImg = document.querySelector("#python-img");
      tl.fromTo(pythonImg, 0.3, { x: "-100%" }, { x: "40%" });
      tl.fromTo(storyText, 0.7, { opacity: 0 }, { opacity: 1 });
    }

    // java page animation
    if (destination.index === 2) {
      const javaImg = document.querySelector("#java-img");
      tl.fromTo(javaImg, 0.3, { x: "-100%" }, { x: "40%" });
      tl.fromTo(storyText, 0.7, { opacity: 0 }, { opacity: 1 });
    }

    // ruby page animation
    if (destination.index === 3) {
      const rubyImg = document.querySelector("#ruby-img");
      tl.fromTo(rubyImg, 0.3, { x: "-100%" }, { x: "40%" });
      tl.fromTo(storyText, 0.7, { opacity: 0 }, { opacity: 1 });
    }
    if (destination.index === 4) {
      shFullPage.setAutoScrolling(false);
    }
  },
});

/*
new fullpage("#fullpage", {
  //options here
  navigation: true,
  anchors: ["firstPage", "secondPage", "thirdPage"],
  scrollSpeed: 800,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const storyText = section.querySelector("#tween-text");
    const tl = new TimelineMax({ delay: 1.0 });

    // python page animation
    if (destination.index === 1) {
      const pythonImg = document.querySelector("#python-img");
      tl.fromTo(pythonImg, 0.5, { x: "-100%" }, { x: "40%" });
      tl.fromTo(storyText, 1.0, { opacity: 0 }, { opacity: 1 });
    }

    // java page animation
    if (destination.index === 2) {
      const javaImg = document.querySelector("#java-img");
      tl.fromTo(javaImg, 0.5, { x: "-100%" }, { x: "40%" });
      tl.fromTo(storyText, 1.0, { opacity: 0 }, { opacity: 1 });
    }

    // ruby page animation
    if (destination.index === 3) {
      const rubyImg = document.querySelector("#ruby-img");
      tl.fromTo(rubyImg, 0.5, { x: "-100%" }, { x: "40%" });
      tl.fromTo(storyText, 1.0, { opacity: 0 }, { opacity: 1 });
    }
    if (destination.isLast) {
      shFullPage.setAutoScrolling(false);
      shFullPage.setFitToSection(false);
    } else {
      shFullPage.setAutoScrolling(true);
      shFullPage.setFitToSection(true);
    }
  },
});



var waypoint = new Waypoint({
  element: document.getElementById("pin-anim"),
  handler: function () {
    anime({
      targets: "#pin-anim",
      easing: "easeOutExpo",
      translateX: [-100, 0],
      opacity: [0, 1],
      delay: 300,
    });
  },
  context: document.querySelector(".section s2"),
  offset: "100px",
});




afterLoad: function (anchorLink, index) {
      if (index === 4) {
        $.fn.fullpage.setAutoScrolling(false);
        $.fn.fullpage.setFitToSection(false);
      }
      $(document).scroll(function () {
        var last_section = $("#fullpage").find(".section").last();
        var offset = last_section.offset();
        var w = $(window);
        if ((offset.top = w.scrollTop() > 0)) {
          $.fn.fullpage.setAutoScrolling(true);
        }
      });
    },
*/
