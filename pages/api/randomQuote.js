import quotes from '../../quotes.json';

export default (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(quote);
  res.status(200).json(quote);
};
