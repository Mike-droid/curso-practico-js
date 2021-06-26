const calcularPrecioConDescuento = (precio:number, descuento:number): number => {
  const porcentajePrecioConDescuento: number = 100 - descuento
  const precioConDescuento: number = (precio * porcentajePrecioConDescuento) / 100

  return precioConDescuento
}

function getCouponDiscount(): number {
  const selectedValue = document.getElementById('inputCoupon') as HTMLSelectElement
  const couponValue = selectedValue.value
  return parseInt(couponValue)
}

function priceDiscount() {
  const inputPrice = document.getElementById('inputPrice') as HTMLInputElement
  const priceValue = inputPrice?.value

  const precioConDescuento = calcularPrecioConDescuento(parseInt(priceValue), getCouponDiscount())

  const resultPrice: HTMLParagraphElement = document.getElementById('resultPrice') as HTMLParagraphElement
  resultPrice.innerText = `El precio con descuento es de $${precioConDescuento}`
}

//* Podemos imprimir un objeto :D
/* console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento
}) */