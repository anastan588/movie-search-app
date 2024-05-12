import styles from '../styles/main.module.css';
import {
  Button,
  Input,
  NativeSelect,
  Select,
  UnstyledButton,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

export default function Main() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Movies</h2>
      <section className={styles.content}>
        <div className={styles.filters}>
          <div className={styles.filter_item}>
            <p className={styles.item_title}>Genres</p>
            <Select
              className={styles.item_input}
              placeholder="Select genre"
              data={['React', 'Angular', 'Vue', 'Svelte']}
              rightSection={<IconChevronDown size={14} stroke={1.5} />}
              searchable
              checkIconPosition="left"
            />
          </div>
          <div className={styles.filter_item}>
            <p className={styles.item_title}>Release year</p>
            <Select
              className={styles.item_input}
              placeholder="Select release year"
              data={['React', 'Angular', 'Vue', 'Svelte']}
              rightSection={<IconChevronDown size={14} stroke={1.5} />}
              searchable
              checkIconPosition="left"
            />
          </div>
          <div className={styles.filter_item}>
            <p className={styles.item_title}>Ratings</p>
            <div className={styles.input_block}>
              <Select
                className={styles.rating_input}
                placeholder="From"
                data={['React', 'Angular', 'Vue', 'Svelte']}
                searchable
                checkIconPosition="left"
              />
              <Select
                className={styles.rating_input}
                placeholder="To"
                data={['React', 'Angular', 'Vue', 'Svelte']}
                searchable
                checkIconPosition="left"
              />
            </div>
          </div>
          <div className={styles.filter_reset}>
            <UnstyledButton className={styles.reset_button}>
              Reset filters
            </UnstyledButton>
          </div>
        </div>
        <div className={styles.sort}>
          <p className={styles.sort_title}>Sort by</p>
          <Select
            className={styles.sort_input}
            placeholder="Select release year"
            data={['React', 'Angular', 'Vue', 'Svelte']}
            rightSection={<IconChevronDown size={14} stroke={1.5} />}
            searchable
            checkIconPosition="left"
          />
        </div>
        <div className={styles.items}></div>
        <div className={styles.pagination}></div>
      </section>
    </main>
  );
}
