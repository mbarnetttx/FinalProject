const login = (req, res, next) => {
    res.json({ message: "Logged in." });
};

const logout = (req, rex, next) => {
    req.logout();
    res.json({ message: "You've logged out." });
};

module.exports = { login, logout };