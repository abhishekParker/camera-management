import React, { useEffect, useMemo, useState } from "react";
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

import { columns } from "../utils/columnData";
import Filters from "./Filters";
import { useFetchCamera } from "../hooks/useFetchCamera";
import DataTableWithPagination from "./DataTableWithPagination";

const CameraManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data } = useFetchCamera();
  const [cameras, setCameras] = useState([]);

  const [filter, setFilter] = useState({ location: "", status: "" });

  const filteredData = useMemo(() => {
    return cameras.filter((camera) => {
      if (!filter.location && !filter.status) return true;
      return (
        camera.location.toLowerCase().includes(filter.location.toLowerCase()) &&
        camera.status.toLowerCase() === filter.status.toLowerCase()
      );
    });
  }, [cameras, filter.location, filter.status]);

  useEffect(() => {
    setCameras(data);
  }, []);

  const handleDeleteCamera = (id) => {
    const updatedCameras = cameras.filter((camera) => camera.id !== id);
    setCameras(updatedCameras);
  };

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

      <DataTableWithPagination
        allData={filteredData || []}
        columns={columns}
        onDelete={handleDeleteCamera}
      />
    </main>
  );
};

export default CameraManagement;
