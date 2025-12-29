import React from 'react';
import { motion } from 'framer-motion';
import styles from './Into.module.css';

const Into = () => {
    const playlists = [
        {
            id: 1,
            title: "baskara.",
            description: "Melancholic tunes for introspective moments",
            image: "/images/playlist/baskara.png",
            link: "https://open.spotify.com/playlist/4v9HS6PjoLBgDrU5L6GexX",
            color: "#1DB954",
            mood: "Reflective"
        },
        {
            id: 2,
            title: "hurts to remember",
            description: "Songs that hit different when you're reminiscing",
            image: "/images/playlist/hurts to remember.png",
            link: "https://open.spotify.com/playlist/5ioXfjHb5peyoN3qJtAvZO",
            color: "#FF6B6B",
            mood: "Nostalgic"
        },
        {
            id: 3,
            title: "wish we never met",
            description: "Melodies for the what-ifs and could-have-beens",
            image: "/images/playlist/wish we never met.png",
            link: "https://open.spotify.com/playlist/0K5jIqQY4tp0S8zfX9QIGB",
            color: "#4ECDC4",
            mood: "Regretful"
        },
        {
            id: 4,
            title: "trying, tired, crying, dying",
            description: "For those emotionally exhausting days",
            image: "/images/playlist/trying, tired, crying, dying.png",
            link: "https://open.spotify.com/playlist/41cAYIu6YBwvXq9Uq2YQlD",
            color: "#6C5CE7",
            mood: "Exhausted"
        }
    ];

    const currentlyPlaying = [
        {
            id: 1,
            title: "Assassin's Creed Unity",
            platform: "PC",
            status: "Story",
            hours: "25",
            description: "Parisian parkour and revolutionary intrigue",
            image: "/images/games/ACUnity.png",
            color: "#8B0000",
            progress: "65%"
        },
        {
            id: 2,
            title: "Valorant",
            platform: "PC",
            status: "Competitive",
            hours: "300+",
            description: "Tactical FPS with precise gunplay and abilities",
            image: "/images/games/valorant.png",
            color: "#FD4556",
            rank: "Platinum"
        },
        {
            id: 3,
            title: "Assassin's Creed Valhalla",
            platform: "PC",
            status: "Open World",
            hours: "80",
            description: "Viking adventure in Dark Ages England",
            image: "/images/games/ACValhalla.png",
            color: "#003366",
            progress: "45%"
        },
        {
            id: 4,
            title: "The Elder Scrolls V: Skyrim Anniversary",
            platform: "PC",
            status: "Modding",
            hours: "500+",
            description: "Endless adventures in Tamriel with mods",
            image: "/images/games/The Elder Scrolls V Skyrim.png",
            color: "#2F4F4F",
            mods: "50+ mods installed"
        }
    ];

    const favoriteGames = [
        {
            id: 1,
            title: "Assassin's Creed Ezio Trilogy",
            genre: "Action / Stealth",
            hours: "150+",
            description: "Nothing is true, everything is permitted. We work in the dark, to serve the light.",
            image: "/images/games/ezio-trilogy.png",
            color: "#B8860B",
            favorite: "AC Revelations"
        },
        {
            id: 2,
            title: "Valorant",
            genre: "Tactical FPS",
            hours: "400+",
            description: "My go-to competitive shooter with friends",
            image: "/images/games/valorant.png",
            color: "#FD4556",
            main: "Raze / Jett"
        },
        {
            id: 3,
            title: "The Elder Scrolls V: Skyrim",
            genre: "RPG / Open World",
            hours: "600+",
            description: "A game I can always return to, no matter how many times",
            image: "/images/games/The Elder Scrolls V Skyrim.png",
            color: "#2F4F4F",
            playstyle: "Battlemage | Stealth Barbarian"
        },
        {
            id: 4,
            title: "Ghost of Tsushima",
            genre: "Action / Adventure",
            hours: "60",
            description: "Visually stunning samurai masterpiece with emotional story",
            image: "/images/games/Ghost Of Tsushima.png",
            color: "#DC143C",
            aspect: "Combat & Visuals"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={styles.into__container}>
            {/* Hero Section */}
            <motion.div 
                className={styles.hero__section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.hero__title}>
                    What I'm <span className={styles.highlight}>Into</span>
                </h1>
                <p className={styles.hero__subtitle}>
                    Beyond the code, here's what fuels my creativity and keeps me entertained.
                    From late-night gaming sessions to mood-setting playlists.
                </p>
            </motion.div>

            {/* Currently Playing Games */}
            <motion.section 
                className={styles.section}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.section__header}>
                    <h2 className={styles.section__title}>
                        <i className="fas fa-gamepad"></i> Currently Grinding
                    </h2>
                    <p className={styles.section__description}>
                        Games that are currently taking up my free time. Always down for co-op!
                    </p>
                </div>

                <div className={styles.games__grid}>
                    {currentlyPlaying.map((game) => (
                        <motion.div 
                            key={game.id}
                            className={styles.game__card}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            data-cursor="hover"
                        >
                            <div className={styles.game__header}>
                                <div className={styles.game__status} style={{ backgroundColor: game.color }}>
                                    {game.status}
                                </div>
                                <div className={styles.game__hours}>
                                    <i className="fas fa-clock"></i> {game.hours}
                                </div>
                            </div>
                            
                            <div className={styles.game__image}>
                                <div
                                    className={styles.image__placeholder}
                                    // style={{ backgroundColor: game.color + '20' }}
                                >
                                    <img src={game.image} alt="" />
                                    {/* <div className={styles.game__icon}>
                                        {game.id === 1 && <i className="fas fa-user-secret"></i>}
                                        {game.id === 2 && <i className="fas fa-crosshairs"></i>}
                                        {game.id === 3 && <i className="fas fa-helmet-battle"></i>}
                                        {game.id === 4 && <i className="fas fa-dragon"></i>}
                                    </div> */}
                                    {/* <span className={styles.game__initial}>
                                        {game.title.split(':')[0].split(' ').map(word => word[0]).join('')}
                                    </span> */}
                                </div>
                            </div>
                            
                            <div className={styles.game__content}>
                                <h3 className={styles.game__title}>{game.title}</h3>
                                <div className={styles.game__platform}>
                                    <i className="fas fa-desktop"></i> {game.platform}
                                </div>
                                <p className={styles.game__description}>{game.description}</p>
                                
                                <div className={styles.game__stats}>
                                    {game.progress && (
                                        <span className={styles.stat}>
                                            <i className="fas fa-chart-line"></i> Progress: {game.progress}
                                        </span>
                                    )}
                                    {game.rank && (
                                        <span className={styles.stat}>
                                            <i className="fas fa-trophy"></i> Rank: {game.rank}
                                        </span>
                                    )}
                                    {game.mods && (
                                        <span className={styles.stat}>
                                            <i className="fas fa-puzzle-piece"></i> {game.mods}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Favorite Games */}
            <motion.section 
                className={styles.section}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.section__header}>
                    <h2 className={styles.section__title}>
                        <i className="fas fa-heart"></i> All-Time Classics
                    </h2>
                    <p className={styles.section__description}>
                        Games that have a special place in my heart. The ones I'd replay any day.
                    </p>
                </div>

                <div className={styles.favorites__grid}>
                    {favoriteGames.map((game) => (
                        <motion.div 
                            key={game.id}
                            className={styles.favorite__card}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.01 }}
                            data-cursor="hover"
                        >
                            <div className={styles.favorite__image}>
                                <img src={game.image} alt={game.title} />
                                <div className={styles.favorite__header}>
                                    <span className={styles.favorite__genre} style={{ backgroundColor: game.color }}>
                                        {game.genre}
                                    </span>
                                    <span className={styles.favorite__hours}>
                                        <i className="fas fa-clock"></i> {game.hours}
                                    </span>
                                </div>
                            </div>
                            
                            <div className={styles.favorite__content}>
                                <h3 className={styles.favorite__title}>{game.title}</h3>
                                <p className={styles.favorite__description}>{game.description}</p>
                                
                                <div className={styles.favorite__details}>
                                    {game.favorite && (
                                        <span className={styles.detail}>
                                            <i className="fas fa-star"></i> Favorite: {game.favorite}
                                        </span>
                                    )}
                                    {game.main && (
                                        <span className={styles.detail}>
                                            <i className="fas fa-user"></i> Main: {game.main}
                                        </span>
                                    )}
                                    {game.playstyle && (
                                        <span className={styles.detail}>
                                            <i className="fas fa-fire"></i> {game.playstyle}
                                        </span>
                                    )}
                                    {game.aspect && (
                                        <span className={styles.detail}>
                                            <i className="fas fa-eye"></i> Best: {game.aspect}
                                        </span>
                                    )}
                                </div>
                            </div>
                            
                            <div className={styles.favorite__footer}>
                                <div className={styles.rating}>
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                                <span className={styles.replay}>
                                    <i className="fas fa-redo"></i> Would replay forever
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Playlists */}
            <motion.section 
                className={styles.section}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.section__header}>
                    <h2 className={styles.section__title}>
                        <i className="fas fa-music"></i> Mood Playlists
                    </h2>
                    <p className={styles.section__description}>
                        Curated soundtracks for different emotions and moments. Mostly sadboi hours.
                    </p>
                </div>

                <div className={styles.playlists__grid}>
                    {playlists.map((playlist) => (
                        <motion.div 
                            key={playlist.id}
                            className={styles.playlist__card}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            data-cursor="hover"
                        >
                            <div 
                                className={styles.playlist__image}
                                style={{ backgroundColor: playlist.color + '20' }}
                            >
                                <div className={styles.playlist__mood}>
                                    {playlist.mood}
                                </div>
                                <img src={playlist.image} alt="" />
                                {/* <div className={styles.playlist__icon}>
                                    <i className="fab fa-spotify"></i>
                                </div> */}
                                <div className={styles.play__button}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            
                            <div className={styles.playlist__content}>
                                <h3 className={styles.playlist__title}>{playlist.title}</h3>
                                <p className={styles.playlist__description}>{playlist.description}</p>
                                
                                <div className={styles.playlist__actions}>
                                    <a 
                                        href={playlist.link}
                                        className={styles.spotify__link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-spotify"></i> Open in Spotify
                                    </a>
                                    {/* <button className={styles.preview__btn}>
                                        <i className="fas fa-play-circle"></i> Preview
                                    </button> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Currently Listening */}
            <motion.div 
                className={styles.currently__listening}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <div className={styles.listening__content}>
                    <div className={styles.listening__icon}>
                        <i className="fas fa-headphones"></i>
                    </div>
                    <div className={styles.listening__text}>
                        <div className={styles.now__playing}>
                            <span className={styles.now__label}>NOW PLAYING</span>
                            <h3>Timeless - The Weeknd</h3>
                        </div>
                        <p className={styles.song__description}>
                            "I'll be timeless, I swear I'll be timeless" - Perfect blend of melancholy and hope
                        </p>
                        <div className={styles.player__controls}>
                            <button className={styles.control__btn}>
                                <i className="fas fa-step-backward"></i>
                            </button>
                            <button className={styles.play__btn}>
                                <i className="fas fa-play"></i>
                            </button>
                            <button className={styles.control__btn}>
                                <i className="fas fa-step-forward"></i>
                            </button>
                        </div>
                        <div className={styles.music__progress}>
                            <div className={styles.progress__bar}></div>
                        </div>
                        <div className={styles.time__info}>
                            <span>2:45</span>
                            <span>3:35</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Into;