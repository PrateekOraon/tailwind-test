import './App.css';
import Heroes from './heroes';

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-purple-600 bg-opacity-25">
      <div className="w-4/5 h-4/5 shadow-xl bg-white dark:bg-red-200 rounded-lg p-40 text-4xl">
        <button class="btn-indigo">
          Click me again
        </button>
        <Heroes />
      </div>
    </div>
  );
}

export default App;
