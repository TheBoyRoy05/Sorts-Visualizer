export type statusType =
  | "unsorted"
  | "targeted"
  | "selected"
  | "sorting"
  | "sorted";

export type partitionType = "Lomuto" | "Hoare";

export type normalSortType =
  | "selection"
  | "bubble"
  | "insertion"
  | "heap"
  | "quick"
  | "merge";

export type goofySortType = "bozo";

export type sortType = normalSortType | goofySortType;

export type optionType = {
  text: string;
  handleClick?: () => void;
};

export interface BarProps {
  width: number;
  height: number;
  status: statusType;
}

export interface StatsProps {
  comparisons: number;
  swaps: number;
}

export interface DropdownProps {
  text: string;
  options: optionType[];
}

export interface StatusProps {
  targets?: number[] | number;
  selected?: number[] | number;
  sorting?: number[] | number;
  sorted?: number[] | number;
}

export interface SortContextType {
  arraySize: number;
  setArraySize: (size: number) => void;
  barsOnTop: boolean;
  setBarsOnTop: (top: boolean) => void;
  sortSpeed: number;
  setSortSpeed: (speed: number) => void;
  sort: sortType;
  setSort: (sort: sortType) => void;

  ascending: boolean;
  setAscending: (asc: boolean) => void;
  multiThread: boolean;
  setMultiThread: (multi: boolean) => void;
  partition: partitionType;
  setPartition: (part: partitionType) => void;
  degree: number;
  setDegree: (deg: number) => void;
  checkAnim: boolean;
  setCheckAnim: (check: boolean) => void;
  bars: BarProps[];
  setBars: (bars: BarProps[]) => void;
  stats: StatsProps;
  setStats: (stats: StatsProps) => void;
  heights: number[];
  interval: number;

  swap: (array: number[], i1: number, i2: number) => number[];
  shift: (array: number[], to: number, from: number) => number[];
  checkSorted: (heights: number[], runAnim?: boolean) => Promise<boolean>;
  visualize: (heights: number[], status: StatusProps) => Promise<void>;
  finalize: (heights: number[]) => Promise<void>;

  elapsedTime: number;
  startTimer: () => void;
  stopTimer: () => void;
}
