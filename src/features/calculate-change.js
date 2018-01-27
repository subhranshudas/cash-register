import {defaultsDeep,reduce, mapValues} from 'lodash';

const denominationsMap = {
    quarter: { what: 0.25, number: 0 }, 
    dime: { what: 0.10, number: 0 }, 
    nickel: { what: 0.05, number: 0 }, 
    penny: { what: 0.01, number: 0 }, 
};

export const getChangeFunctional = (changeDue) => {

    const denominationsClone = defaultsDeep({}, denominationsMap);

    reduce(denominationsClone, (reducedAmount, denomination) => {
        denomination['number'] = Math.floor(reducedAmount / denomination['what']);
        reducedAmount = reducedAmount - (denomination['number'] * denomination['what']);
        return reducedAmount;
    }, changeDue.toFixed(2));
    return mapValues(denominationsClone, (obj) => obj.number);
}