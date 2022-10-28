import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        timestamps: true,
      },
})
class User {
    @prop()
    username: string;

    @prop()
    password: string;
}

export default getModelForClass(User);