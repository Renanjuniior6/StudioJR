import React, { useState } from "react"
import DatePicker from "react-date-picker"

import "react-calendar/dist/Calendar.css"
import "react-date-picker/dist/DatePicker.css"
import { Container } from "./styles"

export function Date() {
  const [value, onChange] = useState()

  return (
    <Container>
      <p>Escolha o dia </p>
      <DatePicker locale="pt-BR" onChange={onChange} value={value} />
    </Container>
  )
}
