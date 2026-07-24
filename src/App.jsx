//stripe links!
//update montcalir mix

import { useState, useEffect, useRef } from "react";

const FONT = "'Menlo', monospace";

const TRACKS = [
  {
    id: 1,
    title: "Montclair Mix",
    duration: 1186,
    src: "/MontclairMix.mp3",
    spotify: "https://open.spotify.com/artist/07GSo1Xpteoar0y8i1sMHu?si=mBL9IlzvSdCnCiXTZ5VMfQ",
    youtube: null,
  },
];

const YOUTUBE_VIDEOS = [
  { id: 1, title: "Gazing at the Sun", url: "https://youtu.be/4Gvmfvrk-i0?si=Z0rGmhIUF4wadqFh" },
  { id: 2, title: "Mothballs", url: "https://youtu.be/Iwlw9ilZe7o?si=HCrwQ8A-Cpp2taOy"},
];

const SHOWS = [
  {
    date: "July 31, 2026",
    venue: "surprise location",
    city: "Orlando, FL",
    mapsLink: null,
  },{
    date: "August 6, 2026",
    venue: "Imperial Wine Bar",
    city: "Orlando, FL",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Imperial+Wine+Bar+Orlando+FL",
  },
  {
    date: "August 21, 2026",
    venue: "Sarbez!",
    city: "St. Augustine, FL",
    mapsLink: "https://maps.app.goo.gl/KL3inLCJmnCSzQWM6",
  },
  {
    date: "August 27, 2026",
    venue: "Hillcrest Coffee",
    city: "Lakeland, FL",
    mapsLink: "https://maps.app.goo.gl/YhfDXv81WvHBUoWS6",
  },
  {
    date: "August 28, 2026",
    venue: "Marketplace at Avalon",
    city: "Orlando, FL",
    mapsLink: "https://maps.app.goo.gl/pSfw2R9Hyu19kBvx6",
  },
  {
    date: "September 4/5, 2026",
    venue: "Clancy Cantina",
    city: "New Smyrna, FL",
    mapsLink: "https://maps.app.goo.gl/xmYQKPi5uqbvW6449",
  },
  {
    date: "October 18, 2026",
    venue: "Lil Indies",
    city: "Orlando, FL",
    mapsLink: "https://maps.app.goo.gl/Pnnqoz9sjt1dTECP7",
  },
  {
    date: "December 2, 2026",
    venue: "evil venue",
    city: "Orlando, FL",
    mapsLink: null,
  },
];

const MERCH = [
  {
    id: "shirt",
    name: "Montclair is for Lovers Shirt",
    price: "$25",
    stripeLink: "",
    imgs: ["/MontclairShirt.JPG", "/montclairtee.JPG"],
    description: "a way for those who don't have a cd or cassette player to be included.",
  },
  {
    id: "cd",
    name: "Montclair EP — CD",
    price: "$10",
    stripeLink: "price_1TvfIv3Gm5v9jtYGQgCLFJnq",
    imgs: ["/CDFront.JPG","CDinside.JPG", "/CDBack.JPG"],
    description: "4 cool tracks for you to enjoy, if you have a cd player.",
  },
  {
    id: "cassette",
    name: "Montclair EP — Cassette",
    price: "$10",
    stripeLink: "",
    imgs: ["/CassetteBack.JPG", "/CassetteFront.JPG"],
    description: "4 cool tracks for you to enjoy, if you have a cassette player.",
  },
];

