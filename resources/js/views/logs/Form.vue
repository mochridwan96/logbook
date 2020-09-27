<template>
    <div>
        <div class="row">
                <div class="col-md-12">
                <div class="form-group required">
                    <label class="control-label" for>Kategori</label>
                    <select
                        :disabled="$gate.isManager()"
                        name="no_po"
                        v-model="log.category_id"
                        class="form-control"
                        :class="{ 'is-invalid': errors.category_id }"
                    >
                        <option value>Kategori</option>
                        <option
                            v-for="(category, index) in categories"
                            :key="index"
                            :value="category.id"
                        >{{category.name}}</option>
                    </select>
                    <p class="text-danger" v-if="errors.category_id">{{ errors.category_id[0] }}</p>
                </div>
            </div>
            
        </div>

        <div> 
        <!-- v-if="log.category_id"> -->

       <div class="container card ">
           <div>
                <div class="row mt-3" >
            <div class="col-md-6">
                <div class="form-group required">
                    <label class="control-label" for>Date</label>
                    <input
                        :disabled="$gate.isManager()"
                        type="date"
                        class="form-control"
                        v-model="log.date"
                        placeholder="Masukan Tanggal"
                        :class="{ 'is-invalid': errors.date }"
                    />
                    <p class="text-danger" v-if="errors.date">{{ errors.date[0] }}</p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group required">
                    <label class="control-label">Keterangan</label>
                    <textarea
                        :disabled="$gate.isManager()"
                        type="text"
                        class="form-control"
                        v-model="log.description"
                        :class="{ 'is-invalid': errors.description }"
                        placeholder="Masukan Keterangan"
                    />
                    <p class="text-danger" v-if="errors.description">{{ errors.description[0] }}</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6" >
                <div class="form-group required">
                    <label class="control-label" for>No PO</label>
                    <input
                        :disabled="$gate.isManager()"
                        type="text"
                        class="form-control"
                        v-model="log.no_po"
                        placeholder="Masukan No PO"
                        :class="{ 'is-invalid': errors.no_po }"
                    />
                    <p class="text-danger" v-if="errors.no_po">{{ errors.no_po[0] }}</p>
                </div>
            </div>

            <div class="col-md-6" v-if="log.category_id != 1">
                <div class="form-group required">
                    <label for class="control-label">No IST</label>
                    <input
                        :disabled="$gate.isManager()"
                        type="text"
                        class="form-control"
                        v-model="log.no_ist"
                        placeholder="Masukan No IST"
                        :class="{ 'is-invalid': errors.no_ist }"
                    />
                    <p class="text-danger" v-if="errors.no_ist">{{ errors.no_ist[0] }}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group required">
                    <label for class="control-label">No Return</label>
                    <input
                        :disabled="$gate.isManager()"
                        type="text"
                        class="form-control"
                        v-model="log.no_return"
                        placeholder="Masukan No Return"
                        :class="{ 'is-invalid': errors.no_return }"
                    />
                    <p class="text-danger" v-if="errors.no_return">{{ errors.no_return[0] }}</p>
                </div>
            </div>
            <div class="col-md-6"  v-if="log.category_id == 1">
                <div class="form-group required">
                    <label for class="control-label">Nama Suplier</label>
                    <input
                        :disabled="$gate.isManager()"
                        type="text"
                        class="form-control"
                        v-model="log.suplier_name"
                        placeholder="Masukan Nama Suplier"
                        :class="{ 'is-invalid': errors.suplier_name }"
                    />
                    <p class="text-danger" v-if="errors.suplier_name">{{ errors.suplier_name[0] }}</p>
                </div>
            </div>
                 <div class="col-md-6"  v-if="log.category_id != 1">
                <div class="form-group required">
                    <label for class="control-label">Nama Store</label>
                    <input
                        :disabled="$gate.isManager()"
                        type="text"
                        class="form-control"
                        v-model="log.store_name"
                        placeholder="Masukan Nama Store"
                        :class="{ 'is-invalid': errors.store_name }"
                    />
                    <p class="text-danger" v-if="errors.store_name">{{ errors.store_name[0] }}</p>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-md-6">
                <div class="form-group required">
                    <label for class="control-label">Intruksi Atasan</label>
                    <textarea
                        type="text"
                        class="form-control"
                        v-model="log.intruction"
                        :class="{ 'is-invalid': errors.intruction }"
                        placeholder="Masukan Inturkisi Atasan"
                    />
                    <p class="text-danger" v-if="errors.intruction">{{ errors.intruction[0] }}</p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group required">
                    <label class="control-label" for>Status</label>
                    <select
                        name="no_po"
                        v-model="log.status"
                        class="form-control"
                        :class="{ 'is-invalid': errors.status }"
                    >
                        <option value>Status</option>
                        <option
                            v-for="(status, index) in statuses"
                            :key="index"
                            :value="status.name"
                        >{{status.name}}</option>
                    </select>
                    <p class="text-danger" v-if="errors.status">{{ errors.status[0] }}</p>
                </div>
            </div>

        </div>

        </div>
       </div>

        </div>

    </div>
</template>
<script>
// import { Money } from "v-money"
// import { ModelSelect } from 'vue-search-select'
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    components: {  },
    data() {
        return {
            statuses: [
                {'name': 'TODO'},
                {'name': 'DOING'},
                {'name': 'REVIEW'},
                {'name': 'DONE'},
            ],
            // categories: [
            //     {'id': 1,'name': 'Suplier'},
            //     {'id': 2,'name': 'Foodline'},
            //     {'id': 3,'name': 'Hardline'},
            //     {'id': 4,'name': 'Softline'},
            // ]
        };
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("log", {
            log: state => state.log
        }),
        ...mapState("log", {
            categories: state => state.categories
        }),
        ...mapState("log", {
            subcategories: state => state.subcategories
        })
    },
    methods: {
        ...mapMutations("log", ["CLEAR_FORM"]),
        ...mapMutations(["CLEAR_ERRORS"]),
        ...mapActions("log", ["getCategories","getSubCategories"])
    },
    destroyed() {
        this.CLEAR_FORM();
    },
    created() {
        this.CLEAR_FORM();
        this.getCategories();
        this.getSubCategories();
    }
};
</script>
