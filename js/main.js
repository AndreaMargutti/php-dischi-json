const { createApp } = Vue

createApp({
    data() {
        return {

        }
    },

    methods: {
        getDisk() {
            axios.get('http://localhost/php-dischi-json/api/dischi-api.php')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },

    created() {
        getDisk();
    }
}).mount('#app')