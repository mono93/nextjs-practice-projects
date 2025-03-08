import { useRef } from "react";
import Button from "../UI/button";
import classes from "./event-search.module.css";

const EventSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {[
              { key: 1, value: 2021 },
              { key: 2, value: 2022 },
            ].map((item) => (
              <option value={item.value} key={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {[
              { key: 1, value: 1, label: "January" },
              { key: 2, value: 2, label: "February" },
              { key: 3, value: 3, label: "March" },
              { key: 4, value: 4, label: "April" },
              { key: 5, value: 5, label: "May" },
              { key: 6, value: 6, label: "June" },
              { key: 7, value: 7, label: "July" },
              { key: 8, value: 8, label: "August" },
              { key: 9, value: 9, label: "September" },
              { key: 10, value: 10, label: "October" },
              { key: 11, value: 11, label: "November" },
              { key: 12, value: 12, label: "December" },
            ].map((item, index) => (
              <option value={item.value} key={item.key}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button> Find events </Button>
    </form>
  );
};

export default EventSearch;
