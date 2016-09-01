import React from 'react'

export default class UsersList extends React.Component {
  constructor() {
    super()
  }

  render() {
    var lis = this.props.users.map((x, i) => <li>{x}</li>)
    return (
      <html>
        <ul>
          {lis}
        </ul>
      </html>
    )
  }
}
