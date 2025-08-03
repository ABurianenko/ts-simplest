// Тип unknown підходить для сценаріїв, коли ви не знаєте точного типу даних, але все ж таки хочете підтримувати сувору перевірку типів. Змінні цього типу слід перевіряти перед їх використанням.


let something: unknown = "I am a string";


if (typeof something === "string") {
    console.log(something.toUpperCase());
}


something = 5;

if (typeof something === "number") {
    console.log(something + 10);
}

something = true;