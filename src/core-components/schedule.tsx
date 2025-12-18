import { useState, type ChangeEvent } from "react";
import PeriodItem from "./period-item";
import PeriodList from "./period-list";
import ScheduleHeader from "./schedule-header";
import dayjs from "dayjs";
import useAppointments from "../hooks/use-appointments";

export default function Schedule() {
  const [filteredDate, setFilteredDate] = useState<Date>(new Date());
  const { morningAppointments, afternoonAppointments, nightAppointments } =
    useAppointments({ filters: { date: filteredDate } });

  function handleDelete(id: string) {
    console.log("Delete appointment with id:", id);
  }

  function handleFilteredDateChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) return;

    const date = new Date(event.target.value);
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
            {morningAppointments.map((appointment) => (
              <PeriodItem
                key={appointment.id}
                id={appointment.id}
                time={dayjs(appointment.datetime).format("hh:mm")}
                client={appointment.client}
                onDelete={handleDelete}
              />
            ))}
          </PeriodList>

          <PeriodList period="afternoon">
            {afternoonAppointments.map((appointment) => (
              <PeriodItem
                key={appointment.id}
                id={appointment.id}
                time={dayjs(appointment.datetime).format("hh:mm")}
                client={appointment.client}
                onDelete={handleDelete}
              />
            ))}
          </PeriodList>

          <PeriodList period="night">
            {nightAppointments.map((appointment) => (
              <PeriodItem
                key={appointment.id}
                id={appointment.id}
                time={dayjs(appointment.datetime).format("hh:mm")}
                client={appointment.client}
                onDelete={handleDelete}
              />
            ))}
          </PeriodList>
        </div>
      </div>
    </div>
  );
}
