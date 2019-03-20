import Vue from 'vue';
import formatDate from '@/vueFuntion/dateFormat';

const priceFormat = Vue.filter('priceFormat', (value) =>{
    let s = value;
    if (!s) return '0.00';
    if (/[^0-9\.]/.test(s)) return "0.00";
    s = s.toString().replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    const re = /(\d)(\d{3},)/;
    while (re.test(s))
        s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    return s.replace(/^\./, "0.");
});

const dateFormat = Vue.filter('dateFormat', (value) => {
    return formatDate(value, "yyyy-MM-dd hh:mm:ss");
});

const textOfDown = Vue.filter('textOfDown', (value, sec, third) => {
    let html = '';
    if(value === sec) {
        html = '一次性付清';
    } else {
        if(value < sec && value > 1) html = '前' + (value - 1) + '个月和末月';
        if(value === 1) html = '第1个月租金';
        if(third === 3) html = '付' + value + '周租金';
    }
    return html;
});

const unitTextPipe = Vue.filter('unitTextPipe', (value, sec) => {
    let html = '';
    if(value === 0) {
        html = '/月';
    } else if (value === 1) {
        html = '/天';
    } else if (value === 2) {
        html = '/周'
    }
    return html;
});

const unitPipe = Vue.filter('unitPipe', (value) => {
    let html = '';
    if(value === 0) {
        html = '月';
    } else if (value === 1) {
        html = '天';
    } else if (value === 2) {
        html = '周'
    }
    return html;
});

const choseUnitPipe = Vue.filter('choseUnitPipe', (value, sec, third) => {
    let html = '';
    if(value === 0) {
        html = '首付' + third + '个月租金';
    } else if (value === 1) {
        html = '一次性支付' + sec + '天租金';
    } else if (value === 2) {
        html = '首付' + third + '周租金';
    }
    return html;
});

const colorFilterPipe = Vue.filter('colorFilterPipe', (value) => {
    return 'background:' + value;
});

export default {
    priceFormat: priceFormat,
    dateFormat: dateFormat,
    textOfDown: textOfDown,
    unitTextPipe: unitTextPipe,
    unitPipe: unitPipe,
    choseUnitPipe: choseUnitPipe,
    colorFilterPipe: colorFilterPipe
}
