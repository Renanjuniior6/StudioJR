import PropTypes from "prop-types"
import React from "react"

import { Container } from "./styles"

export function Button({ children, ...rest }) {
  const link = () => {
    const phone = "5521968697906"
    const message = "Oi esta é minha mensagem"
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return <Container {...rest}>{children}</Container>
}

Button.propTypes = {
  children: PropTypes.array,
}
