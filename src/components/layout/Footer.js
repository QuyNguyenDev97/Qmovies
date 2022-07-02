import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="px-4 py-10 -mx-5 lg:px-6 bg-slate-800">
        <div className="flex gap-20 lg:gap-10 justify-spaceBetween sm:gap-5 sm:flex-col page-container">
          <div className="mb-10 lg:max-w-max text-white text-base sm:max-w-full max-w-[50%]">
            <div className="flex gap-10 mb-10 sm:gap-5 sm:mb-5 j">
              <p>Terms of Use</p>
              <p>Privacy-Policy</p>
              <p>Blog</p>
              <p>FAQ</p>
            </div>
            <div>
              <p>
                © 2022 QMovies. All Rights Reserved. All videos and shows on
                this platform are trademarks of, and all related images and
                content are the property of, Streamit Inc. Duplication and copy
                of this is strictly prohibited. All rights reserved.
              </p>
            </div>
          </div>
          <div className="text-white max-w-[50%]">
            <h3 className="mb-10 text-2xl font-bold">Follow Us</h3>
            <div className="flex gap-5 text-sm">
              <div>
                <a
                  href="https://www.facebook.com/quyquyquai.nguyen"
                  className="flex items-center justify-center w-10 h-10 text-white no-underline rounded-full bg-slate-900"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/quyquyquai.nguyen"
                  className="flex items-center justify-center w-10 h-10 text-white no-underline rounded-full bg-slate-900"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/quyquyquai.nguyen"
                  className="flex items-center justify-center w-10 h-10 text-white no-underline rounded-full bg-slate-900"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/QuyNguyenDev97"
                  className="flex items-center justify-center w-10 h-10 text-white no-underline rounded-full bg-slate-900"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