const GALLERY = [
  { id: 1, imgs: ["/SillyBand.JPG"], description: "five veterans post war", date: "05-08-2026" },
  { id: 2, imgs: ["/Balloons.JPG"], description: "******", date: "05-01-2026" },
  { id: 3, imgs: ["/anotherCandid.JPG"], description: "******", date: "05-08-2026" },
  { id: 4, imgs: ["/areaClosed.JPG"], description: "******", date: "04-19-2026" },
  { id: 5, imgs: ["/redNwhite2.JPG"], description: "montclair", date: "02-22-2026" },
  { id: 6, imgs: ["/bobfull.JPG"], description: "******", date: "02-28-2026" },
  { id: 7, imgs: ["/bobadjust3.JPG"], description: "******", date: "02-28-2026" },
  { id: 8, imgs: ["/bobadjust4.JPG"], description: "******", date: "02-28-2026" },
  { id: 9, imgs: ["/bobsolo.JPG"], description: "******", date: "02-28-2026" },
  { id: 10, imgs: ["/bobsolo4.JPG"], description: "******", date: "02-28-2026" },
  { id: 11, imgs: ["/bobsolo5.JPG"], description: "******", date: "02-28-2026" },
  { id: 12, imgs: ["/bobsolo9.JPG"], description: "******", date: "02-28-2026" },
  { id: 13, imgs: ["/bobadjust5.JPG"], description: "******", date: "02-28-2026" },
  { id: 14, imgs: ["/bobset5.JPG"], description: "******", date: "02-28-2026" },
  { id: 15, imgs: ["/m4ldigi2.JPG"], description: "******", date: "02-28-2026" },
  { id: 16, imgs: ["/boblawn.JPG"], description: "mill's lawn", date: "02-28-2026" },
  { id: 17, imgs: ["/bobset6.JPG"], description: "******", date: "02-28-2026" },
  { id: 18, imgs: ["/laundromog.JPG"], description: "******", date: "02-12-2026" },
  { id: 19, imgs: ["/sleepy.JPG"], description: "******", date: "05-09-2026" },
  { id: 20, imgs: ["/sleepy2.JPG"], description: "naptime", date: "05-09-2026" },
  { id: 21, imgs: ["/notes.JPG"], description: "******", date: "05-04-2026" },
  { id: 22, imgs: ["/balloons3.JPG"], description: "******", date: "05-08-2026" },
  { id: 23, imgs: ["/piano.JPG"], description: "******", date: "06-10-2026" },
  { id: 24, imgs: ["/piano2.JPG"], description: "******", date: "06-11-2026" },
  { id: 25, imgs: ["/swan.JPG"], description: "******", date: "04-19-2026" },
  { id: 26, imgs: ["/tree.JPG"], description: "******", date: "04-19-2026" },
  { id: 27, imgs: ["/tree2.JPG"], description: "******", date: "04-19-2026" },
  { id: 28, imgs: ["/gatsoriginal.JPG"], description: "******", date: "06-05-2026" },
  { id: 29, imgs: ["/notes2.JPG"], description: "MoneyWoize", date: "04-25-2026" },
  { id: 30, imgs: ["/madbeach.JPG"], description: "madeira beach", date: "09-13-2025" },
  { id: 31, imgs: ["/BOTBSetlist.JPG"], description: "******", date: "02-28-2026" },
  { id: 32, imgs: ["/cowvocals.JPG"], description: "moo", date: "12-12-2025" },
  { id: 33, imgs: ["/yellowpiano.JPG"], description: "******", date: "09-29-2025" },
  { id: 34, imgs: ["/montclairfirst.JPG"], description: "******", date: "01-15-2026" },
  { id: 29, imgs: ["/montclairfirst2.JPG"], description: "******", date: "01-15-2026" }
];

const MERCH_EMAIL = "bandmontclair@gmail.com";

function fmt(s) {
  const m = Math.floor(s / 60);
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

function getYoutubeId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

function parseGalleryDate(d) {
  const [month, day, year] = d.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

function FrogCursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const clickingRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    const styleTag = document.createElement("style");
    styleTag.setAttribute("data-frog-cursor", "true");
    styleTag.textContent = "* { cursor: none !important; }";
    document.head.appendChild(styleTag);

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);
    const handleDown = () => { clickingRef.current = true; };
    const handleUp = () => { clickingRef.current = false; };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    let raf;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.28;
      pos.current.y += (target.current.y - pos.current.y) * 0.28;
      const squish = clickingRef.current ? 0.72 : 1;
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) scale(${squish})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      styleTag.remove();
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.15s ease",
        willChange: "transform",
      }}
    >
      <img
        src="/frog-cursor.png"
        alt=""
        draggable={false}
        style={{ display: "block", width: 32, height: 32, imageRendering: "pixelated" }}
      />
    </div>
  );
}

function Slideshow({ items, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const item = items[index];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [items, onClose]);

  return (
    <div style={sl.overlay} onClick={onClose}>
      <div style={sl.inner} onClick={(e) => e.stopPropagation()}>
        <button style={sl.closeBtn} onClick={onClose}>✕</button>
        <img src={item.imgs[0]} alt={item.description} style={sl.img} />
        <div style={sl.meta}>
          <button style={sl.arrowBtn} onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}>←</button>
          <span style={sl.caption}>{item.description}</span>
          <span style={sl.counter}>{index + 1} / {items.length}</span>
          <button style={sl.arrowBtn} onClick={() => setIndex((i) => (i + 1) % items.length)}>→</button>
        </div>
      </div>
    </div>
  );
}

function MerchDetail({ item, onBack }) {
  const [activeImg, setActiveImg] = useState(0);
  return (
    <div style={d.root}>
      <FrogCursor />
      <nav style={d.nav}>
        <button style={d.backBtn} onClick={onBack}>← back to shop</button>
      </nav>
      <div style={d.layout}>
        <div style={d.imageCol}>
          <img src={item.imgs[activeImg]} alt={item.name} style={d.mainImg} />
          {item.imgs.length > 1 && (
            <div style={d.thumbRow}>
              {item.imgs.map((src, i) => (
                <img
                  key={i} src={src} alt={`${item.name} view ${i + 1}`}
                  style={{ ...d.thumb, ...(i === activeImg ? d.thumbActive : {}) }}
                  onClick={() => setActiveImg(i)}
                />
              ))}
            </div>
          )}
        </div>
        <div style={d.infoCol}>
          <h1 style={d.name}>{item.name}</h1>
          <p style={d.price}>{item.price}</p>
          <p style={d.description}>{item.description}</p>
          <a href={item.stripeLink} target="_blank" rel="noopener noreferrer" style={d.buyBtn}>
            buy — {item.price} →
          </a>
        </div>
      </div>
    </div>
  );
}

