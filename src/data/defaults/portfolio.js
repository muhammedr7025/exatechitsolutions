// Built-in portfolio. Fallback for the site and source content for `npm run seed`.
// category: 'web' | 'ios' | 'android'
// thumb: bundled screenshot in public/portfolio/ (fast, no third-party request).
//   A "Screenshot Override" uploaded in Studio still wins over it.
export const portfolioItems = [
  { name: 'Olympus MuLearn', url: 'https://olympus.mulearn.org', category: 'web', order: 1, thumb: '/portfolio/web-olympus-mulearn.webp' },
  { name: 'Exatech Learning', url: 'https://www.exatechlearninghub.com', category: 'web', order: 2, thumb: '/portfolio/web-exatech-learning.webp' },
  { name: 'Thanima Beauty', url: 'https://thanimabeautylounge.com', category: 'web', order: 3, thumb: '/portfolio/web-thanima-beauty.webp' },
  { name: 'PulseTap', url: 'https://pulsetap.in', category: 'web', order: 4, thumb: '/portfolio/web-pulsetap.webp' },
  { name: 'WackoPix', url: 'https://wackopix.com', category: 'web', order: 5, thumb: '/portfolio/web-wackopix.webp' },
  { name: 'Salooms', url: 'https://salooms.org', category: 'web', order: 6, thumb: '/portfolio/web-salooms.webp' },
  { name: 'LetMeGoo App Site', url: 'https://letmegoo.com', category: 'web', order: 7, thumb: '/portfolio/web-letmegoo-app-site.webp' },
  { name: '4Geverse Shop', url: 'https://www.4geverse.com/shop', category: 'web', order: 8, thumb: '/portfolio/web-4geverse-shop.webp' },
  { name: 'Rogue Roar', url: 'https://www.rogueroar.com/', category: 'web', order: 9, thumb: '/portfolio/web-rogue-roar.webp' },
  { name: 'MuLearn STIS', url: 'https://mulearn.stisttvm.edu.in/', category: 'web', order: 10, thumb: '/portfolio/web-mulearn-stis.webp' },

  { name: 'LetMeGoo', url: 'https://play.google.com/store/apps/details?id=com.letmegoo.app', category: 'android', order: 11, thumb: '/portfolio/android-letmegoo.webp' },
  { name: 'Finnet Finance', url: 'https://play.google.com/store/apps/details?id=app.finnet.financeuserapp', category: 'android', order: 12, thumb: '/portfolio/android-finnet-finance.webp' },
  { name: 'Kerala Olympic', url: 'https://play.google.com/store/apps/details?id=org.keralaolympic.koaupdates', category: 'android', order: 13, thumb: '/portfolio/android-kerala-olympic.webp' },

  { name: 'Finnet Finance', url: 'https://apps.apple.com/in/app/finnet-finance/id6756836995', category: 'ios', order: 14, thumb: '/portfolio/ios-finnet-finance.webp' },
  { name: 'LetMeGoo', url: 'https://apps.apple.com/in/app/letmegoo/id6751348254', category: 'ios', order: 15, thumb: '/portfolio/ios-letmegoo.webp' },
  { name: 'Great Trivandrums', url: 'https://apps.apple.com/in/app/great-trivandrums/id6752885178', category: 'ios', order: 16, thumb: '/portfolio/ios-great-trivandrums.webp' },
];

// Which projects the homepage teaser shows when the editor hasn't picked any.
export const FEATURED_PROJECT_COUNT = 3;
