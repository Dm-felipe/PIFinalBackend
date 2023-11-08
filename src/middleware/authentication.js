const jwt = require('jsonwebtoken');

// Lógica de autenticación
if (usuarioAutenticado) {
  const payload = { userId: user.id, isAdmin: user.isAdmin };
  const token = jwt.sign(payload, 'tu_secreto_secreto', { expiresIn: '1h' });

  // Envía el token al cliente
  res.json({ token });
} else {
  // Maneja la autenticación fallida
  res.status(401).json({ error: 'Autenticación fallida' });
}
