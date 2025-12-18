import PeriodItem from "./period-item";
import PeriodList from "./period-list";
import ScheduleHeader from "./schedule-header";

const morningAppointments = [
  { time: "09:00", client: "Alice", id: "1" },
  { time: "10:00", client: "Bob", id: "2" },
];

const afternoonAppointments = [
  { time: "13:00", client: "Charlie", id: "3" },
  { time: "14:00", client: "Diana", id: "4" },
];

const nightAppointments = [
  { time: "19:00", client: "Eve", id: "5" },
  { time: "20:00", client: "Frank", id: "6" },
];

export default function Schedule() {
  function handleDelete(id: string) {
    console.log("Delete appointment with id:", id);
  }

  return (
    <div className="w-full py-20">
      <div className="mx-auto flex flex-col gap-8 max-w-170.5">
        <ScheduleHeader />

        <div className="space-y-3">
          <PeriodList period="morning">
            {morningAppointments.map((appointment) => (
              <PeriodItem
                key={appointment.id}
                id={appointment.id}
                time={appointment.time}
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
                time={appointment.time}
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
                time={appointment.time}
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
