import React, { useState } from "react"
import Calendar from "react-calendar"

import "react-calendar/dist/Calendar.css"

export function MyCalendar() {
  const [value, onChange] = useState(new Date())

  console.log(value)

  return (
    <div>
      <Calendar locale="pt-BR" onChange={onChange} value={value} />
    </div>
  )
}
