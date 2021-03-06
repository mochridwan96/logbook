import logService from "../services/logService.js";

export const namespaced = true;

export const state = {
    categories: [],
    subcategories: [],
    logReports: [],
    logs: [],
    log: {
        id: "",
        date: "",
        description: "",
        category_id: "",
        no_po: "",
        no_ist: "",
        no_return: "",
        suplier_name: "",
        store_name: "",
        intruction: "",
        user_id: "",
        status: "",
    },
    page: 1
};

export const mutations = {
    ASSIGN_DATA(state, logs) {
        state.logs = logs;
    },
    ASSIGN_DATA_REPORT(state, logs) {
        state.logReports = logs;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    DATA_CATEGORIES(state, payload) {
        state.categories = payload;
    },
    DATA_SUB_CATEGORIES(state, payload) {
        state.subcategories = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.log = {
            id: payload.id,
            date: payload.date,
            description: payload.description,
            category_id: payload.category_id,
            no_po: payload.no_po,
            no_ist: payload.no_ist,
            no_return: payload.no_return,
            suplier_name: payload.suplier_name,
            store_name: payload.store_name,
            intruction: payload.intruction,
            status: payload.status,
        };
    },
    CLEAR_FORM(state) {
        state.log = {
            id: "",
            date: "",
            description: "",
            category_id: "",
            no_po: "",
            no_ist: "",
            no_return: "",
            suplier_name: "",
            store_name: "",
            intruction: "",
            status: "",
        };
    }
};

export const actions = {
    getLogs({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";

        return new Promise((resolve, reject) => {
            logService.getLogs(state.page, search)
                .then(response => {
                    commit("ASSIGN_DATA", response.data.result);
                    console.log(response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    const notification = {
                        type: "error",
                        message:
                            "There was a problem fetching events: " +
                            error.message
                    };
                    // dispatch("notification/add", notification, { root: true });
                });
        });
    },
    getLogReports({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";

        return new Promise((resolve, reject) => {
            logService.getLogReports(state.page, search)
                .then(response => {
                    commit("ASSIGN_DATA_REPORT", response.data.result);
                    console.log(response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    const notification = {
                        type: "error",
                        message:
                            "There was a problem fetching events: " +
                            error.message
                    };
                    // dispatch("notification/add", notification, { root: true });
                });
        });
    },

    submitLog({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            logService.postLog(state.log)
                .then(response => {
                    dispatch("getLogs").then(() => {
                        resolve(response.data);
                    });
                    commit("SET_MESSAGE", response.data.message, {
                        root: true
                    });
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        commit("SET_ERRORS", error.response.data.errors, {
                            root: true
                        });
                        // console.log(error.response.data.errors)
                    }
                });
        });
    },
    editLog({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            logService.getLog(payload)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                    // console.log(response.data.result);
                })
                .catch(error => {
                    // console.log(error.message);
                });
        });
    },
    updateLog({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            logService.updateLog(id, state.log)
                .then(response => {
                    commit("CLEAR_FORM");
                    resolve(response.data);
                    commit("SET_MESSAGE", response.data.message, {
                        root: true
                    });
                })
                .catch(error => {
                    console.log("error update: " + error.message);
                });
        });
    },
    removeLog({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            logService.deleteLog(id).then(response => {
                dispatch("getLogs").then(() => resolve());
            });
        });
    },
    getCategories({ commit, state }) {
        return new Promise((resolve, reject) => {
            logService.getCategories().then(response => {
                commit("DATA_CATEGORIES", response.data.result);
            });
        });
    },
    getSubCategories({ commit, state }) {
        return new Promise((resolve, reject) => {
            logService.getSubCategories().then(response => {
                commit("DATA_SUB_CATEGORIES", response.data.result);
            });
        });
    }
};
export const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
