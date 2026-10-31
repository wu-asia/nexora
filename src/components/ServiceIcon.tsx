import {
  Lightbulb,
  Code2,
  Wrench,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Lightbulb,
  Code2,
  Wrench,
  Puzzle,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export default function ServiceIcon({ name, className = "h-6 w-6" }: ServiceIconProps) {
  const Icon = ICON_MAP[name] ?? Lightbulb;
  return <Icon className={className} />;
}
