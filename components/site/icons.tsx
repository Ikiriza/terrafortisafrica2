import {
  BookOpen,
  ChartLine,
  Coins,
  Earth,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Microscope,
  ShieldCheck,
  Sprout,
  Store,
  Target,
  Tractor,
  Trees,
  Users,
  type LucideIcon,
} from "lucide-react"

const map: Record<string, LucideIcon> = {
  sprout: Sprout,
  tractor: Tractor,
  trees: Trees,
  coins: Coins,
  graduation: GraduationCap,
  chart: ChartLine,
  landmark: Landmark,
  globe: Globe2,
  users: Users,
  store: Store,
  microscope: Microscope,
  target: Target,
  handshake: Handshake,
  book: BookOpen,
  earth: Earth,
  shield: ShieldCheck,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Sprout
  return <Cmp className={className} aria-hidden="true" />
}
