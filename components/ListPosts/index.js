import PostItem from "../PostItem"
import styles from './posts.module.css'


const ListPage = ({posts}) => {
    return (
       <ul className={styles.grid}>
           {posts.map((post) => {
               return <PostItem  key={post.slug} post={post}/>
           })}
       </ul>
    )
}

export default ListPage;