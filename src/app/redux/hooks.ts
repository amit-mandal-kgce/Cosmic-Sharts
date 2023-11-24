import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, Appdispath } from "./store";

export const useAppDispatch = () =>useDispatch<Appdispath>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;