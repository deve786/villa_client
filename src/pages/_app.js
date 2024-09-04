import Layout from "@/components/Layout";
import { sanityClient } from "@/components/lib/sanity";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps, sanityData }) {
  return (

    <div>
      <Layout sanityData={sanityData} >
        <Component {...pageProps} />

      </Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&family=Water+Brush&display=swap" rel="stylesheet" />      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
    </div>
  );
}

App.getInitialProps = async () => {
  const query = `*[_type == "home"][0]{
  construction {
    head {
      text,
      span
    },
    description,
    "bannerImage": bannerImage.asset->url,
  },
  villas[]{
    head {
      text,
      span
    },
    subhead,
    description,
    "bannerImage": bannerImage.asset->url,
    price,
    exterior[] {
      "url": asset->url
    },
    interior[] {
      "url": asset->url
    }
  },
  company{
    project,
    client,
    award
  },
  contact{
    location,
    phone,
    email,
    support
  }
}

`;

  const sanityData = await sanityClient.fetch(query);

  return { sanityData };
};