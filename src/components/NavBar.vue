<template>
    <nav class="navbar navbar-expand-lg young-passion-gradient navbar-dark justify-content-center fixed-top">
        <div class="container">
            <router-link class="navbar-brand" to="/">ThinkCE Technologies</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><fai icon="home"></fai> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/service"><fai icon="chart-gantt"></fai> Service</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/team"><fai icon="users-gear"></fai> Team</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#"><fai icon="phone"></fai> Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#"><fai icon="circle-info"></fai> About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style>
    *{
        font-family:  'Roboto', sans-serif !important;
    }
    @media screen and (min-width: 770px){
        .navbar{
            height: 90px !important;
        }
    }
    .nav-link{
        font-size: 20px !important;
        padding-right: 30px !important;
    }
</style>