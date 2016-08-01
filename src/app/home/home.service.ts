export class JsonService {
    jsonFile = [
        { fname: "Mark", lname: "Juck", uname: "Mark_15" },
        { fname: "John", lname: "Premad", uname: "JJ48" },
        { fname: "Karry", lname: "Kruadi", uname: "KarryMe" }
    ]

    getJson(): any {
        return this.jsonFile;
    }

    addUser(user: any) {
        this.jsonFile.push(user);
    }

    removeUser(userId) {
        let id = this.jsonFile.indexOf(userId);
        for (let i = 0; i < this.jsonFile.length; i++) {
            if (i == id) {
                this.jsonFile.splice(id, 1);
            }
        }
    }
}