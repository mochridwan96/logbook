<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <div class="card-heading">
                    <h3 class="panel-title">Edit Log</h3>
                </div>
                <div class="panel-body">
                    <log-form></log-form>
                    <div class="form-group">
                        <button class="btn btn-primary btn-sm" @click.prevent="submit">
                            <i class="fa fa-save"></i> Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Form from "./Form.vue";
export default {
    created() {
        this.editLog(this.$route.params.id);
        this.getLogs();
        this.CLEAR_ERRORS();
    },
    methods: {
        ...mapMutations(["CLEAR_ERRORS"]),
        ...mapActions(["toastSuccess"]),
        ...mapActions("log", ["editLog", "updateLog", "getLogs"]),
        submit() {
            this.$Progress.start();
            this.updateLog(this.$route.params.id).then(() => {
                this.$router.push({ name: "logs.data" });
                this.$Progress.finish();
                this.toastSuccess();
            });
        }
    },
    components: {
        "log-form": Form
    }
};
</script>
