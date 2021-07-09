import Head from "next/Head";

const HeadMeta = () => {
    return (
      <Head>
      <title>Il Bottiglione di Ciro - 56K</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content='Inspired by the Netflix series "Generation 56K" by The Jackal, you can send a message to anyone with a delay in opening. Like the Bottiglione di Ciro' />
      <meta name="author" content="@thejoin95" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#5bbad5" />
  
      <meta property="og:title" content="Il Bottiglione di Ciro - 56K" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${process.env.URL}`} />
      <meta property="og:site_name" content={`${process.env.DOMAIN}`} />
      <meta property="og:description" content='Inspired by the Netflix series "Generation 56K" by The Jackal, you can send a message to anyone with a delay in opening. Like the Bottiglione di Ciro'/>

      <meta name="twitter:widgets:csp" content="on" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content={`${process.env.DOMAIN}`} />
      <meta name="twitter:title" content="Il Bottiglione di Ciro - 56K" />
      <meta name="twitter:description" content='Send a message to anyone with a delay in opening. Like the Bottiglione di Ciro in #generation56k #netflix' />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-201820852-1"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-201820852-1', {
          page_path: window.location.pathname,
        });
        gtag('set', 'anonymizeip', true);
      `,
        }}
      />
    </Head>
    );
};

export default HeadMeta;