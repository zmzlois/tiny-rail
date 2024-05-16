import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
type State = {
    name: string;
    avatar: string;
    projectName: string;
    isOnHobbyPlan: boolean;

}

type Action = {
    updateName: (name: State['name']) => void
    updateAvatar: (avatar: State['avatar']) => void
    updateProjectName: (projectName: State['projectName']) => void
    updateIsOnHobbyPlan: (isOnHobbyPlan: State['isOnHobbyPlan']) => void

}

export const useStore = create(persist<Action & State>((set) => ({
    name: "",
    avatar: "",
    projectName: "",
    isOnHobbyPlan: false,
    updateName: (name) => set({ name }),
    updateAvatar: (avatar) => set({ avatar }),
    updateProjectName: (projectName) => set({ projectName }),
    updateIsOnHobbyPlan: (isOnHobbyPlan) => set({ isOnHobbyPlan }),
}), {
    name: 'tiny-rail',
    storage: createJSONStorage(() => localStorage),
},))