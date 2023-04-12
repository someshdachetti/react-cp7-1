// Write your code here
import './index.css'
import CashWithdrawal from '../DenominationItem'

const cashWithDraw = () => (
  <div className="whiteCard">
    <div className="blueCard">
      <div className="x">
        <div className="profile">
          <p>S</p>
        </div>
        <h1 className="name">Somesh</h1>
      </div>

      <div className="bank-balance">
        <h1 className="your-balance">Your Bank balance</h1>
        <p className="name"> 2000</p>
      </div>
      <h1 className="withdraw">WithDraw</h1>
      <p>Choose Sum ( in rupees)</p>
      <div className="order">
        <CashWithdrawal denominationsList={denominationsList} />
      </div>
    </div>
  </div>
)

export default cashWithDraw
