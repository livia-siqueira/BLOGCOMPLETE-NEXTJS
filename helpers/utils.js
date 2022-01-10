import fs from "fs";
import path from "path";
const postsDirectory = path.join(process.cwd(), "posts");

import matter from "gray-matter";

export function getPostData(name) {
  const postSlug = name.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData;
}

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
  const postsFiles = getPostsFiles();
  const allPost = postsFiles.map((post) => {
    return getPostData(post);
  });

  const sortedPosts = allPost.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPots() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.filter((post) => post.isFeatured);
  return featuredPost;
}
