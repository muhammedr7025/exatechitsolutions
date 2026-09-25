import { createContext, useContext } from 'react';
import { buildSite } from './site';

// Defaults to the built-in site so components also work outside the provider.
export const SiteContext = createContext(buildSite());

export const useSite = () => useContext(SiteContext);
