import { FC } from "react";
import { BarProps } from "../Utils/Props";
import { useSortContext } from "../Utils/SortContext";
import "../Styles/display.css"

const Bar: FC<BarProps> = ({ width, height, status }) => {
  const { barsOnTop } = useSortContext();
  const style = {
    height: `${height}px`,
    width: `${width}px`,
  };
  const barPos = barsOnTop ? " top" : " bottom"
  return (
    <div className={"bar bar-" + status + barPos} style={style}>
      <p className="text-white">{width >= 100 && height}</p>
    </div>
  );
};

const Display: FC = () => {
  const { bars } = useSortContext();
  return (
    <div className="display flex-1">
      {bars.map((bar, index) => (
        <Bar key={index} {...bar} />
      ))}
    </div>
  );
};

export default Display;
