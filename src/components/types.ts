import { ButtonProps } from "react-native";

export interface IButton extends ButtonProps {
  leftIcon?: any;
  title: string;
  variant?: "primary" | "secundary";
}

export interface IButtonProps {
  variant?: "primary" | "secundary";
  disabled?: boolean;
}
