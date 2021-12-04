import React, { createContext, useReducer, useContext } from 'react';

const ErrorResponseHandlerContext = createContext();

const initState = 0;

const errorResponseHandlerReducer = (state = initState, action) => {
  switch (action) {
    case 422:
    case 404:
      return 404;
    case 500:
      return 500;
    default:
      return state;
  }
};

export const ErrorResponseStateProvider = ({ children }) => {
  const [errCode, UseErrorResponseHandler] = useReducer(
    errorResponseHandlerReducer,
    initState
  );

  return (
    <ErrorResponseHandlerContext.Provider
      value={[errCode, UseErrorResponseHandler]}
    >
      {children}
    </ErrorResponseHandlerContext.Provider>
  );
};

export default function useErrorResponseHandlerContext() {
  const [errCode, UseErrorResponseHandler] = useContext(
    ErrorResponseHandlerContext
  );

  function handleErrorResponse(code) {
    UseErrorResponseHandler(code);
  }

  return { errCode, handleErrorResponse };
}
