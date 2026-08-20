import he from "he";
import validator from "validator";

export const isValidEmail = (email) => {
    return typeof email === "string" && validator.isEmail(email.trim());
};

export const isValidString = (value) => {
    return typeof value === "string" && value.trim().length > 0;
};

export const isWithinMaxLength = (value, maxLength) => {
    return typeof value === "string" && value.length <= maxLength;
};

export const escapeHtml = (value) => {
    return he.encode(value);
};