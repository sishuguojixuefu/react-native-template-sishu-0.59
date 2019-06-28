/**
 * Iterator接口
 * @param array 数组
 * @param step 步长
 */
function Iterator(array: [], step: number = 1) {
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

export default Iterator
// Iterator接口的实现须满足几个条件
// 必须是一个函数，且返回一个对象；
// 返回的对象须包含一个next()方法；
// next()方法执行后须返回一个对象，且对象须包含代表成员的value属性、表示遍历是否结束的done属性。
