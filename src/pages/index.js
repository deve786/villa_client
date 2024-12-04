import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import LauchPlaces from "@/components/LauchPlaces";
import Construction from "@/components/Construction";
import Company from "@/components/Company";
import Review from "@/components/Review";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { sanityClient } from "@/components/lib/sanity";
import FuturePlaces from "@/components/FuturePlaces";

const inter = Inter({ subsets: ["latin"] })
const Home = ({ sanityData }) => {
  return (
    <>

      <div>
        <Banner sanityData={sanityData} />
        <FuturePlaces sanityData={sanityData} />
        <LauchPlaces sanityData={sanityData} />
        <Construction sanityData={sanityData} />

        <Company sanityData={sanityData} />
        {/* <Review sanityData={sanityData} /> */}
        <Contact sanityData={sanityData} />
        <Footer sanityData={sanityData} />
      </div>

    </>


  );
}

export default Home;

export async function getStaticProps() {
  const query = `*[_type == "home"][0]{

  banner{
    head {
      heading,
      location
    }, 
    small_description,  
    "bannerImage": bannerImage.asset->url,
  },
 

  construction {
    head {
      heading,
      location
    },
    description,
    "bannerImage": bannerImage.asset->url,
  },
  villas[]{
    head {
      heading,
      location
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
  futureconstruction {
    head {
      heading,
      location
    },
    description,
    "bannerImage": bannerImage.asset->url,
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
  },
   review {
      customerReview,
      customerDes,
      "customerImage": customerImage.asset->url,
      customerName,
      position
    },
    addresses[] { 
      name,
      street,
      floor,
      cityStateZip,
      phone
    },
    socialLinks[]{
    name,
    link
    }
  }`;

  const sanityData = await sanityClient.fetch(query);

  return { props: { sanityData } };
};
