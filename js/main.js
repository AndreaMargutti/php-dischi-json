const { createApp } = Vue

createApp({
    data() {
        return {
            diskList: [],
        }
    },

    methods: {
        getDisk() {
            axios.get('http://localhost/php-dischi-json/api/dischi-api.php')
                .then(response => {
                    // handle success
                    console.log(response.data);
                    this.diskList = response.data;
                    console.log(this.diskList);
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                })
        }
    },

    created() {
        this.getDisk()
    }
}).mount('#app')