class Skills {

    constructor() {
        this.skills = [];
    }

    reply(skill) { }

    add(skill) {
        this.skills.push(skill);
        return this.reply(skill);
    }
}

class TechSkills extends Skills {

    reply({ id, title, details }) {
        return `Tech: [${id}] - ${title} - ${details}`;
    }
}

class SoftSkills extends Skills {

    reply({ id, title, details }) {
        return `Soft: [${id}] - ${title} - ${details}`;
    }
}

class SkillsRegistry {

    register(type, title, details) {

        const id = Date.now();
        let skill;

        if (type === 'tech') {
            skill = new TechSkills();
        }
        else {
            skill = new SoftSkills();
        }

        return skill.add({ id, title, details });
    }
}

module.exports = {
    SkillsRegistry
};
