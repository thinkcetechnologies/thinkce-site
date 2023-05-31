<template>
    <div class="header">
        <div class="jumb justify-content-center">
            <div class="row">
                <div class="col-sm-12 mt-5">
                    <div class="text-center mt-5">
                        <h1 class="text-warning">// TEAM</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamComponent"
    }
</script>

<style scoped>
    .header{
        font-family: fantasy !important;
        height: 600px !important;
        color: #ffffff !important;
        background-image: url("../assets/images/img6.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .header h6{
        font-size: 30px;
        padding-bottom: 30px;
    }
    .header h1{
        padding-top: 200px;
        font-size: 70px;
        padding-bottom: 30px;
    }
    .jumb{
        width: 100% !important;
        height: 600px !important;
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>