
// Routing management, performs the appropriate function for each route.

import {conListAll, conUpdateOne, conSaveOne, conDeleteOne} from './controllers'
import express from 'express'

const router = express.Router()

router.get('/', conListAll)
router.get('/list-all', conListAll)
router.put('/update-one/:id', ...conUpdateOne)
router.post('/save-one', ...conSaveOne)
router.delete('/delete-one/:id', conDeleteOne)

export default router