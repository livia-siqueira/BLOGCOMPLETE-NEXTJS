import Head from "next/head";
import PageContent from "../../components/PostContent";
import {getPostData, getPostsFiles } from "../../helpers/utils";

const PagePost = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <PageContent post={post} />
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const data = getPostData(slug);
  return {
    props: {
      post: data,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const allPosts = getPostsFiles();
  const names = allPosts.map((post) => post.replace(/\.md$/, ""));

  return {
    paths: names.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export default PagePost;
