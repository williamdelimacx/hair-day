import Trash from "../assets/icons/Trash.svg?react";
import Text from "../components/text";
import ButtonIcon from "../components/button-icon";

type Props = {
  id: string;
  time: string;
  client: string;
  onDelete: (id: string) => void;
};

export default function PeriodItem({ id, time, client, onDelete }: Props) {
  return (
    <li className="flex items-center gap-5 py-1">
      <Text variant="title-md">{time}</Text>
      <Text variant="text-md" className="w-full">
        {client}
      </Text>
      <ButtonIcon
        icon={Trash}
        className="shrink-0 fill-yellow"
        onClick={() => onDelete(id)}
      />
    </li>
  );
}
