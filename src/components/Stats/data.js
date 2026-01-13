import {
  ArrowUpNarrowWide,
  ChartColumnIncreasing,
  CircleDollarSign,
  DollarSign,
} from "lucide-react";

export const statsData = [
  {
    id: 1,
    amount: 3450,
    label: "Number of Sales",
    change: 15,
    icon: ArrowUpNarrowWide,
    iconBg: "bg-yellow-400",
    type: "icon",
  },
  {
    id: 2,
    prefix: "$", 
    amount: 35.123,
    label: "Sales Revenue",
    change: -8,
    icon: ChartColumnIncreasing,
    iconBg: "bg-blue-400",
    type: "icon",
  },
  {
    id: 3,
    prefix: "$", 
    amount: 35.256,
    label: "Average Price",
    change: 5,
    icon: CircleDollarSign,
    iconBg: "bg-green-400",
    type: "icon",
  },
  {
    id: 4,
    amount: 15.893,
    label: "Operations",
    change: 65,
    type: "bar",
  },
];
