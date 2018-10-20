<template>
    <div class="slider-area">
        <div class="slider-item">
            <div class="bg-3" style="opacity:0.6;"></div>
            <div class="container">
                <div class="row">
                    <div class="slider-text">
                        <h1>Search Donors</h1>
                    </div>
                    <div class="searchbox">
                        <form v-on:submit.prevent="onSearch">
                            <div class="col-md-3 col-sm-6 col-md-offset-1">
                                <input 
                                    autocomplete="off"
                                    type="text"
                                    name="city"
                                    class="form-control"
                                    v-model="city"
                                    placeholder="City Name">
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <select v-model="group" class="groups form-control">
                                    <option disabled value="">Choose Blood Group</option>
                                    <option v-for="group in groups" :key="group" :value="group">{{ group }}</option>
                                </select>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <input type="submit" value="Search Donor">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: '',
            group: '',
            groups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
        }
    },
    methods: {
        onSearch() {
            this.$router.push({
                name: 'search-donors',
                query: { city: this.city, group: this.group }
            })
        }
    }
}
</script>


<style scoped>
    .slider-item{
        background: url('../assets/img/search.jpg') no-repeat center center;
        background-size: cover;
    }
    select {
        width: 100%;
        height: 40px;
        text-indent: 10px;
        border-radius: 5px;
    }
    select.groups option {
        font-size: 15px;
    }
</style>

