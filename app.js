new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const img = section.querySelector(".content");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(img, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

    if (destination.index === 0) {
      const contimg = document.querySelector(".img1");
      tl.fromTo(
        contimg,
        0.7,
        { x: "160%" },
        { x: "0%", y: "20%", ease: Power2.easeInOut },
        "-=0.5"
      );
    }

    if (destination.index === 1) {
      const contimg2 = document.querySelector(".img2");
      tl.fromTo(
        contimg2,
        1,
        { y: "-200", x: "-200", ease: Power2.easeInOut, opacity: 0 },
        { x: 0, y: 150, opacity: 1 },
        "-=0.5"
      );
    }

    if (destination.index === 2) {
      const contimg3 = document.querySelector(".img3");
      tl.fromTo(
        contimg3,
        0.5,
        { opacity: 0 },
        { y: "170", ease: Power2.easeInOut, opacity: 1 },

        "-=0.5"
      );
    }
    if (destination.index === 3) {
      const contimg4 = document.querySelector(".img4");
      tl.fromTo(
        contimg4,
        0.3,
        { opacity: 0 },
        { y: "200", ease: Power2.easeInOut, opacity: 1 },
        "-=0.5"
      );
    }
  },
});


