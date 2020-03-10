const testDao = require('../dao/testDao');

async function getTest() {
    const testData = await testDao.selectTest();

    /*
    에러처리
    ex) 
    if(값이 이상하거나 쿼리가 제대로 수행되지 않았을 경우 등등){
        return -1 or -2 or -3...
    }
    -> controller에서 리턴 값에 따른 에러메시지 호출
    -> 성공일 경우 data controller에 넘겨주기
    */

    console.log(testData)
    return testData;
}

module.exports = {
    getTest
}