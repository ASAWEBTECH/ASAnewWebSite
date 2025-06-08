import React from 'react';

export function Legend() {
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md mb-10">
      <h3 className="text-lg font-semibold text-blue-900 mb-3">Legend</h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#0083cb] bg-opacity-10 border border-[#0083cb] rounded"></div>
          <span className="text-sm text-gray-600">Holiday</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-50 border border-red-200 rounded"></div>
          <span className="text-sm text-gray-600">Last Day of Term</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#fdaf17] bg-opacity-20 border border-[#fdaf17] rounded"></div>
          <span className="text-sm text-gray-600">Graduation Day</span>
        </div>
      </div>
    </div>
  );
}