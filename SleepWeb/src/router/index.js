import { createRouter, createWebHistory} from "vue-router";
import MainPage from "../views/MainPageView.vue";
import SignUpPage from "../views/SignUpPageView.vue";
import SignInPage from "../views/SignInPageView.vue";


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
                path: "/signin",
                component: SignInPage,
                name: "signinpage"
            }
            
        ]
    }
)

export default router