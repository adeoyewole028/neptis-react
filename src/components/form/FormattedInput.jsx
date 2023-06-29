import { PatternFormat } from "react-number-format";
import { useState } from "react";
import PropTypes from "prop-types";

const FormattedInput = ({
  buttonText,
  label,
  name,
  title,
  placeholder,
  onSubmit,
  email,
  count,
  timeLeft,
  resendCode,
//   onChange,
}) => {
  const [formData, setFormData] = useState("");
  const handleChange = (name, value) => {
    if (name) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.floatValue,
      }));
    }
    if (value.value.length === 6) {
      onSubmit({ [name]: value.floatValue });
    //   onChange(value.floatValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex min-h-full h-min flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {" "}
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="/images/auth-logo.png"
              alt="Neptis"
            />
            <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-white">
              {title}
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <label
              htmlFor={name}
              className="block text-sm font-medium text-base-400 mb-2 text-center"
            >
              {label} - <span className="text-white font-light">{email}</span>
            </label>
            <div className="mt-1 relative">
              <PatternFormat
                value={formData[name] || ""}
                onValueChange={(value) => handleChange(name, value)}
                name={name}
                format="###-###"
                placeholder={placeholder}
                className="block bg-transparent w-full appearance-none rounded-md border border-input-base-500 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-center"
              />
            </div>
          </form>
          {count === 0 ? (
            <div className="mt-5">
              <button
                onClick={resendCode}
                type="submit"
                className="flex mx-auto justify-center text-purple-500 rounded-full border border-transparent text-base font-medium  shadow-sm"
              >
                {buttonText}
              </button>
            </div>
          ) : (
            <div className="text-base-400 text-center mt-5">
              Resend code in {timeLeft}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// define prop types
FormattedInput.propTypes = {
  buttonText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  timeLeft: PropTypes.string.isRequired,
  resendCode: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
};

export default FormattedInput;
