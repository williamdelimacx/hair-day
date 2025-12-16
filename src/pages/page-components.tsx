import Button from "../components/button";
import TextInput from "../components/text-input";
import UserSquare from "../assets/icons/UserSquare.svg?react";

export function PageComponents() {
  return (
    <main className="space-y-8 p-2">
      <Button>Agendar</Button>
      <TextInput icon={UserSquare} placeholder="Type your name" />
    </main>
  );
}
