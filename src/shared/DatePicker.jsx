// CustomDatePicker.js
import { useEffect } from "react";
import FormLabel from "./Label";

const DatePicker = ({
  id = "",
  dateRange = "all",
  dateState,
  setDateState,
  labelText = "Select a date:",
  required = false,
}) => {
  const getTodayDateStr = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // format: YYYY-MM-DD
  };

  const parseDateToState = (dateStr) => {
    const [year, month, day] = dateStr.split("-");
    const dateObj = new Date(`${year}-${month}-${day}T00:00:00`);
    return {
      month,
      day,
      year,
      datetime: dateObj,
    };
  };

  const todayStr = getTodayDateStr();

  useEffect(() => setDateState(parseDateToState(todayStr)), []);

  const handleChange = (e) => {
    const newDateStr = e.target.value;
    setDateState(parseDateToState(newDateStr));
  };

  // Set min and max dates based on the dateRange prop
  const minDate = dateRange === "future" ? todayStr : undefined;
  const maxDate = dateRange === "past" ? todayStr : undefined;

  return (
    <div className="form-group">
      <FormLabel id={`label_${id}`} htmlFor={id}>
        {labelText} {required && <span className="text-red-500">*</span>}
      </FormLabel>
      <input
        id={id}
        type="date"
        value={`${dateState.year}-${dateState.month}-${dateState.day}`}
        onChange={handleChange}
        min={minDate}
        max={maxDate}
      />
    </div>
  );
};

export default DatePicker;
