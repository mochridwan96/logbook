import $axios from "../api.js";

export default {
    getLogs(page, search) {
        return $axios.get(`/task?page=${page}&q=${search}`);
    },
    getLogReports(page, search) {
        return $axios.get(`/task/taskreport?page=${page}&q=${search}`);
    },
    getLog(id) {
        return $axios.get(`/task/${id}`);
    },
    postLog(account) {
        return $axios.post("/task", account);
    },
    deleteLog(id) {
        return $axios.delete(`/task/${id}`);
    },
    updateLog(id, data) {
        return $axios.put(`/task/${id}`, data);
    },
    getCategories(type) {
        return $axios.get('/category/category-name');
    },
    getSubCategories(type) {
        return $axios.get('/sub_categories/name');
    }
};
