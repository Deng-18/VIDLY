const customers = [
    {
        _id: 1,
        name: "Deng Joshua",
        isGold: true,
        phone: "0789201596"
    },
    {
        _id: 2,
        name: "Deng Aguer",
        isGold: true,
        phone: "078920906"
    },
    {
        _id: 3,
        name: "Aryampa Joshua",
        isGold: false,
        phone: "0750902396"
    },
    {
        _id: 4,
        name: "Arimaso Martial",
        isGold: false,
        phone: "0795112157"
    },
    {
        _id: 5,
        name: "Atem John",
        isGold: true,
        phone: "+215 760324823"
    }
]

export function getCustomers() {
    return customers.filter(g => g)
}