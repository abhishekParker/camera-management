import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Table from "../common/Table";
import Pagination from "../common/Pagination";

// 1. First, create a parent component that manages both data and pagination
const DataTableWithPagination = ({ allData = [], columns, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Calculate paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = allData.slice(startIndex, endIndex);

  console.log("currentData", allData);

  return (
    <div>
      <Table data={currentData} columns={columns} onDelete={onDelete} />
      <Pagination
        totalItems={allData.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
};

export default DataTableWithPagination;
