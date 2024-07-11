import React, { ButtonHTMLAttributes } from 'react'

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
    <button onClick={toggleSort} className="" {...props}>
      <span>{props.children || value}</span>
      {value === sort && <span className="">{asc ? '↑' : '↓'}</span>}
    </button>
  )
}
