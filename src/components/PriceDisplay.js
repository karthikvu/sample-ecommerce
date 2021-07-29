const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);


const PriceDisplay = ({ price }) => {
    return <span>{ numberFormat(price) }</span>
}

export default PriceDisplay;