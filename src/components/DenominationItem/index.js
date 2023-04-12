import React, {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
    return (
      <div className="order">
        {denominationsList.map(denomination => (
          <button key={denomination.id} type="button">
            {denomination.value}
          </button>
        ))}
      </div>
    )
  }
}

export default CashWithdrawal
