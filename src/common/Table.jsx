import { useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import HealthStatus from "../components/HealthStatus";

const Table = ({ data = [], columns, onDelete }) => {
  const [deleteId, setDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(deleteId);
    setShowConfirm(false);
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setDeleteId(null);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-t-lg overflow-hidden">
      {showConfirm && (
        <div className="fixed inset-0 bg-blue-300 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-4">Confirm Delete</h3>
            <p className="mb-6">Are you sure you want to delete this camera?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

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
          {data.map((camera) => (
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
                        <img src="/warning.svg" width={15.33} height={15.33} />
                      )}
                    </div>
                    <div className="text-sm text-gray-500">{camera.email}</div>
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
                {/* <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  <SquarePen size={18} />
                </button> */}
                <button
                  className="text-red-400 hover:text-red-700 cursor-pointer ml-3"
                  onClick={() => handleDeleteClick(camera.id)}
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
