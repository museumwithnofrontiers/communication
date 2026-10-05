import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'communication',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Sharing History',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'f542a798-8c47-5278-ad25-50059baf16a0',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '2735c542-1b56-59a7-9fac-72518fe82535',
    dynasty: {
      item: '2735c542-1b56-59a7-9fac-72518fe82535',
      name: 'Ottomans',
    },
    timeline: {
      code: 'rm',
      id: 'rou',
      country: 'Romania',
      rows: 15,
      found: 18,
      event: 'Alexandru Ioan Cuza',
      gallery: 5,
      galleryTiles: 5,
      galleryItem: 'Brăila',
    },
    partner: {
      id: 'c0c2fa4f-c38c-578e-8cc1-4703cc60b8a9',
      name: 'Museum of Turkish and Islamic Arts',
      city: 'İstanbul',
      country: 'Türkiye',
      objects: 1,
    },
  },
})
