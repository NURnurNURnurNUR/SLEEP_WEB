import { createRouter, createWebHistory} from "vue-router";
import MainPage from "../views/MainPageView.vue";
import SignUpPage from "../views/SignUpPageView.vue";
import LoginPage from "../views/LoginPageView.vue";
import ArticlesPage from "../views/ArticlesPageView.vue";
import SupportPage from "../views/SupportPageView.vue";


const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:
        [
            {
                path: "/",
                component: MainPage,
                name: "mainpage"
            },
            {
                path: "/signup",
                component: SignUpPage,
                name: "signupPage"
            },
            {
                path: "/login",
                component: LoginPage,
                name: "loginpage"
            },
            {
                path:"/articles",
                component: ArticlesPage,
                name: "articlespage"
            },
            {
                path: "/support",
                component: SupportPage,
                name:"supportpage"
            }
            
        ]
    }
)

export default router