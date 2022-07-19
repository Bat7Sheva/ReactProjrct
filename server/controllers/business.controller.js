const { Router } = require('express');
const BusinessService = require('../services/business.service');

const router = Router();

// router.get('/:userId', async (req, res) => {
//     const id = req.params.userId;
//     const business = await BusinessService.getBusinessOfUser(id);
//     res.send(business);
// });
router.get('/', async (req, res) => {debugger
    const business = await BusinessService.getBusinessOfUser();
    res.send(business);
});

// router.get('/', async (req, res) => {debugger
//     const { businessId } = req.query;
//     const services = await ServicesService.getServices(businessId);
//     res.send(services);
// });



router.post('/', async(req, res) => {
    const business = req.body
    const newBusiness = await BusinessService.createBusiness(business,2);
    res.send(newBusiness);
    console.log(req.body);
});
router.put('/:id', async(req, res) => {
    const id = req.params.id;gg
    const business = req.body.business;
    const updatedBusiness = await BusinessService.updateBusiness(id, business);
    res.send(updatedBusiness);
})

module.exports = router;