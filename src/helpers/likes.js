/**
 * Enter the array of likes as likesArray, and the userId of the user who liked.
 * Returns an array of the final array of likes.
 * @param {Array} likesArray 
 * @param {String} userId 
 * @returns {Array} final tally of users who liked the app.
 */
exports.toggleLikesOnApp = (likesArray, userId) => {
    return likesArray.includes(userId) ? likesArray.filter(user => user !== userId) : likesArray.reduce((likes, [user]) => {
        return likes.push(user);
    }, [userId])
}

/**
 * Enter the array of likes as likesArray, and the userId of the user who liked.
 * Returns an array of the final array of likes.
 * @param {Array} likesArray 
 * @param {String} userId 
 * @returns {Array} final tally of users who liked the app.
 */
exports.toggleLikesOnUsers = (likesArray, appId) => {
    return likesArray.includes(appId) ? likesArray.filter(app => app !== appId) : likesArray.reduce((likes, app) => {
        return likes.push(app);
    }, [appId])
}
