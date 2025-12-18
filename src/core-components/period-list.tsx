import SunHorizon from "../assets/icons/SunHorizon.svg?react";
import CloudSun from "../assets/icons/CloudSun.svg?react";
import MoonStars from "../assets/icons/MoonStars.svg?react";
import Icon from "../components/icon";
import Text from "../components/text";

const periods = {
  morning: {
    title: "Manhã",
    icon: SunHorizon,
    time: "9h-12h",
  },
  afternoon: {
    title: "Tarde",
    icon: CloudSun,
    time: "13h-18h",
  },
  night: {
    title: "Noite",
    icon: MoonStars,
    time: "19h-21h",
  },
} as const;

type Props = {
  period: keyof typeof periods;
  children: React.ReactNode;
};

export default function PeriodList({ period, children }: Props) {
  return (
    <section className="border rounded-lg border-gray-600">
      <div className="px-5 py-3 flex items-center justify-between gap-6 border-b border-gray-600">
        <div className="flex items-center gap-2">
          <Icon svg={periods[period].icon} className="fill-yellow size-5" />
          <Text as="h3" variant="text-sm" className="text-gray-300">
            {periods[period].title}
          </Text>
        </div>

        <Text className="text-gray-400" variant="text-md">
          {periods[period].time}
        </Text>
      </div>

      <ul className="flex flex-col p-5 gap-0.5">{children}</ul>
    </section>
  );
}
