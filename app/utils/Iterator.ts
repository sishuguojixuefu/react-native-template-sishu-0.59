interface TargetFunction {
  (params?: object, page?: number, size?: number): Promise<{ data: any[]; total: number }>
}

/**
 * 创建同步迭代去
 * @param array 数组
 * @param step 步长
 */
export const createIterator = (array: [], step: number = 1) => {
  let nextIndex = 0
  return {
    next() {
      if (nextIndex < array.length) {
        const satrtIndex = nextIndex
        const endIndex = satrtIndex + step
        nextIndex += step
        return {
          value: array.slice(satrtIndex, endIndex),
        }
      }
      return { done: true }
    },
  }
}

/** s
 * 创建异步迭代器
 * @param array
 * @param step
 */
export const createAsyncIterator = (targetFunction: TargetFunction, params: object = {}, size = 10) => {
  const doneData = { done: true, value: [] }
  let page = 1 // 页码
  let totalData: number // 数据总长度
  return {
    async next() {
      if (page === 1) {
        const { total, data } = await targetFunction(params, page, size)
        totalData = total
        if (totalData === 0) {
          return doneData
        }
        page++
        return { done: total <= size, value: data }
      }
      if (totalData - (page - 1) * size > 0) {
        const { data } = await targetFunction(params, page, size)
        page++
        return { done: totalData <= page * size, value: data }
      }
      return doneData
    },
  }
}

export default { createIterator, createAsyncIterator }
// Iterator接口的实现须满足几个条件
// 必须是一个函数，且返回一个对象；
// 返回的对象须包含一个next()方法；
// next()方法执行后须返回一个对象，且对象须包含代表成员的value属性、表示遍历是否结束的done属性。
