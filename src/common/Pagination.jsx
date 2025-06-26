import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Pagination = ({
  totalItems = 1,
  currentPage = 1,
  itemsPerPage = 10,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const handleItemsPerPage = (value) => {
    onItemsPerPageChange(value);
    handlePageChange(1); // Reset to first page
    setShowDropdown(false);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        if (i > 1 && i < totalPages) pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-end gap-4 border border-gray-200 border-t-0 rounded-b-lg px-4 py-4">
      <div className="relative">
        <button
          className="flex items-center gap-1"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>{itemsPerPage}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        {showDropdown && (
          <div className="absolute bottom-full mb-2 bg-white border rounded shadow">
            {[10, 20, 50].map((option) => (
              <div
                key={option}
                className="px-3 py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => handleItemsPerPage(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <span>
        {startItem}-{endItem} of {totalItems}
      </span>

      <div className="flex items-center gap-1">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5 cursor-pointer" />
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === "..."}
            className={`w-8 h-8 rounded flex items-center justify-center text-sm ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1 disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
