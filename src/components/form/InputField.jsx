import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const InputWithFormat = ({
  id,
  name,
  type,
  placeholder,
  format,
  required,
  className,
  value,
  onChange,
  onSubmit,
  digitLength,
}) => {
  const [formattedValue, setFormattedValue] = useState(value || "");

  useEffect(() => {
    const plainValue = formattedValue.replace(/-/g, "");
    onChange({ target: { name, value: plainValue } });

    if (
      plainValue.length === format.replace(/-/g, "").length &&
      plainValue.length === digitLength &&
      onSubmit
    ) {
      onSubmit({ [name]: plainValue });
    }
  }, [formattedValue, format, digitLength, name, onChange, onSubmit]);

  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    let formattedInput = "";
    let j = 0;
    for (let i = 0; i < format.length; i++) {
      if (format[i] === "X") {
        formattedInput += inputValue[j] || "";
        j++;
      } else if (format[i] === "-" && inputValue[j] !== "-") {
        formattedInput += "-";
      } else if (format[i] === "-" && inputValue[j] === "-") {
        j++;
        i--;
      } else {
        formattedInput += format[i];
      }
    }

    setFormattedValue(formattedInput);
  };

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      required={required}
      className={className}
      value={formattedValue}
      onChange={handleChange}
    />
  );
};

InputWithFormat.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  digitLength: PropTypes.number,
};

export default InputWithFormat;
