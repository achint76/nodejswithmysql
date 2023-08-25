const con = require('../config/config'); // Assuming your config file is in the parent directory

// Create a new user
function createUser(user, callback) {
  con.query('INSERT INTO users SET ?', user, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
}

// Get a user by ID
function getUserById(id, callback) {
  con.query('SELECT * FROM users WHERE id = ?', [id], (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result[0]);
    }
  });
}

// Update a user by ID
function updateUser(id, updatedUser, callback) {
  con.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id], (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
}

// Delete a user by ID
function deleteUser(id, callback) {
  con.query('DELETE FROM users WHERE id = ?', [id], (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
}

// Get a list of users with pagination
function getUsersWithPagination(page, itemsPerPage, callback) {
  const offset = (page - 1) * itemsPerPage;
  con.query('SELECT * FROM users LIMIT ? OFFSET ?', [itemsPerPage, offset], (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
}

function getAllUsers(callback) {
  con.query('SELECT * FROM users', (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUsersWithPagination,
  getAllUsers
};
