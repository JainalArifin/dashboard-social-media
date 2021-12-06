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
  // return (
  //   <FormControl style={{ width: width }}>
  //     <InputLabel id={`label-select-${kebabCase(label)}`}>{label}</InputLabel>
  //     <Select
  //       labelId={`input-select-${kebabCase(label)}`}
  //       id={`input-select-${kebabCase(label)}`}
  //       value={value}
  //       label={label}
  //       onChange={handleChangeLabel}
  //       helper
  //       {...rest}
  //     >
  //       {(() => {
  //         if (loading) {
  //           return <MenuItem>loading...</MenuItem>;
  //         }

  //         if (error) {
  //           return <MenuItem>error</MenuItem>;
  //         }

  //         if (data) {
  //           if (data.length === 0) {
  //             return <MenuItem>no data</MenuItem>;
  //           }
  //           return data.map((item, index) => (
  //             <MenuItem value={item.id} key={index}>
  //               {item[`${optionKey}`]}
  //             </MenuItem>
  //           ));
  //         }

  //         return null;
  //       })()}
  //     </Select>
  //   </FormControl>
  // );
  return (
    <TextField
      style={{ width: width }}
      id="outlined-select-currency"
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
