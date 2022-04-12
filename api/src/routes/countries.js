const { Router } = require("express");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db");
const router = Router();

// axios.get('https://restcountries.com/v3.1/all',async function(req,res){

//  const array = req.body
//  await array.forEach(country => {
//    const {name,cioc,flags,continents,capital,subregion,area,population} = country
//         Country.findOrCreate({
//             where:{
//                 ID:cioc,
//                 name:name,
//                 img:flags.png,
//                continents:continents,
//                capital:capital,
//                subregion:subregion,
//                area:area,
//                population:population
//             }
//         })
//  });
//     res.send('Paises añadidos');

// })

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  const { continent } = req.query;
  const { activity } = req.query;
 let result = null
  try {
    
    if (name) {
      console.log(name)
       result = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: "%" + name + "%"
          },
          
        },
        order:[
            ['name','ASC']
          ]
      });
     res.json(result);
      if (result.length === 0 ) {
        return res.send({ error: `El país ${name} no existe.` });
      }
    }
    if(continent){
      result = await Country.findAll({
        where: {
          continent: continent,
         
        },
         order:[
            ['name','ASC']
          ],
      });
      
      if (!result){
        const response= await Country.findAll({
          order:[
            ['name','ASC']
          ],
        })
       
        res.json(response)
      }
      res.json(result);
    
    }
    
    else{
      const response= await Country.findAll({
        order:[
          ['name','ASC']
        ],
      })
     
      res.json(response)
    }
  } catch(error) {
    next(error)
  }
});

router.get("/:idCountry", async (req, res) => {
  // aca pedimos por params el id y lo matcheamos con la DB
  const { idCountry } = req.params;
  try{
  const result = await Country.findByPk(idCountry, {
    include:[{
      model: Activity,
      attributes:['name','difficulty','duration','season'],
      through:'ActivitiesCountries'
    }]
  });

  res.status(200).send(result);
}
catch(error){
 next(error)
}
});



// router.get(, async (req, res) => {

//   res.status(200).send(result);
// });
// filtro por continente :Africa, South America,North America, Asia, Europe, Oceania
module.exports = router;
