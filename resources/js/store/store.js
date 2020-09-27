import Vue from "vue";
import Vuex from "vuex";
// import user from "./user.js";
import log from "./log.js";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        // user,
        log
    },
    state: {
        errors: [],
        message: "",
        status: ""
    },
    actions: {
        toastSuccess({state}) {
            const Toast = swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: toast => {
                    toast.addEventListener("mouseenter", swal.stopTimer);
                    toast.addEventListener("mouseleave", swal.resumeTimer);
                }
            });

            Toast.fire({
                icon: "success",
                title: state.message
            });
        }
    },
    mutations: {
        SET_ERRORS(state, payload) {
            state.errors = payload;
        },
        CLEAR_ERRORS(state) {
            state.errors = [];
        },
        SET_MESSAGE(state, payload) {
            state.message = payload
        },
        SET_STATUS(state, payload) {
            state.status = payload
        }
    }
});
