import React from 'react';

// import css
import './ErrorPage.css';
const ErrorPage = (props) => {
   return (
      <div className='error-message'>
         <div>Error: {props.errorMessage}</div>
      </div>
   )
};

ErrorPage.defaultProps = {
   errorMessage: 'Oops, something went wrong!'
}

export default ErrorPage;
