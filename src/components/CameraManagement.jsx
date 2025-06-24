import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  EyeIcon,
  SquarePen,
  Trash2,
} from "lucide-react";

import HealthBadge from "./HealthBadge";
import { columns } from "../utils/columnData";
import Filters from "./Filters";
import { useFetchCamera } from "../hooks/useFetchCamera";
import HealthStatus from "./HealthStatus";

const CameraManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data } = useFetchCamera();

  const [filter, setFilter] = useState({ location: "", status: "" });

  return (
    <main className="p-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Cameras</h1>
          <p className="text-gray-600">Manage your cameras here.</p>
        </div>
        <div className="flex-1 max-w-sm ml-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-3 rounded-md bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-6"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Filters filter={filter} setFilter={setFilter} />

      <div className="bg-white border border-gray-200 rounded-t-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((camera, index) => (
              <tr key={camera.id} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-baseline gap-2">
                    <div
                      className={`w-[10px] h-[10px] rounded-full ${
                        camera.status === "Active"
                          ? "bg-[#029262]"
                          : "bg-[#DC3545]"
                      }`}
                    ></div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-gray-900">
                          {camera.name}
                        </span>
                        {camera.hasWarning && (
                          <img
                            src="/warning.svg"
                            width={15.33}
                            height={15.33}
                          />
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        {camera.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <HealthStatus health={camera.health} />
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">
                  {camera.location}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">
                  {camera.recorder}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">
                  {camera.tasks}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-sm ${
                      camera.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {camera.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                    <SquarePen size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-700 cursor-pointer ml-3">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end gap-4 border border-gray-200 border-t-0 rounded-b-lg px-4 py-4">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">10</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <div>
          <span className="text-sm text-gray-700">1-10 of 350</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <ChevronsLeft className="w-6 h-7" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <ChevronLeft className="w-6 h-7" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <ChevronRight className="w-6 h-7" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <ChevronsRight className="w-6 h-7" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CameraManagement;
