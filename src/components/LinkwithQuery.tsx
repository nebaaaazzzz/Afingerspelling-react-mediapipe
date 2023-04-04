import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function LinkwithQuery({ ref, text, path, query, ...rest }) {
  const { search } = useLocation();
  return (
    <Link
      ref={ref}
      to={`${path}${search}&${query}`}
      className="btn my-2 h-14 hover:bg-white hover:text-[#683aff] rounded-3xl text-xl border-none text-white px-20 bg-[#683aff]"
      {...rest}
    >
      {text}
    </Link>
  );
}

export default LinkwithQuery;
