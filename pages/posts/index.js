import Head from "next/head";
import AllPosts from "../../components/AllPosts";
import { getAllPosts } from "../../helpers/utils";

const Posts = ({allposts}) => {

    return (
        <>
        <Head>
            <title>AllPosts</title>
            <meta name="description" content="List of the posts"/>
        </Head>
       <AllPosts posts={allposts}/>
       </>
    )
}


export async function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            allposts: allPosts
        }
    }
}
export default Posts;