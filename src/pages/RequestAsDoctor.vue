<template>
    <div class="main">
        <div class="container contact-form" v-if="!submitted">
            <div class="contact-image">
                <img src="../assets/img/doctor.png" alt="rocket_contact"/>
            </div>
            <form v-on:submit.prevent="onSubmit()">
                <h3>Send us a your information for signing up as a doctor</h3>
               <div class="row">
                    <div class="col-md-12">
                        <div class="form-group" :class="{ 'has-error': errors.has('name') }">
                            <label>Name:</label><br>
                            <input
                                type="text"
                                v-validate="'required'"
                                v-model="doctor.name"
                                name="name"
                                class="form-control"
                                placeholder="Your Name *"
                                value="" />
                            <span class="help-block" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                        </div>
                        <div class="form-group" :class="{ 'has-error': errors.has('email') }">
                            <label>Email:</label><br>
                            <input
                                type="text"
                                v-validate="{ required: true, email: true, regex: /\S+@\S+\.\S+/ }"
                                v-model="doctor.email"
                                name="email"
                                class="form-control" 
                                placeholder="Your Email *" 
                                value="" />
                            <span class="help-block" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                        </div>
                        <div class="form-group" :class="{ 'has-error': errors.has('chamber') }">
                            <label>Chamber:</label><br>
                            <input
                                type="text"
                                v-validate="{ required: true }"
                                v-model="doctor.chamber"
                                name="email"
                                class="form-control" 
                                placeholder="Your chamber *" 
                                value="" />
                            <span class="help-block" v-show="errors.has('chamber')">{{ errors.first('chamber') }}</span>
                        </div>
                        <div class="form-group" :class="{ 'has-error': errors.has('degree') }">
                            <label>Degree:</label><br>
                            <input
                                type="text"
                                v-validate="{ required: true }"
                                v-model="doctor.degree"
                                name="email"
                                class="form-control" 
                                placeholder="Your degree *" 
                                value="" />
                            <span class="help-block" v-show="errors.has('degree')">{{ errors.first('degree') }}</span>
                        </div>
                        <div class="form-group" :class="{ 'has-error': errors.has('address') }">
                            <label>Address:</label><br>
                            <input
                                type="text"
                                v-validate="{ required: true }"
                                v-model="doctor.address"
                                name="email"
                                class="form-control" 
                                placeholder="Your address *" 
                                value="" />
                            <span class="help-block" v-show="errors.has('address')">{{ errors.first('address') }}</span>
                        </div>
                        <div class="form-group" :class="{ 'has-error': errors.has('specialist') }">
                            <label>Specialist:</label><br>
                            <input
                                type="text"
                                autocomplete="off"
                                v-validate="{ required: true }"
                                v-model="doctor.specialist"
                                name="email"
                                class="form-control" 
                                placeholder="Specialist *" 
                                value="" />
                            <span class="help-block" v-show="errors.has('specialist')">{{ errors.first('specialist') }}</span>
                        </div>
                        <div class="form-group" :class="{ 'has-error': errors.has('phone') }">
                            <label>Phone:</label><br>
                            <input 
                                type="number"
                                v-validate="'required'"
                                v-model="doctor.phone"
                                name="phone"
                                class="form-control" 
                                placeholder="Your Phone Number *" 
                                value="" />
                            <span class="help-block" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                        </div>
                        <div class="form-group" :class="{ 'has-error': errors.has('registration') }">
                            <label>Registration Number:</label><br>
                            <input 
                                type="text"
                                v-validate="'required'"
                                v-model="doctor.registration"
                                name="registration"
                                class="form-control" 
                                placeholder="Your Registration Number *"
                                value="" />
                            <span class="help-block" v-show="errors.has('registration')">{{ errors.first('registration') }}</span>
                        </div>
                        <div class="form-group">
                            <input 
                                type="submit" 
                                class="btnContact" 
                                value="Send" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div v-else class="container info">
            <div class="text-center">
                <p>Thanks for adding as a doctor!</p>
                <p>We will review your information and let you know through your email</p>
            </div>
        </div>
    </div>
</template>

<script>
import { dbRequestDoctorsRef } from '../../firebase.js';
export default {
    data() {
        return {
            doctor: {},
            submitted: false
        }
    },
    methods: {
        onSubmit() {
            this.$validator.validateAll().then(res=>{
                if(res) {
                    //this.doctor.status = 'null';
                    this.doctor.image_link = 'image';
                    this.doctor.rating = 1;
                    dbRequestDoctorsRef.push(this.doctor)
                        .then((data) => {
                            // console.log(data);
                        })
                        .catch(err => console.log(err));
                    this.submitted = true;
                }
            })
        }
    }
}
</script>


<style scoped>
.main{
    background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
    height: 873px;
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
    width: 11%;
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
</style>