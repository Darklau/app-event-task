import React, { ButtonHTMLAttributes } from 'react'
import { Button } from '@/components/ui/button'

interface Props<T extends string> extends ButtonHTMLAttributes<any> {
  value: T
  sort: T
  setSort: (sort: T) => void | React.Dispatch<React.SetStateAction<T>>
  asc: boolean
  setAsc: (asc: boolean) => void
}

export const SortOrderButton = <T extends string>({
  value,
  sort,
  setSort,
  asc,
  setAsc,
  ...props
}: Props<T>) => {
  const toggleSort = () => {
    setAsc(!asc)
    setSort(value)
  }

  return (
    <Button size={'none'} variant={'link'} onClick={toggleSort} className="" {...props}>
      <span>{props.children || value}</span>
      {value === sort && <span className="">{asc ? '↑' : '↓'}</span>}
    </Button>
  )
}
