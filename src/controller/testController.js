const { response, errResponse } = require('../library/response');
const returnCode = require('../library/returnCode');

const testService = require('../service/testService');

async function getTest(req, res) {  
    try {
        // const request = req.params.value;

        // if(!request){
        //     errResponse(res, returnCode.BAD_REQUEST, 'null request');
        // }

        const testResult = await testService.getTest();

        /* 
        if(-1 or -2...)
        errResponse(res, returnCode, '무슨 오류 입니다');
        */

        response(res, returnCode.OK, '조회 성공', testResult);

    } catch (error) {
        console.log(error);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

module.exports = {
    getTest
}
