import type { ComponentProps } from "react";
import DatePicker from "../components/date-picker";
import Text from "../components/text";

type Props = {
  filteredDate: Date;
  onChangeFilteredDate: ComponentProps<"input">["onChange"];
};

export default function ScheduleHeader({
  filteredDate,
  onChangeFilteredDate,
}: Props) {
  return (
    <header className="flex justify-between gap-6">
      <div className="flex flex-col gap-1">
        <Text as="h2" variant={"title-lg"} className="text-gray-100">
          Sua agenda
        </Text>
        <Text variant={"text-sm"} className="text-gray-300">
          Consulte os seus cortes de cabelo agendados por dia
        </Text>
      </div>

      <DatePicker
        value={filteredDate.toISOString().split("T")[0]}
        onChange={onChangeFilteredDate}
      />
    </header>
  );
}
