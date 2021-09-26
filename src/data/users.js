let users = [
    {
        username: "a",
        password: "b",
        expenses: [],
        incomes: [],
        transferences: [],
        categories: [
            {
                name: "Food",
                isFixed: false,
                spent: 300
            },
            {
                name: "Outings",
                isFixed: false,
                spent: 500
            },
            {
                name: "Clothes",
                isFixed: false,
                spent: 600
            },
            {
                name: "Transportation",
                isFixed: false,
                spent: 900
            },
            {
                name: "Cleaning",
                isFixed: false,
                spent: 700
            },
            {
                name: "Pharmacy",
                isFixed: false,
                spent: 840
            },
            {
                name: "Booking",
                isFixed: true,
                spent: 0
            },
            {
                name: "Credit card",
                isFixed: true,
                spent: 44
            },
            {
                name: "University",
                isFixed: true,
                spent: 0
            },
            {
                name: "English course",
                isFixed: true,
                spent: 444
            },
            {
                name: "Gym",
                isFixed: true,
                spent: 232
            },
            {
                name: "Internet",
                isFixed: true,
                spent: 62
            }
        ],
        paymentModes: [
            {
                name: "Cash",
                available: 300,
                isDebit: true
            },
            {
                name: "Brou debit card",
                available: 500,
                isDebit: true
            },
            {
                name: "Santander debit card",
                available: 5000,
                isDebit: true
            },
            {
                name: "Santander credit card",
                isDebit: false
            },
            {
                name: "Itau credit card",
                isDebit: false
            },
            {
                name: "Scotiabank credit card",
                isDebit: false
            },
            {
                name: "Food card",
                isDebit: true
            }
        ],
        places: [
            "Brou webpage",
            "Santander webpage",
            "Mercado libre",
            "Supermarket Frog",
            "Supermarket Disco",
            "Pharmacy Farmashop",
            "Pharmacy San Roque",
            "University ORT",
            "Abitab",
        ],
        reasons: [
            "Salary",
            "Leftover last month",
            "Present"
        ] 
    }
]