// clone using Object.assign

const obj ={
    key1 :"value1",
    key2 :"value2",
};
const obj2 = obj;
console.log(obj);
console.log(obj2);

// {key1: 'value1', key2: 'value2'}
//  {key1: 'value1', key2: 'value2'}

// memory me ek hi object haii jise dono obj and obj2 point kar rhe haii
// so change in any of the one obj will reflect in both 

obj.key3 = "value3";
console.log(obj);
console.log(obj2);

// {key1: 'value1', key2: 'value2', key3: 'value3'}
//  {key1: 'value1', key2: 'value2', key3: 'value3'}

// agr hm esa nhi chahte h to hme clone karna pdega
// const obj3 = {...obj}; // using spread operator
// We can also do by assign operator
const obj3 = Object.assign({} , obj);
obj.key4 = "value4";
console.log(obj);
console.log(obj3);

// {key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}
//  {key1: 'value1', key2: 'value2', key3: 'value3'}










