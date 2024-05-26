import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";
import { Config } from "unique-names-generator";

const customConfig: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: '-',
    length: 2,
};

export const generate = () => uniqueNamesGenerator(customConfig)