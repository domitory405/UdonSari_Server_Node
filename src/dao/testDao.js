const mysql = require('../library/mysql');

async function selectTest() {  // 영화 랜덤 추천 3개 
    const selectTestSql = `SELECT * FROM Table`;
    
    return await mysql.query(selectTestSql);
}

module.exports = {
    selectTest
}