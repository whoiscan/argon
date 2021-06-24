/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Youtube from "./views/examples/Youtube";
import Landing from "./views/examples/Landing";
import Cards from "./views/examples/Cards";

var routes = [
    {
        path: "/landing",
        name: "Bosh sahifa",
        icon: "ni ni-planet text-green",
        component: Landing,
        layout: "/auth",
    },
    {
        path: "/card",
        name: "Onlayn kurslar",
        icon: "ni ni-bullet-list-67 text-purple",
        component: Cards,
        layout: "/api",
    },
    {
        path: "/index",
        name: "Ma'lumotlar",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/api",
    },
    {
        path: "/video",
        name: "Darsliklar",
        icon: "ni ni-planet text-yellow",
        component: Youtube,
        layout: "/api",
    },
    {
        path: "/tables",
        name: "Ustoz qidirish",
        icon: "ni ni-bullet-list-67 text-red",
        component: Tables,
        layout: "/api",
    },

    {
        path: "/rating",
        name: "Reyting",
        icon: "ni ni-planet text-blue",
        component: Icons,
        layout: "/api",
    },
    {
        path: "/maps",
        name: "Karta",
        icon: "ni ni-pin-3 text-orange",
        component: Maps,
        layout: "/api",
    },

    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth",
    },
    {
        path: "/register",
        name: "Ro'yxatdan o'tish",
        icon: "ni ni-circle-08 text-pink",
        component: Register,
        layout: "/auth",
    },
    {
        path: "/user-profile",
        component: Profile,
        layout: "/api",
    },
];
export default routes;
