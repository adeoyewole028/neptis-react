import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({
  title,
  buttonText,
  fields,
  showGoogleButton,
  onSubmit,
  linkText,
  linkURL,
  linkSubText,
  passwordText,
  passwordURL,
}) => {
  const [formData, setFormData] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <div className="flex min-h-full h-min flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10">
              <img
                className="mx-auto h-12 w-auto"
                src="/images/auth-logo.png"
                alt="Neptis"
              />
              <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-white">
                {title}
              </h2>
            </div>

            {/* Google Sign in button */}
            {showGoogleButton && (
              <div className="my-6">
                <div className="grid grid-cols-1">
                  <div>
                    <a
                      href="#"
                      className="inline-flex w-full justify-center rounded-md border  border-input-base-500 py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-purple-500 hover:text-white"
                    >
                      <span className="sr-only">Sign up with Google</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="flat-color-icons:google">
                          <path
                            id="Vector"
                            d="M18.1712 8.36791H17.5V8.33332H10V11.6667H14.7096C14.0225 13.6071 12.1762 15 10 15C7.23875 15 5 12.7612 5 9.99999C5 7.23874 7.23875 4.99999 10 4.99999C11.2746 4.99999 12.4342 5.48082 13.3171 6.26624L15.6742 3.90916C14.1858 2.52207 12.195 1.66666 10 1.66666C5.39791 1.66666 1.66666 5.39791 1.66666 9.99999C1.66666 14.6021 5.39791 18.3333 10 18.3333C14.6021 18.3333 18.3333 14.6021 18.3333 9.99999C18.3333 9.44124 18.2758 8.89582 18.1712 8.36791Z"
                            fill="#FFC107"
                          />
                          <path
                            id="Vector_2"
                            d="M2.6275 6.12124L5.36542 8.12916C6.10625 6.29499 7.90042 4.99999 10 4.99999C11.2746 4.99999 12.4342 5.48082 13.3171 6.26624L15.6742 3.90916C14.1858 2.52207 12.195 1.66666 10 1.66666C6.79917 1.66666 4.02334 3.47374 2.6275 6.12124Z"
                            fill="#FF3D00"
                          />
                          <path
                            id="Vector_3"
                            d="M10 18.3333C12.1525 18.3333 14.1083 17.5096 15.5871 16.17L13.0079 13.9875C12.1431 14.6452 11.0864 15.0009 10 15C7.8325 15 5.99209 13.6179 5.29875 11.6892L2.58125 13.7829C3.96042 16.4817 6.76125 18.3333 10 18.3333Z"
                            fill="#4CAF50"
                          />
                          <path
                            id="Vector_4"
                            d="M18.1712 8.36793H17.5V8.33334H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5871 16.1696C15.4046 16.3354 18.3333 14.1667 18.3333 10C18.3333 9.44126 18.2758 8.89584 18.1712 8.36793Z"
                            fill="#1976D2"
                          />
                        </g>
                      </svg>
                      <span className="ml-5"> Sign up with Google</span>
                    </a>
                  </div>
                </div>
                <div className="mt-6 relative">
                  <img className="w-full" src="/images/OR.png" alt="" />
                </div>
              </div>
            )}

            {/* Form fields */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-base-400 mb-2"
                  >
                    {field.label}
                  </label>
                  {field.type === "password" ? (
                    <div className="mt-1 relative">
                      <input
                        id={field.name}
                        name={field.name}
                        type={passwordVisible ? "text" : "password"}
                        placeholder={field.placeholder}
                        autoComplete={field.autoComplete}
                        required={field.required}
                        className="block bg-transparent w-full appearance-none rounded-md border border-input-base-500 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                      />
                      <div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <span className="material-symbols-outlined text-base-500">
                            visibility
                          </span>
                        ) : (
                          <span className="material-symbols-outlined text-base-500">
                            visibility_off
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      required={field.required}
                      className="block bg-transparent w-full appearance-none rounded-md border border-input-base-500 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                  )}
                  {/* Additional text for password field */}
                  {field.registrationOnly && (
                    <p className="text-xs text-base-500 mt-4">
                      Password must be at least 8 characters and should contain
                      one uppercase letter, one lowercase letter, and one
                      number.
                    </p>
                  )}{" "}
                  {field.signInOnly && (
                    <p className="text-sm text-purple-500 mt-4">
                      <Link to={passwordURL}>{passwordText}</Link>
                    </p>
                  )}
                </div>
              ))}

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-full border border-transparent btn-base-400 py-2 px-4 text-base font-medium  shadow-sm hover:text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {buttonText}
                </button>
              </div>
            </form>

            {/* Other links */}
            <div className="mt-6">
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <span className="text-base-500 px-2 text-base font-light">
                    {linkSubText}
                    <span className="text-purple-500 ml-2">
                      <Link to={linkURL}>{linkText}</Link>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
