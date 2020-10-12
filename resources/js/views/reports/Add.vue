<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <div class="panel-heading">
                    <h3 class="panel-tilte">Buat Log Baru</h3>
                </div>
                <div class="panel-body">
                    <log-form></log-form>
                    <div class="class-form-group">
                        <button
                            class="btn btn-primary btn-sm"
                            @click.prevent="submit"
                        >
                            <i class="fa fa-save"></i> Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Form from "./FormEdit.vue";
export default {
    data() {
        return {};
    },
    methods: {
        ...mapMutations(["CLEAR_ERRORS"]),
        ...mapActions(["toastSuccess"]),
        ...mapActions("log", ["submitLog"]),
        submit() {
            this.$Progress.start();
            this.submitLog().then(() => {
                this.$router.push({ name: "logs.data" });
                this.$Progress.finish();
                this.toastSuccess();
            });

        }
    },
    created() {
        this.CLEAR_ERRORS();
    },
    components: {
        "log-form": Form
    }
};
</script>
