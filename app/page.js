'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [numOfOptions, setNumOfOptions] = useState(1000);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <form>
          <label htmlFor="optionName" className={styles.inputLabel}>
            Demo Select
          </label>
          <select
            name="optionName"
            id="optionName"
            className={styles.inputSelect}
          >
            {new Array(numOfOptions).fill().map((_, i) => {
              return (
                <option
                  value={'option' + i}
                  key={'option' + i}
                  className={styles.inputOption}
                >
                  Number {i + 1}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </main>
  );
}
