import dayjs from 'dayjs'

export default class TimeHelper {
  /*
  .date:传入的时间
  .format:时间过长显示的时间格式
  .diplayType:可以支持多套显示方案，传入方案编号 保留参数
  */
  static offset = (date: Date, format?: string, diplayType?: number) => {
    const tDate = dayjs(date)
    const now = dayjs()
    if (Math.abs(tDate.diff(now, 'day')) > 0) {
      // 目标日期大于当前日期
      return tDate.format(format || 'YYYY-MM-DD HH:mm')
    }
    if (tDate.isAfter(now.startOf('day'))) {
      // 当天
      return tDate.format('HH:mm')
    }
    if (tDate.isAfter(now.startOf('day').add(-1, 'day'))) {
      // 昨天
      return tDate.format('昨天')
    }
    if (tDate.isAfter(now.startOf('day').add(-6, 'day'))) {
      // 一周之内
      const dayStr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][tDate.day()]
      return dayStr
    }
    return tDate.format(format || 'YYYY-MM-DD')
  }
}
