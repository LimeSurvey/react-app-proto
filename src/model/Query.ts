
import { QueryClient } from '@tanstack/react-query'
import {
    Persister,
//    PersistedClient,
    PersistQueryClientOptions,
} from '@tanstack/react-query-persist-client'
//import { get, set, del } from 'idb-keyval'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { JsonTyped } from './json-typed'
import constructors from './constructors'

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

const persister: Persister = createSyncStoragePersister({
    storage: window.localStorage,
    serialize: (data) => {
        // console.log('serialize');
        //return JSON.stringify(data)
        return JsonTyped.stringifyTyped(data)
    },
    deserialize: (data) => {
        // console.log('deserialize');
        //return JSON.parse(data)
        return JsonTyped.parseTyped(data, constructors)
    }
})

/*
IndexDB storage
// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
const createIdbPersister = (idbValidKey: IDBValidKey = "reactQuery") => {
    return {
        persistClient: async (client: PersistedClient) => {
            set(idbValidKey, client)
        },
        restoreClient: async () => {
            return await get<PersistedClient>(idbValidKey)
        },
        removeClient: async () => {
            await del(idbValidKey)
        },
    } as Persister
}
const persister: Persister = createIdbPersister()
*/



export const persistOptions: Omit<PersistQueryClientOptions, 'queryClient'> = {
    persister,
    maxAge: maxAge
};