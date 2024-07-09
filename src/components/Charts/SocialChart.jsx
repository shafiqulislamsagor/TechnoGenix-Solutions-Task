"use client"

import { Label, Pie, PieChart } from "recharts"
import { PiGraduationCapBold } from 'react-icons/pi';

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "Facebook", visitors: 33, fill: "#a727d1" },
  { browser: "Youtube", visitors: 55, fill:  "#ff3838"},
  { browser: "Direct Search", visitors: 12, fill: "#30adc9" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  facebook: {
    label: "Facebook",
    color: "#a727d1",
  },
  youtube: {
    label: "Youtube",
    color: "#ff3838",
  },
  search: {
    label: "Direct Search",
    color: "#30adc9",
  }
} 

export function Social() {
  

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-[#e0dcdc] text-3xl font-bold"
                        >
                          Social
                        </tspan>
                        
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
