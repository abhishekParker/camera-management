import { MapPin, BarChart, Rss, ChevronDown } from "lucide-react";
import React from "react";

const Filters = (props) => {
  const { filter, setFilter } = props;

  const handleUpdate = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex gap-4 my-4">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        <select
          className="appearance-none pl-10 pr-6 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="location"
          value={filter.location}
          onChange={handleUpdate}
        >
          <option value="">Location</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="bangalore">Bangalore</option>
        </select>
        <ChevronDown className="absolute right-1 top-1/2 transform -translate-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
      </div>

      <div className="relative">
        <Rss className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        <select
          className="appearance-none pl-10 pr-6 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="status"
          value={filter.status}
          onChange={handleUpdate}
        >
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="paused">Inactive</option>
        </select>
        <ChevronDown className="absolute right-1 top-1/2 transform -translate-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
      </div>
    </div>
  );
};

export default React.memo(Filters);
