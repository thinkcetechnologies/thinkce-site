<template>
    <hr class="hr-bold bg-warning ">
    <div class="page-footer text-light bg-dark">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-3">
                    <img src="../assets/images/img5.png" alt="logo" width="50px" class="rounded-circle">
                    <span><h4>ThinkCE Tech</h4></span>
                    <p>The best technology industry in Ghana</p>
                </div>
                <div class="col-md-3">
                    <h3>Our Address</h3>
                    <div>
                        <p>Tel: +233246136978</p>
                        <p>Tel: +233205187878</p>
                        <p>A: Accra Abeka-Tesano</p>
                        <p>Mail: thinkce123@gmail.com</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <h3>Quick Links</h3>
                    <div class="quick-links">
                        <router-link to="/">Home</router-link>
                        <router-link to="/service">Service</router-link>
                        <router-link to="/">Team</router-link>
                        <router-link to="/">Contact Us</router-link>
                        <router-link to="/">About Us</router-link>
                    </div>
                </div>
                <div class="col-md-3">
                    <h3>Social Media</h3>
                    <a href="#"><fai icon="facebook"></fai></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style lang="scss" scoped>
    .page-footer{
        height: 400px !important;
        width: 100% !important;

        @media screen and (max-width: 770px){
            height: auto !important;
        }
    }

    .quick-links{
        display: block;
        a{
            text-decoration: none;
            color: #e6dee9 !important;
            display: block;
            cursor: pointer;
        }
    }
</style>