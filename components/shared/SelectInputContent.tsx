import React from 'react'
import { SelectContent, SelectItem } from '../ui/select'

const SelectInputContent = ({data}: {data: {value: string, label: string}[]}) => {
  return (
    <SelectContent>
      {
        data.map(({value, label}) => (
          <SelectItem key={value} value={value}>{label}</SelectItem>
        ))
      }
    </SelectContent>
  )
}

export default SelectInputContent