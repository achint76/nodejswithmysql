const userModel = require('../models/userModel');

// Create a new user
function createUser(req, res) {
  const user = req.body;
  userModel.createUser(user, (error, result) => {
    if (error) {
      res.status(500).json({ error: 'Error creating user' });
    } else {
      res.status(201).json({ message: 'User created successfully', user: result });
    }
  });
}

// Get a user by ID
function getUserById(req, res) {
  const userId = req.params.id;
  userModel.getUserById(userId, (error, user) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching user' });
    } else {
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    }
  });
}

// Update a user by ID
function updateUser(req, res) {
  const userId = req.params.id;
  const updatedUser = req.body;
  userModel.updateUser(userId, updatedUser, (error, result) => {
    if (error) {
      res.status(500).json({ error: 'Error updating user' });
    } else {
      res.status(200).json({ message: 'User updated successfully', user: result });
    }
  });
}

// Delete a user by ID
function deleteUser(req, res) {
  const userId = req.params.id;
  userModel.deleteUser(userId, (error, result) => {
    if (error) {
      res.status(500).json({ error: 'Error deleting user' });
    } else {
      res.status(200).json({ message: 'User deleted successfully', user: result });
    }
  });
}

// Get a list of users with pagination
function getUsersWithPagination(req, res) {
  const page = parseInt(req.query.page) || 1;
  const itemsPerPage = 5;
  userModel.getUsersWithPagination(page, itemsPerPage, (error, users) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.status(200).json(users);
    }
  });
}

function getAllUsers(req, res){
  userModel.getAllUsers((error, users) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.status(200).json(users);
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
