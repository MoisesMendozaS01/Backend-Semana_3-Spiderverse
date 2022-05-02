const Spiderverse = require("../app/spiderverse");

describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {

      //colocamos el código tal como lo queremos usar
      //instanciamos un objeto spiderman con la siguiente información
      const andrewGarfield = new Spiderverse("Spiderman Sony",31,"Andrew Garfield",2, "Sony")

      //Validamos que este código funcione de la forma esperada
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.numb_movies).toBe(2)
      expect(andrewGarfield.cinema_study).toBe("Sony")
    });
    test('2) Create an spiderman tom object',()=>{
        const tomHolland = new Spiderverse("Spiderman Marvel",25, "Tom Holland",6,"Marvel")

        expect(tomHolland.getinfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
  })