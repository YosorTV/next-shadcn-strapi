import { DEFAULT_LOCALE } from '@/lib/constants/locales';

const pageQuery = ({ locale = DEFAULT_LOCALE }) => ({
  locale,
  populate: {
    fields: ['title', 'description'],
    seo: {
      populate: {
        fields: ['*'],
      },
    },
    cover: {
      populate: {
        coverXl: {
          fields: ['url', 'alternativeText', 'formats', 'name', 'width', 'height', 'mime'],
        },
        coverXs: {
          fields: ['url', 'alternativeText', 'formats', 'name', 'width', 'height', 'mime'],
        },
      },
    },
  },
  publicationState: 'live',
});

export default pageQuery;
