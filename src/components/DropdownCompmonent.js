import DropDownPicker from "react-native-dropdown-picker";
import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
const accountTypes = ["Individual", "Cooperate"];
const DropdownComponent = ({
  placeholder,setValue, value,
  defaultItems = [
    { label: "US Dollar", value: "USD" },
    { label: "Nigerian Naira", value: "NGN" },
  ],
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(defaultItems);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={placeholder}
      placeholderStyle={{
        color: "grey",
      }}
      listMode="MODAL"
      style={{ marginTop: 0, borderColor: "#C8C8C8" }}
    />
  );
};
export default DropdownComponent;
