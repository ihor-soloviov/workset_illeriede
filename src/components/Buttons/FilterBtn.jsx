import React, { useState } from 'react';

const FilterBtn = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='material__filter-btn'>
      <button
        className={`button button-filter ${
          open ? ' button-filter--active' : ''
        }`}
        onClick={() => setOpen(!open)}
      >
        {props.name}
        <svg
          width='13'
          height='8'
          viewBox='0 0 13 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.5985 1.8871L7.27921 7.32258C7.21589 7.3871 7.14728 7.43269 7.07341 7.45935C6.99953 7.48645 6.92037 7.5 6.83594 7.5C6.75151 7.5 6.67235 7.48645 6.59847 7.45935C6.52459 7.43269 6.45599 7.3871 6.39267 7.32258L1.05757 1.8871C0.909815 1.73656 0.835936 1.54839 0.835936 1.32258C0.835936 1.09678 0.915092 0.903229 1.0734 0.741939C1.23171 0.580648 1.41641 0.500003 1.62749 0.500003C1.83857 0.500003 2.02327 0.580648 2.18158 0.741938L6.83594 5.48387L11.4903 0.741936C11.638 0.591399 11.82 0.516129 12.0361 0.516129C12.2527 0.516129 12.4402 0.596774 12.5985 0.758065C12.7568 0.919355 12.8359 1.10753 12.8359 1.32258C12.8359 1.53763 12.7568 1.72581 12.5985 1.8871Z'
            fill='#0B0B0C'
          />
        </svg>
      </button>
      {open ? (
        <>
          {' '}
          <div className='material__filter-dropdown'>
            <ul>
              <li>
                <p className='text text_color-black'>Top sellers</p>
              </li>
              <li>
                <p className='text text_color-black'>Newest</p>
              </li>
              <li>
                <p className='text text_color-black'>Price: low to high</p>
              </li>
              <li>
                <p className='text text_color-black'>Price: high to low</p>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FilterBtn;
