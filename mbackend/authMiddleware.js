const jwt = require('jsonwebtoken');

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Get token from Authorization header
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach decoded user to the request
    next(); // Allow the request to continue
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Protect a route with the verifyToken middleware
app.get('/api/protected', verifyToken, (req, res) => {
  res.send('This is protected data!');
});
