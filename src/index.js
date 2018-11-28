import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div
    dangerouslySetInnerHTML={{
      __html: '<p style="color: blue">Hello, World!!!</p>'
    }}
  />,
  document.getElementById('container')
)
