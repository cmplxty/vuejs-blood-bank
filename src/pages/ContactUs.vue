<template>
    <div class="contact-area bg-area">
        <h1 class="text-center">Contact Us</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="contact-item">
                        <div class="contact-text">
                            <i class="fa fa-map-marker"></i>
                            <h3>Address</h3>
                            <p>Shyamoli, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="contact-item">
                        <div class="contact-text">
                            <i class="fa fa-phone"></i>
                            <h3>Email</h3>
                            <p>contact@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="contact-item">
                        <div class="contact-text">
                            <i class="fa fa-envelope-o"></i>
                            <h3>Phone</h3>
                            <p>123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="contact-item">
                        <div class="contact-text">
                            <i class="fa fa-fax"></i>
                            <h3>Fax</h3>
                            <p>123-456-7890</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="contact-form">
                        <form @submit.prevent="onSubmit">
                            <div class="form-row">

                                <div class="form-group">
                                    <label for="">Full Name *</label>
                                    <input type="text" required v-model="data.name" class="form-control" placeholder="Full Name">
                                </div>

                                <div class="form-group">
                                    <label for="">Phone Number *</label>
                                    <input type="text" required v-model="data.phone" class="form-control" placeholder="Phone Number">
                                </div>

                                <div class="form-group">
                                    <label for="">Email *</label>
                                    <input type="text" required v-model="data.email" class="form-control" placeholder="Email">
                                </div>


                                <div class="form-group">
                                    <label for="">Massege *</label>
                                    <textarea class="form-control" required v-model="data.message"></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary" name="form_contact">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="map-area">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2387790516955!2d90.36327166438527!3d23.774510034577485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a555667c3d%3A0xec49503fc397c419!2sShyamoli+Square%2C+Plot+%23+24%2F1-2%2C+Mirpur+Rd%2C+Dhaka+1207!5e0!3m2!1sen!2sbd!4v1539701352362" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { dbContactRef } from '../../firebase.js';
export default {
    data() {
        return {
            data: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    },
    methods: {
        onSubmit() {
            dbContactRef.push(this.data)
                .then(res => {
                    console.log(res);
                    this.data.name = '';
                    this.data.email = '';
                    this.data.phone = '';
                    this.data.message = '';
                });
        }
    }
}
</script>


<style scoped>
.contact-form {
    margin-top: 30px;
}
.btn-primary {
    border: none;
    border-radius: 1rem;
    background: #dc3545;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
}
</style>
