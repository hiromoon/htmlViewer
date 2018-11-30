import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({})
const Editor = props => {
  const { onChange, text } = props
  return (
    <TextField
      multiline
      fullWidth
      rowsMax="20"
      margin="normal"
      value={text}
      onChange={onChange}
      placeholder="<p style='color: blue'>Hello, World!!!</p>"
    />
  )
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default withStyles(styles)(Editor)
