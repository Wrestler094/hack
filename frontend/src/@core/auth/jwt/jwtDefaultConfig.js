export default {
  // Endpoints
  loginEndpoint: 'http://localhost:8000/api/login',
  registerEndpoint: 'http://localhost:8000/api/register',
  refreshEndpoint: 'http://localhost:8000/api/register',
  logoutEndpoint: 'http://localhost:8000/api/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
