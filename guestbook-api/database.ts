import {Message, MessageMutation} from "./types";
import {promises as fs} from 'fs'
import crypto from 'crypto'

const filename = 'database.json';
let data: Message [] = [];

const database = {
    async init() {
        try {
            const content = await fs.readFile(filename);
            data = JSON.parse(content.toString());
        }catch (err) {
            data = [];
        }
    },
    async getReview () {
        return data;
    },
    async addReview(message: MessageMutation) {
        const id = crypto.randomUUID();
        const review = {id, ...message};
        data.push(review);
        await this.save()
        return review
    },

    async save() {
        return fs.writeFile(filename, JSON.stringify(data, null, 2))
    }
}

export default database