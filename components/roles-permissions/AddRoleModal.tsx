import {
  CustomModal as Modal,
  CustomButton as Button,
  CustomSelect as Select,
  CustomDatePicker as DatePicker,
  CustomInlineInput as Input,
  CustomTextArea,
} from "@/lib/AntDesignComponents";
import { useCreateRoleMutation } from "@/redux/api/adminApi";
import { message } from "antd";

import { useEffect, useState } from "react";
type modalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddRoleModal = ({ open, setOpen }: modalProps) => {
  const handleCancel = () => {
    setOpen(false);
  };

  const [roleName, setRoleName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const [createRole, { isLoading, isSuccess, isError, error }] = useCreateRoleMutation()

  const onHandleAddRole = async () => {
    if (!roleName || !desc) {
      message.error("Please fill in all fields")
      return
    }

    if (roleName && desc) {
      await createRole({ name: roleName, description: desc })
    }
  }

  useEffect(() => {
    if (isSuccess) {
      message.success("Role created successfully")
      setOpen(false)
    }
    if (isError) {
      console.log(error)
    }
  }, [error, isError, isSuccess])
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
          <Input placeholder="Name" id="role-title" value={roleName} onChange={(e) => setRoleName(e.target.value)} />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Descripton of role
          </label>
          <CustomTextArea placeholder="description" id="description" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </span>


        <Button className="solid-btn mt-[0.5rem]" type="primary" loading={isLoading} onClick={onHandleAddRole}  >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default AddRoleModal;
