<template>
    <div class="container">
        <div class="row">


            <!-- card-filter -->
            <div class="col-md-12">

            </div>
            <!-- card-filter end -->

            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">



                        <div class="card-tools">
                            <a href="" @click="print" target="_blank" class="btn btn-default"><i class="fas fa-print"></i> Print</a>
                        </div>

                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <!-- <th style="width: 10px">#</th> -->
                                <th>DATE</th>
                                <th>USER</th>
                                <th>CATEGORY</th>
                                <th>NO PO</th>
                                <th>NO RETURN </th>
                                <th>SUPLIER NAME</th>
                                <th>NO IST </th>
                                <th>STORE NAME</th>
                                <th>DESCRIPTION</th>
                                <th>INTRUCTION</th>
                                <th>STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="log.from == null" >
                                <th colspan="11">
                                    <center>There are no records to show</center>
                                </th>
                            </tr>

                            <tr v-for="log in log.data" :key="log.id">
                                <!-- <td>{{ log.id }}</td> -->
                                <td>{{ log.date | myDate}}</td>
                                <td>{{ log.user_name }}</td>
                                <td>{{ log.category_name}}</td>
                                <td>{{ log.no_po}}</td>
                                <td>{{ log.no_return }}</td>
                                <td>{{ log.suplier_name }}</td>
                                <td>{{ log.no_ist }}</td>
                                <td>{{ log.store_name }}</td>
                                <td>{{ log.description }}</td>
                                <td>{{ log.intruction }}</td>
                                <td>
                                    <span v-if="log.status == 'TODO'" class="badge bg-primary">{{ log.status }}</span>
                                    <span v-if="log.status == 'DOING'" class="badge bg-warning">{{ log.status }}</span>
                                    <span v-if="log.status == 'REVIEW'" class="badge bg-danger"> {{ log.status }}</span>
                                    <span v-if="log.status == 'DONE'" class="badge bg-success">{{ log.status }}</span>
                                </td>


                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <!-- .card-footer -->
                    <div class="card-footer">
                        <div class="col-md-6">
                            <p v-if="log.data"><i class="fa fa-bars"></i> {{ log.data.length }} item dari {{ log.total }} total data</p>
                        </div>
                        <div class="pull-right">
                            <b-pagination
                                v-model="page"
                                :total-rows="log.total"
                                :per-page="log.per_page"
                                aria-controls="log"
                                v-if="log.data && log.data.length > 0"
                            ></b-pagination>
                        </div>

                    </div>
                    <!-- /.card-footer -->

                </div>
            </div>

        </div>
    </div>
</template>
<script>

import { mapState, mapActions } from "vuex";
export default {
    created() {
        this.getLogReports();
    },
    data() {
        return {
            search: "",
            enabled: true
        };
    },
    computed: {
        ...mapState("log", {
            log: state => state.logReports 
        }),

        page: {
            get() {
                return this.$store.state.log.page;
            },
            set(val) {
                this.$store.commit("log/SET_PAGE", val);
            }
        }
    },
    watch: {
        page() {
            this.getLogReports();
        },
        search() {
            this.getLogReports(this.search);
        },
    },
    methods: {
        print() {
            window.print()
        },
        clear() {
            // this.getDocumentFilter(this.search);
            this.$store.commit("log/CLEAR_FILTER");
        },
        ...mapActions("log", [
            "getLogReports",
            "removeLog"
        ]),
        deleteLog(id) {
            const swalWithBootstrapButtons = swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    reverseButtons: true
                })
                .then(result => {
                    if (result.value) {
                        swalWithBootstrapButtons.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                        this.removeLog(id).then(() => {
                            // Fire.$emit("AfterCreate");
                            swal("Deleted!", "Your file has been deleted.", "success");
                        });
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            "Cancelled",
                            "Your imaginary file is safe :)",
                            "error"
                        );
                    }
                });
        }
    }
}
</script>
