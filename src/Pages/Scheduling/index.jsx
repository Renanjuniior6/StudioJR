import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

import "bootstrap"
import { Date, Button } from "../../components/"
import { Container, Form } from "./styles"
import "./styles.scss"

export function Scheduling() {
  const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    service: Yup.string().required("A campo obrigatório"),
    date: Yup.string().required("Horário obrigatório"),
    hour: Yup.string().required("Escolha um horário"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (Data) => {
    console.log(Data)
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
        <Date {...register("date")} />
        <select
          {...register("hour")}
          className="form-select"
          aria-label="Default select example"
        >
          <option disabled selected>
            Escolha um horário
          </option>
          <option value="12:00">12:00</option>
          <option value="12:30">12:30</option>
          <option value="13:00">13:00</option>
        </select>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  )
}
