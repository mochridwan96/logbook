import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Depeloper from "./views/Developer";

import User from "./components/Users";

import IndexLog from "./views/logs/Index.vue";
import DataLog from "./views/logs/Log.vue";
import AddLog from "./views/logs/Add.vue";
import EditLog from "./views/logs/Edit.vue";

import IndexReport from "./views/reports/Index.vue";
import DataReport from "./views/reports/Report.vue";
import AddReport from "./views/reports/Add.vue";
import EditReport from "./views/reports/Edit.vue";

import Profile from "./components/Profile";

import NotFoundComponent from "./components/NotFound";



Vue.use(VueRouter);

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        props: true
    },
    {
        path: "/users",
        name: "users",
        component: User,
    },
    {
        path: "/logs",
        component: IndexLog,
        // meta: { requiresAuth: true },
        children: [
            {
                path: "",
                name: "logs.data",
                component: DataLog
            },
            {
                path: "add",
                name: "logs.add",
                component: AddLog
            },
            {
                path: "edit/:id",
                name: "logs.edit",
                component: EditLog
            }
        ]
    },
    {
        path: "/reports",
        component: IndexReport,
        // meta: { requiresAuth: true },
        children: [
            {
                path: "",
                name: "reports.data",
                component: DataReport
            },
            {
                path: "add",
                name: "reports.add",
                component: AddReport
            },
            {
                path: "edit/:id",
                name: "reports.edit",
                component: EditReport
            }
        ]
    },
    {
      path: "/developer",
      name: "developers",
      component: Depeloper
    },
    {
        path: "*",
        component: NotFoundComponent
    },
    {
        path: "/home",
        redirect: "/dashboard"
    }
];

const router = new VueRouter({
    mode: "history",
    //   base: process.env.BASE_URL,
    routes
});

export default router;
