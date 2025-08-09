// PayNow.ts
const payNow = async ({
  amount,
  description,
  onSuccess,
}: {
  amount: number;
  description: string;
  onSuccess: (paymentId: string) => void;
}) => {
  // Fake payment logic - replace with real integration
  const paymentId = "PAY123456789";
  // Simulate a successful payment after 1s
  setTimeout(() => {
    onSuccess(paymentId);
  }, 1000);
};

export default payNow;
