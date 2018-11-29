import React from 'react'
import { connect } from 'react-redux'

import EditorComponent from '../components/Editor'

/** Editor */
class Editor extends React.Component {
  /**
   * @return {React.Element} 描画コンポーネント
   */
  render() {
    return <EditorComponent />
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
