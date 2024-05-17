"use client";

import { createContext } from "react";
import { ProjectCommandProps } from "./project-command";

export const ProjectContext = createContext(null);
export const ProjectDispatchContext = createContext<any>(null);
