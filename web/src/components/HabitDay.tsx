import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";

import { ProgressBar } from "./ProgressBar";
import { HabitList } from "./HabitList";

import dayjs from "dayjs";

interface HabitDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export function HabitDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted)

  const comlpetedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");

  function handleCompletedChanged(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg transition-colors focus: outline-none focus:ring-2 focus:ring-violet-800 focus:ring-offset-2 focus:ring-offset-background",
          {
            "bg-zinc-900 border-zinc-800": comlpetedPercentage === 0,
            "bg-violet-400 border-violet-500":
              comlpetedPercentage > 0 && comlpetedPercentage < 20,
            "bg-violet-500 border-violet-600":
              comlpetedPercentage >= 20 && comlpetedPercentage < 40,
            "bg-violet-600 border-violet-700":
              comlpetedPercentage >= 40 && comlpetedPercentage < 60,
            "bg-violet-700 border-violet-800":
              comlpetedPercentage >= 60 && comlpetedPercentage < 80,
            "bg-violet-800 border-violet-900": comlpetedPercentage >= 80,
          }
        )}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>
          <ProgressBar progress={comlpetedPercentage} />
          <HabitList date={date} onCompletedChanged={handleCompletedChanged}/>
          <Popover.Arrow className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
