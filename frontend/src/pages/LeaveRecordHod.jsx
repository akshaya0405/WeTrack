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
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import Heading from "../components/Heading";
import { Button } from "../components/ui/button";
import { DatePickerDemo } from "../components/DatePicker";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { format } from "date-fns";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const LeaveRecordHod = () => {
  const [leaveRecords, setLeaveRecords] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [status, setStatus] = useState("Pending");

  const { user } = useAuthContext();

  const fetchData = async () => {
    const res = await axios.get(`leave-records/${user?.id}`);
    if (res?.data) {
      setLeaveRecords(res?.data);
    }
  };

  const statusChange = async () => {
    const res = await axios.put(`leave-records/${selectedLeave._id}`, {
      ...selectedLeave,
      status,
    });
    if (res?.data) {
      await fetchData();
      setModalOpen(false);
      setStatus("Pending");
    }
  };

  useEffect(() => {
    if (user?.id) fetchData();
  }, [user]);

  return (
    <div className="flex justify-center items-center flex-col">
      <Heading title="Leave Record" />
      <Table className="bg-white rounded-2xl w-4/5 mt-4 mx-auto shadowBig mb-6 overflow-hidden">
        <TableHeader className="bg-[#5932EA] ">
          <TableRow className="shadow-lg shadow-indigo-500/40 border-none">
            <TableHead className=" text-white text-center border-0">
              Faculty
            </TableHead>
            <TableHead className=" text-white text-center border-none">
              Date of Application
            </TableHead>
            <TableHead className=" text-white text-center border-none">
              Date of Leave
            </TableHead>
            <TableHead className=" text-white text-center border-0">
              Type
            </TableHead>
            <TableHead className=" text-white text-center border-0">
              Status
            </TableHead>
            <TableHead className="text-white text-left">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {leaveRecords?.map((leave) => (
            <TableRow
              key={leave._id}
              className="border border-b-gray-400 shadowLittle hover:bg-zinc-300/90 transition-300"
            >
              <TableCell className="text-center font-medium">
                {leave?.teacherId?.name}
              </TableCell>
              <TableCell className="text-center font-medium">
                {format(new Date(leave.createdAt), "dd-MM-yyyy")}
              </TableCell>
              <TableCell className="text-center font-medium">
                {format(new Date(leave.dateOfLeave), "dd-MM-yyyy")}
              </TableCell>
              <TableCell className="text-center font-medium">
                {leave.leaveType} Leave
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
              <TableCell>
                <div
                  onClick={() => {
                    setSelectedLeave(leave);
                    setModalOpen(true);
                  }}
                  className="bg-[#547AFF] cursor-pointer -ml-1 text-semibold text-white rounded-lg w-full h-[30px] px-2 flex items-center justify-center font-semibold"
                >
                  View
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader></DialogHeader>
          <DialogDescription className="flex flex-col gap-4 justify-center w-full items-center">
            <Button className="bg-[#5932EA] rounded-xl w-32 font-bold text-md px-2 h-8 -mt-6">
              DETAILS
            </Button>
            <div className="w-full flex gap-2  -mb-3">
              <h2 className="font-bold text-base">FACULTY:</h2>
              <h6 className="text-base font-normal text-gray-400 ">
                {selectedLeave?.teacherId?.name}
              </h6>
            </div>
            <div className="w-full flex gap-2  -mb-3">
              <h2 className="font-bold text-base">DATE OF APPLICATION:</h2>
              <h6 className="text-base font-normal text-gray-400 ">
                {format(
                  new Date(selectedLeave?.createdAt || new Date()),
                  "dd-MM-yyyy"
                )}
              </h6>
            </div>
            <div className="w-full flex gap-2  -mb-3">
              <h2 className="font-bold text-base">DATE OF LEAVE:</h2>
              <h6 className="text-base font-normal text-gray-400 ">
                {format(
                  new Date(selectedLeave?.dateOfLeave || new Date()),
                  "dd-MM-yyyy"
                )}
              </h6>
            </div>
            <div className="w-full flex gap-2  -mb-3">
              <h2 className="font-bold text-base">TYPE OF LEAVE:</h2>
              <h6 className="text-base font-normal text-gray-400 ">
                {selectedLeave?.leaveType} Leave
              </h6>
            </div>
            <div className="w-full flex gap-2  -mb-3">
              <h2 className="font-bold text-base">REASON:</h2>
              <h6 className="text-base font-normal text-gray-400 mb-6">
                {selectedLeave?.reason}
              </h6>
            </div>
            <div className="w-full flex gap-4 justify-center items-center">
              {status === "Pending" && selectedLeave?.status === "Pending" ? (
                <>
                  <button
                    onClick={() => setStatus("Approved")}
                    className="bg-[#37E534] hover:bg-[#FFBE42] w-24 -ml-1 text-semibold text-white rounded-lg  h-[30px] px-2 flex items-center justify-center font-semibold shadowBig duration-200 cursor-pointer"
                  >
                    ACCEPT
                  </button>
                  <button
                    onClick={() => setStatus("Denied")}
                    className="bg-[#FD3535] w-24 -ml-1 text-semibold text-white rounded-lg h-[30px] px-2 flex items-center justify-center font-semibold shadowBig hover:bg-[#FFBE42] duration-200 cursor-pointer"
                  >
                    REJECT
                  </button>
                </>
              ) : selectedLeave?.status === "Pending" ? (
                <>
                  <p>
                    Are you sure you want to{" "}
                    {status === "Approved" ? "Approve" : "Deny"} this request?
                  </p>
                  <button onClick={() => statusChange()}>
                    <TiTick className="h-5 w-5 text-green-500 font-extralight" />
                  </button>
                  <button onClick={() => setStatus("Pending")}>
                    <RxCross2 className="h-5 w-5 text-red-500" />
                  </button>
                </>
              ) : null}
            </div>
            {/* <div className="bg-[#547AFF] w-24 -ml-1 font-bold text-white rounded-lg h-[30px] px-2 flex items-center justify-center  shadowBig hover:bg-gray-700 duration-200 cursor-pointer">
              CONFIRM
            </div>
            <div className="bg-[#547AFF] w-24 -ml-1 font-bold text-white rounded-lg h-[30px] px-2 flex items-center justify-center  shadowBig hover:bg-gray-700 duration-200 cursor-pointer">
              Cancel
            </div> */}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeaveRecordHod;
