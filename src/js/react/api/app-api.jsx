module.exports = {
    fetchData(opts) {

        let options = {
            url: 'http://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }

        if (opts) {
            $.extend(options, opts);
        }

        return $.ajax(options);
    }
}