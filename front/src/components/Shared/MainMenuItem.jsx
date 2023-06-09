import React from 'react';
import Icon from '../Shared/Icon';
import { Link } from "react-router-dom";
import { FcAddImage, FcAddRow, FcAcceptDatabase, FcServices, FcPlus, FcPrivacy, FcAutomatic, FcSupport, FcSearch, FcPortraitMode, FcReuse, FcCalendar, FcHighPriority, FcContacts, FcEmptyTrash, FcEngineering, FcFile,  } from "react-icons/fc";

export default ({ icon, link, text }) => {

  const iconClasses = {
    'text-white fill-current': true,
    'text-indigo-100 group-hover:text-white fill-current': !true,
  };

  const textClasses = {
    'text-white': true,
    'text-indigo-200 group-hover:text-white': !true
  };

  return (
    <div className="mb-4">
        <ul className="flex items-center group py-3">
          <li className="nav-item">
            <Link to={link} className="nav-link">
              <Icon name={icon} className={iconClasses} />
              <div className={textClasses}>{text}</div>
            </Link>
          </li>
        </ul>
    </div>
  );
};
