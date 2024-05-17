import { relations } from "drizzle-orm/relations";
import { users, accounts } from "./user";
import { workspaceMembers, workspaces } from "./workspace";



export const userRelations = relations(users, ({ many, one }) => ({
	accounts: many(accounts),
	workspace: many(workspaces),
	workspaceMember: one(workspaceMembers, {
		fields: [users.id],
		references: [workspaceMembers.userId]
	})
}));

export const accountRelations = relations(accounts, ({ one }) => ({
	user: one(users, {
		fields: [accounts.userId],
		references: [users.id]
	}),
}));

export const workspaceRelations = relations(workspaces, ({ one, many }) => ({
	creator: one(users, {
		fields: [workspaces.creatorId],
		references: [users.id]
	}),
	members: one(workspaceMembers, {
		fields: [workspaces.id],
		references: [workspaceMembers.workspaceId]
	})
}));

export const workspaceMemberRelations = relations(workspaceMembers, ({ one }) => ({
	user: one(users, {
		fields: [workspaceMembers.userId],
		references: [users.id]
	}),
	workspace: one(workspaces, {
		fields: [workspaceMembers.workspaceId],
		references: [workspaces.id]
	})
}))