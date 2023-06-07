function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger();

logger.call(obj);

logger.apply(obj);

const myFunc = logger.bind(obj);

myFunc();