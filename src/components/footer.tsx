import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="container pt-md-6 bg-dark">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div>
              <div>
                <p className="text-uppercase fw-bold text-light my-3">
                  July Month Project Developed by Anand K
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-6 align-items-center a">
        <div className="mx-auto">
          <div className="d-flex align-items-center">
            <div>
              <img
                className="img-fluid p-2"
                src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
                width="100"
              />
            </div>
            <div>
              <img
                className="img-fluid p-2"
                src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png"
                width="100"
              />
            </div>
            
            <div>
              <img
                className="img-fluid p-2"
                src="https://miro.medium.com/v2/resize:fit:1050/1*acfAKaDI7uv5GyFnJmiPhA.png"
                width="100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
