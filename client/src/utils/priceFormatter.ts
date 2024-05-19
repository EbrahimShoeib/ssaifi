export const priceFormatter = (price:string|number) => {
    price = String(price)
    if (!price.includes(".00")) {
        price = price.split(".")[0]
        return `${price}.00`
    }
    return price
}