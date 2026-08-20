import PortfolioWindow from './PortfolioWindow'

const WindowManager = ({ type, onClose }) => {
  if (!type) return null

  return <PortfolioWindow type={type} onClose={onClose} />
}

export default WindowManager