import { getHealthBadgeColor } from "../utils/helper";

const HealthBadge = ({ grade, type }) => {
  if (!grade) return null;

  const icons = {
    cloud: "☁",
    disk: "💾",
    network: "📶",
  };

  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium border ${getHealthBadgeColor(
        grade
      )}`}
    >
      <span className="mr-1 text-xs">{icons[type]}</span>
      {grade}
    </span>
  );
};

export default HealthBadge;
