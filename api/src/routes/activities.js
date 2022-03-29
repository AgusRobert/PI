const { Router } = require('express');
const {Activity, Country} = require('../db');
const router = Router();

router.get('/',(req,res)=>{
    res.send('Soy el get ;)')
})

router.post('/:activity',async (req,res)=>{
    const {country,name,dificulty,duration,season} = req.body
    const pais = await Country.finOne({
        where:{
            name: country
        }
    })
    const activity = await Activity.create({
            
        //findorcreate aca
        name,
            dificulty,
            duration,
            season,

            //form 
    })
    await pais.addActivity(activity)
    res.status(302).redirect(activity.route);
})

router.delete('/',(req,res)=>{
    res.send('Soy el delete ;)')
})

module.exports = router;