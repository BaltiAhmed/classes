
class Human {

    constructor(job, skill = []) {
        this.name = "ahmed";
        this.job = job;
        this.skill = skill
    }
    getjob(job) {

        return `mon job et ${this.job}`;
    }
    leavejob(job) {

        this.job = "unemployed";
        return `${this.job}`;

    }
    learnnewskill(skill) {

        return `${this.skill}`;
    }
    forgetskill(skill) {

        this.skill.splice(0, this.skill.length);
        return `${this.skill}`;
    }

}

class Student extends Human {


    constructor(name, job, skill) {
        super(name, job, skill)


    }


}

const me = new Student('dev web', ['css', 'html']);

console.log(me.getjob());

console.log(me.learnnewskill());

console.log(me.leavejob());

console.log(me.forgetskill());



