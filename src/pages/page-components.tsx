import Button from "../components/button";
import TextInput from "../components/text-input";
import UserSquare from "../assets/icons/UserSquare.svg?react";
import Trash from "../assets/icons/Trash.svg?react";
import ButtonIcon from "../components/button-icon";
import TimeSelect from "../components/time-select";

export function PageComponents() {
  return (
    <main className="flex flex-col gap-8 p-2">
      <Button disabled>Agendar</Button>
      <TextInput icon={UserSquare} placeholder="Type your name" />
      <ButtonIcon icon={Trash} />
      <TimeSelect>09:00</TimeSelect>
      <TimeSelect disabled>09:00</TimeSelect>
      <TimeSelect selected>09:00</TimeSelect>
    </main>
  );
}
