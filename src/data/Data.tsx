class Match {

    constructor(
        public readonly key: string,
        public readonly comp_level: string,
        public readonly match_number: number,
        public readonly alliances: Alliances,
        public readonly predicted_time: Date) {
    }

    convertToHumanReadableName():string {
        let header: string = ""

            switch (this.comp_level) {
                case("qm"):
                    header = "Quals Match"
                    break;
                case("sf"):
                    header = "Eliminations Match"
                    break;
                case("f"):
                    header = "Finals Match"
                    break;
                default:
                    header = "Match"
                    break;
            }
        return header + " " + this.match_number;
    }

    getCorrectDate():string {
        return this.formatDayOfTheWeek(this.predicted_time) + ", " + this.formatAMPM(this.predicted_time);
    }


    private formatAMPM(date):string {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    private formatDayOfTheWeek(date):string {
        switch(date.getDay()) {
            case (0): return "Sunday"
            case (1): return "Monday"
            case (2): return "Tuesday"
            case (3): return "Wednesday"
            case (4): return "Thursday"
            case (5): return "Friday"
            case (6): return "Saturday"
        }

        return "CATASTROPHIC FAILURE"
    }

}

class Alliances {

    readonly red:Alliance
    readonly blue:Alliance


    constructor(red: Alliance, blue: Alliance) {
        this.red = red;
        this.blue = blue;
    }
}
class Alliance {

    constructor(readonly numbers:number[],
    readonly score:number) {}
}



export {
    Match,
    Alliance,
    Alliances,
}