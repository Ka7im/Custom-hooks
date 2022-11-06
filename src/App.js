import Hover from './components/Hover';
import useInput from './hooks/useInput';

function App() {
    const username = useInput('');

    return (
        <div>
            <input type='text' {...username} />
            <Hover />
        </div>
    );
}

export default App;
