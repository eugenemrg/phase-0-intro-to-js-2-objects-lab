// Write your solution in this file!
const employee = {
    name: 'Sherlock Holmes',
    streetAddress: '221B Baker Street'
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    return {
        ...employeeObject,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value;
    return employeeObject;
}

function deleteFromEmployeeByKey(employeeObject, key) {
    const newObj = {...employeeObject};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key){
    delete employeeObject[key];
    return employeeObject;
}

