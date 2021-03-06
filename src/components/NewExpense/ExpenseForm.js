import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm(props) {
  // const [userInput, setUserInput] = useState({
  //   Title: "",
  //   Amount: "",
  //   Date: "",
  // });

  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, Title: event.target.value };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, Amount: event.target.value };
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, Date: event.target.value };
  //   });
  // };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [formDisplay, setFormDisplay] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   props.onSaveExpenseData(userInput);
  //   setUserInput({
  //     Title: "",
  //     Amount: "",
  //     Date: new Date(""),
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setFormDisplay(false);
  };

  const formDisplayHandler = () => {
    setFormDisplay(true);
  };

  const hideFormHandler = () => {
    setFormDisplay(false);
  };

  if (!formDisplay) {
    return (
      <div className={styles["new-expense-form__button"]}>
        <button
          className={`${styles["new-expense__actions_button"]} ${styles["add-new-expense__button"]}`}
          onClick={formDisplayHandler}
        >
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label htmlFor="new-expense__title">Title</label>
          <input
            type="text"
            id="new-expense__title"
            onChange={titleChangeHandler}
            // value={userInput.Title}
            value={enteredTitle}
            required
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label htmlFor="new-expense__amount">Amount</label>
          <input
            type="number"
            id="new-expense__amount"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            // value={userInput.Amount}
            value={enteredAmount}
            required
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label htmlFor="new-expense__date">Date</label>
          <input
            type="date"
            id="new-expense__date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            // value={userInput.Date}
            value={enteredDate}
            required
          />
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button
          className={styles["new-expense__actions_button"]}
          onClick={hideFormHandler}
        >
          Cancel
        </button>
        <button className={styles["new-expense__actions_button"]} type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}
