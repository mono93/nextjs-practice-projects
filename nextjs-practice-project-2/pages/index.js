import Hero from "@/components/home-page/hero";
import { Fragment } from "react";
import Head from 'next/head';
import FeaturedPosts from "@/components/home-page/featured-posts";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Monojit' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = [];

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
