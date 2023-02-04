import React from "react";
import { Select } from "antd";

const BasicSelect = () => {
  return (
    <Select
      size="small"
      defaultValue="week"
      style={{ width: 120 }}
      //   onChange={handleChange}
      options={[
        { value: "week", label: " Week" },
        { value: "month", label: " Month" },
        { value: "quarter", label: " Quarter" },
        { value: "semiannual", label: " Semi Annual" },
        { value: "year", label: " Annual" },
      ]}
    />
  );
};

export default BasicSelect;
