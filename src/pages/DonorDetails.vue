<template>
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title" id="myModalLabel">Donor Details</h4>
        </div>
        <div class="modal-body">
            <div class="donor-profile">
                <div class="donor-img">
                    <img src="http://themeatelier.net/wp-plugins/idonate-plugin/wp-content/uploads/2018/09/29995608_384523672063282_1208333640_o.jpg" class="upload-preview">									</div>
                <div class="personal-info text-center">
                    <h3>ssss</h3>
                    <p>shahajadi0816@gmail.com</p>
                    <p>2222</p>
                    <p>available</p>
                    <p>O-</p>
                </div>
                <div class="address text-center">
                    <p><strong>Land Line Number :</strong> 222</p>
                    <p><strong>Country :</strong> Bangladesh</p>
                    <p><strong>State :</strong> Bagerhat</p>
                    <p><strong>City :</strong> 222</p>
                    <p><strong>Address :</strong> 222</p>
                    <p><strong>User Name:</strong> 222</p>
                    <p><strong>Email :</strong> shahajadi0816@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
    </div>
</template>

<script>
import { dbDonorsRef } from '../../firebase.js';
export default {
    data() {
        return {
            donor: {}
        }
    },
    mounted() {
        this.getDonorInfo();
    },
    methods: {
        getDonorInfo() {
            dbDonorsRef.child(this.$route.params.key).once('value')
                .then(snapshot => {
                    console.log(snapshot.val());
                })
        }
    }
}
</script>

