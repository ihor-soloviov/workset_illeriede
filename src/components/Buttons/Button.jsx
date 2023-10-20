//React
import React from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { alertHandleClick, contactFormHandleClick } from '../store/popupsSlice';

const Button = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCurrentFunction = (e, f) => {
    e.preventDefault();
    const func = f;
    func();
  };
  if (props.name === 'Download') {
    return (
      <button
        className={`button button__download button_color-${props.color} button_size-${props.size}`}
        onClick={(event) => {
          if (props.name === 'zum Angebot') {
            dispatch(contactFormHandleClick());
          }
          if (props.dev === true) {
            dispatch(alertHandleClick());
          }

          if (props.dev === false && props.name !== 'zum Angebot') {
            navigate(`/${props.url}`);
          } else {
            handleCurrentFunction(event, props.onClick);
          }
        }}
      >
        <div className='button__download-ico'>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 1V9.51852M6 9.51852L1.83333 6.18518M6 9.51852L9.75 6.18518M1 11H11'
              stroke='white'
              stroke-linecap='round'
            />
          </svg>
        </div>
        {props.name}
      </button>
    );
  }
  if (props.name === 'map') {
    return (
      <button
        className={`button button__map button_color-${props.color} button_size-${props.size}`}
        onClick={(event) => {
          if (props.name === 'zum Angebot') {
            dispatch(contactFormHandleClick());
          }
          if (props.dev === true) {
            dispatch(alertHandleClick());
          }

          if (props.dev === false && props.name !== 'zum Angebot') {
            navigate(`/${props.url}`);
          } else {
            handleCurrentFunction(event, props.onClick);
          }
        }}
      >
        {props.name}
        <div className='button__map-ico'>
          <svg
            width='14'
            height='13'
            viewBox='0 0 14 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6.41683 12.5833C6.26405 12.4306 6.18405 12.2361 6.17683 12C6.16961 11.7639 6.24267 11.5694 6.396 11.4167L10.4793 7.33333H1.16683C0.930721 7.33333 0.732666 7.25333 0.572666 7.09333C0.412666 6.93333 0.332943 6.73556 0.333499 6.5C0.333499 6.26389 0.413499 6.06583 0.573499 5.90583C0.733499 5.74583 0.931277 5.66611 1.16683 5.66667H10.4793L6.396 1.58333C6.24322 1.43056 6.17017 1.23611 6.17683 1C6.1835 0.763889 6.2635 0.569444 6.41683 0.416666C6.56961 0.263889 6.76405 0.1875 7.00017 0.1875C7.23628 0.1875 7.43072 0.263889 7.5835 0.416666L13.0835 5.91667C13.1668 5.98611 13.226 6.07306 13.261 6.1775C13.296 6.28194 13.3132 6.38944 13.3127 6.5C13.3127 6.61111 13.2954 6.71528 13.261 6.8125C13.2266 6.90972 13.1674 7 13.0835 7.08333L7.5835 12.5833C7.43072 12.7361 7.23628 12.8125 7.00017 12.8125C6.76405 12.8125 6.56961 12.7361 6.41683 12.5833Z' />
          </svg>
        </div>
      </button>
    );
  }

  if (props.name === 'Login') {
    return (
      <>
        <button
          className={`button button_color-${props.color} button_size-${props.size}`}
          onClick={() => window.open('http://calc.work-set.eu/', '_blank')}
        >
          {props.name}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          className={`button button_color-${props.color} button_size-${props.size}`}
          onClick={(event) => {
            if (props.name === 'zum Angebot') {
              dispatch(contactFormHandleClick());
            }
            if (props.dev === true) {
              dispatch(alertHandleClick());
            }

            if (props.dev === false && props.name !== 'zum Angebot') {
              console.log(props.url);
              if (props.url == 'Schrägdach') {
                navigate(`/schragdach`);
              }
              if (props.url == 'Flachdach') {
                navigate(`/flachdach`);
              }
              if (props.url == 'EEG-Umlage') {
                navigate(`eeg-umlage`);
              }
              if (props.url == 'Kontakt') {
                navigate(`kontakt`);
              }
              if (props.url === 'Über uns') {
                navigate(`/uber-uns`);
              } else {
                // navigate(`/${props.url}`);
              }
            } else {
              handleCurrentFunction(event, props.onClick);
            }
          }}
        >
          {props.name}
        </button>
      </>
    );
  }
};
export default Button;
