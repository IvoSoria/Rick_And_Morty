const router = require ("express").Router();
const { getCharById } = require('../controllers/getCharById');
const { login } = require('../controllers/login');
const { postFav } = require('../controllers/postFav');
const { getFavs } = require('../controllers/getFavs');
const { deleteFav } = require('../controllers/deleteFav');
const { postUser } = require('../controllers/postUser');

router.get('/character/:id', getCharById);

router.get('/login', login);

router.post('/fav', postFav);
router.get('fav', getFavs);
router.delete('fav/:id', deleteFav);

router.get('/login', login);
router.post('/login', postUser);

module.exports = router;
