const { Router } = require('express');
const MeetingsService = require('../services/meeting.service');

const router = Router();

router.get('/', async (req, res) => {
    const { businessId } = req.query;
    const meetings = await MeetingsService.getMeetings(businessId);
    res.send(meetings);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const meeting = await MeetingsService.getMeeting(id);
    // console.log(getMeeting(id));
    res.send(meeting);
});

router.put('/:id', async (req, res) => {
    const { meeting } = req.body;
    const { id } = req.params;
    const _meeting = await MeetingsService.updateMeeting(id, meeting);
    return res.send(_meeting);
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await MeetingsService.deleteMeeting(id);
    res.send('deleted');
})

router.post('/', async (req, res) => {
    const { businessId, startTime, duration, meeting } = req.body;
    try {
        const _meeting = await MeetingsService.addMeeting(businessId, startTime, duration, meeting);
        res.send(_meeting);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

module.exports = router;
