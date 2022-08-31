function companyUsers(arr) {
    let companies = {}

    arr.forEach(element => {
        let [company, id] = element.split(" -> ")
        if (!companies.hasOwnProperty(company)) {
            companies[company] = {}
        }
        if (!companies[company].hasOwnProperty(id)) {
            companies[company][id] = id
        }
    });

    let sortedCompanies = Object.keys(companies).sort((a, b) => {
        return a.localeCompare(b)
    })

    let result = ""

    sortedCompanies.forEach((el) => {
        result += `${el} `
        result += '\n'
        let singleCompany = Object.keys(companies[el])
        singleCompany.forEach((id) => {
            result += `-- ${id}`
            result += '\n'
        })
    })
    console.log(result)
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'SoftUni -> BB12345',
    'HP -> BB12345'
]
)