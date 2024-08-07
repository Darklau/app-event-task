import axios, { AxiosResponse } from 'axios'
import { Product } from '@/types/common'

export const fetchProducts = async (): Promise<AxiosResponse<{ items: Product[] }>> => {
  //Получаем продукты с бэкенда
  return await axios.get('https://appevent.ru/dev/task1/catalog')
}
