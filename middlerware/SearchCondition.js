const AdvanceSearchCondition = require('../Search/Advance_Search_Condition');
const IdSearchCondition = require('../Search/Id_Search_Condition');
const KeywordSearchCondition = require('../Search/Keyword_Search_Condition');
const UndeletedSearchCondition = require('../Search/Undeleted_Search_Condition');

module.exports = (req, res, next) => {
    req.condition = makeCondition(req);
    next()
};
function makeCondition(req) {
    if(req.path === '/search-advance') {
        return new AdvanceSearchCondition(req.query.title, req.query.author, req.query.publisher);
    } else if(req.path ==='/search-basic') {
        return new KeywordSearchCondition(req.query.keyword);
    } else if (req.path === '/books') {
        return new UndeletedSearchCondition()
    } else if (req.path.toString().startsWith('/book')) {
        return new IdSearchCondition(req.params.id)
    }else if (req.path.toString().startsWith('/edit')) {
        return new IdSearchCondition(req.params.id)
    }
}