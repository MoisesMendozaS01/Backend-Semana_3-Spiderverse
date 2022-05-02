class Spiderverse{
    constructor(name,age,actor,numb_movies,cinema_study){
        this.name=name,
        this.age=age,
        this.actor=actor,
        this.numb_movies=numb_movies,
        this.cinema_study=cinema_study
    }
    getinfo(){
        return `Hey, I'm ${this.actor} from ${this.cinema_study} studio`
    }
}

module.exports= Spiderverse