function Player({ currentTrack, setCurrentTrack }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVol, setShowVol] = useState(false);
  const audioRef = useRef(new Audio());
  const volRef = useRef(null);
  const track = TRACKS[currentTrack];

  useEffect(() => {
    const audio = audioRef.current;
    if (!track.src) return;
    if (audio.dataset.trackId !== String(track.id)) {
      audio.src = track.src;
      audio.currentTime = 0;
      audio.dataset.trackId = String(track.id);
      setElapsed(0);
      setProgress(0);
    }
    if (playing) audio.play().catch(() => {});
    else audio.pause();
  }, [currentTrack, playing, track]);

  useEffect(() => { audioRef.current.volume = volume; }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    const update = () => {
      setElapsed(Math.floor(audio.currentTime));
      setProgress(audio.currentTime / (audio.duration || 1));
    };
    const onEnded = () => {
      setCurrentTrack((t) => (t + 1) % TRACKS.length);
      setElapsed(0); setProgress(0);
    };
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("ended", onEnded);
    };
  }, [setCurrentTrack]);

  useEffect(() => {
    const handleClick = (e) => {
      if (volRef.current && !volRef.current.contains(e.target)) setShowVol(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setProgress(ratio);
    const newTime = ratio * track.duration;
    setElapsed(Math.round(newTime));
    if (track.src) audioRef.current.currentTime = newTime;
  };

  const selectTrack = (i) => {
    if (i === currentTrack) { setPlaying((p) => !p); }
    else { setCurrentTrack(i); setElapsed(0); setProgress(0); setPlaying(true); }
  };

  const prev = () => { setCurrentTrack((t) => (t - 1 + TRACKS.length) % TRACKS.length); setElapsed(0); setProgress(0); };
  const next = () => { setCurrentTrack((t) => (t + 1) % TRACKS.length); setElapsed(0); setProgress(0); };

  return (
    <div style={ps.wrap}>
      <div style={ps.trackList}>
        {TRACKS.map((t, i) => (
          <div
            key={t.id}
            style={{ ...ps.trackRow, ...(i === currentTrack ? ps.trackRowActive : {}) }}
            onClick={() => selectTrack(i)}
          >
            <span style={ps.trackNum}>{i + 1}</span>
            <span style={ps.trackTitle}>{t.title}</span>
            <span style={ps.trackDur}>{fmt(t.duration)}</span>
          </div>
        ))}
      </div>
      <div style={ps.bar}>
        <button style={ps.btn} onClick={prev} title="Previous">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
            <polygon points="7,0 0,6 7,12" fill="#444" />
            <rect x="8" y="0" width="2" height="12" fill="#444" />
            <polygon points="14,0 8,6 14,12" fill="#444" />
          </svg>
        </button>
        <div style={ps.divider} />
        <button style={ps.btn} onClick={() => setPlaying((p) => !p)} title={playing ? "Pause" : "Play"}>
          {playing ? (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <rect x="0" y="0" width="3.5" height="12" fill="#444" />
              <rect x="6.5" y="0" width="3.5" height="12" fill="#444" />
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <polygon points="0,0 10,6 0,12" fill="#444" />
            </svg>
          )}
        </button>
        <div style={ps.divider} />
        <button style={ps.btn} onClick={next} title="Next">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
            <polygon points="0,0 7,6 0,12" fill="#444" />
            <rect x="4" y="0" width="2" height="12" fill="#444" />
            <polygon points="6,0 14,6 6,12" fill="#444" />
          </svg>
        </button>
        <div style={ps.scrubberWrap} onClick={seek}>
          <div style={ps.scrubberTrack}>
            <div style={{ ...ps.scrubberFill, width: `${progress * 100}%` }} />
          </div>
          <div style={{ ...ps.scrubberThumb, left: `calc(${progress * 100}% - 7px)` }} />
        </div>
        <span style={ps.time}>{fmt(elapsed)} / {fmt(track.duration)}</span>
        <div style={ps.divider} />
        <div ref={volRef} style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <span style={{ ...ps.volIcon, cursor: "pointer" }} onClick={() => setShowVol((v) => !v)}>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
              <polygon points="0,4 5,4 9,0 9,14 5,10 0,10" fill="#444" />
              {volume > 0 && <path d="M11 4 Q14 7 11 10" stroke="#444" strokeWidth="1.5" fill="none" strokeLinecap="round" />}
              {volume > 0.5 && <path d="M12.5 2 Q17 7 12.5 12" stroke="#444" strokeWidth="1.5" fill="none" strokeLinecap="round" />}
            </svg>
          </span>
          {showVol && (
            <div style={ps.volSliderWrap}>
              <input type="range" min="0" max="1" step="0.01" value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))} style={ps.volSlider} />
            </div>
          )}
        </div>
      </div>
      <div style={ps.nowPlaying}>{playing ? `playing: ${track.title}` : track.title}</div>
    </div>
  );
}

