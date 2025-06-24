export const getHealthBadgeColor = (grade) => {
  switch (grade) {
    case "A":
      return "bg-green-100 text-green-800 border-green-200";
    case "B":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "C":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-400 border-gray-200";
  }
};
