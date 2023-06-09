import React from 'react';

export default ({ loading, className, children, ...props }) => {
  return (
    <button disabled={loading} className={className} {...props}>
      {loading && <div className="mr-2 btn-spinner" />}
      {children}
    </button>
  );
};
