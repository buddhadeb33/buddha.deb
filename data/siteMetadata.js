const siteMetadata = {
  title: "buddha's Blog - AI Adventure",
  author: 'buddha',
  fullName: 'Buddhadeb Mondal',
  headerTitle: "buddha's Blog",
  description: 'My desire to practice my skills and share my acquired knowledge fuels my endeavors.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://buddhadeb33',
  analyticsURL: 'https://analytics.buddhadeb33/share/Z3eSINRnbzydz1gK/buddhadeb33',
  siteRepo: 'https://github.com/buddhadeb33',
  siteLogo: '/static/images/avatar.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/projects/buddha-blog.png',
  email: 'buddhadeb33@gmail.com',
  github: 'https://github.com/buddhadeb33',
  facebook: 'https://www.facebook.com/buddhadeb33',
  linkedin: 'https://www.linkedin.com/in/buddhadeb33',
  twitter: 'https://twitter.com/buddha',
  youtube: 'https://youtube.com',
  locale: 'en-US',
  stickyNav: false,
  socialAccounts: {
    github: 'buddhadeb33',
    linkedin: 'buddhadeb33',
    facebook: 'buddhadeb33',
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'bottom',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

module.exports = siteMetadata;
