const headerElement = document.getElementById("test-header");

console.log((headerElement as HTMLHeadingElement).textContent);
console.log((<HTMLHeadingElement>headerElement).textContent);

console.log(headerElement?.textContent);


type UserInfo = {
    name: string;
    age: number;
}

function fetchUesr(): unknown {
    return {
        name: "John",
        age: 30,
    };
}

const data = fetchUesr();
const ourUser = data as UserInfo;

console.log(ourUser.name);


const summ = (a: number, b: number): number => {
    return a + b;
}

console.log(summ(10, "123" as unknown as number));
