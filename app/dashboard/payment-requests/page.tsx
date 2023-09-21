import Registry from "../registry";
import PaymentRequests from "@/components/payment-requests/PaymentRequests";

const page = () => {
  return (
    <Registry>
      <PaymentRequests />
    </Registry>
  );
};

export default page;
