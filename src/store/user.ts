import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
type State = {
    id: string;
    name: string;
    avatar: string;
    projectName: string;
    isOnHobbyPlan: boolean;

}

type Action = {
    updateId: (githubId: State['id']) => void
    updateName: (name: State['name']) => void
    updateAvatar: (avatar: State['avatar']) => void
    updateProjectName: (projectName: State['projectName']) => void
    updateIsOnHobbyPlan: (isOnHobbyPlan: State['isOnHobbyPlan']) => void

}

export const useStore = create(persist<Action & State>((set) => ({
    id: "",
    name: "",
    avatar: "",
    projectName: "",
    isOnHobbyPlan: false,
    updateId: (id) => set({ id }),
    updateName: (name) => set({ name }),
    updateAvatar: (avatar) => set({ avatar }),
    updateProjectName: (projectName) => set({ projectName }),
    updateIsOnHobbyPlan: (isOnHobbyPlan) => set({ isOnHobbyPlan }),
}), {
    name: 'tiny-rail',
    storage: createJSONStorage(() => localStorage),
},))