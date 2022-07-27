const asyncWrapper = (fn:any) => {
  return async (req:any, res:any, next:any) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

//module.exports = asyncWrapper
export default asyncWrapper