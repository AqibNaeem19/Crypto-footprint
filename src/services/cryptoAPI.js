import Secretkey from "./secretKey"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  referencecurrencyuuid: 'yhjMzLPhuIDl',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': Secretkey.coinRanking
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
  url, headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod}) => createRequest(`/coin/${coinId}/history/${timeperiod}`)
    })
  })
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} = cryptoApi


// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchange/-zdvbieRdZ',
//   headers: {
//     referencecurrencyuuid: 'yhjMzLPhuIDl',
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': SecretKey.value
//   }
// };