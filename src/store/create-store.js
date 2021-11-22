import { createStore } from "../store/my-redux";
// import { createStore } from "react-redux";
import {ProfileReducer} from "./profile";


export const store = createStore(ProfileReducer);