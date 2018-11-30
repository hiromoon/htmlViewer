import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Editor from '../containers/Editor'
import Preview from '../containers/Preview'

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100vw'
  },
  preview: {
    flexGrow: 1,
    minWidth: '600px'
  },
  editor: {
    flexGrow: 1,
    minWidth: '600px'
  }
})

const App = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <div className={classes.editor}>
        <Editor />
      </div>
      <div className={classes.preview}>
        <Preview />
      </div>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
