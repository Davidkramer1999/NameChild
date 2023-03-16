import Home from "../components/Home"
import Pictures from "../components/Pictures"
import BabyPictures from "../components/BabyPictures"
export default [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/Pictures",
        name: "Pictures",
        component: Pictures
    },
    {
        path: "/BabyPictures",
        name: "BabyPictures",
        component: BabyPictures
    }
]