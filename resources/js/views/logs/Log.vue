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

                        <h3 class="card-title" v-show="!$gate.isManager()" >
                            <router-link :to="{ name: 'logs.add' }" class="btn btn-primary lg">
                                <i class="fas fa-plus"></i>
                                Tambah
                            </router-link>
                        </h3>

                        <div class="card-tools">
                            <input type="text" class="form-control form-control-navbar" placeholder="Cari..." v-model="search" />
                        </div>

                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th style="width: 10px">#</th>
                                <th>CATEGORY</th>
                                <th>DATE</th>
                                <th>DESCRIPTION</th>
                                <th>NO PO</th>
                                <th>NO IST </th>
                                <th>INTRUCTION</th>
                                <th>STATUS</th>
                                <th style="width: 30px">ACTIONS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="log.logs.from == null" >
                                <th colspan="9">
                                    <center>There are no records to show</center>
                                </th>
                            </tr>

                            <tr v-for="log in log.logs.data" :key="log.id">
                                <td>{{ log.id }}</td>
                                <td>{{ log.category_name}}</td>
                                <td>{{ log.date |myDate}}</td>
                                <td>{{ log.description }}</td>
                                <td>{{ log.no_po}}</td>
                                <td>{{ log.no_ist }}</td>
                                <td>{{ log.intruction }}</td>
                                <td>
                                    <span v-if="log.status == 'TODO'" class="badge bg-primary">{{ log.status }}</span>
                                    <span v-if="log.status == 'DOING'" class="badge bg-warning">{{ log.status }}</span>
                                    <span v-if="log.status == 'REVIEW'" class="badge bg-danger"> {{ log.status }}</span>
                                    <span v-if="log.status == 'DONE'" class="badge bg-success">{{ log.status }}</span>
                                </td>

                                <td>
                                    <span v-if="log.user_id == $gate.isIdEmployee() || $gate.isIdAdmin() == 1">

                                    <router-link
                                        :to="{ name: 'logs.edit', params: {id: log.id} }">
                                        <i class="fa fa-edit blue"></i>
                                    </router-link>
                                    </span>

                                    <span v-if="log.user_id == $gate.isIdEmployee() || $gate.isIdAdmin() == 1">
                                            <a v-show="!$gate.isManager()"  href="#" @click="deleteLog(log.id)">
                                                <i class="fa fa-trash red"></i>
                                            </a>
                                    </span>


                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <!-- .card-footer -->
                    <div class="card-footer">
                        <div class="col-md-6">
                            <p v-if="log.logs.data"><i class="fa fa-bars"></i> {{ log.logs.data.length }} item dari {{ log.logs.total }} total data</p>
                        </div>
                        <div class="pull-right">
                            <b-pagination
                                v-model="page"
                                :total-rows="log.logs.total"
                                :per-page="log.logs.per_page"
                                aria-controls="log"
                                v-if="log.logs.data && log.logs.data.length > 0"
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
        this.getLogs();
    },
    data() {
        return {
            search: "",
            enabled: true
        };
    },
    computed: {
        ...mapState(["log"]),

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
            this.getLogs();
        },
        search() {
            this.getLogs(this.search);
        },
    },
    methods: {
        clear() {
            // this.getDocumentFilter(this.search);
            this.$store.commit("log/CLEAR_FILTER");
        },
        ...mapActions("log", [
            "getLogs",
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
