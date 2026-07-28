"use client";

import CalendarCheckIcon from "@iconify-react/lucide/calendar-check-2";
import KeyRoundIcon from "@iconify-react/lucide/key-round";
import MessageCircleIcon from "@iconify-react/lucide/message-circle";
import SunIcon from "@iconify-react/lucide/sun";

const icons = {
  calendar: CalendarCheckIcon,
  key: KeyRoundIcon,
  message: MessageCircleIcon,
  sun: SunIcon,
};

export type JourneyCardIconName = keyof typeof icons;

export default function JourneyCardIcon({
  name,
}: {
  name: JourneyCardIconName;
}) {
  const Icon = icons[name];

  return <Icon aria-hidden="true" focusable="false" />;
}
