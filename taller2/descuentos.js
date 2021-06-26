var calcularPrecioConDescuento = function (precio, descuento) {
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};
function getCouponDiscount() {
    var selectedValue = document.getElementById('inputCoupon');
    var couponValue = selectedValue.value;
    return parseInt(couponValue);
}
function priceDiscount() {
    var inputPrice = document.getElementById('inputPrice');
    var priceValue = inputPrice === null || inputPrice === void 0 ? void 0 : inputPrice.value;
    var precioConDescuento = calcularPrecioConDescuento(parseInt(priceValue), getCouponDiscount());
    var resultPrice = document.getElementById('resultPrice');
    resultPrice.innerText = "El precio con descuento es de $" + precioConDescuento;
}
//* Podemos imprimir un objeto :D
/* console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento
}) */ 
