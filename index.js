gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  })

  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.img',
      scrub: true
    }
  })
  .to('.img', {
    stagger: .3,
    y: -577,
    scrub: true
  })

  const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: 'forwards' })

    // blob.style.left = `${clientX}px`;
    // blob.style.top = `${clientY}px`;
}