import { useEffect, useRef, useState } from "react";
import FormLabel from "./Label";

const onTextChange = (e, setState) => setState(e.target.value);

const Required = () => <span className="text-red-500">*</span>;

const ErrorText = ({ condition, text = "Enter this field", showAllErrors }) => {
  return (
    <span
      className={`text-red-400 px-3 py-0.5 rounded-2xl mt-2 text-sm ${
        showAllErrors && !condition() ? "" : "hidden"
      }`}
    >
      {text}
    </span>
  );
};

const Textbox = ({
  type = "text",
  name = "",
  id = "",
  placeholder = "",
  labelText = "",
  state,
  setState,
  containerClass = "",
  textarea = false,
  rows = 1,
  limit = undefined,
  required = false,
  hint = "",
  showAllErrors,
}) => {
  const onChange = (e) => {
    onTextChange(e, setState);
  };
  const labelCondition = labelText.length > 0 && id.length > 0;
  return (
    <div className={"form-group " + containerClass}>
      {labelCondition && (
        <FormLabel id={`label_${id}`} htmlFor={id}>
          {labelText} {required && <Required />}
        </FormLabel>
      )}
      {textarea ? (
        <>
          <textarea
            className="form-textarea"
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            aria-labelledby={labelCondition ? `label_${id}` : ""}
            rows={rows + 1}
            value={state}
          ></textarea>
          {limit && (
            <span className="mt-1 text-sm text-[var(--primary-color)]">
              {state.length}/{limit}
            </span>
          )}
        </>
      ) : (
        <input
          type={type}
          className="form-input"
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          aria-labelledby={labelCondition ? `label_${id}` : ""}
          value={state}
        />
      )}
      {hint.length > 0 && (
        <span className="mt-1 text-xs text-[var(--primary-color)]">{hint}</span>
      )}
      {required && (
        <ErrorText
          condition={() => state.length > 0}
          text="Enter above field"
          showAllErrors={showAllErrors}
        />
      )}
      {limit && (
        <ErrorText
          condition={() => state.length <= limit}
          text={`Max ${limit} characters`}
          showAllErrors={showAllErrors}
        />
      )}
    </div>
  );
};

const CheckboxGroup = ({
  options = [],
  singleSelect = false,
  required = false,
  other = false,
  checkboxObject,
  labelText = "",
  name = "",
  gridCols = 3,
  showAllErrors,
}) => {
  const [selected, setSelected] = useState([]);
  const [otherText, setOtherText] = useState("");
  var checkOptions = other ? [...options, "other"] : [...options];

  useEffect(() => {
    if (!selected) return;
    if (selected.includes("other")) {
      if (selected.length > 1) {
        checkboxObject({
          ...selected.filter((val) => val !== "other"),
          other: otherText,
        });
      } else {
        checkboxObject({ other: otherText });
      }
    } else {
      checkboxObject([...selected]);
    }
    // console.log("Current other object: ", checkboxObject?.current);
  }, [selected, otherText]);

  const handleChange = (value) => {
    if (singleSelect) {
      setSelected(selected[0] === value ? [] : [value]);
    } else {
      setSelected(
        (prev) =>
          prev.includes(value)
            ? prev.filter((v) => v !== value) // remove if already selected
            : [...prev, value] // add if not selected
      );
    }
  };

  return (
    <div className="form-group">
      <FormLabel id={`label_for_${name}`}>
        {labelText} {required && <Required />}
      </FormLabel>
      <div className={`checkbox-group grid grid-cols-${gridCols} gap-4`}>
        {checkOptions.map((option) => (
          <label
            className="checkbox-label"
            key={option}
            style={{ display: "block" }}
          >
            <input
              type="checkbox"
              className="checkbox-input mr-1 rounded-sm"
              checked={
                singleSelect
                  ? selected[0] === option
                  : selected.includes(option)
              }
              onChange={() => handleChange(option)}
              value={option}
            />
            <span className="checkbox-text">
              {option === "other" ? "Other" : option}
            </span>
          </label>
        ))}
      </div>
      {required && (
        <ErrorText
          condition={() => selected.length > 0}
          text="Please check atleast one"
          showAllErrors={showAllErrors}
        />
      )}
      {other && selected.includes("other") && (
        <Textbox
          state={otherText}
          setState={setOtherText}
          placeholder="Please type another option here"
          required
        />
      )}
    </div>
  );
};

const YesNoCheckbox = ({
  checkboxObject,
  labelText = "",
  name = "",
  required = false,
  textBoxOnYes,
  textBoxOnNo,
  showAllErrors,
}) => {
  const [selected, setSelected] = useState([]);
  const [otherText, setOtherText] = useState("");
  var checkOptions = ["Yes", "No"];

  useEffect(() => {
    if (!selected) return;
    checkboxObject([...selected]);
  }, [selected, otherText]);

  const handleChange = (value) => {
    setSelected(selected[0] === value ? [] : [value]);
  };

  return (
    <div className="form-group">
      <FormLabel id={`label_for_${name}`}>
        {labelText} {required && <Required />}
      </FormLabel>
      <div className="checkbox-group grid grid-cols-3 gap-4">
        {checkOptions.map((option) => (
          <label
            className="checkbox-label"
            key={option}
            style={{ display: "block" }}
          >
            <input
              type="checkbox"
              className="checkbox-input mr-1 rounded-sm"
              checked={selected[0] === option}
              onChange={() => handleChange(option)}
              value={option}
            />
            <span className="checkbox-text">{option}</span>
          </label>
        ))}
      </div>
      {required && (
        <ErrorText
          condition={() => selected.length > 0}
          text="Check either yes or no"
          showAllErrors={showAllErrors}
        />
      )}
      {selected[0] === "Yes" && textBoxOnYes && <>{textBoxOnYes}</>}
      {selected[0] === "No" && textBoxOnNo && <>{textBoxOnNo}</>}
    </div>
  );
};

export { Textbox, CheckboxGroup, YesNoCheckbox };
