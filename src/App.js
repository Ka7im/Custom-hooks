import Hover from './components/Hover';
import List from './components/List';
import useInput from './hooks/useInput';

function App() {
    const username = useInput('');

    return (
        <div>
            <input type='text' {...username} />
            <Hover />
            <List />
        </div>
    );
}

export default App;
