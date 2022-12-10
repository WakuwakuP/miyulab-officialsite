const { BASE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, TWITTER_HANDLE, TWITTER_SITE } = process.env

const nextSeoConfig = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site_name: SITE_NAME,
    url: `https://${BASE_URL}`,
    images: [
      {
        url: `https://${BASE_URL}/img/ogp.png`,
      },
    ],
  },
  twitter: {
    handle: TWITTER_HANDLE,
    site: TWITTER_SITE,
    cardType: 'summary_large_image',
  },
}
export default nextSeoConfig
