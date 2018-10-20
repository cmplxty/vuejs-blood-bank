<template>
    <div>
        <h1 class="text-center">We have found {{ Object.keys(donors).length }} donors with group {{ group }} and city {{ city }}</h1>
        <div class="donner-page-area" v-if="loaded">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-4 col-xs-12 blood-list" v-for="(donor, index) in donors" :key="index">
                        <div class="card hovercard">
                            <div class="cardheader"></div>
                            <div class="avatar">
                                <img alt="" src="https://i.imgur.com/I80W1Q0.png">
                            </div>
                            <div class="info">
                                <div class="title">
                                    <a href="">{{ donor.name }}</a>
                                </div>
                                <h4>Blood Group: <span>{{ donor.group }}</span> </h4>
                            </div>
                            <div class="bottom">
                                <a class="btn btn-primary btn-sm" rel="publisher" href="">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </div>
                            <div class="donner-link">
                                <a href="#" @click="adonor = donor" data-toggle="modal" data-target="#myModal">Show Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" v-if="adonor.name">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <h4 class="modal-title" id="myModalLabel">Donor Details</h4>
                            </div>
                            <div class="modal-body">
                                <div class="donor-profile">
                                    <div class="donor-img text-center">
                                        <img src="https://i.imgur.com/I80W1Q0.png" class="upload-preview">
                                    </div>
                                    <div class="personal-info text-center">
                                        <h3>{{ adonor.name }}</h3>
                                        <p>{{ adonor.phone }}</p>
                                        <p><strong>{{ adonor.group }}</strong></p>
                                    </div>
                                    <div class="address text-center">
                                        <p><strong>Phone Number :</strong> {{ adonor.phone }}</p>
                                        <p><strong>City :</strong> {{ adonor.city }}</p>
                                        <p><strong>Age :</strong> {{ adonor.age }}</p>
                                        <p><strong>Weight :</strong> {{ adonor.weight }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { dbDonorsRef } from '../../firebase.js';
export default {
    data() {
        return {
            city: '',
            group: '',
            donors: [],
            adonor: {},
            loaded: false
        }
    },
    mounted() {
        this.city = this.$route.query.city;
        this.group = this.$route.query.group;
        if(this.city.length > 0 && this.group.length > 0){
            this.findDonors();
        }else if(this.city.length > 0 && this.group.length == 0){
            this.findDonorsWithCity();
        }else{
            this.findDonors();
        }
    },
    methods: {
        findDonors() {
            let self = this;
            dbDonorsRef.orderByChild('group').equalTo(this.group).on("value", (snapshot) => {
                snapshot.forEach(data => {
                    console.log(data.val());
                    if(self.city.length > 0){
                        if(data.val().city == self.city){
                            self.donors.push(data.val());
                        }
                    }else{
                        self.donors.push(data.val());
                    }
                });
                self.loaded = true;
            });
        },
        findDonorsWithCity() {
            let self = this;
            dbDonorsRef.orderByChild('city').equalTo(this.city).on("value", (snapshot) => {
                self.donors = snapshot.val();
                self.loaded = true;
            });
        }
    }
}
</script>

