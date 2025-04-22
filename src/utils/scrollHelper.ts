
/**
 * A helper function to create a dummy scrollTo function for pages that need it
 * but don't actually scroll to sections
 */
export const dummyScrollTo = (section: string) => {
  console.log(`Would scroll to ${section} if on landing page`);
};
