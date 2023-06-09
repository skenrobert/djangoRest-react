import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
  return (
    <div className={className}>
      <div className='md:flex md:items-center mb-6'>
          <div class="md:w-1/3">
          {label && (
            <label className="block text-lime-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor={name}>
              {label}:
            </label>
          )}
      </div>
      <div class="md:w-3/3">
        <input
          id={name}
          name={name}
          {...props}
          className={`form-input bg-opacity-75 appearance-none border-2 border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${errors.length ? 'error' : ''}`}
          />
        {errors && <div className="form-error">{errors}</div>}
    </div>
    </div>
    </div>
  );
};

//pointer-events-none