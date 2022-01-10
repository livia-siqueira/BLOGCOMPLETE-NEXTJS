import Image from 'next/image';
import styles from './post-header.module.css'


const PostHeader = ({title, image}) =>{
    return(
        <header className={styles.header}>
            <h1>{title}</h1>
            <div>
                <Image src={image} alt={title} width={300} height={150}/>
            </div>
        </header>
    )
}

export default PostHeader;