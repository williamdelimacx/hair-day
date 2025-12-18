import { useState, type ChangeEvent } from "react";
import useAppointments from "../hooks/use-appointments";
import PeriodItem from "./period-item";
import PeriodList from "./period-list";
import ScheduleHeader from "./schedule-header";
import dayjs from "dayjs";
import Text from "../components/text";

export default function Schedule() {
  const [filteredDate, setFilteredDate] = useState<Date>(
    dayjs().startOf("day").toDate()
  );
  const { morningAppointments, afternoonAppointments, nightAppointments } =
    useAppointments({ filters: { date: filteredDate } });

  function handleFilteredDateChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) return;

    const date = dayjs(event.target.value).startOf("day").toDate();
    setFilteredDate(date);
  }

  return (
    <div className="w-full py-20">
      <div className="mx-auto flex flex-col gap-8 max-w-170.5">
        <ScheduleHeader
          filteredDate={filteredDate}
          onChangeFilteredDate={handleFilteredDateChange}
        />

        <div className="space-y-3">
          <PeriodList period="morning">
            {morningAppointments.length > 0 ? (
              morningAppointments.map((appointment) => (
                <PeriodItem
                  key={appointment.id}
                  id={appointment.id}
                  time={appointment.time}
                  client={appointment.client}
                />
              ))
            ) : (
              <Text variant="text-sm" className="text-gray-300">
                Nenhum agendamento para este período
              </Text>
            )}
          </PeriodList>

          <PeriodList period="afternoon">
            {afternoonAppointments.length > 0 ? (
              afternoonAppointments.map((appointment) => (
                <PeriodItem
                  key={appointment.id}
                  id={appointment.id}
                  time={appointment.time}
                  client={appointment.client}
                />
              ))
            ) : (
              <Text variant="text-sm" className="text-gray-300">
                Nenhum agendamento para este período
              </Text>
            )}
          </PeriodList>

          <PeriodList period="night">
            {nightAppointments.length > 0 ? (
              nightAppointments.map((appointment) => (
                <PeriodItem
                  key={appointment.id}
                  id={appointment.id}
                  time={appointment.time}
                  client={appointment.client}
                />
              ))
            ) : (
              <Text variant="text-sm" className="text-gray-300">
                Nenhum agendamento para este período
              </Text>
            )}
          </PeriodList>
        </div>
      </div>
    </div>
  );
}
