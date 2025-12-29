import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getGitHubData } from '../../services/githubService';
import styles from './BehindTheCode.module.css';

const GITHUB_USERNAME = 'zayennn';

const CUSTOM_FEATURED_REPOS = [
    'portfolio',
    'react-web-python-learning',
    'face-scanning',
    'camera-sensor-scrolling',
    'convert-speedtest',
    'sales-management-system'
];

const BehindTheCode = () => {
    const [githubData, setGithubData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchGitHubData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getGitHubData();
            setGithubData(data);
        } catch (err) {
            setError('Failed to load GitHub data. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGitHubData();
    }, []);


    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p>Loading GitHub data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <p>{error}</p>
                <button onClick={fetchGitHubData} className={styles.retryButton} data-cursor="hover">
                    Retry
                </button>
            </div>
        );
    }

    if (!githubData) return null;

    const { 
        user = {}, 
        stats = {}, 
        languages = [], 
        popularRepos = [], 
        recentRepos = [], 
        contributionCalendar 
    } = githubData || {};

    // Ensure arrays are actually arrays
    const safeLanguages = Array.isArray(languages) ? languages : [];
    const safePopularRepos = Array.isArray(popularRepos) ? popularRepos : [];
    const safeRecentRepos = Array.isArray(recentRepos) ? recentRepos : [];

    // URL grafik kontribusi: pakai data dari backend kalau ada,
    // kalau tidak ada fallback ke layanan chart publik berdasarkan username
    const contributionUrl =
        contributionCalendar ||
        `https://ghchart.rshah.org/${user?.login || GITHUB_USERNAME}`;

    // Jika API tidak mengirim popularRepos, kita fallback ke daftar custom/pinned
    const hasApiPopularRepos = safePopularRepos.length > 0;
    const fallbackFeaturedRepos = CUSTOM_FEATURED_REPOS.map((name) => ({
        name,
        html_url: `https://github.com/${user?.login || GITHUB_USERNAME}/${name}`,
        description: 'Pinned repository',
        language: null,
        stargazers_count: 0,
        forks_count: 0,
        watchers_count: 0,
        updated_at: new Date().toISOString(),
        private: false,
    }));
    const featuredReposToShow = hasApiPopularRepos ? safePopularRepos : fallbackFeaturedRepos;

    return (
        <div className={styles.behindContainer}>
            {/* Hero Section */}
            <motion.div
                className={styles.heroSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.heroContent}>
                    <div className={styles.profileHeader}>
                        <img
                            src={user?.avatar_url || 'https://via.placeholder.com/120'}
                            alt={user?.name || user?.login || 'GitHub User'}
                            className={styles.profileAvatar}
                        />
                        <div className={styles.profileInfo}>
                            <h1 className={styles.profileName}>
                                Behind the <span className={styles.highlight}>Code</span>
                            </h1>
                            <p className={styles.profileBio}>
                                A glimpse into my GitHub activity, contributions, and coding journey
                            </p>
                            <div className={styles.profileMeta}>
                                <span className={styles.metaItem}>
                                    <i className="fas fa-user"></i>
                                    {user?.login || 'GitHub User'}
                                </span>
                                <span className={styles.metaItem}>
                                    <i className="fas fa-map-marker-alt"></i>
                                    {user?.location || 'Indonesia'}
                                </span>
                                <span className={styles.metaItem}>
                                    <i className="fas fa-calendar-alt"></i>
                                    Member since {user?.created_at ? new Date(user.created_at).getFullYear() : 'N/A'}
                                </span>
                            </div>
                            <a
                                href={user?.html_url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.githubButton}
                                data-cursor="hover"
                            >
                                <i className="fab fa-github"></i>
                                @{user?.login || 'github'}
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
                className={styles.statsOverview}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <h2 className={styles.sectionTitle}>Quick Stats</h2>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem} data-cursor="hover">
                        <div className={styles.statNumber}>{stats?.publicRepos || 0}</div>
                        <div className={styles.statLabel}>Repositories</div>
                    </div>
                    <div className={styles.statItem} data-cursor="hover">
                        <div className={styles.statNumber}>{stats?.followers || 0}</div>
                        <div className={styles.statLabel}>Followers</div>
                    </div>
                    <div className={styles.statItem} data-cursor="hover">
                        <div className={styles.statNumber}>{stats?.following || 0}</div>
                        <div className={styles.statLabel}>Following</div>
                    </div>
                    <div className={styles.statItem} data-cursor="hover">
                        <div className={styles.statNumber}>{stats?.totalStars || 0}</div>
                        <div className={styles.statLabel}>Stars</div>
                    </div>
                    <div className={styles.statItem} data-cursor="hover">
                        <div className={styles.statNumber}>{stats?.totalForks || 0}</div>
                        <div className={styles.statLabel}>Forks</div>
                    </div>
                    <div className={styles.statItem} data-cursor="hover">
                        <div className={styles.statNumber}>{stats?.publicGists || 0}</div>
                        <div className={styles.statLabel}>Gists</div>
                    </div>
                </div>
            </motion.div>

            {/* Contribution Calendar */}
            <motion.div
                className={styles.contributionSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className={styles.sectionTitle}>Contribution Graph</h2>
                <div className={styles.contributionCard}>
                    <div className={styles.cardHeader}>
                        <h3>Year in Code</h3>
                        <p>My coding activity visualized</p>
                    </div>
                    <div className={styles.contributionWrapper}>
                        {contributionUrl ? (
                            <img
                                src={contributionUrl}
                                alt="GitHub Contribution Chart"
                                className={styles.contributionImage}
                            />
                        ) : (
                            <div className={styles.noData}>Contribution calendar not available</div>
                        )}
                    </div>
                    <div className={styles.contributionLegend}>
                        <div className={styles.legendItem}>
                            <span className={styles.legendDot} style={{ backgroundColor: '#ebedf0' }}></span>
                            <span>Less</span>
                        </div>
                        <div className={styles.legendItem}>
                            <span className={styles.legendDot} style={{ backgroundColor: '#9be9a8' }}></span>
                            <span className={styles.legendDot} style={{ backgroundColor: '#40c463' }}></span>
                            <span className={styles.legendDot} style={{ backgroundColor: '#30a14e' }}></span>
                            <span className={styles.legendDot} style={{ backgroundColor: '#216e39' }}></span>
                            <span>More</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Languages Section */}
            <motion.div
                className={styles.languagesSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h2 className={styles.sectionTitle}>Top Languages</h2>
                <div className={styles.languagesGrid}>
                    {safeLanguages.length > 0 ? safeLanguages.map(([language, count], index) => {
                        const totalCount = safeLanguages.reduce((acc, [, c]) => acc + c, 0);
                        const percentage = totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;

                        let text__repo = count === 1 ? "Repository" : "Repositories"

                        return (
                            <div key={index} className={styles.languageCard} data-cursor="hover">
                                <div className={styles.languageHeader}>
                                    <span className={styles.languageName}>{language}</span>
                                    <span className={styles.languagePercent}>{percentage}%</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <motion.div
                                        className={styles.progressFill}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${percentage}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                    />
                                </div>
                                <div className={styles.languageStats}>
                                    <span className={styles.languageCount}>{count} {text__repo}</span>
                                </div>
                            </div>
                        );
                    }) : (
                        <div className={styles.noData}>No language data available</div>
                    )}
                </div>
            </motion.div>

            {/* Pinned Repositories */}
            <motion.div
                className={styles.reposSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Featured Repositories</h2>
                    <a
                        href={`https://github.com/${user?.login || 'github'}?tab=repositories`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewAllLink}
                        data-cursor="hover"
                    >
                        View all <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className={styles.reposGrid}>
                    {featuredReposToShow.length > 0 ? featuredReposToShow.slice(0, 6).map((repo, index) => (
                        <a
                            key={index}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.repoCard}
                            data-cursor="hover"
                        >
                            <div className={styles.repoHeader}>
                                <div className={styles.repoIcon}>
                                    <i className="fab fa-github"></i>
                                </div>
                                <h3 className={styles.repoName}>{repo.name}</h3>
                                <span className={styles.repoVisibility}>
                                    {repo.private ? 'Private' : 'Public'}
                                </span>
                            </div>

                            <p className={styles.repoDescription}>
                                {repo.description || 'No description provided'}
                            </p>

                            {repo.language && (
                                <div className={styles.repoLanguage}>
                                    <span
                                        className={styles.languageDot}
                                        style={{
                                            backgroundColor: getLanguageColor(repo.language)
                                        }}
                                    ></span>
                                    {repo.language}
                                </div>
                            )}

                            {hasApiPopularRepos && (
                                <>
                                    <div className={styles.repoStats}>
                                        <div className={styles.stat}>
                                            <i className="fas fa-star"></i>
                                            <span>{repo.stargazers_count}</span>
                                        </div>
                                        <div className={styles.stat}>
                                            <i className="fas fa-code-fork"></i>
                                            <span>{repo.forks_count}</span>
                                        </div>
                                        <div className={styles.stat}>
                                            <i className="fas fa-eye"></i>
                                            <span>{repo.watchers_count}</span>
                                        </div>
                                    </div>

                                    <div className={styles.repoFooter}>
                                        <span className={styles.updatedText}>
                                            Updated {formatDate(repo.updated_at)}
                                        </span>
                                    </div>
                                </>
                            )}
                        </a>
                    )) : (
                        <div className={styles.noData}>
                            No repositories available. Add some names to CUSTOM_FEATURED_REPOS to feature specific repos.
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
                className={styles.activitySection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <h2 className={styles.sectionTitle}>Development Insights</h2>
                <div className={styles.insightsGrid}>
                    <div className={styles.insightCard} data-cursor="hover">
                        <div className={styles.insightIcon}>
                            <i className="fas fa-fire"></i>
                        </div>
                        <h3>Most Active</h3>
                        <p>
                            {safeRecentRepos[0] ? safeRecentRepos[0].name : 'No recent activity'} is my most recently updated repository
                        </p>
                    </div>

                    <div className={styles.insightCard} data-cursor="hover">
                        <div className={styles.insightIcon}>
                            <i className="fas fa-trophy"></i>
                        </div>
                        <h3>Most Popular</h3>
                        <p>
                            {safePopularRepos[0] ? safePopularRepos[0].name : 'No repositories'} has the most stars ({safePopularRepos[0]?.stargazers_count || 0})
                        </p>
                    </div>

                    <div className={styles.insightCard} data-cursor="hover">
                        <div className={styles.insightIcon}>
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Primary Language</h3>
                        <p>
                            {safeLanguages[0] ? safeLanguages[0][0] : 'No data'} is my most used language
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                className={styles.ctaSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className={styles.ctaCard}>
                    <h2>Want to see more?</h2>
                    <p>
                        Explore all my projects, contributions, and coding journey directly on GitHub.
                        Feel free to star interesting repos or open issues for collaboration!
                    </p>
                    <div className={styles.ctaButtons}>
                        <a
                            href={user?.html_url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryButton}
                            data-cursor="hover"
                        >
                            <i className="fab fa-github"></i>
                            Visit GitHub Profile
                        </a>
                        <a
                            href={`https://github.com/${user?.login || 'github'}?tab=repositories`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryButton}
                            data-cursor="hover"
                        >
                            <i className="fas fa-code-branch"></i>
                            Browse All Repositories
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// Helper functions
const getLanguageColor = (language) => {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#2b7489',
        'Python': '#3572A5',
        'Java': '#b07219',
        'PHP': '#4F5D95',
        'CSS': '#563d7c',
        'HTML': '#e34c26',
        'Vue': '#2c3e50',
        'React': '#61dafb',
        'Dart': '#00B4AB',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Ruby': '#701516',
        'C++': '#f34b7d',
        'C#': '#178600',
        'Swift': '#ffac45',
        'Kotlin': '#F18E33',
        'Scala': '#c22d40',
        'Shell': '#89e051',
        'PowerShell': '#012456',
        'Objective-C': '#438eff',
        'Lua': '#000080',
        'Perl': '#0298c3',
        'R': '#198CE7',
        'Matlab': '#e16737',
        'Julia': '#a270ba',
        'Haskell': '#5e5086',
        'Elixir': '#6e4a7e',
        'Clojure': '#db5855',
        'Erlang': '#B83998',
        'F#': '#b845fc',
        'CoffeeScript': '#244776',
        'TeX': '#3D6117',
        'Assembly': '#6E4C13',
        'PLSQL': '#dad8d8',
        'Visual Basic': '#945db7',
        'Dockerfile': '#384d54',
        'Makefile': '#427819',
        'Batchfile': '#C1F12E',
        'Vim script': '#199f4b',
        'Emacs Lisp': '#c065db',
        'Puppet': '#302B6D',
        'Groovy': '#e69f56',
        'Prolog': '#74283c',
        'Crystal': '#000100',
        'Nim': '#37775b',
        'OCaml': '#3be133',
        'Reason': '#ff5847',
        'D': '#ba595e',
        'Common Lisp': '#3fb68b',
        'Ada': '#02f88c',
        'Fortran': '#4d41b1',
        'Lisp': '#3fb68b',
        'Racket': '#22228f',
        'Scheme': '#1e4aec',
        'Elm': '#60B5CC',
        'PureScript': '#1D222D',
        'Idris': '#b30000',
        'Agda': '#315665',
        'Coq': '#d0b68c',
        'F*': '#572e30',
        'Lean': '#000000',
        'Alloy': '#cc5c24',
        'SMT': '#000000',
        'Z3': '#000000',
        'Verilog': '#b2b7f8',
        'SystemVerilog': '#DAE1C2',
        'VHDL': '#adb2cb',
        'Bluespec': '#12223c',
        'Chisel': '#000000',
        'Magma': '#000000',
        'Singularity': '#64E6AD',
        'Ur/Web': '#000000',
        'Pike': '#005390',
        'PicoLisp': '#6067af',
        'Arc': '#ca2afe',
        'Factor': '#636746',
        'Forth': '#341708',
        'Tcl': '#e4cc98',
        'Rebol': '#358a5b',
        'Red': '#f50000',
        'Ceylon': '#dfa535',
        'Fantom': '#14253c',
        'Ioke': '#078193',
        'Nu': '#c9df40',
        'Parrot': '#f3ca0a',
        'Perl 6': '#0000fb',
        'PogoScript': '#d80074',
        'Self': '#0579aa',
        'Slash': '#007eff',
        'Squirrel': '#800000',
        'Turing': '#cf142b',
        'Io': '#a9188d',
        'CLIPS': '#00A300',
        'ECL': '#8a1267',
        'Oxygene': '#cdd0e3',
        'F#': '#b845fc',
        'F*': '#572e30',
        'Frege': '#00cafe',
        'Mercury': '#ff2b2b',
        'Pure Data': '#91de79',
        'Q': '#0040cd',
        'Rascal': '#fffaa0',
        'wisp': '#7582D1',
        'X10': '#4B6BEF',
        'Xtend': '#24255d',
        'ZIL': '#dc75e5',
        'Zig': '#ec915c',
        'Cirru': '#ccccff',
        'Eiffel': '#946d57',
        'UnrealScript': '#a54c4d',
        'AutoIt': '#1C3552',
        'ColdFusion': '#ed2cd6',
        'VBA': '#867db1',
        'LabVIEW': '#fede06',
        'ABAP': '#E8274B',
        'APL': '#5A8164',
        'Augeas': '#9CC134',
        'AutoHotkey': '#6594b9',
        'Awk': '#c30e9b',
        'Boo': '#d4bec1',
        'Brainfuck': '#2F2530',
        'C-ObjDump': '#66aabb',
        'C2hs Haskell': '#000000',
        'Cap\'n Proto': '#c42727',
        'Chapel': '#8dc63f',
        'Cirru': '#ccccff',
        'Clarion': '#db901e',
        'Clean': '#3F85AF',
        'Click': '#E4E6F3',
        'CLIPS': '#00A300',
        'CMake': '#DA3434',
        'COBOL': '#000000',
        'CoffeeScript': '#244776',
        'ColdFusion CFC': '#ed2cd6',
        'Common Lisp': '#3fb68b',
        'Component Pascal': '#B0CE4E',
        'Cool': '#000000',
        'Coq': '#d0b68c',
        'Crystal': '#000100',
        'CSS': '#563d7c',
        'Cucumber': '#5B2063',
        'Cuda': '#3A4E3A',
        'Cycript': '#000000',
        'Cython': '#fedf5b',
        'D': '#ba595e',
        'Dart': '#00B4AB',
        'DataWeave': '#003a52',
        'DIGITAL Command Language': '#000000',
        'DM': '#447265',
        'Dogescript': '#cca760',
        'DTrace': '#000000',
        'Dylan': '#6c616e',
        'E': '#ccce35',
        'Eagle': '#814C05',
        'eC': '#913960',
        'ECL': '#8a1267',
        'Eiffel': '#946d57',
        'Elixir': '#6e4a7e',
        'Elm': '#60B5CC',
        'Emacs Lisp': '#c065db',
        'EmberScript': '#FFF4F3',
        'EQ': '#a78649',
        'Erlang': '#B83998',
        'F#': '#b845fc',
        'F*': '#572e30',
        'Factor': '#636746',
        'Fancy': '#7b9db4',
        'Fantom': '#14253c',
        'FLUX': '#88ccff',
        'Forth': '#341708',
        'Fortran': '#4d41b1',
        'FreeMarker': '#0050b2',
        'Frege': '#00cafe',
        'Game Maker Language': '#71b417',
        'GAMS': '#f49a22',
        'GDScript': '#355570',
        'Genie': '#fb855d',
        'Gherkin': '#5B2063',
        'Glyph': '#c1ac7f',
        'Gnuplot': '#f0a9f0',
        'Go': '#00ADD8',
        'Golo': '#88562A',
        'Gosu': '#82937f',
        'Grace': '#615f8b',
        'Grammatical Framework': '#79aa7a',
        'Groovy': '#e69f56',
        'Hack': '#878787',
        'Harbour': '#0e60e3',
        'Haskell': '#5e5086',
        'Haxe': '#df7900',
        'HiveQL': '#dce200',
        'HTML': '#e34c26',
        'Hy': '#7790B2',
        'IDL': '#a3522f',
        'Idris': '#b30000',
        'IGOR Pro': '#0000cc',
        'Inform 7': '#000000',
        'Inno Setup': '#264b99',
        'Io': '#a9188d',
        'Ioke': '#078193',
        'Isabelle': '#FEFE00',
        'J': '#9EEDFF',
        'Java': '#b07219',
        'JavaScript': '#f1e05a',
        'JFlex': '#DBCA00',
        'JSONiq': '#40d47e',
        'Julia': '#a270ba',
        'Jupyter Notebook': '#DA5B0B',
        'Kotlin': '#F18E33',
        'KRL': '#28430A',
        'Lasso': '#999999',
        'Lex': '#DBCA00',
        'LFE': '#4C3023',
        'LiveScript': '#499886',
        'LLVM': '#185619',
        'LOLCODE': '#cc9900',
        'LookML': '#652B81',
        'LSL': '#3d9970',
        'Lua': '#000080',
        'M': '#000000',
        'M4': '#000000',
        'Makefile': '#427819',
        'Mask': '#f97732',
        'Matlab': '#e16737',
        'Max': '#c4a79c',
        'MAXScript': '#00a6a6',
        'Mercury': '#ff2b2b',
        'Metal': '#8f14e9',
        'Mirah': '#c7a938',
        'Modula-2': '#10253f',
        'Module Management System': '#000000',
        'Monkey': '#000000',
        'Moocode': '#000000',
        'MoonScript': '#ff4585',
        'Myghty': '#000000',
        'NCL': '#28431f',
        'Nearley': '#990000',
        'Nemerle': '#3d3c6e',
        'nesC': '#94B0C7',
        'NetLinx': '#0aa0ff',
        'NetLinx+ERB': '#747faa',
        'NetLogo': '#ff6375',
        'NewLisp': '#87AED7',
        'Nim': '#37775b',
        'Nit': '#009917',
        'Nix': '#7e7eff',
        'Nu': '#c9df40',
        'Objective-C': '#438eff',
        'Objective-C++': '#6866fb',
        'Objective-J': '#ff0c5a',
        'OCaml': '#3be133',
        'Omgrofl': '#cabbff',
        'ooc': '#b0b77e',
        'Opa': '#000000',
        'Opal': '#f7ede0',
        'OpenEdge ABL': '#000000',
        'OpenSCAD': '#e5cd45',
        'Ox': '#000000',
        'Oxygene': '#cdd0e3',
        'Oz': '#fab738',
        'P4': '#7055b5',
        'Pan': '#cc0000',
        'Papyrus': '#6600cc',
        'Parrot': '#f3ca0a',
        'Pascal': '#E3F171',
        'PAWN': '#dbb284',
        'Perl': '#0298c3',
        'Perl 6': '#0000fb',
        'PHP': '#4F5D95',
        'PicoLisp': '#6067af',
        'PigLatin': '#fcd7de',
        'Pike': '#005390',
        'PLSQL': '#dad8d8',
        'PogoScript': '#d80074',
        'Pony': '#000000',
        'PostScript': '#da291c',
        'PowerBuilder': '#8f0f8d',
        'PowerShell': '#012456',
        'Processing': '#0096D8',
        'Prolog': '#74283c',
        'Propeller Spin': '#7fa2a7',
        'Puppet': '#302B6D',
        'Pure Data': '#91de79',
        'PureBasic': '#5a6986',
        'PureScript': '#1D222D',
        'Python': '#3572A5',
        'Q': '#0040cd',
        'QML': '#44a51c',
        'R': '#198CE7',
        'Racket': '#22228f',
        'Ragel': '#9d5200',
        'RAML': '#77d9fb',
        'Rascal': '#fffaa0',
        'Rebol': '#358a5b',
        'Red': '#f50000',
        'Redcode': '#000000',
        'Ren\'Py': '#ff7f7f',
        'RenderScript': '#000000',
        'REXX': '#d90e09',
        'Ring': '#2D54CB',
        'RobotFramework': '#00c0b5',
        'Roff': '#ecdebe',
        'Rouge': '#cc0088',
        'Ruby': '#701516',
        'RUNOFF': '#665a4e',
        'Rust': '#dea584',
        'Sage': '#000000',
        'SaltStack': '#646464',
        'SAS': '#B34936',
        'Scala': '#c22d40',
        'Scheme': '#1e4aec',
        'Scilab': '#ca0f21',
        'Self': '#0579aa',
        'Shell': '#89e051',
        'Shen': '#120F14',
        'Slash': '#007eff',
        'Slim': '#ff8f77',
        'Smali': '#000000',
        'Smalltalk': '#596706',
        'Smarty': '#000000',
        'SMT': '#000000',
        'SourcePawn': '#5c7611',
        'SQF': '#3F3F3F',
        'SQL': '#000000',
        'SQLPL': '#000000',
        'Squirrel': '#800000',
        'SRecode Template': '#348a34',
        'Stan': '#b2011d',
        'Standard ML': '#dc566d',
        'Stata': '#1a5f91',
        'SuperCollider': '#46390b',
        'Swift': '#ffac45',
        'SystemVerilog': '#DAE1C2',
        'Tcl': '#e4cc98',
        'TeX': '#3D6117',
        'Terra': '#00004c',
        'Thrift': '#000000',
        'TI Program': '#A0AA87',
        'TLA': '#4b0079',
        'TOML': '#9c4221',
        'Turing': '#cf142b',
        'TXL': '#0178b8',
        'TypeScript': '#2b7489',
        'Unified Parallel C': '#4e3617',
        'Unity3D Asset': '#222c37',
        'Unix Assembly': '#000000',
        'Uno': '#9933cc',
        'UnrealScript': '#a54c4d',
        'UrWeb': '#000000',
        'Vala': '#fbe5cd',
        'VCL': '#148AA8',
        'Verilog': '#b2b7f8',
        'VHDL': '#adb2cb',
        'Vim script': '#199f4b',
        'Visual Basic': '#945db7',
        'Volt': '#1F1F1F',
        'Vue': '#2c3e50',
        'wisp': '#7582D1',
        'X10': '#4B6BEF',
        'xBase': '#403a40',
        'XC': '#99DA07',
        'Xojo': '#000000',
        'XProc': '#000000',
        'XQuery': '#5232e7',
        'XS': '#000000',
        'XSLT': '#EB8CEB',
        'Xtend': '#24255d',
        'Yacc': '#4B6C4B',
        'YARA': '#220000',
        'YASnippet': '#32AB90',
        'ZAP': '#0d665e',
        'Zephir': '#118f9e',
        'Zig': '#ec915c',
        'ZIL': '#dc75e5',
        'Zimpl': '#d67711'
    };

    return colors[language] || '#6c757d';
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
};

export default BehindTheCode;