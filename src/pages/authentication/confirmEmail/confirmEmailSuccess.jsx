import { useNavigate } from "react-router-dom";
const ConfirmEmailSuccess = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log('navigate')
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="flex min-h-full h-min flex-col justify-center py-12 sm:px-6 lg:px-2">
        <div className="mt-8 sm:mx-auto sm:w-full ">
          <div className="py-8 px-2 shadow sm:rounded-lg sm:px-10">
            {" "}
            <div className="sm:mx-auto sm:w-full  mb-5">
              <img
                className="mx-auto h-12 w-auto"
                src="/images/auth-logo.png"
                alt="Neptis"
              />
              <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-white">
                Account Created Successfully
              </h2>
              <small className="block text-sm font-medium text-base-500 text-center max-w-xs px-5 mt-2 mx-auto">
                Well done Micheal. We’re glad to have you building with us.
              </small>
            </div>
            <div className="max-w-[200px] mx-auto">
              <button
                onClick={handleNavigation}
                type="submit"
                className="flex w-full justify-center rounded-full border border-transparent py-2 px-4 text-base font-medium shadow-sm text-white bg-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailSuccess;
