export default{
    /**
     * [formatDate 格式化时间 返回日期 2018-04-25]
     * @param  {[type]} param [参数可以是毫秒 可以是形如2018-4-25 01:33:54的字符串 可以是Date对象实例]
     * @return {[type]}       [description]
     */
    formatDate: function(param){
        let type = Object.prototype.toString.call(param),
            seperate = '-',
            dateObj,
            preZero = this.preZero;

        switch(type){
            case '[object Number]':
            case '[object String]':
                dateObj = new Date(param);
                break;
            case '[object Date]':
                dateObj = param;
                break;
            default:
                // pass through
        }
        return dateObj.getFullYear() + seperate + preZero(dateObj.getMonth() + 1) + seperate + preZero(dateObj.getDate());
    },
    // 时间个位数前置补0
    preZero: function(num){
        num += '';
        return num.length === 1 ? ('0' + num) : num;
    }
}