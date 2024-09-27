import React, {Fragment} from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App: React.FunctionComponent = () => {
    return (
        <Fragment>
            <Greeting name="Oluchi" />

            <Counter />
        </Fragment>
    );
};

export default App;
