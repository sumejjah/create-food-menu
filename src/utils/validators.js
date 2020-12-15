export const required = (value) =>
  typeof value !== "number" &&
  (!value || (value && typeof value !== "object" && value.trim() === "")) && "Required!";
