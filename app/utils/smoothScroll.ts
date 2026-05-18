/**
 * Smooth scroll utility that doesn't conflict with parallax effects
 * Uses requestAnimationFrame for optimal performance
 */

export function smoothScrollTo(target: number, duration: number = 800) {
  const start = window.scrollY;
  const distance = target - start;
  const startTime = Date.now();

  const scroll = () => {
    const currentTime = Date.now() - startTime;
    const progress = Math.min(currentTime / duration, 1);

    // easeInOutCubic easing function for smooth acceleration/deceleration
    const easeProgress =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * easeProgress);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
}

export function scrollToElement(element: HTMLElement, duration: number = 800) {
  const targetPosition = element.getBoundingClientRect().top + window.scrollY;
  smoothScrollTo(targetPosition - 80, duration); // 80px offset for header
}
