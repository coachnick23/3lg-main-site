module.exports = {
  apps: [
    {
      name: '3lg-main-site',
      script: './server/server.js',
      cwd: '/root/3lg-main-site',
      env: {
        NODE_ENV: 'production',
        PORT: 3005,
      },
      max_memory_restart: '400M',
      error_file: '/root/.pm2/logs/3lg-main-site-error.log',
      out_file: '/root/.pm2/logs/3lg-main-site-out.log',
    },
  ],
};
