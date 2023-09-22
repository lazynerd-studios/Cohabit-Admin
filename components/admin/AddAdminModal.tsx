import {
  CustomModal as Modal,
  CustomButton as Button,
  CustomSelect as Select,
  CustomDatePicker as DatePicker,
  CustomInlineInput as Input,
} from "@/lib/AntDesignComponents";
type modalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddAdminModal = ({ open, setOpen }: modalProps) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      className="rounded-[10px]"
      open={open}
      onCancel={handleCancel}
      title={
        <div className="flex flex-col">
          <h4 className="text-[#242F57] text-[24px] font-[500]">Add Admin</h4>
          <p className="text-[#636E95] text-[16px] font-[400]">
            This information can be created and edited
          </p>
        </div>
      }
    >
      <div className="flex flex-col gap-[0.5rem]">
        <span className="flex flex-col">
          <label
            htmlFor="name"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Name
          </label>
          <Input placeholder="Name" id="name" />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Email Address
          </label>
          <Input placeholder="email" type="email" id="email" />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="name"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Select Role
          </label>
          <Select placeholder="Name" id="name" />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Phone Number
          </label>
          <Input placeholder="+000 00 000" id="phone" />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="date"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Date Of Birth
          </label>
          <DatePicker placeholder="date of birth" id="date" />
        </span>
        <Button className="solid-btn mt-[0.5rem]" type="primary">
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default AddAdminModal;
