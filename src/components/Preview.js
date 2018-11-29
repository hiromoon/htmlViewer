import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

const Preview = props => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: '<p style="color: blue">Hello, World!!!</p>'
      }}
    />
  )
}

export default withStyles(styles)(Preview)
