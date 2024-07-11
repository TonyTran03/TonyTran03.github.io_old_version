import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Introduction = () => {
  return (
    <section className="full-width-section">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>👋 Nice to Meet You! Aspiring to be a versatile data scientist with full-stack prowess—where analytics meet innovation in every byte and pixel.</h1>
        </div>
        <div className="space-y-4">

          <a href="/public/Tony_Tran_Resume.pdf" download="Tony_Tran_Resume.pdf" className="btn btn-primary">
            Download My Resume
          </a>
          <div className="icon-section">
            <a href="https://github.com/TonyTran03" className="icon-link">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/tony-tran-a08b8a230/" className="icon-link">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Introduction;
