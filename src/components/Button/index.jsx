import PropTypes from "prop-types"
import React from "react"

import { Container } from "./styles"

export function Button({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}

Button.propTypes = {
  children: PropTypes.array,
}
