import { galleryConfig } from '@museumwnf/viewer-layout/dxa'

// The whole declaration of this website: a DXA gallery, whose pages, shell,
// menu and legacy redirects are the family's (`galleryConfig`,
// @museumwnf/viewer-layout/dxa). What is this gallery's own is below.

// The source-database chip's colour, per project: one of
// @museumwnf/viewer-layout's `mwnf-chip--<name>` classes for every project id
// the package's `manifest.projects` carries.
export const projectColors = {
  '0f031e22-6dc6-5ce6-b94b-9bb88345140c': 'mwnf-chip--AWE', // Sharing History - Arab-Ottoman-European relations in the 19th century.
  '61c122ac-ea86-5462-8bab-6b86138c49b2': 'mwnf-chip--ISLandEPM', // Discover Islamic Art
  '76eaf6c2-8025-53bc-9e39-106803a3917e': 'mwnf-chip--DBA', // Discover Baroque Art
  '928f5e0d-53e3-5f53-b9c2-5af389c30dd4': 'mwnf-chip--ISLandEPM', // Explore Islamic Art Collections — shares Discover Islamic Art's colour
  'a0817323-79ca-53fc-95ac-9f65ee2fcbac': 'mwnf-chip--Galleries', // MWNF Galleries
  'e08d1c71-8cff-5fe9-b480-2ae6c530b732': 'mwnf-chip--Galleries', // The Hijaz Railway — no fixed chip family exists for it; defaulted, see PR body
}

// The projects whose item sheets still carry legacy's Explore-partner notice.
export const noticeProjects = [
  '928f5e0d-53e3-5f53-b9c2-5af389c30dd4', // Explore Islamic Art Collections
]

export default galleryConfig({
  // The dataset package this website renders. Must match the alias in
  // vite.config.js and the dependency in package.json.
  datasetPackage: '@museumwnf/communication-data',

  // The name for a package that predates `manifest.site`.
  siteName: 'Communication and Transportation',

  // The address this build is deployed at, base path included, read by the
  // source credit: the GitHub Pages address, the same repository segment
  // vite.config.js's `base` puts in the build's base path, so the two change
  // together, and with the domain.
  origin: 'https://museumwithnofrontiers.github.io/communication',

  projectColors,
  noticeProjects,

  // The credits page's body.
  creditsBody: 'communication.credits.body',
})
