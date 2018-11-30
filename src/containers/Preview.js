import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PreviewComponent from '../components/Preview'

/** Preview */
class Preview extends React.Component {
  /**
   * @return {React.Element} 描画コンポーネント
   */
  render() {
    const { text } = this.props
    return <PreviewComponent text={text} />
  }
}

Preview.propTypes = {
  text: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  text: state.Viewer.text
})
const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview)
