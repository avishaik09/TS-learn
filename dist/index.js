"use strict";
// let a:string="RAM";
const user = [
    {
        name: "John",
        age: 52,
    },
    {
        name: "Jane",
        age: 25,
    },
    {
        name: "Elon",
        age: 2,
    },
];
const filterByPeople = (arr, property, value) => {
    return arr.filter(item => item[property] === value);
};
const filteredPeopleByName = filterByPeople(user, "name", "Elon");
