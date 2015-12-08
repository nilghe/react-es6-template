var alt = require('../alt');
var PostActions = require('../actions/app-actions.jsx');

class AppStore {
    constructor() {
        this.appData = [];
        this.errorMessage = null;

        this.bindListeners({
            handleUpdateData: PostActions.UPDATE_DATA,
            handleFetchData: PostActions.FETCH_DATA,
            handleDataFailed: PostActions.DATA_FAILED
        });
    }

    handleUpdateData(appData) {
        this.appData = appData;
        this.errorMessage = null;
    }

    handleFetchData() {
        this.appData = [];
    }

    handleDataFailed(err) {
        this.errorMessage = err;
    }
}

module.exports = alt.createStore(AppStore, 'AppStore');