import FeaturePosts from "../components/FeaturedPosts";
import Hero from "../components/Hero";
import { getFeaturedPots } from "../helpers/utils";
import Head from 'next/head'

const Home = ({ posts }) => {
  return (
    <>
      {" "}
      <Head>
        <title>Livia's Blog</title>
        <meta name="description" content="I post about programming"/>
      </Head>
      <Hero />
      <FeaturePosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPots();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default Home;
