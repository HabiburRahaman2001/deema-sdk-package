"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/DeemaButton.tsx
const react_1 = __importDefault(require("react"));
const DeemaButton = ({ onClick, title }) => {
    return (react_1.default.createElement("button", { onClick: onClick, style: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
        } }, title));
};
exports.default = DeemaButton;
