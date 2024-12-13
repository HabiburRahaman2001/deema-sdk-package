"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/DeemaSDK.tsx
const react_1 = __importDefault(require("react"));
const DeemaSDK = ({ environment, merchantOrderId, sdkKey, amount, currency, onPaymentStatus, }) => {
    react_1.default.useEffect(() => {
        const processPayment = () => {
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                onPaymentStatus('success', 'Payment Successful');
            }
            else {
                onPaymentStatus('failure', 'Payment Failed');
            }
        };
        processPayment();
    }, [merchantOrderId, sdkKey, amount, currency, environment, onPaymentStatus]);
    return react_1.default.createElement("div", null, "Processing Payment...");
};
exports.default = DeemaSDK;
