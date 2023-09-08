"use client";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    month: "Jan",
    "hot dog": 179,
    burger: 104,
  },
  {
    month: "Feb",
    "hot dog": 26,
    burger: 108,
  },
  {
    month: "Mar",
    "hot dog": 109,
    burger: 93,
  },
  {
    month: "Apr",
    "hot dog": 63,
    burger: 157,
  },
  {
    month: "May",
    "hot dog": 60,
    burger: 45,
  },
  {
    month: "Jun",
    "hot dog": 51,
    burger: 165,
  },
  {
    month: "Jul",
    "hot dog": 55,
    burger: 4,
  },
];
const BarChart = () => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger"]}
    indexBy="month"
    enableLabel={false}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.5}
    innerPadding={6}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={["#FF3E1D", "#8592A3"]}
    borderRadius={11}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) =>
      e.id + ": " + e.formattedValue + " in country: " + e.indexValue
    }
  />
);

export default BarChart;
