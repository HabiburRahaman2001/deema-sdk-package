"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/MerchantAppView.tsx
const react_1 = __importStar(require("react"));
const DeemaSDK_1 = __importDefault(require("./DeemaSDK"));
const DeemaButton_1 = __importDefault(require("./DeemaButton"));
const MerchantAppView = () => {
    const [merchantId, setMerchantId] = (0, react_1.useState)('1726');
    const [amount, setAmount] = (0, react_1.useState)('100');
    const [currency, setCurrency] = (0, react_1.useState)('KWD');
    const [sdkKey, setSdkKey] = (0, react_1.useState)('sk_test_example_key');
    const [isDeemaSdkOpen, setIsDeemaSdkOpen] = (0, react_1.useState)(false);
    const handlePaymentStatus = (status, message) => {
        if (status === 'success') {
            console.log('Payment Successful');
        }
        else {
            console.error(message);
        }
        setIsDeemaSdkOpen(false);
    };
    return (react_1.default.createElement("div", { style: { padding: '20px', backgroundColor: '#f0f0f0' } }, isDeemaSdkOpen ? (react_1.default.createElement(DeemaSDK_1.default, { environment: "sandbox", merchantOrderId: merchantId, sdkKey: sdkKey, amount: amount, currency: currency, onPaymentStatus: handlePaymentStatus })) : (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "I am on the merchant app, tap the button to open Deema SDK"),
        react_1.default.createElement("input", { type: "text", placeholder: "Merchant ID", value: merchantId, onChange: (e) => setMerchantId(e.target.value) }),
        react_1.default.createElement("input", { type: "text", placeholder: "Amount", value: amount, onChange: (e) => setAmount(e.target.value) }),
        react_1.default.createElement("input", { type: "text", placeholder: "SDK Key", value: sdkKey, onChange: (e) => setSdkKey(e.target.value) }),
        react_1.default.createElement("input", { type: "text", placeholder: "Currency", value: currency, onChange: (e) => setCurrency(e.target.value) }),
        react_1.default.createElement(DeemaButton_1.default, { onClick: () => setIsDeemaSdkOpen(true), title: "Open Deema SDK" })))));
};
exports.default = MerchantAppView;
