import Secretkey from "./secretKey"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  referencecurrencyuuid: 'yhjMzLPhuIDl',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': Secretkey.value
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchange/-zdvbieRdZ'

const createRequest = (url) => ({
  url, headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
})

export const {
  useGetCryptosQuery,
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