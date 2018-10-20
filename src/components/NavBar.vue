<template>
    <div class="menu-area">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="logo">
                        <a href="/">
                            <img src="../assets/img/blood.jpg" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-md-8 col-sm-9">
                    <div class="menu">
                        <ul id="nav" class="main-menu">
                            <li>
                                <router-link :to="{name: 'home'}">Home</router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'donors'}">Donors</router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'as-donor'}">Add as donor</router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'request-as-doctor'}">Request as doctor</router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'contact-us'}">About us</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
