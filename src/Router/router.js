import BabyPictures from "../components/BabyPictures"
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "BabyPictures",
            component: BabyPictures
        }
    ]
})

export default router