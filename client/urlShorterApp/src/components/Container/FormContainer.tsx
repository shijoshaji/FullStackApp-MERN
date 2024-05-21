import * as React from 'react';

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return (
    <div className="container mx-auto p-1">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl p-10 backdrop-brightness-75">
          <h1 className="text-white text-center text-4xl">URL Shorten App</h1>
          <span>
            <p className="text-yellow-200 text-xl pb-0 pt-3 font-extralight text-right ">Get the shorter url</p>
            <p className="text-blue-300 font-light text-right  pb-3">Free Tool</p>
          </span>
          {/* FORM */}
          <form action="">
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-yellow-300 bg-slate-500 rounded-s-full">
                  urlShortener.link/
                </div>
                <input
                  required
                  type="text"
                  name="urlName"
                  id="urlName"
                  placeholder="Paster Long URL"
                  className="w-full block p-3 ps-32  text-sm text-gray-500 border border-gray-800 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
