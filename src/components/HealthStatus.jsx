import { Cloud, HardDrive, Wifi } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HealthIndicator = ({ icon, value }) => {
  let color, letter;
  if (value >= 90) {
    color = "#029262";
    letter = "A";
  } else if (value >= 50) {
    color = "#FF7E17";
    letter = "B";
  } else if (value > 0) {
    color = "#EF4444";
    letter = "C";
  } else {
    color = "#E5E7EB";
    letter = "-";
  }

  return (
    <div className="flex items-center gap-2 min-w-[40px]">
      <div className="w-4 h-4 shrink-0">{icon}</div>
      <div className="w-6 h-6 min-w-[24px] min-h-[24px]">
        <CircularProgressbar
          value={value > 0 ? value : 100}
          text={letter}
          className="font-semibold"
          styles={buildStyles({
            textColor: "#000",
            pathColor: value > 0 ? color : "#E5E7EB",
            trailColor: "#E5E7EB",
            textSize: 40,
            pathTransitionDuration: 0.5,
          })}
        />
      </div>
    </div>
  );
};
const HealthStatus = ({ health }) => {
  return (
    <div className="flex items-center gap-4">
      <HealthIndicator
        icon={<img src="/cloud.svg" className="w-4 h-4 text-gray-400" />}
        value={health.cloud || 0}
      />
      <HealthIndicator
        icon={<img src="/storage.svg" className="w-4 h-4 text-gray-400" />}
        value={health.disk || 0}
      />
    </div>
  );
};

export default HealthStatus;
