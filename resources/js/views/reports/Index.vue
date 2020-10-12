<template>
    <div class="container">
        <section class="content-header">
            <div class="row">
                <div class="col-md-6 col-6">
                    <h2>Log Book Report</h2>
                </div>

                <!-- <div class="col-md-3 col-6">
                  <router-link :to="{ name: 'journals.add' }" class="btn btn-primary lg">
                    <i class="fas fa-plus"></i>
                    New General Jurnal
                  </router-link>
                </div> -->
                <div class="col-md-6 mr-10 ">

                </div>
            </div>
        </section>

        <section class="content">
            <div class="row">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>
