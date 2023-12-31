import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import Heading from "../components/Heading";
import { Button } from "../components/ui/button";
import { DatePickerDemo } from "../components/DatePicker";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { format } from "date-fns";

import DropdownComponent from "../components/Dropdown";

const LeaveRecord = () => {
  const { user } = useAuthContext();
  // console.log(user);
  const [formData, setFormData] = useState({
    teacherId: user?.id,
    dateOfLeave: new Date(),
    leaveType: "",
    reason: "",
  });
  const [leaveRecords, setLeaveRecords] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = async () => {
    const res = await axios.get(`leave-records/${user?.id}`);
    if (res?.data) {
      setLeaveRecords(res?.data);
    }
  };
  const submitLeaveRecord = async () => {
    const res = await axios.post("leave-records", formData);
    if (res?.data) {
      await fetchData();
      setModalOpen(false);
      setFormData({
        teacherId: user?.id,
        dateOfLeave: new Date(),
        leaveType: "",
        reason: "",
      });
    }
  };

  useEffect(() => {
    if (user?.id) fetchData();
  }, [user]);

  return (
    <div className="flex justify-center items-center flex-col">
      <Heading title="Leave Record" />
      <Table className="bg-white rounded-2xl overflow-hidden w-4/5 mt-4 mx-auto shadowBig mb-6">
        <TableHeader className="bg-[#5932EA] ">
          <TableRow className="shadow-lg shadow-indigo-500/40 border-none">
            <TableHead className=" text-white text-center border-0">
              Date of Application
            </TableHead>
            <TableHead className=" text-white text-center border-none">
              Date of Leave
            </TableHead>
            <TableHead className=" text-white text-center border-none">
              Reason
            </TableHead>
            <TableHead className=" text-white text-center border-none">
              Type
            </TableHead>
            <TableHead className=" text-white text-center border-0">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaveRecords?.map((leave) => (
            <TableRow
              key={leave._id}
              className="border border-b-gray-400 shadowLittle hover:bg-zinc-300/90 transition-300"
            >
              <TableCell className="text-center font-medium">
                {format(new Date(leave.createdAt), "dd-MM-yyyy")}
              </TableCell>
              <TableCell className="text-center font-medium">
                {format(new Date(leave.dateOfLeave), "dd-MM-yyyy")}
              </TableCell>
              <TableCell className="text-center font-medium">
                {leave.reason}
              </TableCell>
              <TableCell className="text-center font-medium">
                {leave.leaveType}
              </TableCell>
              <TableCell className="flex justify-center ">
                <div
                  className={
                    leave.status === "Approved"
                      ? "bg-green-500 px-4 text-semibold text-white rounded-lg w-2/3 h-[30px] flex items-center justify-center font-semibold"
                      : leave.status === "Denied"
                      ? "bg-red-500 px-4 text-semibold text-white rounded-lg w-2/3 h-[30px] flex items-center justify-center font-semibold"
                      : "bg-yellow-400 px-4 text-semibold text-white rounded-lg w-2/3 h-[30px] flex items-center justify-center font-semibold"
                  }
                >
                  {leave.status}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger>
          {" "}
          <Button className="bg-[#5932EA] hover:bg-zinc-400 hover:text-black rounded-xl font-bold shadowBig">
            Apply for Leave
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center">
              {" "}
              <Button className="bg-[#5932EA] rounded-xl font-bold text-lg p-2 px-4 mb-8">
                APPLICATION FORM
              </Button>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="flex flex-col gap-4 justify-center w-full items-center">
            <div className="flex justify-between m-2 gap-8 mr-8">
              <Button className="  bg-white text-gray-500 rounded-lg font-bold  text-md p-2 px-5 h-9">
                DATE OF LEAVE:
              </Button>
              <DatePickerDemo
                date={formData?.dateOfLeave}
                setFormData={setFormData}
              />
            </div>
            <div className="flex justify-between m-4 mr-8">
              <Button className="bg-white text-gray-500 rounded-lg  text-md font-bold px-16 h-9">
                REASON:
              </Button>
              <input
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, reason: e.target.value }))
                }
                type="text"
                className="bg-white border border-slate-200 rounded-md h-9 mr-3 p-2 w-64"
                placeholder="Type Here"
              />
            </div>
            <div className="p-3 flex gap-16 justify-around items-center">
              <div>
                <label
                  htmlFor="leaveType"
                  className="text-[16px]  text-gray-500 font-bold w-24 h-2 mr-8"
                >
                  Select Leave Type:
                </label>
              </div>
              <div>
                <select
                  id="leaveType"
                  value={formData?.leaveType || "Leave Type"}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      leaveType: e.target.value,
                    }))
                  }
                  className="  p-1 border h-8 mr-16  border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Leave Type" disabled hidden>
                    Leave Type
                  </option>
                  <option value="Sick">Sick Leave</option>
                  <option value="Casual">Casual Leave</option>
                  <option value="Other">Other Leave</option>
                </select>
              </div>
            </div>
            <Button
              onClick={() => submitLeaveRecord()}
              className="bg-[#5932EA] rounded-xl font-bold text-md h-8 w-1/5 hover:bg-gray-300 hover:text-gray-600 duration-300 "
            >
              SUBMIT
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeaveRecord;
