const { Router } = require('express');
const ServicesService = require('../services/service.service');

const router = Router();

router.get('/', async (req, res) => {
    debugger
    const { businessId } = req.query;
    const services = await ServicesService.getServices(businessId);
    res.send(services);
});


router.get('/', async (req, res) => {
    debugger
    const services = await ServicesService.getAllServices();
    res.send(services);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const service = await ServicesService.getService(id);
    res.send(service);
});



router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const _service = await ServicesService.updateService(id, req.body);
    return res.send(_service);
})

router.delete('/:id', async (req, res) => {
    console.log("👧🧑👨");
    // const { id } = req.params;
    await ServicesService.deleteService(req.params);
    res.send('deleted');
})

router.post('/', async (req, res) => {
    debugger
    console.log(req.body);
    const newS = req.body
    // const { businessId, name, service } = req.body;
    try {
        const _service = await ServicesService.addService(newS);
        res.send(_service);
    } catch (err) {
        res.status(500).send(err.message);
    }
    

})

module.exports = router;
