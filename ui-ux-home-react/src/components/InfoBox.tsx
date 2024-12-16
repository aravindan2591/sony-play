import { cn } from "../utils/classnames";
import React from "react";

interface InfoBoxProps {
  message: string;
  type?: "info" | "warning" | "error" | "success";
}

const InfoBox: React.FC<InfoBoxProps> = ({ message, type = "info" }) => {
  const baseClasses = cn("w-fit py-1 px-2", "rounded-full border-1", "text-info-mobile pad:text-info-desktop");

  const typeClasses = {
    info: "",
    warning: "border-yellow-300 text-yellow-700",
    error: "border-red-300 text-red-700",
    success: "border-green-300 text-green-700",
  }[type];

  return <div className={`${baseClasses} ${typeClasses} border`}>{message}</div>;
};

export default InfoBox;
