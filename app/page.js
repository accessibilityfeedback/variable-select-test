'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

let startingNum = 1000;
let max = 9999;

export default function Home() {
  const [numOptions, setNumOptions] = useState(startingNum);
  const [numOptionsArr, setNumOptionsArr] = useState([]);
  const [overMax, setOverMax] = useState(false);

  useEffect(() => {
    let newArr = getUniqueRandomNums(startingNum);
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
    if (val <= max) {
      setOverMax(false);
      let newArr = getUniqueRandomNums(val);
      setNumOptions(val);
      setNumOptionsArr(newArr);
    } else {
      setOverMax(true);
      let newArr = getUniqueRandomNums(max);
      setNumOptions(val);
      setNumOptionsArr(newArr);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <form>
          <div>
            <p>Input a Number from 1 to 9999</p>
          </div>
          <div className={styles.formDiv}>
            {overMax && (
              <div className={styles.overMax}>
                <span>Max value exceeded. Demo select populated to {max}.</span>
              </div>
            )}
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
              {numOptions > 0 ? (
                numOptionsArr.map((option, i) => {
                  if (i === 0) {
                    return (
                      <option
                        value={i + 1}
                        key={option}
                        className={styles.inputOption}
                        selected
                      >
                        Number {i + 1}
                      </option>
                    );
                  } else {
                    return (
                      <option
                        value={i + 1}
                        key={option}
                        className={styles.inputOption}
                      >
                        Number {i + 1}
                      </option>
                    );
                  }
                })
              ) : (
                <option hidden className={styles.inputOption}>
                  Set Number of Select Options
                </option>
              )}
            </select>
          </div>
        </form>
      </div>
    </main>
  );
}
