import DatePicker from "../components/date-picker";
import Text from "../components/text";
import TextInput from "../components/text-input";
import TimeSelect from "../components/time-select";
import UserSquare from "../assets/icons/UserSquare.svg?react";
import Button from "../components/button";
import { useState } from "react";
import useAppointment from "../hooks/use-appointment";
import dayjs from "dayjs";
import useAppointments from "../hooks/use-appointments";

const morningTimeSlots = ["09:00", "10:00", "11:00", "12:00"];
const afternoonTimeSlots = [
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];
const nightTimeSlots = ["19:00", "20:00", "21:00"];

export default function Sidebar() {
  const [client, setClient] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { createAppointment } = useAppointment();
  const { usedTimeSlots } = useAppointments({
    filters: { date: date ? dayjs(date).toDate() : new Date() },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const datetime = dayjs(`${date} ${time}`).toISOString();

    createAppointment({ client, datetime });

    setClient("");
    setTime("");
    setDate("");
  }

  return (
    <aside className="p-20 bg-gray-700 rounded-xl max-w-124.5 w-full flex flex-col gap-6">
      <div className="space-y-1 w-full">
        <Text as="h2" variant="title-lg" className="text-gray-100">
          Agende um atendimento
        </Text>

        <Text variant="text-sm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 w-full">
          <Text variant="title-md" className="text-gray-200">
            Data
          </Text>

          <DatePicker value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <div className="flex flex-col gap-2">
          <Text variant="title-md" className="text-gray-200">
            Horários
          </Text>

          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Text variant="text-md" className="text-gray-200">
                Manhã
              </Text>

              <div className="flex flex-wrap items-center gap-2">
                {morningTimeSlots.map((morningTime) => (
                  <TimeSelect
                    name="time"
                    value={morningTime}
                    onChange={(e) => setTime(e.target.value)}
                    key={morningTime}
                    selected={time === morningTime}
                    disabled={usedTimeSlots.includes(morningTime) || !date}
                  >
                    {morningTime}
                  </TimeSelect>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Text variant="text-md" className="text-gray-200">
                Tarde
              </Text>

              <div className="flex flex-wrap items-center gap-2">
                {afternoonTimeSlots.map((afternoonTime) => (
                  <TimeSelect
                    name="time"
                    value={afternoonTime}
                    onChange={(e) => setTime(e.target.value)}
                    key={afternoonTime}
                    selected={time === afternoonTime}
                    disabled={usedTimeSlots.includes(afternoonTime) || !date}
                  >
                    {afternoonTime}
                  </TimeSelect>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Text variant="text-md" className="text-gray-200">
                Noite
              </Text>

              <div className="flex flex-wrap items-center gap-2">
                {nightTimeSlots.map((nightTime) => (
                  <TimeSelect
                    name="time"
                    value={nightTime}
                    onChange={(e) => setTime(e.target.value)}
                    key={nightTime}
                    selected={time === nightTime}
                    disabled={usedTimeSlots.includes(nightTime) || !date}
                  >
                    {nightTime}
                  </TimeSelect>
                ))}
              </div>
            </div>
          </div>
        </div>

        <label className="flex flex-col gap-2 w-full">
          <Text variant="title-md" className="text-gray-200">
            Cliente
          </Text>

          <TextInput
            name="client"
            icon={UserSquare}
            placeholder="Helena Souza"
            onChange={(e) => setClient(e.target.value)}
            value={client}
          />
        </label>

        <Button type="submit" disabled={!date || !time || !client}>
          Agendar
        </Button>
      </form>
    </aside>
  );
}
