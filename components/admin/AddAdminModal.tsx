import {
  CustomModal as Modal,
  CustomButton as Button,
  CustomSelect as Select,
  CustomDatePicker as DatePicker,
  CustomInlineInput as Input,
} from "@/lib/AntDesignComponents";
import { useCreateAdminMutation, useGetRolesQuery } from "@/redux/api/adminApi";
import { message } from "antd";
import { useEffect, useState } from "react";
type modalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddAdminModal = ({ open, setOpen }: modalProps) => {

  const handleCancel = () => {
    setOpen(false);
  };

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [role, setRole] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");

  const handleRoleChange = (value: string) => {
    setRole(value)
  }

  const [createAdmin, { isLoading, isSuccess, isError, error }] = useCreateAdminMutation()
  const { data: roleData, isSuccess: roleSuccess, isError: roleIsError, error: roleError } = useGetRolesQuery({})
  const [roleSet, setRoleSet] = useState<Record<string, any>[]>([])
  const onHandleAddAdmnin = async () => {
    const payload = {
      firstname: firstName,
      lastname: lastName,
      email,
      role,
      phone,
      dob: dateOfBirth
    }

    if (!firstName || !lastName || !email || !role || !phone || !dateOfBirth) {
      message.error("Please fill in all fields")
      return
    }

    if (!email.includes("@")) {
      message.error("Please enter a valid email")
      return
    }
    if (firstName && lastName && email && role && phone && dateOfBirth) {
      await createAdmin(payload)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      message.success("Admin created successfully")
      setOpen(false)
    }
    if (roleSuccess) {
      setRoleSet(roleData?.data ?? [])
    }


    if (isError) {
      const errMesg = error as any
      message.error(errMesg?.data?.message)
    }
  }, [error, isError, isSuccess, roleIsError, roleSuccess, roleData, setOpen])

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
            htmlFor="firstname"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            FirstName
          </label>
          <Input placeholder="First Name" id="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="lastname"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            LastName
          </label>
          <Input placeholder="Last Name" id="lastname" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Email Address
          </label>
          <input type="email" name="" className="border-[1px] outline-none border-[#d8d8d8] rounded-md p-[5px]" onChange={(e) => setEmail(e.target.value)} value={email} required />


        </span>
        <span className="flex flex-col">
          <label
            htmlFor="role"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Select Role
          </label>
          <Select placeholder="Select role" id="name" onChange={handleRoleChange} value={role} options={roleSet?.map((role) => ({ value: role?.name, label: role?.name }))} />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Phone Number
          </label>

          <input type="number" maxLength={11} className="border-[1px] outline-none border-[#d8d8d8] rounded-md p-[5px]" onChange={(e: any) => setPhone(e.target.value)} value={phone} />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="date"
            className="text-[#25324B] text-[14px] font-[400]"
          >
            Date Of Birth
          </label>
          <input type="date" className="border-[1px] border-[#d8d8d8] rounded-md p-[5px] outline-none" onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} />

        </span>
        <Button loading={isLoading} disabled={isLoading} className="solid-btn mt-[0.5rem]" type="primary" onClick={onHandleAddAdmnin}>
          Create Admin
        </Button>
      </div>
    </Modal>
  );
};

export default AddAdminModal;
