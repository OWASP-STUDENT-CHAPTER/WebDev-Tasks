import { useState, useEffect } from "react";
const CurrentTask = () => {
  const [currTask, setCurrTask] = useState(
    "Create a Navbar which is not too flashy. Subtle design with navigation implemented."
  );
  return (
    <div className="p-8 rounded-lg bg-gradient-to-r bg-[#CAC9C9] from-[#E6EA3D33] to-[#EA20EE27] mb-8">
      <h1 className="text-3xl font-semibold mb-6">Current Task:</h1>
      <p className="mb-2">{currTask}</p>
    </div>
  );
};

export default CurrentTask;
