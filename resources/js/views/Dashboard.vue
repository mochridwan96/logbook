<template>
    <div>
        <div class="content-header">
            <div class="container">
                <div class="row mb-3">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Dashboard</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">

                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <section class="content">
            <div class="container-fluid">
                <!-- <div class="row justify-content-center"> -->
                <!-- <not-found></not-found> -->

                <!-- info boxes -->
                <div class="row" >
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box">
                            <span class="info-box-icon bg-info elevation-1"><i class=""></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">TODO</span>
                                <span class="info-box-number" v-for="(card, index) in cards" v-if="index == 0">
                                {{ card.TODO }}
                                <small></small>
                                </span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box mb-3" >
                            <span class="info-box-icon bg-warning elevation-1"><i class=""></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">DOING</span>
                                <span class="info-box-number" v-for="(card, index) in cards" v-if="index ==1">{{ card.DOING }}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->

                    <!-- fix for small devices only -->
                    <div class="clearfix hidden-md-up"></div>

                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box mb-3">
                            <span class="info-box-icon bg-danger elevation-1"><i class=""></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">REVIEW</span>
                                <span class="info-box-number" v-for="(card, index) in cards" v-if="index ==2">{{ card.REVIEW}}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box mb-3">
                            <span class="info-box-icon bg-success elevation-1"><i class=""></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">DONE</span>
                                <span class="info-box-number" v-for="(card, index) in cards" v-if="index ==3">{{ card.DONE}}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                </div>

               

            </div>
            <!-- container -->
        </section>
    </div>
    <!-- end div -->
</template>

<script>
// import MonthlyIncome from ''
// import VueApexCharts from "apexcharts";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    components: {
        // "apexchart": VueApexCharts,
    },
    data() {
        return {
           
        }

    },
    computed: {
        ...mapState("dashboard", {
            cards: state => state.cards
        }),
    },
    methods: {
        ...mapActions("dashboard", ["getCards","getReport"])
    },
    mounted() {

        console.log('Component mounted.')
    },
    created() {
        this.getReport();
        this.getCards();
    }
}
</script>
