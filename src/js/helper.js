module.exports = class GithubHelper {
  getLatestComment(comments) {
    if (comments && comments.length > 0) { return comments[comments.length - 1].body; }
  }
};
