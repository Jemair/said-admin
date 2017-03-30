
const Router = require('express').Router
const homeData = require('./api/home-data')
const productList = require('./api/product-list')
const appointmentsData = require('./api/appointments-data')
const couponsData = require('./api/coupons-data')
const mineData = require('./api/mine-data')
const orderdetailData = require('./api/orderdetail-data')
const giftData = require('./api/gift-data')

const router = Router()

router.get('/api/home', homeData)
router.get('/api/products', productList)
router.get('/api/appointments', appointmentsData)
router.get('/api/coupons', couponsData)
router.get('/api/orderdetail', orderdetailData)
router.get('/api/mine', mineData)
router.get('/v1/redenvelopes/getCreatorIcon', giftData.portrait)
router.get('/v1/redenvelopes/preDraw', giftData.preInfo)
router.get('/v1/redenvelopes/draw', giftData.get)
router.get('/v1/redenvelopes/queryById', giftData.details)
router.get('/api/user/gift/createGift', giftData.createGift)
router.get('/api/user/gift/getGiftList', giftData.getGiftList)
router.get('/ShareProductController/getOneShareProduct', giftData.product)

module.exports = router
