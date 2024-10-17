
import Card from './Card';

const App = () => {
  const data = [
    { title: 'Card 1', description: 'This is the description for card 1.' },
    { title: 'Card 2', description: 'This is the description for card 2.' },
    { title: 'Card 3', description: 'This is the description for card 3.' },
    { title: 'Card 4', description: 'This is the description for card 4.' },
    { title: 'Card 5', description: 'This is the description for card 5.' },
    { title: 'Card 6', description: 'This is the description for card 6.' },
    { title: 'Card 7', description: 'This is the description for card 7.' },
    { title: 'Card 8', description: 'This is the description for card 8.' },
    { title: 'Card 9', description: 'This is the description for card 9.' },
    { title: 'Card 10', description: 'This is the description for card 10.' },
  ];

  return (
    <main>
      <h1>Card List</h1>
      <Card items={data} />
    </main>
  );
};

export default App;
