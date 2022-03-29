const { Router, response } = require("express");
const { Country } = require("../db");
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
router.get('/',(req,res)=>{
   Country.findAll().then(response=> res.json(response)) 
})

router.get("/:idCountry", async  (req, res) => {
   // aca pedimos por params el id y lo matcheamos con la DB
   const {idCountry}=req.params
   const result = await Country.findOne({
      where:{
         id: idCountry,
      }
   });
   res.status(201).send(result)  
 });



// router.get('/?name=:name',(req,res)=>{
//     res.send('Soy el get 3 ;)')
// })

module.exports = router;
