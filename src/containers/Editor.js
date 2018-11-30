import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeText } from '../actions'

import EditorComponent from '../components/Editor'

/** Editor */
class Editor extends React.Component {
  /**
   * @return {React.Element} 描画コンポーネント
   */
  render() {
    const { changeText, text } = this.props
    return <EditorComponent text={text} onChange={changeText} />
  }
}

Editor.propTypes = {
  changeText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  text: state.Viewer.text
})
const mapDispatchToProps = dispatch => ({
  changeText: event => dispatch(changeText(event.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
