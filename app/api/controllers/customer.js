导入客资
/**
 * @api {post} /customer 录入客资的相关信息
 * @apiName 导入客资
 * @apiGroup Customer
 * 
 * @apiParam {String} city 城市
 * @apiParam {String} remark 备注
 * @apiParam {String} name 客户姓名
 * @apiParam {String} business 业务
 * @apiParam {String} tel 客户手机号
 * 
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "code": 1,
 *      "msg": "",
 *      "data": {}
 *    }
 */
// 客户表
// insert into customer () values () 

客资列表
/**
 * @api {get} /customer 客资列表
 * @apiName 客资列表
 * @apiGroup Customer
 * 
 * @apiParam {Number} limit 数量
 * @apiParam {Number} offset 页数
 * @apiParam {Boolean} valid 是否有效客资
 * 
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "code": 1,
 *      "msg": "",
 *      "data": {
 *          "total": 100,
 *          "list": [{
 *              "id": 1,
 *              "name": "小强",
 *              "phone": "18840822422",
 *              "status": 1,
 *              "time": "2017-02-02 17:00"
 *          }, {
 *              "id": 2,
 *              "name": "小强",
 *              "phone": "18840822422",
 *              "status": 1,
 *              "time": "2017-02-02 17:00"
 *          }]
 *      }
 *    }
 */
// 客户表
// select * from customer where type = 1 and user_id = 1 limit offset  

客资详情
/**
 * @api {get} /customer/:id 客资详情
 * @apiName 客资详情
 * @apiGroup Customer
 * 
 * @apiParam {Number} id 客户id
 * 
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "code": 1,
 *      "msg": "",
 *      "data": {
 *          "id": 1,
 *          "status": 1,
 *          "history": [{
 *              "remark": "导入为有效客户",
 *              "reason": "",
 *              "time": "2017-02-02 17:00"    
 *          }, {
 *              "remark": "导入为有效客户",
 *              "reason": "",
 *              "time": "2017-02-02 17:00"  
 *          }],
 *          "rewards": [{
 *              "integral": 30,
 *              "remark": "意向客户"
 *          }, {
 *              "integral": 30,
 *              "remark": "意向客户"
 *          }]
 *      }
 *    }
 */
// 客户表、客户状态操作明细表、积分明细表
// select * from customer where type = 1 and user_id = 1 limit offset  
// select * from customer_log 
// select * from points where 

积分明细


// 用户表： id、手机号码、姓名、用户名、密码、状态(启用、禁用)、注册时间

// 客户表： id、用户id、客户手机号码、客户姓名、所在城市(城市id待定)、被推荐业务、
//          类型（有效、无效）、状态id、状态名称（有意向、已成交）、备注、导入时间

// 客户状态操作明细表：id、客户id、状态id、状态名称(有意向、已成交)、备注、操作时间

// 客户状态表：id、名称(有意向、已成交)

// 用户积分：id、用户id、积分

// 用户积分明细：id、用户id、获得积分(正/负)、说明、时间

// 商品表： 商品id、商品名称、商品简介、兑换商品所需积分

// 用户兑换表： id、用户id、商品id、状态(审核中、审核通过、审核不通过)、发放状态(未发放、已发放)、备注、提交时间

// 用户兑换明细： id、用户兑换表id、审核人、审核状态、审核原因、审核时间

// 发放表：id、用兑换表id、发放说明（奖励券码）、发放时间