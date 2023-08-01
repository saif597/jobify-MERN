import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from '../errors/customErrors.js'
import { verifyJWT } from '../utils/tokenUtils.js'

export const aunthenticateUser = async (req, res, next) => {
  const { token } = req.cookies
  if (!token) throw new UnauthenticatedError('authentication invalid')
  try {
    const { userId, role } = verifyJWT(token)
    const testUser = userId === '64c7b8cf93816b699a6b6fef'
    req.user = { userId, role, testUser }
    next()
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid')
  }
}

export const authorizePersmissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('unauthrized to acces this route')
    }
    next()
  }
}

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError('Demo user. Read Only!')
  next()
}
