import * as React from "react";
import TextField from "@mui/material/TextField";

export default function InputTextArea({
  label,
  errorMessage,
  isError = false,
  width = 300,
  ...rest
}) {
  return (
    <>
      <TextField
        style={{ width: width }}
        helperText={errorMessage}
        id="input-text-area"
        multiline
        rows={4}
        label={label}
        color={isError && "error"}
        error={isError}
        {...rest}
      />
    </>
  );
}
