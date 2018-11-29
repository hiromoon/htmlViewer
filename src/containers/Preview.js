import React from 'react'
import { connect } from 'react-redux'

import PreviewComponent from '../components/Preview'

/** Preview */
class Preview extends React.Component {
  /**
   * @return {React.Element} 描画コンポーネント
   */
  render() {
    return <PreviewComponent />
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview)
