// src/components/DeemaSDK.tsx
import React from 'react';

interface DeemaSDKProps {
  environment: string;
  merchantOrderId: string;
  sdkKey: string;
  amount: string;
  currency: string;
  onPaymentStatus: (status: string, message: string) => void;
}

const DeemaSDK: React.FC<DeemaSDKProps> = ({
  environment,
  merchantOrderId,
  sdkKey,
  amount,
  currency,
  onPaymentStatus,
}) => {
  React.useEffect(() => {
    const processPayment = () => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        onPaymentStatus('success', 'Payment Successful');
      } else {
        onPaymentStatus('failure', 'Payment Failed');
      }
    };

    processPayment();
  }, [merchantOrderId, sdkKey, amount, currency, environment, onPaymentStatus]);

  return <div>Processing Payment...</div>;
};

export default DeemaSDK;
