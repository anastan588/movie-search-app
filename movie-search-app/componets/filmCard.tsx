import { Rating } from '@mantine/core';
import styles from '../styles/filmCard.module.css';

export default function FilmCard() {
  return (
    <div className={styles.card_item}>
      <div className={styles.image}></div>
      <div className={styles.card_information}>
        <div className={styles.title_block}>
          <p className={styles.title}></p>
          <Rating
            className={styles.rated}
            count={1}
            value={0}
            highlightSelectedOnly
          />
        </div>
        <p className={styles.year}></p>
        <div className={styles.rating_block}>
          <Rating
            className={styles.rating}
            count={1}
            defaultValue={1}
          />
          <p className={styles.rating_number}></p>
          <p className={styles.rating_votes}></p>
        </div>
        <div className={styles.genres_block}>
          <p className={styles.genres_title}>Genres</p>
          <p className={styles.genres_value}></p>
        </div>
      </div>
    </div>
  );
}
