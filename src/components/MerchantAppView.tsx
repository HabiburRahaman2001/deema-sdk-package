// src/components/MerchantAppView.tsx
import React, { useState } from 'react';
import DeemaSDK from './DeemaSDK';
import DeemaButton from './DeemaButton';

const MerchantAppView: React.FC = () => {
  const [merchantId, setMerchantId] = useState('1726');
  const [amount, setAmount] = useState('100');
  const [currency, setCurrency] = useState('KWD');
  const [sdkKey, setSdkKey] = useState('sk_test_example_key');
  const [isDeemaSdkOpen, setIsDeemaSdkOpen] = useState(false);

  const handlePaymentStatus = (status: string, message: string) => {
    if (status === 'success') {
      console.log('Payment Successful');
    } else {
      console.error(message);
    }
    setIsDeemaSdkOpen(false);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      {isDeemaSdkOpen ? (
        <DeemaSDK
          environment="sandbox"
          merchantOrderId={merchantId}
          sdkKey={sdkKey}
          amount={amount}
          currency={currency}
          onPaymentStatus={handlePaymentStatus}
        />
      ) : (
        <div>
          <h2>I am on the merchant app, tap the button to open Deema SDK</h2>
          <input
            type="text"
            placeholder="Merchant ID"
            value={merchantId}
            onChange={(e) => setMerchantId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="SDK Key"
            value={sdkKey}
            onChange={(e) => setSdkKey(e.target.value)}
          />
          <input
            type="text"
            placeholder="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
          <DeemaButton onClick={() => setIsDeemaSdkOpen(true)} title="Open Deema SDK" />
        </div>
      )}
    </div>
  );
};

export default MerchantAppView;
