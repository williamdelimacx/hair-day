import Logo from "../core-components/logo";
import Schedule from "../core-components/schedule";
import Sidebar from "../core-components/sidebar";

export function Home() {
  return (
    <main className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
      <Logo className="absolute top-0 left-0" />
      <Sidebar />
      <Schedule />
    </main>
  );
}
