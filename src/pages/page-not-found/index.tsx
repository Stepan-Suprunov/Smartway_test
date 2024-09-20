import styles from './style.module.css'
import image from '../../assets/img/page-not-found.jpg'

export function PageNotFound() {
    return (
      <div className={styles.PageNotFound}>
          <img className={styles.Img} src={image} alt='Page not found' />
      </div>
    );
};