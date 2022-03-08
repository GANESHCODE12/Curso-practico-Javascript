const coupons = [
    {
        name: "sin_cupon",
        discount: 0,
    },
    {
        name: "nuevo",
        discount: 15,
    },
    {
        name: "fidelizacion",
        discount: 30,
    },
    {
        name: "gran_compra",
        discount: 25,
    },
];

const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function priceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + userCoupon + "no es válido");
    } else {
        const sumaDescuento = parseFloat(discountValue) + userCoupon.discount;
        console.log(sumaDescuento)
        const descuento = sumaDescuento;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultadoPrecio = document.getElementById("precioResultado");
        resultadoPrecio.innerText = `El precio con descuento de tu producto es $${precioConDescuento} pesos`
    }
}