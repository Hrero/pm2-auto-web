import bankcardList from './bankData';

const cardTypeMap = {
    DC: "储蓄卡",
    CC: "信用卡",
    SCC: "准贷记卡",
    PC: "预付费卡"
};

function extend(target, source) {
    let result = {};
    target = target || {};
    source = source || {};
    for (let key in target) {
        result[key] = target[key];
    }
    for (let key in source) {
        if (key) {
            result[key] = source[key];
        }
    }
    return result;
}
function getCardTypeName(cardType) {
    if (cardTypeMap[cardType]) {
        return cardTypeMap[cardType]
    }
    return undefined;
}

function getBankNameByBankCode(bankcode) {
    for (let i = 0, len = bankcardList.length; i < len; i++) {
        let bankcard = bankcardList[i];
        if (bankcode === bankcard.bankCode) {
            return bankcard.bankName;
        }
    }
    return "";
}

const bankCardAttribution = (bankCard) => {
    for (let i = 0, len = bankcardList.length; i < len; i++) {
        let bankcard = bankcardList[i];
        let patterns = bankcard.patterns;
        for (let j = 0, jLen = patterns.length; j < jLen; j++) {
            let pattern = patterns[j];
            if ((new RegExp(pattern.reg)).test(bankCard)) {
                let info = extend(bankcard, pattern);
                delete info.patterns;
                delete info.reg;
                info['cardTypeName'] = getCardTypeName(info['cardType']);
                return info;//返回银行卡结果
            }
        }
    }
    return 'error';
};
// console.log( bankCardAttribution('6217001210024455220') )
export default bankCardAttribution;
