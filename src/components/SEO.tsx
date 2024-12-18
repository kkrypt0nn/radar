import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  slug: string;
};

export default function SEO({ title, description, slug }: SEOProps) {
  return (
    <Head>
      <title>Radar | {title}</title>
      <meta property="og:title" content={`Radar | ${title}`} />
      <meta property="og:url" content={`https://radar.krypton.ninja${slug}`} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
