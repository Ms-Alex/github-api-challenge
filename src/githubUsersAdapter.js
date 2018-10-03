function githubUsersAdapter() {
    return {
        getUserInfo: function (username) {
            return fetch(`https://api.github.com/users/${username}`)
                .then(r => r.json());
        },
    }
}

export default githubUsersAdapter;