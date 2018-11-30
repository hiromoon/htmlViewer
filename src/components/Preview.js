import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

const Preview = props => {
  const { text } = props
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: text
      }}
    />
  )
}

Preview.propTypes = {
  text: PropTypes.string.isRequired
}

export default withStyles(styles)(Preview)
