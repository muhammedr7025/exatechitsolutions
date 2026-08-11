import { Studio as SanityStudio } from 'sanity';
import config from '../sanity/sanity.config';

export default function Studio() {
  return <SanityStudio config={config} />;
}
