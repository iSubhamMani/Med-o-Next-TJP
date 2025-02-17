import React from "react";

const PrescriptionShimmer = () => {
  return (
    <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20">
      <div className="relative z-50">
        <div className="p-4">
          <div className="flex items-start gap-4">
            <div className="animate-pulse w-24 h-20 bg-gray-500 rounded-sm overflow-hidden"></div>
            <div className="w-full space-y-4">
              <div className="animate-pulse h-4 bg-gray-500 rounded-md w-full"></div>
              <div className="animate-pulse h-3 bg-gray-500 rounded-md w-full md:w-2/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionShimmer;
