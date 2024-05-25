import { create } from 'zustand'


import { persist, createJSONStorage } from 'zustand/middleware'

type Project = {
    id: string;
    name: string
}
type UserState = {
    id: string;
    name: string;
    avatar: string;
    projects: Map<Project["id"], Project["name"]>;
    projectName: string;
    projectId: string;
    isOnHobbyPlan: boolean;

}

type UserAction = {
    updateId: (githubId: UserState['id']) => void
    updateName: (name: UserState['name']) => void
    updateAvatar: (avatar: UserState['avatar']) => void
    updateProjects: (id: string, name: string) => void
    updateProjectName: (projectName: UserState['projectName']) => void
    updateProjectId: (projectId: UserState['projectId']) => void
    updateIsOnHobbyPlan: (isOnHobbyPlan: UserState['isOnHobbyPlan']) => void

}

export const useStore = create(persist<UserAction & UserState>((set, get) => ({
    id: "",
    name: "",
    avatar: "",
    projects: new Map(),
    projectName: "",
    projectId: "",
    isOnHobbyPlan: false,
    updateId: (id) => set({ id }),
    updateName: (name) => set({ name }),
    updateAvatar: (avatar) => set({ avatar }),
    updateProjects: (id, name) => set((prev) => ({
        projects: new Map(prev.projects).set(id, name),
    }))
    ,
    updateProjectName: (projectName) => set({ projectName }),
    updateProjectId: (projectId) => set({ projectId }),
    updateIsOnHobbyPlan: (isOnHobbyPlan) => set({ isOnHobbyPlan }),
}), {
    name: '_tiny-rail-user',
    storage: createJSONStorage(() => localStorage),
},))

