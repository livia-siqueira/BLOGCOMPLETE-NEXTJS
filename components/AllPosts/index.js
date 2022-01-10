import styles from "./all-posts.module.css";
import ListPost from "../ListPosts/index";

const AllPosts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All posts</h1>
      <ListPost posts={posts} />
    </section>
  );
};

export default AllPosts;
