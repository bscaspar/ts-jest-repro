import React from 'react';
import { RootStore } from '../../App';

export const RootStoreContext = React.createContext<RootStore | null>(null);
