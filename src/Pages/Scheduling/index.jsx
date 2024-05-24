import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"

import "bootstrap"
import { Button } from "../../components/"
import { Container, Form } from "./styles"
import "./styles.scss"

export function Scheduling() {
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    service: Yup.string().required(),
    date: Yup.string().required(),
    hour: Yup.string().required(),
  })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (Data) => {
    const phone = "5521968697906"
    const date = new Date(Data.date).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
    Data.date = date
    const message = encodeURIComponent(
      `Agendamento Studio JR:\nOlá! me chamo ${Data.name}\nGostaria de realizar o serviço de ${Data.service}\nPara o dia ${Data.date}\nNo horário de ${Data.hour}`,
    )

    navigate("/")

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <Container>
      <h1>Marque seu horário</h1>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          type="text"
          {...register("name")}
          placeholder="Insira seu nome"
          aria-label="default input example"
        />
        <select
          {...register("service")}
          className="form-select"
          aria-label="Default select example"
        >
          <option disabled selected>
            Escolha um serviço
          </option>
          <option value="Alisamento">Alisamento</option>
          <option value="Escova">Escova</option>
          <option value="Hidratação">Hidratação</option>
        </select>
        <div className="Datebox">
          <label>Escolha uma data</label>
          <input
            className="form-control"
            type="date"
            {...register("date")}
            aria-label="default input example"
          />
        </div>
        <select
          {...register("hour")}
          className="form-select"
          aria-label="Default select example"
        >
          <option disabled selected>
            Escolha um horário
          </option>
          <option>09:00</option>
          <option>09:30</option>
          <option>10:00</option>
          <option>10:30</option>
          <option>11:00</option>
          <option>11:30</option>
          <option>12:00</option>
          <option>12:30</option>
          <option>13:00</option>
          <option>13:30</option>
          <option>14:00</option>
          <option>14:30</option>
          <option>15:00</option>
          <option>15:30</option>
          <option>16:00</option>
          <option>16:30</option>
          <option>17:00</option>
          <option>17:30</option>
          <option>18:00</option>
          <option>18:30</option>
          <option>19:00</option>
          <option>19:30</option>
        </select>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  )
}
