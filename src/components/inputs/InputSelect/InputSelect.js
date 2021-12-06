import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { kebabCase } from "lodash";
import TextField from "@mui/material/TextField";

export default function InputSelect({
  label,
  value,
  handleChange,
  loading,
  error,
  data,
  optionKey,
  width = 300,
  errorMessage,
  isError,
  ...rest
}) {
  return (
    <TextField
      style={{ width: width }}
      select
      label={label}
      value={value}
      onChange={handleChange}
      helperText={errorMessage}
      color={isError && "error"}
      error={isError}
      {...rest}
    >
      {(() => {
        if (loading) {
          return <MenuItem>loading...</MenuItem>;
        }

        if (error) {
          return <MenuItem>error server</MenuItem>;
        }

        if (data) {
          if (data.length === 0) {
            return <MenuItem>no data</MenuItem>;
          }
          return data.map((item, index) => (
            <MenuItem value={item.id} key={index}>
              {item[`${optionKey}`].length >= 30
                ? `${item[`${optionKey}`].substring(0, 30)}...`
                : item[`${optionKey}`]}
            </MenuItem>
          ));
        }

        return null;
      })()}
    </TextField>
  );
}
