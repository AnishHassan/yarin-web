export const MenuTabs = [
    {
        id : 1,
        no_of_properties: 342,
        category: 'Selling' 
    },
    {
        id: 2,
        no_of_properties: 423,
        category: 'Buying'
    }
    ,
    {
        id: 3,
        no_of_properties: 34,
        category: 'Rental'
    },
    {
        id: 4,
        no_of_properties: 639,
        category: 'Exclusivity'
    }
]




export const data = [
    {
        id: 1, city: 'New York',
        phoneNumber: '+1 123 456 7890',
        source: 'https://www.example.com',
        caseId: Math.floor(Math.random() * 100000000),
        location: '123 Main St, New York, NY 10001',
        matches: [
            { name: "Apartment 1", referenceId: "23422", percentage: "97%", url: "https://www.google.com" },
            { name: "Apartment 2", referenceId: "34321", percentage: "85%", url: "https://www.example.com" }
        ],
        attributes: {
            AccuracyRate: '93%',
            Category: 'Potential Buyer'
        }
    },
    {
        id: 2,
        city: 'Los Angeles',
        phoneNumber: '+1 234 567 8901',
        source: 'https://www.example.com',
        caseId: Math.floor(Math.random() * 100000000),
        location: '456 Main St, Los Angeles, CA 90001',
        matches: [
            { name: 'Apartment 3', referenceId: '87654', percentage: '80%', url: 'https://www.example.com' },
            { name: 'Apartment 4', referenceId: '98765', percentage: '70%', url: 'https://www.google.com' }
        ],
        attributes: [
            { 'Accuracy Rate': '85%' },
            { Category: 'Potential Seller' }
        ]
    },
    {
        id: 3,
        city: 'Paris',
        phoneNumber: '+33 1 23 45 67 89',
        source: 'https://www.example.com',
        caseId: Math.floor(Math.random() * 100000000),
        location: '123 Rue de Rivoli, Paris, France',
        matches: [{ name: 'Apartment 5', referenceId: '56789', percentage: '75%', url: 'https://www.google.com' },
        { name: 'Apartment 6', referenceId: '45678', percentage: '90%', url: 'https://www.example.com' }],
        attributes: [
            { 'Accuracy Rate': '92%' },
            { Category: 'Potential Buyer' }
        ]
    },
    {
        id: 4,
        city: 'Tokyo',
        phoneNumber: '+81 3-1234-5678',
        source: 'https://www.example.com',
        caseId: Math.floor(Math.random() * 100000000),
        location: '1-1-1 Shibaura, Minato City, Tokyo 105-8001, Japan',
        matches: [
            { name: 'Apartment 7', referenceId: '34567', percentage: '80%', url: 'https://www.example.com' },
            { name: 'Apartment 8', referenceId: '23456', percentage: '70%', url: 'https://www.google.com' }
        ],
        attributes: [
            { 'Accuracy Rate': '88%' },
            { Category: 'Potential Seller' }
        ]
    },
    {
        id: 5,
        city: 'Sydney',
        phoneNumber: '+61 2 1234 5678',
        source: 'https://www.example.com',
        caseId: Math.floor(Math.random() * 100000000),
        location: '1 Macquarie Pl, Sydney NSW 2000, Australia',
        matches: [
            { name: 'Apartment 9', referenceId: '12345', percentage: '95%', url: 'https://www.example.com' },
            { name: 'Apartment 10', referenceId: '23456', percentage: '60%', url: 'https://www.google.com' }
        ],
        attributes: [
            { 'Accuracy Rate': '90%' },
            { Category: 'Potential Buyer' }
        ]
    },
    {
        id: 6,
        city: 'Dubai',
        phoneNumber: '+971 4 123 4567',
        source: 'https://www.example.com',
        caseId: Math.floor(Math.random() * 100000000),
        location: 'Burj Khalifa, Dubai, United Arab Emirates',
        matches: [
            { name: 'Apartment 11', referenceId: '98765', percentage: '70%', url: 'https://www.google.com' },
            { name: 'Apartment 12', referenceId: '87654', percentage: '85%', url: 'https://www.example.com' }
        ],
        attributes: [
            { 'Accuracy Rate': '82%' },
            { Category: 'Potential Seller' }
        ]
    },
]