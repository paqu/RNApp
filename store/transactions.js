const transactions = [
  {
    id: 1,
    date: new Date(Date.now()),
    category: "Fun",
    title: "Czekolada",
    amount: 20,
    type: "expense",
  },
  {
    id: 2,
    date: new Date(2020, 8, 13),
    category: "Fun",
    title: "SQ",
    amount: 20,
    type: "expense",
  },
  {
    id: 5,
    date: new Date(2020, 8, 12),
    category: "Food",
    title: "Lunch",
    amount: 55,
    type: "income",
  },
  {
    id: 6,
    date: new Date(2020, 8, 10),
    category: "Health",
    title: "Doctor visit",
    amount: 200,
    type: "expense",
  },
  {
    id: 7,
    date: new Date(2020, 8, 9),
    category: "Food",
    title: "Shopping",
    amount: 23,
    type: "expense",
  },
  {
    id: 8,
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
];

export default transactions;
