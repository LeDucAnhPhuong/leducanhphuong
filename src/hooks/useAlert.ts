"use client";
import { useState } from "react";
type TypeAlert = {
  show: boolean;
  text: string;
  type: "success" | "danger";
};
type TypeShowAlert = {
  text: string;
  type: "success" | "danger";
};
const useAlert = () => {
  const [alert, setAlert] = useState<TypeAlert>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text = "", type = "danger" }: TypeShowAlert) =>
    setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
