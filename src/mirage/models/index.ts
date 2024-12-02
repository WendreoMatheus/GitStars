import { IUser } from "@/models";
import { Model } from "miragejs";
import { ModelDefinition } from "miragejs/-types";

const UserModel: ModelDefinition<IUser> = Model.extend({})

export const models = {
    user: UserModel
}