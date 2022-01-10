import styles from './featurePosts.module.css'
import ListPosts from '../../components/ListPosts/index'

const FeaturePosts = ({posts}) => {
    return (
        <section className={styles.latest}>
             <h2>Featured Posts</h2>
             <ListPosts posts={posts}/>
        </section>
    )
}

export default FeaturePosts; 