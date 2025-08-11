import { useEffect, useRef, useState } from "react";
import FormLabel from "./Label";

const onTextChange = (e, setState) => setState(e.target.value);

const Required = () => <span className="text-red-500">*</span>;

const ErrorText = ({ condition, text = "Enter this field" }) => {
  const hidden = useRef("hidden");
  if (!condition()) {
    hidden.current = "";
  } else {
    hidden.current = "hidden";
  }
  return (
    <span
      className={
        "text-white bg-red-500 px-3 py-0.5 rounded-2xl mt-2 text-sm " +
        hidden.current
      }
    >
      {text}
    </span>
  );
};

const Textbox = ({
  name = "",
  id = "",
  placeholder = "",
  labelText = "",
  state,
  setState,
  className = "",
  containerClass = "",
  textarea = false,
  rows = 1,
  limit = undefined,
  required = false,
  hint = "",
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
            className={className}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            aria-labelledby={labelCondition ? `label_${id}` : ""}
            rows={rows}
            value={state}
          ></textarea>
          {limit && (
            <span className="text-sm text-gray-800">
              {state.length}/{limit}
            </span>
          )}
        </>
      ) : (
        <input
          type="text"
          className={className}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          aria-labelledby={labelCondition ? `label_${id}` : ""}
          value={state}
        />
      )}
      {hint.length > 0 && <span className="text-xs text-gray-800">{hint}</span>}
      {required && <ErrorText condition={() => state.length > 0} />}
      {limit && (
        <ErrorText
          condition={() => state.length <= limit}
          text={`Max ${limit} characters`}
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
}) => {
  const [selected, setSelected] = useState([]);
  const [otherText, setOtherText] = useState("");
  var checkOptions = other ? [...options, "other"] : [...options];

  useEffect(() => {
    if (!selected) return;
    if (selected.includes("other")) {
      if (selected.length > 1) {
        checkboxObject({ ...selected, other: otherText });
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
          <label key={option} style={{ display: "block" }}>
            <input
              type="checkbox"
              className="mr-1"
              checked={
                singleSelect
                  ? selected[0] === option
                  : selected.includes(option)
              }
              onChange={() => handleChange(option)}
              value={option}
            />
            {option === "other" ? "Other" : option}
          </label>
        ))}
      </div>
      {required && <ErrorText condition={() => selected.length > 0} />}
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
          <label key={option} style={{ display: "block" }}>
            <input
              type="checkbox"
              className="mr-1"
              checked={selected[0] === option}
              onChange={() => handleChange(option)}
              value={option}
            />
            {option}
          </label>
        ))}
      </div>
      {required && <ErrorText condition={() => selected.length > 0} />}
      {selected[0] === "Yes" && textBoxOnYes && <>{textBoxOnYes}</>}
      {selected[0] === "No" && textBoxOnNo && <>{textBoxOnNo}</>}
    </div>
  );
};

export { Textbox, CheckboxGroup, YesNoCheckbox };
