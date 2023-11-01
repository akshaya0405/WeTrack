import React from "react";

const tasks = [
  {
    title: "ISE 1- SE Comps A",
  },
  {
    title: "Quiz- FE CSE A",
  },
  {
    title: "Lab Eval- TE Comps",
  },
];

const Tasks = () => {
  return (
    <div>
      <h6 className="text-sm font-bold flex justify-center ml-20 text-[#547AFF] -mb-2 mt-4">
        TODAY
      </h6>
      <div className="flex-col ml-20 ">
        {tasks.map((task) => (
          <div className="bg-[#5932EA] m-4 w-48 rounded-xl py-2 px-4  text-white font-medium text-sm bottomShadow">
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tasks;