import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointments";
import React from "react";
import dayjs from "dayjs";

type Props = {
  filters: {
    date?: Date;
  };
};

export default function useAppointments({ filters }: Props = { filters: {} }) {
  const [appointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, []);

  const [morningAppointments, afternoonAppointments, nightAppointments] =
    React.useMemo(() => {
      return appointments.reduce<[Appointment[], Appointment[], Appointment[]]>(
        (acc, appointment) => {
          const date = dayjs(appointment.datetime);
          const isSameDay = date.isSame(filters.date, "day");

          if (filters.date && !isSameDay) {
            return acc;
          }

          const hour = appointment.datetime.getHours();

          if (hour >= 6 && hour <= 12) {
            acc[0].push(appointment);
          } else if (hour >= 13 && hour <= 18) {
            acc[1].push(appointment);
          } else {
            acc[2].push(appointment);
          }

          return acc;
        },
        [[], [], []]
      );
    }, [appointments, filters.date]);

  return {
    appointments: [
      morningAppointments,
      afternoonAppointments,
      nightAppointments,
    ].flat(),
    morningAppointments,
    afternoonAppointments,
    nightAppointments,
  };
}
