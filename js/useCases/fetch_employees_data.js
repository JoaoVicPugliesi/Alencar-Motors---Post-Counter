async function fetch_employees_data () {
    const req = await fetch('../data/employees.json', {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json'
        }
    });

    const res = await req.json();
    return res;
}

export default fetch_employees_data;