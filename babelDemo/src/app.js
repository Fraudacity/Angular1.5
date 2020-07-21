import {person, hello} from './lib'

alert (person.name)

alert(hello('partha'))

const getData =async(URL)=> {
    const response = await fetch(url)
    const result = await response.json();
    console.log(result);
};

getData('https://jsonplaceholder')