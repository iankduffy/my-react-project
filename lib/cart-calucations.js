export const updatePrice = (newProductList) => {
  let total = newProductList.reduce(function (previous, current) {
    let { qty, singlePrice } = current

    return (singlePrice * qty) + previous
  }, 0)

  return total.toFixed(2)
}