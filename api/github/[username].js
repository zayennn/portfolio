import axios from 'axios';

const github = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json'
    }
});

export default async function handler(req, res) {
    const { username } = req.query;

    try {
        const { data: user } = await github.get(`/users/${username}`);
        const { data: repos } = await github.get(
            `/users/${username}/repos?per_page=100&sort=updated`
        );

        const totalStars = repos.reduce(
            (acc, r) => acc + r.stargazers_count, 0
        );

        const totalForks = repos.reduce(
            (acc, r) => acc + r.forks_count, 0
        );

        const languages = {};
        repos.forEach(r => {
            if (r.language) {
                languages[r.language] =
                    (languages[r.language] || 0) + 1;
            }
        });

        res.status(200).json({
            user,
            stats: {
                publicRepos: user.public_repos,
                followers: user.followers,
                following: user.following,
                totalStars,
                totalForks,
                publicGists: user.public_gists
            },
            languages: Object.entries(languages)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5),
            contributionCalendar: `https://ghchart.rshah.org/${username}`
        });

    } catch (err) {
        res.status(500).json({ message: 'GitHub fetch failed' });
    }
}