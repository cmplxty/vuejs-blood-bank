<template>
    <div class="main">
        <div class="container contact-form" v-if="!submitted">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form v-on:submit.prevent="onSubmit()">
                <h3>Send us a your information</h3>
               <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Name:</label><br>
                            <input type="text" required name="name" v-model="donor.name" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <label>Phone:</label><br>
                            <input type="tel" required name="phone" v-model="donor.phone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group">
                            <label>City:</label><br>
                            <input type="text" required name="city" v-model="donor.city" class="form-control" placeholder="Your City *" value="" />
                        </div>
                        <div class="form-group">
                            <label>Age:</label><br>
                            <input type="text" required name="age" v-model="donor.age" class="form-control" placeholder="Your Age *" value="" />
                        </div>
                        <div class="form-group">
                            <label>Weight:</label><br>
                            <input type="text" required name="weight" v-model="donor.weight" class="form-control" placeholder="Your Weight *" value="" />
                        </div>
                        <div class="form-group">
                            <label>You blood group:</label><br>
                            <select v-model="donor.group" required class="groups form-control">
                                <option v-for="group in groups" :key="group" :value="group">{{ group }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnContact" value="Send" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div v-else class="container info">
            <div class="text-center">
                <p>Thanks for adding as a donor!</p>
            </div>
        </div>
    </div>
</template>

<script>
import { dbDonorsRef } from '../../firebase.js';
export default {
    data() {
        return {
            donor: {},
            group: '',
            groups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
            submitted: false
        }
    },
    methods: {
        onSubmit() {
            dbDonorsRef.push(this.donor)
                .then((data) => {
                    console.log(data);
                })
                .catch(err => console.log(err));
            this.submitted = true;
        }
    }
}
</script>


<style scoped>
.main{
    background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
    height: 700px;
}
.contact-form{
    background: #fff;
    width: 70%;
}
.info{
    background: #fff;
    width: 70%;
    height: 300px;
    color: #dc3545;
}

.info p{
    font-size: 20px;
    font-style: bold;
    margin-top: 10%;
}

.contact-image{
    text-align: center;
}
.contact-image img{
    border-radius: 6rem;
    width: 11%;
    transform: rotate(29deg);
}
.contact-form form{
    padding: 14%;
}
.contact-form form .row{
    margin-bottom: -7%;
}
.contact-form h3{
    margin-bottom: 8%;
    margin-top: -10%;
    text-align: center;
    color: #dc3545;
}
.contact-form .btnContact {
    width: 50%;
    border: none;
    border-radius: 1rem;
    padding: 1.5%;
    background: #dc3545;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
}
.btnContactSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    color: #fff;
    background-color: #0062cc;
    border: none;
    cursor: pointer;
}
</style>

