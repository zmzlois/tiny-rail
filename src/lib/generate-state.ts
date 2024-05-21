import { generateState } from "arctic";

type State = {
    rnd: string;
    origin?: string;
}

// TODO: implement proper validation (zod) for state (the action parameter)


export const serializeState = (origin: string | null) => {

    if (!origin) return btoa(JSON.stringify({ rnd: generateState() } satisfies State));
    return btoa(JSON.stringify({ origin, rnd: generateState() } satisfies State));
}

export const deserializeState = (raw: string): State => {
    return JSON.parse(atob(raw)) as State
}