module.exports = {
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.PORT || 8080,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Kendy Universal Starter Kit',
    titleTemplate: 'Kendy Universal Starter Kit - %s',
    meta: [
    {
      name: 'description',
      content: 'The best react universal starter boilerplate in the world.',
    },
    ],
  },
};