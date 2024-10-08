// Created App with Vue
const { createApp } = Vue

createApp({
    data() {
        return {
            //Created empty array for data
            diskList: [],
        }
    },

    methods: {
        // API Call with axios
        getDisk() {
            axios.get('http://localhost/php-dischi-json/api/dischi-api.php')
                .then(response => {
                    // handle success
                    console.log(response.data);
                    //Add the data in the disklist array
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
        //Call the function at the creation of the app
        this.getDisk()
    }
}).mount('#app')