function SnakeGame() {
  const GRID = 15;
  const CELL = 20;
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const touchStartRef = useRef(null);
  const stateRef = useRef({
    snake: [{ x: 7, y: 7 }],
    dir: { x: 1, y: 0 },
    nextDir: { x: 1, y: 0 },
    food: { x: 10, y: 7 },
  });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch("/api/leaderboard");
      const data = await res.json();
      setLeaderboard(Array.isArray(data.scores) ? data.scores : []);
    } catch (e) {
    }
  };

  useEffect(() => { fetchLeaderboard(); }, []);

  const submitScore = async () => {
    if (submitting || submitted) return;
    const name = nameInput.trim().slice(0, 3).toUpperCase() || "ANO";
    setSubmitting(true);
    try {
      await fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, score }),
      });
      setSubmitted(true);
      fetchLeaderboard();
    } catch (e) {
    } finally {
      setSubmitting(false);
    }
  };

  const randomFood = (snake) => {
    let pos;
    do {
      pos = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
    } while (snake.some((seg) => seg.x === pos.x && seg.y === pos.y));
    return pos;
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const st = stateRef.current;
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, GRID * CELL, GRID * CELL);
    ctx.fillStyle = "#6abf5e";
    st.snake.forEach((seg) => ctx.fillRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2));
    ctx.fillStyle = "#e05c5c";
    ctx.fillRect(st.food.x * CELL + 2, st.food.y * CELL + 2, CELL - 4, CELL - 4);
  };

  const resetGame = () => {
    const snake = [{ x: 7, y: 7 }];
    stateRef.current = { snake, dir: { x: 1, y: 0 }, nextDir: { x: 1, y: 0 }, food: randomFood(snake) };
    setScore(0);
    setGameOver(false);
    setStarted(true);
    setSubmitted(false);
    setNameInput("");
  };

  const setDirection = (nd) => {
    const st = stateRef.current;
    if (!(nd.x === -st.dir.x && nd.y === -st.dir.y)) {
      st.nextDir = nd;
    }
  };

  useEffect(() => { draw(); }, []);

  useEffect(() => {
    const keyMap = {
      ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 },
      w: { x: 0, y: -1 }, s: { x: 0, y: 1 }, a: { x: -1, y: 0 }, d: { x: 1, y: 0 },
    };

    const isTypingTarget = (el) => {
      if (!el) return false;
      const tag = el.tagName;
      return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
    };

    const handleKey = (e) => {
      if (isTypingTarget(document.activeElement)) return;
      const nd = keyMap[e.key];
      if (nd) {
        setDirection(nd);
        e.preventDefault();
      }
      if (e.key === " ") { resetGame(); e.preventDefault(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);


  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const handleTouchStart = (e) => {
      const t = e.touches[0];
      touchStartRef.current = { x: t.clientX, y: t.clientY };
    };

    const handleTouchMove = (e) => {
      if (touchStartRef.current) e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      const start = touchStartRef.current;
      touchStartRef.current = null;
      if (!start) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      const SWIPE_THRESHOLD = 20;

      if (Math.max(absX, absY) > SWIPE_THRESHOLD) {
        if (absX > absY) setDirection({ x: dx > 0 ? 1 : -1, y: 0 });
        else setDirection({ x: 0, y: dy > 0 ? 1 : -1 });
      } else if (!started || gameOver) {
        resetGame();
      }
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd);
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [started, gameOver]);

  useEffect(() => {
    if (!started || gameOver) return;
    const interval = setInterval(() => {
      const st = stateRef.current;
      st.dir = st.nextDir;
      const head = { x: st.snake[0].x + st.dir.x, y: st.snake[0].y + st.dir.y };
      const hitWall = head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID;
      const hitSelf = st.snake.some((seg) => seg.x === head.x && seg.y === head.y);
      if (hitWall || hitSelf) {
        setGameOver(true);
        setHighScore((h) => Math.max(h, st.snake.length - 1));
        return;
      }
      const newSnake = [head, ...st.snake];
      if (head.x === st.food.x && head.y === st.food.y) {
        st.food = randomFood(newSnake);
        setScore((sc) => sc + 1);
      } else {
        newSnake.pop();
      }
      st.snake = newSnake;
      draw();
    }, 120);
    return () => clearInterval(interval);
  }, [started, gameOver]);

  return (
    <section id="play" style={s.section}>
      <h2 style={s.heading}>play</h2>
      <div style={sn.wrap}>
        <div style={sn.scoreRow}>
          <span>score: {score}</span>
          <span>best: {highScore}</span>
        </div>
        <div ref={wrapRef} style={sn.canvasWrap}>
          <canvas ref={canvasRef} width={GRID * CELL} height={GRID * CELL} style={sn.canvas} />
          {(!started || gameOver) && (
            <div style={sn.overlay}>
              {gameOver ? (
                <p style={sn.overlayText}>game over — {score}</p>
              ) : (
                <p style={sn.overlayText}>snake</p>
              )}
              {gameOver && !submitted && (
                <div style={sn.submitRow}>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitScore()}
                    placeholder="ace"
                    maxLength={3}
                    style={sn.nameInput}
                  />
                  <button style={sn.submitBtn} onClick={submitScore} disabled={submitting}>
                    {submitting ? "..." : "submit"}
                  </button>
                </div>
              )}
              {gameOver && submitted && <p style={sn.submittedText}>added to the board</p>}
              <button style={sn.playBtn} onClick={resetGame}>
                {gameOver ? "play again →" : "play →"}
              </button>
            </div>
          )}
        </div>
        <p style={sn.hint}>arrow keys / wasd — space / tap to restart</p>
        <div style={sn.leaderboard}>
          <p style={sn.leaderboardTitle}>top scores</p>
          {leaderboard.length === 0 ? (
            <p style={sn.leaderboardEmpty}>no scores yet — be the first</p>
          ) : (
            leaderboard.slice(0, 3).map((entry, i) => (
              <div key={i} style={sn.leaderboardRow}>
                <span style={sn.leaderboardRank}>{i + 1}</span>
                <span style={sn.leaderboardName}>{entry.name}</span>
                <span style={sn.leaderboardScore}>{entry.score}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    const trimmed = email.trim();
    if (!trimmed || submitting) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error("bad response");
      setSent(true);
    } catch (e) {
      setError("something went wrong — try again?");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={s.section}>
      <h2 style={s.heading}>stay in the loop</h2>
      {sent ? (
        <p style={s.newsletterThanks}>thanks.</p>
      ) : (
        <>
          <div style={s.newsletterRow}>
            <input type="email" placeholder="your@email.com" value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              style={s.newsletterInput} />
            <button onClick={submit} style={s.newsletterBtn} disabled={submitting}>
              {submitting ? "..." : "subscribe"}
            </button>
          </div>
          {error && <p style={s.newsletterError}>{error}</p>}
        </>
      )}
    </section>
  );
}

export default function Montclair() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [activeMerch, setActiveMerch] = useState(null);
  const [slideshowIndex, setSlideshowIndex] = useState(null);
  const track = TRACKS[currentTrack];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const spotifyLabel =
    currentTrack === 2
      ? "montclair — listen on spotify →"
      : `${track.title.toLowerCase()} — listen on spotify →`;

  const sortedGallery = [...GALLERY].sort((a, b) => parseGalleryDate(a.date) - parseGalleryDate(b.date));

  if (activeMerch) return <MerchDetail item={activeMerch} onBack={() => setActiveMerch(null)} />;

  return (
    <div style={s.root}>
      <FrogCursor />
      {slideshowIndex !== null && (
        <Slideshow items={sortedGallery} startIndex={slideshowIndex} onClose={() => setSlideshowIndex(null)} />
      )}
      <nav style={s.nav}>
        <span style={s.logo}>Montclair</span>
        <div style={s.navLinks}>
          {["shows", "music", "shop", "gallery", "play"].map((item) => (
            <button key={item} style={s.navLink} onClick={() => scrollTo(item)}>{item}</button>
          ))}
        </div>
      </nav>

      <section id="shows" style={s.section}>
        <h2 style={s.heading}>shows</h2>
        <div style={s.showsList}>
          {SHOWS.map((show) => (
            <div key={show.date} style={s.showRow}>
              <span style={s.showDate}>{show.date}</span>
              <span style={s.showVenue}>
                {show.venue && show.mapsLink ? (
                  <a href={show.mapsLink} target="_blank" rel="noopener noreferrer" style={s.venueLink}>
                    {show.venue} <span style={s.venueIcon}>↗</span>
                  </a>
                ) : (
                  show.venue || "—"
                )}
              </span>
              <span style={s.showCity}>{show.city}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={s.divider} />

      <section id="music" style={s.section}>
        <h2 style={s.heading}>music</h2>
        <Player currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
        {track.spotify && (
          <div style={s.linkWrap}>
            <a href={track.spotify} target="_blank" rel="noopener noreferrer" style={s.link}>{spotifyLabel}</a>
          </div>
        )}
        {YOUTUBE_VIDEOS.length > 0 && (
          <div style={s.ytRow}>
            {YOUTUBE_VIDEOS.map((video) => (
              <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" style={s.ytCard}>
                <div style={s.ytThumbWrap}>
                  <img
                    src={`https://img.youtube.com/vi/${getYoutubeId(video.url)}/hqdefault.jpg`}
                    alt={video.title}
                    style={s.ytThumb}
                  />
                  <div style={s.ytPlayBtn}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="rgba(0,0,0,0.65)" />
                      <polygon points="8,6 15,10 8,14" fill="#fff" />
                    </svg>
                  </div>
                </div>
                <span style={s.ytLabel}>{video.title.toLowerCase()} — watch on youtube →</span>
              </a>
            ))}
          </div>
        )}
      </section>

      <div style={s.divider} />

      <section id="shop" style={s.section}>
        <h2 style={s.heading}>shop</h2>
        <div style={s.merchList}>
          {MERCH.map((item) => (
            <div key={item.id} style={s.merchRow}>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                <img src={item.imgs[0]} alt={item.name} style={s.merchImg} />
              </div>
              <span style={s.merchName}>{item.name}</span>
              <span style={s.merchPrice}>{item.price}</span>
              <button style={s.buyBtn} onClick={() => setActiveMerch(item)}>buy →</button>
            </div>
          ))}
        </div>
      </section>

      <div style={s.divider} />

      <section id="gallery" style={{ ...s.section, maxWidth: 960 }}>
        <h2 style={s.heading}>gallery</h2>

        {GALLERY.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888", fontSize: 13 }}>no photos yet.</p>
        ) : (
          <div style={g.grid}>
            {sortedGallery.map((item, i) => (
              <div key={item.id} style={{ ...g.item, cursor: "pointer" }} onClick={() => setSlideshowIndex(i)}>
                <img src={item.imgs[0]} alt={item.description} style={g.img} />
                <span style={g.caption}>{item.description}</span>
                <span style={g.date}>{item.date}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <div style={s.divider} />

      <NewsletterSection />

      <div style={s.divider} />

      <SnakeGame />

      <footer style={s.footer}>
        <a href={`mailto:${MERCH_EMAIL}`} style={s.email}>{MERCH_EMAIL}</a>
      </footer>
    </div>
  );
}

const sn = {
  wrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: 18 },
  scoreRow: {
    display: "flex", gap: 20, fontSize: 12, color: "#555",
    fontFamily: FONT, letterSpacing: "0.02em",
  },
  canvasWrap: { position: "relative", lineHeight: 0, touchAction: "none", width: "100%", maxWidth: 300 },
  canvas: {
    imageRendering: "pixelated", border: "1px solid #ccc", borderRadius: 4, display: "block",
    width: "100%", height: "auto", touchAction: "none",
  },
  overlay: {
    position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)",
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14,
    borderRadius: 4, padding: "16px", boxSizing: "border-box", textAlign: "center",
  },
  overlayText: {
    color: "#fff", fontFamily: FONT, fontSize: 13, letterSpacing: "0.06em", margin: 0, textTransform: "uppercase",
  },
  overlayScore: {
    color: "#ccc", fontFamily: FONT, fontSize: 11, margin: 0,
  },
  playBtn: {
    fontFamily: FONT, fontSize: 12, background: "#fff", color: "#000",
    border: "none", borderRadius: 6, padding: "6px 16px", cursor: "pointer",
  },
  hint: { fontSize: 11, color: "#aaa", fontFamily: FONT, textAlign: "center" },
  submitRow: { display: "flex", gap: 8, alignItems: "center" },
  nameInput: {
    fontFamily: FONT, fontSize: 13, border: "1px solid #666", background: "rgba(255,255,255,0.9)",
    borderRadius: 4, padding: "5px 6px", outline: "none", width: 44,
    textAlign: "center", textTransform: "uppercase", letterSpacing: "0.15em",
  },
  submitBtn: {
    fontFamily: FONT, fontSize: 11, background: "#6abf5e", color: "#111",
    border: "none", borderRadius: 4, padding: "6px 12px", cursor: "pointer",
  },
  submittedText: { color: "#6abf5e", fontFamily: FONT, fontSize: 11, margin: 0 },
  leaderboard: { width: "100%", maxWidth: 300, marginTop: 6 },
  leaderboardTitle: {
    fontSize: 11, color: "#888", fontFamily: FONT, letterSpacing: "0.08em",
    textTransform: "uppercase", textAlign: "center", margin: "0 0 12px",
  },
  leaderboardEmpty: { fontSize: 11, color: "#aaa", fontFamily: FONT, textAlign: "center", margin: 0 },
  leaderboardRow: {
    display: "flex", alignItems: "center", gap: 12, padding: "7px 0",
    borderBottom: "1px solid #eee", fontSize: 12, fontFamily: FONT, color: "#333",
  },
  leaderboardRank: { color: "#aaa", width: 14, flexShrink: 0 },
  leaderboardName: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  leaderboardScore: { color: "#6abf5e", fontWeight: "bold", flexShrink: 0 },
};

const sl = {
  overlay: {
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)",
    zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center",
  },
  inner: {
    position: "relative", display: "flex", flexDirection: "column",
    alignItems: "center", maxWidth: "90vw", maxHeight: "90vh",
  },
  img: {
    maxWidth: "80vw", maxHeight: "75vh", objectFit: "contain", display: "block",
  },
  arrowBtn: {
    background: "none", border: "none", color: "#fff", fontSize: 28,
    cursor: "pointer", fontFamily: FONT, padding: "8px 12px",
    opacity: 0.7, lineHeight: 1, flexShrink: 0,
  },
  closeBtn: {
    position: "absolute", top: -36, right: 0,
    background: "none", border: "none", color: "#fff", fontSize: 18,
    cursor: "pointer", fontFamily: FONT, padding: 4, opacity: 0.7,
  },
  meta: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    width: "80vw", maxWidth: 640, marginTop: 12, gap: 16,
  },
  caption: { color: "#ccc", fontSize: 12, fontFamily: FONT },
  counter: { color: "#666", fontSize: 12, fontFamily: FONT, flexShrink: 0 },
};

const d = {
  root: { background: "#fff", color: "#000", fontFamily: FONT, minHeight: "100vh" },
  nav: {
    padding: "20px 24px", borderBottom: "1px solid #eee",
    position: "sticky", top: 0, background: "#fff", zIndex: 100,
  },
  backBtn: {
    background: "none", border: "none", fontFamily: FONT,
    fontSize: 13, color: "#000", cursor: "pointer", padding: 0, letterSpacing: "0.02em",
  },
  layout: {
    display: "flex", flexWrap: "wrap", gap: "48px",
    padding: "clamp(32px, 6vw, 64px) clamp(20px, 6vw, 48px)",
    maxWidth: 960, margin: "0 auto", boxSizing: "border-box",
  },
  imageCol: { flex: "1 1 340px", minWidth: 0 },
  mainImg: { width: "100%", objectFit: "contain", display: "block", marginBottom: 12 },
  thumbRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  thumb: {
    width: 72, height: 72, objectFit: "cover",
    cursor: "pointer", opacity: 0.5, border: "1px solid transparent", transition: "opacity 0.15s",
  },
  thumbActive: { opacity: 1, border: "1px solid #000" },
  infoCol: { flex: "1 1 260px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16, paddingTop: 4 },
  name: { fontSize: 15, fontWeight: "bold", margin: 0, fontFamily: FONT },
  price: { fontSize: 13, color: "#555", margin: 0 },
  description: { fontSize: 13, color: "#444", lineHeight: 1.7, margin: 0 },
  buyBtn: {
    display: "inline-block", fontFamily: FONT, fontSize: 13,
    color: "#fff", background: "#000", border: "none",
    padding: "10px 20px", cursor: "pointer", borderRadius: 6,
    textDecoration: "none", alignSelf: "flex-start", marginTop: 8,
  },
};

const ps = {
  wrap: { maxWidth: 560, fontFamily: FONT, width: "100%", margin: "0 auto" },
  trackList: { marginBottom: 8 },
  trackRow: {
    display: "flex", alignItems: "center", gap: 12, padding: "6px 0",
    cursor: "pointer", borderBottom: "1px solid #eee", fontSize: 13, color: "#444",
  },
  trackRowActive: { color: "#000", fontWeight: "bold" },
  trackNum: { width: 16, textAlign: "right", color: "#aaa", fontSize: 12, flexShrink: 0 },
  trackTitle: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  trackDur: { color: "#aaa", fontSize: 12, flexShrink: 0 },
  bar: {
    display: "flex", alignItems: "center", gap: 8,
    background: "#efefef", border: "1px solid #ccc", borderRadius: 8,
    padding: "8px 12px", marginTop: 16,
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.08)", userSelect: "none",
    flexWrap: "nowrap", minWidth: 0,
  },
  btn: {
    background: "none", border: "none", cursor: "pointer", padding: "2px 4px",
    display: "flex", alignItems: "center", justifyContent: "center",
    opacity: 0.75, flexShrink: 0,
  },
  divider: { width: 1, height: 20, background: "#bbb", flexShrink: 0 },
  scrubberWrap: {
    flex: 1, position: "relative", height: 16, minWidth: 40,
    display: "flex", alignItems: "center", cursor: "pointer",
  },
  scrubberTrack: { width: "100%", height: 4, background: "#ccc", borderRadius: 2, overflow: "hidden", position: "relative" },
  scrubberFill: { height: "100%", background: "#6abf5e", borderRadius: 2, transition: "width 0.5s linear" },
  scrubberThumb: {
    position: "absolute", top: "50%", transform: "translateY(-50%)",
    width: 14, height: 14, background: "#6abf5e", borderRadius: "50%",
    border: "2px solid #fff", boxShadow: "0 0 2px rgba(0,0,0,0.3)", pointerEvents: "none",
  },
  time: { fontSize: 11, color: "#555", whiteSpace: "nowrap", fontFamily: FONT, flexShrink: 0 },
  volIcon: { display: "flex", alignItems: "center", opacity: 0.6 },
  volSliderWrap: {
    position: "absolute", bottom: 28, right: 0,
    background: "#efefef", border: "1px solid #ccc",
    borderRadius: 6, padding: "8px 6px", display: "flex", alignItems: "center", zIndex: 10,
  },
  volSlider: { writingMode: "vertical-lr", direction: "rtl", width: 4, height: 60, cursor: "pointer", accentColor: "#6abf5e" },
  nowPlaying: { fontSize: 12, color: "#888", marginTop: 8, fontFamily: FONT },
};

const g = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 24,
  },
  item: { display: "flex", flexDirection: "column", gap: 8 },
  img: { width: "100%", aspectRatio: "1", objectFit: "cover" },
  caption: { fontSize: 12, color: "#444" },
  date: { fontSize: 11, color: "#aaa" },
};

const s = {
  root: { background: "#fff", color: "#000", fontFamily: FONT, minHeight: "100vh", width: "100%", fontSize: 14, boxSizing: "border-box" },
  nav: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "20px 24px", borderBottom: "1px solid #eee",
    position: "sticky", top: 0, background: "#fff", zIndex: 100,
    flexWrap: "wrap", gap: 12,
  },
  navBackBtn: {
    background: "none", border: "none", fontFamily: FONT,
    fontSize: 13, color: "#000", cursor: "pointer", padding: 0, letterSpacing: "0.02em",
  },
  slideshowBtn: {
    background: "none", border: "none", fontFamily: FONT, fontSize: 13,
    color: "#000", cursor: "pointer", padding: 0,
    borderBottom: "1px solid #000", paddingBottom: 1, letterSpacing: "0.02em",
  },
  logo: { fontSize: 15, fontWeight: "bold", fontFamily: FONT, letterSpacing: "0.01em" },
  navLinks: { display: "flex", gap: 24, flexWrap: "wrap" },
  navLink: {
    background: "none", border: "none", fontFamily: FONT,
    fontSize: 13, color: "#000", cursor: "pointer", padding: 0, letterSpacing: "0.02em",
  },
  section: { padding: "clamp(40px, 8vw, 72px) clamp(20px, 6vw, 48px)", maxWidth: 720, margin: "0 auto", boxSizing: "border-box", width: "100%" },
  heading: { fontSize: 13, fontWeight: "bold", letterSpacing: "0.08em", margin: "0 0 32px", fontFamily: FONT, textAlign: "center" },
  divider: { borderTop: "1px solid #eee", margin: "0 clamp(20px, 6vw, 48px)" },
  galleryHeader: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    marginBottom: 32,
  },
  viewAllBtn: {
    background: "none", border: "none", fontFamily: FONT, fontSize: 13,
    color: "#000", cursor: "pointer", padding: 0,
    borderBottom: "1px solid #000", paddingBottom: 1, letterSpacing: "0.02em",
  },
  viewAllBtnBottom: {
    background: "none", border: "none", fontFamily: FONT, fontSize: 13,
    color: "#000", cursor: "pointer", padding: 0,
    borderBottom: "1px solid #000", paddingBottom: 1, letterSpacing: "0.02em",
  },
  galleryPreviewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 24,
  },
  galleryItem: { display: "flex", flexDirection: "column", gap: 8 },
  galleryImg: { width: "100%", aspectRatio: "1", objectFit: "cover" },
  galleryCaption: { fontSize: 12, color: "#444" },
  galleryDate: { fontSize: 11, color: "#aaa" },
  merchImg: { width: "clamp(200px, 60vw, 400px)", height: "auto", objectFit: "contain" },
  merchList: { display: "flex", flexDirection: "column", gap: 0 },
  merchRow: {
    display: "flex", flexDirection: "column", alignItems: "center",
    textAlign: "center", padding: "28px 0",
    borderBottom: "1px solid #eee", fontSize: 13, gap: 12,
  },
  merchName: { color: "#000" },
  merchPrice: { color: "#555" },
  buyBtn: {
    background: "none", border: "none", fontFamily: FONT, fontSize: 13,
    color: "#000", cursor: "pointer", padding: 0,
    borderBottom: "1px solid #000", paddingBottom: 1,
  },
  showsList: { display: "flex", flexDirection: "column", gap: 0 },
  showRow: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "8px 24px", padding: "14px 0",
    borderBottom: "1px solid #eee", fontSize: 13, alignItems: "center",
  },
  showDate: { color: "#555" },
  showVenue: { color: "#000" },
  venueLink: {
    color: "#000", textDecoration: "none", fontFamily: FONT,
    borderBottom: "1px solid #000", paddingBottom: 1,
  },
  venueIcon: { fontSize: 10, opacity: 0.5 },
  showCity: { color: "#888" },
  linkWrap: { marginTop: 16, textAlign: "center" },
  ytRow: {
    display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20,
    justifyContent: "center", width: "100%",
  },
  ytCard: {
    display: "block", flex: "0 1 260px", maxWidth: 280,
    textDecoration: "none", color: "#000",
  },
  ytThumbWrap: {
    position: "relative", width: "100%", aspectRatio: "16/9",
    overflow: "hidden", borderRadius: 8, border: "1px solid #eee",
  },
  ytThumb: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  ytPlayBtn: {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)", display: "flex",
  },
  ytLabel: {
    display: "block", fontFamily: FONT, fontSize: 13, textAlign: "center",
    color: "#000", marginTop: 10, borderBottom: "1px solid #000", paddingBottom: 1,
  },
  link: { fontFamily: FONT, fontSize: 13, color: "#000", textDecoration: "none", borderBottom: "1px solid #000", paddingBottom: 1 },
  newsletterRow: { display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" },
  newsletterInput: {
    fontFamily: FONT, fontSize: 13, border: "1px solid #ccc",
    borderRadius: 6, padding: "8px 12px", outline: "none",
    minWidth: 200, flex: "1 1 200px", maxWidth: 320,
  },
  newsletterBtn: {
    fontFamily: FONT, fontSize: 13, background: "#000", color: "#fff",
    border: "none", borderRadius: 6, padding: "8px 18px", cursor: "pointer", flexShrink: 0,
  },
  newsletterThanks: { textAlign: "center", color: "#555", fontSize: 13 },
  newsletterError: { textAlign: "center", color: "#e05c5c", fontSize: 12, marginTop: 8, fontFamily: FONT },
  footer: { padding: "clamp(20px, 4vw, 40px) clamp(20px, 6vw, 48px)", borderTop: "1px solid #eee", textAlign: "center" },
  email: { fontFamily: FONT, fontSize: 13, color: "#000", textDecoration: "none" },
};