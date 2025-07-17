import css from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <form className={css.form}>
      <div className={css.headerRow}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={css.inputsBox}>
        <input
          className={css.input}
          type="text"
          placeholder="Name*"
          required
          name="name"
        />
        <input
          className={css.input}
          type="email"
          placeholder="Email*"
          required
          name="email"
        />
        <input
          className={css.input}
          type="text"
          placeholder="Booking date*"
          required
          name="date"
        />
        <textarea
          className={css.textarea}
          placeholder="Comment"
          name="comment"
          rows={3}
        />
      </div>
      <button type="submit" className={css.button}>
        Send
      </button>
    </form>
  );
};

export default BookingForm;
