module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "docker",
  password: "docker",
  database: "sqlnode",
  define: {
    timestamps: true,
    underscored: true
  }
};

// timestamps - created_at, updated_at
// snake_case - underscored
