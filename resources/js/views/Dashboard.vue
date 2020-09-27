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
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box">
                            <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">Revenues</span>
                                <span class="info-box-number">
                  Rp. 5.000.000
                  <small></small>
                </span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box mb-3">
                            <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-thumbs-up"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">Expenses</span>
                                <span class="info-box-number">Rp. 5.000.000</span>
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
                            <span class="info-box-icon bg-success elevation-1"><i class="fas fa-shopping-cart"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">Profit</span>
                                <span class="info-box-number">Rp. 5.000.000</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box mb-3">
                            <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-users"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">Loss</span>
                                <span class="info-box-number">Rp. 1.000.000</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                </div>

                <div class="row">
                    <!-- <div class="col-md-6">
                        <div class="card">
                          <div class="card-header">
                            Pertumbukan Portofolio Rp Miliar/Tahun
                          </div>
                          <div id="chart">
                        <!-- <apexchart type="line" height="350" :options="chartOptions" :series="series"/>
                    </div>
                        </div>
                    </div> -->

                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                Cash Flow
                            </div>
                            <BaseMixedChart/>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                List Accounts
                            </div>
                            <BaseBarHorizontal/>
                        </div>
                    </div>
                </div>
                <!-- end row -->
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                Cash
                            </div>
                            <BaseLineCharNormal/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                Operational
                            </div>
                            <BaseLineCharNormal/>
                        </div>
                    </div>
                </div>

                <!-- <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-header">
                        Profit & Loss
                      </div>
                      <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                          <tbody>
                            <tr>
                              <th>Group</th>
                              <th>Jumlah Perusahaan Inti</th>
                              <th>Jumlah Koperasi</th>
                              <th>Luas Lahan Yang Dibiayai (Ha)</th>
                              <th>Os Pembiayaan (RP Miliar)</th>
                            </tr>

                            <tr>
                              <td>
                                <router-link
                                :to="{ name: 'portopolios.data' }"
                                >Group A</router-link>

                                </td>
                              <td>100</td>
                              <td>2.500</td>
                              <td>10.000</td>
                              <td>500.000</td>

                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div> -->


            </div>
            <!-- container -->
        </section>
    </div>
    <!-- end div -->
</template>

<script>
// import MonthlyIncome from ''
// import VueApexCharts from "apexcharts";
export default {
    components: {
        // "apexchart": VueApexCharts,
    },
    data() {
        return {
            series: [{
                name: 'Website Blog',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
                name: 'Social Media',
                type: 'line',
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: 'Traffic Sources'
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: 'Website Blog',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: 'Social Media'
                    }
                }]
            },
        }

    },
    mounted() {

        console.log('Component mounted.')
    }
}
</script>
