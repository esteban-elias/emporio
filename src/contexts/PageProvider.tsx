import { createContext, useState } from 'react';
import { ProviderProps, PageContext as Context} from '../types';
import { Page } from '../enums';

export const PageContext = createContext<Context | null>(null);

export const PageProvider = ({children}: ProviderProps) => {
  const [page, setPage] = useState(Page.Home)
  return (
    <PageContext.Provider value={{page, setPage}}>
    {children}
    </PageContext.Provider>
  )
}
