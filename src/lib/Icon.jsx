import { Sparkles } from 'lucide-react';
import { ICON_MAP } from './iconMap';

export default function Icon({ name, ...props }) {
  const Cmp = ICON_MAP[name] || Sparkles;
  return <Cmp {...props} />;
}
