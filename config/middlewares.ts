module.exports = ({ env }) => [
  { name: 'strapi::logger' },
  { name: 'strapi::errors' },
  { name: 'strapi::cors' },
  { name: 'strapi::poweredBy' },
  { name: 'strapi::query' },
  { name: 'strapi::body' },
  { name: 'strapi::session' },
  { name: 'strapi::favicon' },
  { name: 'strapi::public' },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  }
]
