'use strict';

module.exports = ({ env }) => ({
  'publisher': {
    enabled: true,
    config: {
      hooks: {
        beforePublish: async ({ strapi, uid, entity }) => {
          console.log('beforePublish');
        },
        afterPublish: async ({ strapi, uid, entity }) => {
          console.log('afterPublish');
        },
        beforeUnpublish: async ({ strapi, uid, entity }) => {
          console.log('beforeUnpublish');
        },
        afterUnpublish: async ({ strapi, uid, entity }) => {
          console.log('afterUnpublish');
        },
      },
    },
  },
  'seo': {
    enabled: true,
  },
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::page.page',
          draft: {
            url: env('CLIENT_PATH') + '/api/preview',
            query: {
              type: 'page',
              locale: '{locale}',
              slug: '{slug}',
            },
          },
          published: {
            url: env('CLIENT_PATH') + '/{slug}?locale={locale}',
          },
        },
        {
          uid: 'api::offer-page.offer-page',
          draft: {
            url: env('CLIENT_PATH') + '/api/preview',
            query: {
              type: 'offer-page',
              locale: '{locale}',
            }
          },
          published: {
            url: env('CLIENT_PATH') + '/offers?lang={locale}',
          }
        }
        // {
        //   uid: 'api::post.post',
        //   draft: {
        //     url: 'http://localhost:3000/api/preview',
        //     query: {
        //       type: 'post',
        //       slug: '{slug}',
        //     },
        //   },
        //   published: {
        //     url: 'http://localhost:3000/blog/{slug}',
        //   },
        // },
      ],
    },
  },
})
