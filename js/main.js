document.getElementById('flip').addEventListener('click', flip)
let heads = 0
let tails = 0

async function flip() {

    const res = await fetch('/coinflip')

    const data = await res.json()
    console.log(data)
    if (data.value === '1') {
        heads += 1
        document.querySelector('h2').innerHTML = 'Heads'
        document.getElementById('heads').innerHTML = `Heads:${heads}`
    } else {
        tails += 1
        document.querySelector('h2').innerHTML = 'Tails'
        document.getElementById('tails').innerHTML = `Tails:${tails}`
    }

}