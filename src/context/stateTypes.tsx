import { Todo } from "../types/types";

type children = { children: React.ReactNode };
type todosState = [Array<Todo>, Function];
type alertTypeState = [alertType: string, setAlertType: Function];
type bgTypeState = [bgType: string, setBgType: Function];
type filterState = [filter: string | undefined, setFilter: Function];
export type { children, todosState, alertTypeState, bgTypeState, filterState };
