import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => {
  return (
    <div
      className="mt-3 flex justify-center gap-6 text-white opacity-0 xl:justify-start"
      id="social-links">
      <a
        href="mailto:penalva.pablo@gmail.com"
        aria-label="link to email"
        className="h-8">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="h-11 duration-300 hover:text-secondary"
        />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5491154192392"
        rel="noreferrer"
        target="_blank"
        aria-label="link to whatsapp"
        className=" ">
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="h-11 w-11 duration-300 hover:text-secondary"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/pablo-penalva/"
        rel="noreferrer"
        target="_blank"
        aria-label="link to linkedin"
        className=" ">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="h-11 w-11 duration-300 hover:text-secondary"
        />
      </a>

      <a
        href="https://github.com/penalvapablo"
        rel="noreferrer"
        target="_blank"
        aria-label="link to github"
        className=" ">
        <FontAwesomeIcon
          icon={faGithub}
          className="h-11 w-11 duration-300 hover:text-secondary"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
