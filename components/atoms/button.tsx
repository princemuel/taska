import { cva } from "@/styled-system/css";

const button = cva({
  base: {
    display: "flex",
  },
  variants: {
    variant: {
      primary: { bg: "" },
      solid: { bg: "red.200", color: "white" },
      outline: { borderWidth: "1px", borderColor: "red.50" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
});
