import { Star } from "@phosphor-icons/react"
import React from "react"

import { Container, AssessmentsGroup, StarGroup } from "./styles"

export function Assessments() {
  return (
    <Container>
      <h2>VENHA TRANSFORMAR SEU SORRISO!</h2>
      <AssessmentsGroup>
        <b>Renan Junior</b>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          pariatur nisi necessitatibus reprehenderit, inventore dignissimos
          nobis laudantium sed id architecto
        </p>
        <StarGroup>
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
        </StarGroup>
      </AssessmentsGroup>
      <AssessmentsGroup>
        <b>Camylla Vitória</b>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          pariatur nisi necessitatibus reprehenderit, inventore dignissimos
          nobis laudantium sed id architecto
        </p>
        <StarGroup>
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
        </StarGroup>
      </AssessmentsGroup>
      <AssessmentsGroup>
        <b>Isabella Vitória</b>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          pariatur nisi necessitatibus reprehenderit, inventore dignissimos
          nobis laudantium sed id architecto
        </p>
        <StarGroup>
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
        </StarGroup>
      </AssessmentsGroup>
    </Container>
  )
}
