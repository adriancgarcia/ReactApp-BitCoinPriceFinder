export const priceLoader = async ({params}) => {
    const symbol = params.symbol

    const apiKey = "AEB29E1D-6B65-46FE-B832-764E3FD6A939"

    const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

    const response = await fetch(url)

    const data = await response.json()

    return data
}

