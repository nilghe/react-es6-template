let React       = require('react');
let AppStore    = require('../stores/app-stores.jsx');
let AppActions  = require('../actions/app-actions.jsx');

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
                <h1i>React App Component</h1>

                {this.state.appData.map((data) => {
                    return (
                        <p key={data.id}>{data.name}</p> 
                    )
                })}
            </div>
        )
    }
});

module.exports = App;
