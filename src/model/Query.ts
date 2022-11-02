
import { QueryClient } from '@tanstack/react-query'
import {
    Persister,
    PersistQueryClientOptions,
} from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

const msDay = 1000 * 60 * 60;
const maxAge = msDay * 30;

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // These are default values and can be set per query.

            refetchOnWindowFocus: true,

            // The staleTime is the time in milliseconds after data is considered stale.
            staleTime: Infinity,

            // The cacheTime is the time in milliseconds that unused/inactive cache data remains in memory.
            // - When a query's cache becomes unused or inactive, that cache data will be garbage collected after
            // - this duration. When different cache times are specified, the longest one will be used.
            cacheTime: maxAge
        },
    },
})

export const persister: Persister = createSyncStoragePersister({
    storage: window.sessionStorage,
    serialize: (data) => {
        // console.log('serialize');
        return JSON.stringify(data)
    },
    deserialize: (data) => {
        // console.log('deserialize');
        return JSON.parse(data)
    }
})

export const persistOptions: Omit<PersistQueryClientOptions, 'queryClient'> = {
    persister,
    maxAge: maxAge
};