
import { Link } from 'react-router-dom';
import styles from './recentitem.module.css';

export default function RecentItem({ recent }) {
   return (
      <div className={styles.item}>
        <Link to={`/recents/id/${recent.id}`}>
            <img
               style={{ width: '100%' }}
               src={recent.image}
               alt={recent.name} />
         </Link>
         <div className={styles.info}>
            <h6 className={styles.category}>
               {recent.category}
            </h6>
            <h2 className={styles.name}>
               {recent.name}
            </h2>
            <p className={styles.description}>
               {recent.description}
            </p>

         </div>
      </div>
   );
}
