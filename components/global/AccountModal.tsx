import {
  CustomModal as Modal,
  CustomTextArea as TextArea,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";

type modalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccountModal = ({ open, setOpen }: modalProps) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      title={
        <div>
          <h6 className="text-[#242F57] text-[24px] font-[500]">
            Customer Deactivation
          </h6>
          <p className="text-[#636E95] text-[16px] font-[400]">
            Deactivating this account will disable user from using it
          </p>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-[1rem]">
        <div className="flex flex-col gap-[0.1rem]">
          <p className="text-[#25324B] text-[16px] font-[400]">Give reason</p>
          <TextArea />
        </div>
        <Button className="w-full" type="primary" danger>
          Deactivate Customer
        </Button>
      </div>
    </Modal>
  );
};

export default AccountModal;
