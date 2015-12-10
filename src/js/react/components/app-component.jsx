import React       from 'react';
import AppStore    from '../stores/app-stores.jsx';
import AppActions  from '../actions/app-actions.jsx';

let App = React.createClass({
    getInitialState() {
        return AppStore.getState();
    },

    componentDidMount() {
        AppStore.listen(this.onChange);
        AppActions.fetchData();
    },

    componentWillUnmount() {
        AppStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render() {
        return (
            <div>
                <h1>React App Component</h1>

                {this.state.appData.map((data) => {
                    return (
                        <p key={data.id}>{data.name}</p> 
                    )
                })}
            </div>
        )
    }
});

export default App;
