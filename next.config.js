module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/blog",
        destination: "https://blog.putnam.computer/index.xml",
      },
    ];
  },
};
