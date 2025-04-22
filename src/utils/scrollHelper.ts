
/**
 * A helper function to create a dummy scrollTo function for pages that need it
 * but don't actually scroll to sections
 */
export const dummyScrollTo = (section: string) => {
  console.log(`Would scroll to ${section} if on landing page`);
};

/**
 * Check if an element is in the viewport
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= 100 && // Consider element in view when top is near viewport top
    rect.bottom >= 100 && // Element bottom should be visible
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
