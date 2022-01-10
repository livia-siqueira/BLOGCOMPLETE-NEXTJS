import Image from "next/image";
import Link from "next/link";
import styles from "./post-item.module.css";

const PostItem = ({ post }) => {
  const { title, date, excerpt, image, slug } = post;

  const chandeDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time> {chandeDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
