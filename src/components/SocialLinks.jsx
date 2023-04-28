import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => {
  return (
    <div className="mt-3 flex justify-center gap-6 text-white xl:justify-start ">
      <a
        href="mailto:info.latrucco@gmail.com"
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
    </div>
  );
};

export default SocialLinks;