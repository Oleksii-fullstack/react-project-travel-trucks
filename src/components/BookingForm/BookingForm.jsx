import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loader from "../Loader/Loader";
import css from "./BookingForm.module.css";
import calendarCss from "./CustomCalendar.module.css";

const today = new Date();

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Booking submitted successfully! 🚐");
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
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
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Name too short" },
            pattern: {
              value: /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'\s-]+$/,
              message: "Name can only contain letters",
            },
          })}
        />
        {errors.name && <span className={css.err}>{errors.name.message}</span>}

        <input
          className={css.input}
          type="email"
          placeholder="Email*"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className={css.err}>{errors.email.message}</span>
        )}

        {/* Booking date */}
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              placeholderText="Booking date*"
              selected={field.value}
              onChange={field.onChange}
              minDate={new Date()}
              calendarClassName={calendarCss.customCalendar}
              dateFormat="dd.MM.yyyy"
              showPopperArrow={false}
              autoComplete="off"
              className={`${css.input} ${errors.date ? css.inputErr : ""}`}
              {...field}
              renderCustomHeader={({
                monthDate,
                decreaseMonth,
                increaseMonth,
              }) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 6,
                  }}
                >
                  <button
                    onClick={decreaseMonth}
                    type="button"
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: 22,
                      padding: "0 16px 0 0",
                      color: "#2d264b",
                      cursor: "pointer",
                      outline: "none",
                    }}
                    aria-label="Previous month"
                  >
                    &#8592;
                  </button>
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: 19,
                      flex: 1,
                      textAlign: "center",
                      color: "#22223f",
                    }}
                  >
                    {monthDate.toLocaleString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <button
                    onClick={increaseMonth}
                    type="button"
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: 22,
                      padding: "0 0 0 16px",
                      color: "#2d264b",
                      cursor: "pointer",
                      outline: "none",
                    }}
                    aria-label="Next month"
                  >
                    &#8594;
                  </button>
                </div>
              )}
            />
          )}
        />
        {errors.date && <span className={css.err}>{errors.date.message}</span>}

        <textarea
          className={css.textarea}
          placeholder="Comment"
          {...register("comment")}
          rows={3}
        />
      </div>
      <button type="submit" className={css.button} disabled={isSubmitting}>
        {isSubmitting ? <Loader size={20} color="#fff" /> : "Send"}
      </button>
    </form>
  );
};

export default BookingForm;
