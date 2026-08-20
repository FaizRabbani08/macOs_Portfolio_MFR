import gsap from "gsap";

export const animateWindowOpen = (element) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.92, y: 12 },
    { opacity: 1, scale: 1, y: 0, duration: 0.28, ease: "power3.out" }
  );
};

export const animateWindowClose = (element, onComplete) => {
  if (!element) return;

  gsap.to(element, {
    opacity: 0,
    scale: 0.92,
    y: 12,
    duration: 0.2,
    ease: "power2.in",
    onComplete,
  });
};