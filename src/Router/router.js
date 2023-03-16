import Home from "../components/Home"
import Pictures from "../components/Pictures"
import BabyPictures from "../components/BabyPictures"
export default [
    {
        path: "/Home",
        name: "Home",
        component: Home
    },
    {
        path: "/Pictures",
        name: "Pictures",
        component: Pictures
    },
    {
        path: "/",
        name: "BabyPictures",
        component: BabyPictures
    }
]