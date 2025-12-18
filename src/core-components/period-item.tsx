import Trash from "../assets/icons/Trash.svg?react";
import Text from "../components/text";
import ButtonIcon from "../components/button-icon";
import useAppointment from "../hooks/use-appointment";

type Props = {
  id: string;
  time: string;
  client: string;
};

export default function PeriodItem({ id, time, client }: Props) {
  const { deleteAppointment } = useAppointment();

  function handleDelete(id: string) {
    deleteAppointment(id);
  }

  return (
    <li className="flex items-center gap-5 py-1">
      <Text variant="title-md">{time}</Text>
      <Text variant="text-md" className="w-full">
        {client}
      </Text>
      <ButtonIcon
        icon={Trash}
        className="shrink-0 fill-yellow"
        onClick={() => handleDelete(id)}
      />
    </li>
  );
}
