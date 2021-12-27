import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import useClickOutside from '../../helpers/useClickOutside.jsx';

import './Dropdown.scss';

interface DropdownProps {
  optionsList: string[];
  onClick: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ optionsList, onClick }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false));

  const toggle = () => setIsOpen(!isOpen);


  function handleOnClick(option: string) {
    setSelectedValue(option);
    toggle();
  }

  return (
    <div ref={ref} className='dropdown-wrapper'>
      <div
        tabIndex={0}
        className='dropdown-header'
        role='button'
        onKeyPress={toggle}
        onClick={toggle}
      >
        <div className='dropdown-header_title'>
          <p className="dropdown-header_title-bold">{selectedValue}</p>
        </div>
        <div className={isOpen ? classNames('dropdown-header_action', 'open') : classNames('dropdown-header_action', 'close')}>
        </div>
      </div>
      {isOpen && (
        <ul className='dropdown-list'>
          {optionsList.map((option, index) => (
            <li className='dropdown-list-item' key={index}>
              <button type='button' onClick={() => handleOnClick(option)}>
                <span>{option}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
