import React from 'react';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icons = () => {
  return (
    <div className="mt-3 flex justify-center gap-6 text-white  xl:justify-start">
      <FontAwesomeIcon
        icon={faHtml5}
        className="h-11 duration-300 hover:text-secondary"
      />
      <FontAwesomeIcon
        icon={faCss3}
        className="h-11 duration-300 hover:text-secondary"
      />
      <FontAwesomeIcon
        icon={faJsSquare}
        className="h-11 duration-300 hover:text-secondary"
      />
      <FontAwesomeIcon
        icon={faReact}
        className="h-11 duration-300 hover:text-secondary"
      />
      <FontAwesomeIcon
        icon={faNodeJs}
        className="h-11 duration-300 hover:text-secondary"
      />
      <FontAwesomeIcon
        icon={faHtml5}
        className="h-11 duration-300 hover:text-secondary"
      />
    </div>
  );
};

export default Icons;
