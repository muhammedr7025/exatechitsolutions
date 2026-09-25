// Card thumbnail for a portfolio project: the image an editor uploaded in
// Studio ("Screenshot Override"), else a live screenshot of the URL.
export const screenshotSrc = (project) =>
  project.screenshotUrl ||
  `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;

// Some project URLs may be entered without a scheme; never let that crash a page.
export function hostnameOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}
