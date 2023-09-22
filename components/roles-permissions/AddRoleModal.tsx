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
const AddRoleModal = ({ open, setOpen }: modalProps) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      className="rounded-[10px] w-full md:w-[40%]"
      open={open}
      onCancel={handleCancel}
      title={
        <h4 className="text-[#242F57] text-[24px] font-[500]">Add Role</h4>
      }
    >
      <div className="flex flex-col gap-[0.5rem]">
        <span className="flex flex-col">
          <label
            htmlFor="role-title"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            What do you want to call this role
          </label>
          <Input placeholder="Name" id="role-title" />
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

export default AddRoleModal;
