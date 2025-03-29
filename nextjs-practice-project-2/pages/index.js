import Hero from "@/components/home-page/hero";
import { Fragment } from "react";
import Head from "next/head";
import FeaturedPosts from "@/components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production it makes building fullstack",
    date: "2022-02-10",
  },
];

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
      <FeaturedPosts posts={DUMMY_POSTS} />
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
