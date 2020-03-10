const mysql = require('../library/mysql');

async function selectTest() {  // 영화 랜덤 추천 3개 
    // const selectTestSql = `SELECT * FROM Table`;
    const example = "데이터 정보"
    
    // return await mysql.query(selectTestSql);
    return await example;
}

module.exports = {
    selectTest
}