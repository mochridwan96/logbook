import dashboardService from "../services/dashboardService.js";

export const namespaced = true;

export const state = {
    cards: [],
    report: [],
    page: 1
};

export const mutations = {
    ASSIGN_DATA(state, cards) {
        state.cards = cards;
    },
    ASSIGN_REPORT(state, report) {
      state.report = report;
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
        state.data = {
           
        };
    },
    CLEAR_FORM(state) {
        state.data = {
           
        };
    }
};

export const actions = {
  getCards({ commit, state }, payload) {
    let search = typeof payload != "undefined" ? payload : "";

    return new Promise((resolve, reject) => {
        dashboardService.getCards()
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
  getReport({ commit, state }, payload) {
    let search = typeof payload != "undefined" ? payload : "";

    return new Promise((resolve, reject) => {
        dashboardService.getReport()
            .then(response => {
                commit("ASSIGN_REPORT", response.data.result);
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
