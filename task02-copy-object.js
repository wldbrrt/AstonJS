const counter1 = {
    value: 0,

    get getValue() {
        return this.value
    },

    set setValue(value) {
        this.value = value;
    },
    object1: {
      number1: 1,
      number2: 2,
      array: [[1,2],[3],1]
    }
};

//Copy with Object.assign
const copy1 = Object.assign({}, counter1);

//Object.assign can't copy accessors so we need to make our own function
function assignObjects(target, ...sources) {
    sources.forEach(source => {
      Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {}));
    });
    return target;
  }
const copy2 = assignObjects({}, counter1)

//Copy with structuredClone
 const copy3 = structuredClone(counter1);

//Copy with For loop
const copy4 = {};
for(let key in counter1) {
  copy4[key] = counter1[key];
};

//Copy with spread operator
const copy5 = {...counter1};

//Copy with JSON.parse and JSON.stringify
const copy6 = JSON.parse(JSON.stringify(counter1))

//Copy with deep copy function
const deepClone = obj => {
  if (obj === null) return null;

  let clone = Object.assign({}, obj);
  console.log(clone);
  Object.keys(clone).forEach(key => {
    clone[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key]
    console.log(clone);
    }
  );

  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : (Array.isArray(obj) ? Array.from(obj) : clone);
};

const copy7 = deepClone(counter1)

 