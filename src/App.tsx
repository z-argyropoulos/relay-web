import './App.scss';

const App = () => {
  return (
    <div className="app-header">
      <p>App component works!</p>
      <p>{process.env.RELAY_TEST_MESSAGE}</p>
    </div>
  );
};

export default App;
