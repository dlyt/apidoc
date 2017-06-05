define({ "api": [
  {
    "type": "post",
    "url": "/customer",
    "title": "录入客资的相关信息",
    "name": "____",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "business",
            "description": "<p>业务</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>客户手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/controllers/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer",
    "title": "客资列表",
    "name": "____",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "valid",
            "description": "<p>是否有效客资</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"\",\n  \"data\": {\n      \"total\": 100,\n      \"list\": [{\n          \"id\": 1,\n          \"name\": \"小强\",\n          \"phone\": \"18840822422\",\n          \"status\": 1,\n          \"time\": \"2017-02-02 17:00\"\n      }, {\n          \"id\": 2,\n          \"name\": \"小强\",\n          \"phone\": \"18840822422\",\n          \"status\": 1,\n          \"time\": \"2017-02-02 17:00\"\n      }]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/controllers/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/:id",
    "title": "客资详情",
    "name": "____",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>客户id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 1,\n  \"msg\": \"\",\n  \"data\": {\n      \"id\": 1,\n      \"status\": 1,\n      \"history\": [{\n          \"remark\": \"导入为有效客户\",\n          \"reason\": \"\",\n          \"time\": \"2017-02-02 17:00\"    \n      }, {\n          \"remark\": \"导入为有效客户\",\n          \"reason\": \"\",\n          \"time\": \"2017-02-02 17:00\"  \n      }],\n      \"rewards\": [{\n          \"integral\": 30,\n          \"remark\": \"意向客户\"\n      }, {\n          \"integral\": 30,\n          \"remark\": \"意向客户\"\n      }]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/controllers/customer.js",
    "groupTitle": "Customer"
  }
] });
