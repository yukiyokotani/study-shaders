import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
  url?: string;
  description?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = 'silurus.dev',
  url = `https://www.${process.env.NEXT_PUBLIC_SITE_DOMAIN}`,
  description = 'silurus.devはsilurusのポートフォリオ兼技術ブログです。',
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content={title || process.env.NEXT_PUBLIC_SITE_DOMAIN}
        />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_SITE_DOMAIN}
        />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://www.${process.env.NEXT_PUBLIC_SITE_DOMAIN}/image.png`}
        />
        <meta
          property="og:image:secure_url"
          content={`https://www.${process.env.NEXT_PUBLIC_SITE_DOMAIN}/image.png`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
