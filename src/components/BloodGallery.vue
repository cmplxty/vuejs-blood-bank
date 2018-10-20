<template>
    <div class="blood-gallery bg-gray">
        <div class="container">
            <div class="row">
                <div class="headline">
                    <h2>Blood Groups</h2>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12" v-for="group in groups" :key="group">
                    <div class="blood-item">
                        <a :href='`/search-donors/${group}`'>{{ group }}</a>
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
            groups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
        }
    }
}
</script>

