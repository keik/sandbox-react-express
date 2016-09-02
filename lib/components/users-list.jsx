import React from 'react'

export default class UsersList extends React.Component {
  constructor() {
    super()
  }

  handleClick(e) {
    console.log('clicked')
  }

  render() {
    var lis = this.props.users.map((x, i) => <li onClick={this.handleClick}>{x}</li>)
    return (
      <html>
        <ul>
          {lis}
        </ul>
      </html>
    )
  }
}
