import { Briefcase, LifeBuoy, PenLine, ShieldCheck, ShoppingCart, Store, Tag, User, Wand2, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { store: Store, user: User, pen: PenLine, brief: Briefcase, cart: ShoppingCart, tag: Tag, life: LifeBuoy, wand: Wand2, shield: ShieldCheck };
export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Store;
  return <C className={className} aria-hidden />;
}
