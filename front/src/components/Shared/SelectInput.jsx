import React from 'react';

export default ({
  label,
  name,
  className,
  children,
  errors = [],
  ...props
}) => {
  return (
    <div className={className}>
            <div className='md:flex md:items-center mb-6'>
          <div class="md:w-1/3"></div>
      {label && (
        <label className="block text-lime-500 md:text-right mb-1 md:mb-0 text-left" htmlFor={name}>
          {label}:
        </label>
      )}

</div>
      <div class="md:w-2/3">

      <select
        id={name}
        name={name}
        {...props}
        className={`form-select block bg-opacity-75 appearance-none border-2 border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${errors.length ? 'error' : ''}`}
      >
        {children}
      </select>
      {errors && <div className="form-error">{errors}</div>}
    </div>
    </div>

  );
};
