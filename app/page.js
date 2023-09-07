'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [numOptions, setNumOptions] = useState(1000);
  const [numOptionsArr, setNumOptionsArr] = useState([]);

  useEffect(() => {
    let newArr = getUniqueRandomNums(1000);
    setNumOptionsArr(newArr);
  }, []);

  const getUniqueRandomNums = (max) => {
    let temp = [];
    while (temp.length < max) {
      let num = Math.floor(Math.random() * max) + 1;
      if (temp.indexOf(num) === -1) temp.push(num);
    }
    return temp;
  };

  const handleChange = (event) => {
    let val = event.target.value.replace(/\D/, '');
    let newArr = getUniqueRandomNums(val);
    setNumOptions(val);
    setNumOptionsArr(newArr);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <form>
          <div className={styles.formDiv}>
            <label htmlFor="numOptions" className={styles.inputLabel}>
              Number of Select Options
            </label>
            <input
              name="numOptions"
              id="numOptions"
              value={numOptions}
              onChange={handleChange}
              className={styles.inputText}
            />
          </div>
          <div className={styles.formDiv}>
            <label htmlFor="optionName" className={styles.inputLabel}>
              Demo Select
            </label>
            <select
              name="optionName"
              id="optionName"
              className={styles.inputSelect}
            >
              {numOptionsArr.map((option, i) => {
                return (
                  <option
                    value={i + 1}
                    key={option}
                    className={styles.inputOption}
                  >
                    Number {i + 1}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
    </main>
  );
}
