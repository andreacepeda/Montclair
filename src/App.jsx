import { useState, useEffect, useRef } from "react";

const FONT = "'Menlo', monospace";

const TRACKS = [
  {
    id: 1,
    title: "Mothballs",
    duration: 187,
    src: "/Mothballs.mp3",
    spotify: "https://open.spotify.com/track/0BQOn2mxGjVWj69gR6OeVE?si=37a9202254f0438d",
    youtube: "https://youtu.be/Iwlw9ilZe7o?si=C4aQLWLmfUc0Y5wE",
  },
  {
    id: 2,
    title: "Gazing at the Sun",
    duration: 192,
    src: "/GazingattheSun.mp3",
    spotify: "https://open.spotify.com/track/1Wgo0UnF5A90aZwbI3PqR2?si=a97fe667342d47b4",
    youtube: "https://youtu.be/4Gvmfvrk-i0?si=9w02B90doLD2yxBE",
  },
  {
    id: 3,
    title: "Montclair Mix",
    duration: 1186,
    src: "/MontclairMix.mp3",
    spotify: "https://open.spotify.com/artist/07GSo1Xpteoar0y8i1sMHu?si=mBL9IlzvSdCnCiXTZ5VMfQ",
    youtube: null,
  },
];

const SHOWS = [
  {
    date: "August 6, 2026",
    venue: "Imperial Wine Bar",
    city: "Orlando, FL",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Imperial+Wine+Bar+Orlando+FL",
  },
  {
    date: "August 31, 2026",
    venue: "surprise location",
    city: "Orlando, FL",
    mapsLink: "https://luma.com/skh8jmci?utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3&utm_medium=social&utm_source=ig",
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
    stripeLink: "",
    imgs: ["/CDFront.JPG", "/CDBack.JPG"],
    description: "4 cool tracks for you to enjoy, if you have a cd player.",
  },
  {
    id: "cassette",
    name: "Montclair EP — Cassette",
    price: "$10",
    stripeLink: "",
    imgs: ["/CassetteFront.JPG", "/CassetteBack.JPG"],
    description: "4 cool tracks for you to enjoy, if you have a cassette player.",
  },
];

const GALLERY = [
  {
    id: 1,
    imgs: ["/SillyBand.JPG"],
    description: "Five veterans post war",
    date: "05-08-2026",
  },
  {
    id: 2,
    imgs: ["/Balloons.JPG"],
    description: "********",
    date: "05-01-2026",
  },
  {
    id: 3,
    imgs: ["/Candid.JPG"],
    description: "#show",
    date: "05-08-2026",
  },
  {
    id: 4,
    imgs: ["/guitar.JPG"],
    description: "and we all said thank you *****",
    date: "05-08-2026",
  },
  {
    id: 5,
    imgs: ["/anotherCandid.JPG"],
    description: "**insert classic one liner",
    date: "05-08-2026",
  },
  {
    id: 6,
    imgs: ["/bandBattles.JPG"],
    description: "post set band pic",
    date: "05-08-2026",
  },
  {
    id: 7,
    imgs: ["/areaClosed.JPG"],
    description: "******",
    date: "04-19-2026",
  },
  {
    id: 8,
    imgs: ["/redNwhite.JPG"],
    description: "******",
    date: "02-22-26",
  },
  {
    id: 9,
    imgs: ["/redNwhite2.JPG"],
    description: "******",
    date: "02-22-2026",
  },
  {
    id: 10,
    imgs: ["/bob.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 11,
    imgs: ["/bobfull.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 12,
    imgs: ["/bobset.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 13,
    imgs: ["/bobfull3.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 14,
    imgs: ["/bobdrums.JPG"],
    description: "***",
    date: "02-28-2026",
  },
  {
    id: 15,
    imgs: ["/bobfull2.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 16,
    imgs: ["/bobfull4.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 17,
    imgs: ["/bobdrums2.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 18,
    imgs: ["/bobdrums3.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 19,
    imgs: ["/bobadjust.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 20,
    imgs: ["/bobadjust2.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 21,
    imgs: ["/bobadjust3.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 22,
    imgs: ["/bobadjust4.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 23,
    imgs: ["/bobsolo.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 24,
    imgs: ["/bobsolo2.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 25,
    imgs: ["/bobsolo3.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 26,
    imgs: ["/bobsolo4.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 27,
    imgs: ["/bobsolo5.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 28,
    imgs: ["/bobsolo6.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 29,
    imgs: ["/m4lshirt.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 30,
    imgs: ["/m4lshirt2.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 31,
    imgs: ["/m4lshirt3.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 32,
    imgs: ["/bobsolo7.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 33,
    imgs: ["/bobsolo8.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 34,
    imgs: ["/bobsolo9.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 35,
    imgs: ["/bobset2.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 36,
    imgs: ["/bobset3.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 37,
    imgs: ["/bobadjust5.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 38,
    imgs: ["/bobsolo10.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 39,
    imgs: ["/bobset4.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 40,
    imgs: ["/bobsolo12.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 41,
    imgs: ["/bobset5.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 42,
    imgs: ["/m4ldigi.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 43,
    imgs: ["/m4ldigi2.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 44,
    imgs: ["/boblawn.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 45,
    imgs: ["/bobset6.JPG"],
    description: "******",
    date: "02-28-2026",
  },
  {
    id: 46,
    imgs: ["/laundromog.JPG"],
    description: "******",
    date: "02-12-2026",
  },
  {
    id: 47,
    imgs: ["/laundromog2.JPG"],
    description: "******",
    date: "02-12-2026",
  },
  {
    id: 48,
    imgs: ["/sleepy.JPG"],
    description: "******",
    date: "05-09-2026",
  },
  {
    id: 49,
    imgs: ["/sleepy2.JPG"],
    description: "******",
    date: "05-09-2026",
  },
  {
    id: 50,
    imgs: ["/balloons2.JPG"],
    description: "******",
    date: "05-01-2026",
  },
  {
    id: 51,
    imgs: ["/notes.JPG"],
    description: "******",
    date: "05-04-2026",
  },
  {
    id: 52,
    imgs: ["/balloons3.JPG"],
    description: "******",
    date: "05-08-2026",
  },
  {
    id: 53,
    imgs: ["/piano.JPG"],
    description: "******",
    date: "06-10-2026",
  },
  {
    id: 54,
    imgs: ["/piano2.JPG"],
    description: "******",
    date: "06-11-2026",
  },
  {
    id: 55,
    imgs: ["/swan.JPG"],
    description: "******",
    date: "04-19-2026",
  },
  {
    id: 56,
    imgs: ["/tree.JPG"],
    description: "******",
    date: "04-19-2026",
  },
  {
    id: 57,
    imgs: ["/tree2.JPG"],
    description: "******",
    date: "04-19-2026",
  },
  {
    id: 58,
    imgs: ["/notes2.JPG"],
    description: "******",
    date: "04-25-2026",
  },
  {
    id: 59,
    imgs: ["/gatsoriginal.JPG"],
    description: "******",
    date: "06-05-2026",
  },
];

const MERCH_EMAIL = "bandmontclair@gmail.com";

function fmt(s) {
  const m = Math.floor(s / 60);
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
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

function GalleryPage({ onBack }) {
  const [slideshowIndex, setSlideshowIndex] = useState(null);
  const reversed = [...GALLERY].reverse();

  return (
    <div style={s.root}>
      {slideshowIndex !== null && (
        <Slideshow items={reversed} startIndex={slideshowIndex} onClose={() => setSlideshowIndex(null)} />
      )}
      <nav style={s.nav}>
        <button style={s.navBackBtn} onClick={onBack}>← back</button>
        <span style={s.logo}>Montclair</span>
        <button style={s.slideshowBtn} onClick={() => setSlideshowIndex(0)}>slideshow →</button>
      </nav>
      <section style={{ ...s.section, maxWidth: 960 }}>
        <h2 style={s.heading}>gallery</h2>
        {GALLERY.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888", fontSize: 13 }}>no photos yet.</p>
        ) : (
          <div style={g.grid}>
            {reversed.map((item, i) => (
              <div key={item.id} style={{ ...g.item, cursor: "pointer" }} onClick={() => setSlideshowIndex(i)}>
                <img src={item.imgs[0]} alt={item.description} style={g.img} />
                <span style={g.caption}>{item.description}</span>
                <span style={g.date}>{item.date}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function MerchDetail({ item, onBack }) {
  const [activeImg, setActiveImg] = useState(0);
  return (
    <div style={d.root}>
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

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = () => {
    if (!email.trim()) return;
    window.location.href = `mailto:${MERCH_EMAIL}?subject=Newsletter signup&body=${encodeURIComponent(email)}`;
    setSent(true);
  };
  return (
    <section style={s.section}>
      <h2 style={s.heading}>stay in the loop</h2>
      {sent ? (
        <p style={s.newsletterThanks}>thanks.</p>
      ) : (
        <div style={s.newsletterRow}>
          <input type="email" placeholder="your@email.com" value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            style={s.newsletterInput} />
          <button onClick={submit} style={s.newsletterBtn}>subscribe</button>
        </div>
      )}
    </section>
  );
}

export default function Montclair() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [activeMerch, setActiveMerch] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const track = TRACKS[currentTrack];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const spotifyLabel =
    currentTrack === 2
      ? "montclair — listen on spotify →"
      : `${track.title.toLowerCase()} — listen on spotify →`;

  const recentGallery = [...GALLERY].slice(-2).reverse();

  if (showGallery) return <GalleryPage onBack={() => setShowGallery(false)} />;
  if (activeMerch) return <MerchDetail item={activeMerch} onBack={() => setActiveMerch(null)} />;

  return (
    <div style={s.root}>
      <nav style={s.nav}>
        <span style={s.logo}>Montclair</span>
        <div style={s.navLinks}>
          {["shop", "shows", "gallery", "music"].map((item) => (
            <button key={item} style={s.navLink} onClick={() => scrollTo(item)}>{item}</button>
          ))}
        </div>
      </nav>

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

      <section id="gallery" style={s.section}>
        <div style={s.galleryHeader}>
          <h2 style={{ ...s.heading, margin: 0 }}>gallery</h2>
          {GALLERY.length > 0 && (
            <button style={s.viewAllBtn} onClick={() => setShowGallery(true)}>
              view all →
            </button>
          )}
        </div>

        {GALLERY.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888", fontSize: 13, marginTop: 32 }}>no photos yet.</p>
        ) : (
          <div style={s.galleryPreviewGrid}>
            {recentGallery.map((item) => (
              <div key={item.id} style={s.galleryItem}>
                <img src={item.imgs[0]} alt={item.description} style={s.galleryImg} />
                <span style={s.galleryCaption}>{item.description}</span>
                <span style={s.galleryDate}>{item.date}</span>
              </div>
            ))}
          </div>
        )}

        {GALLERY.length > 2 && (
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <button style={s.viewAllBtnBottom} onClick={() => setShowGallery(true)}>
              view all {GALLERY.length} photos →
            </button>
          </div>
        )}
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
        {track.youtube && (
          <div style={s.linkWrap}>
            <a href={track.youtube} target="_blank" rel="noopener noreferrer" style={s.link}>
              {track.title.toLowerCase()} — watch on youtube →
            </a>
          </div>
        )}
      </section>

      <div style={s.divider} />

      <NewsletterSection />

      <footer style={s.footer}>
        <a href={`mailto:${MERCH_EMAIL}`} style={s.email}>{MERCH_EMAIL}</a>
      </footer>
    </div>
  );
}

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
  wrap: { maxWidth: 560, fontFamily: FONT, width: "100%" },
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
  merchImg: { width: "clamp(200px, 60vw, 400px)", height: "clamp(200px, 60vw, 400px)", objectFit: "cover" },
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
  linkWrap: { marginTop: 16 },
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
  footer: { padding: "clamp(20px, 4vw, 40px) clamp(20px, 6vw, 48px)", borderTop: "1px solid #eee", textAlign: "center" },
  email: { fontFamily: FONT, fontSize: 13, color: "#000", textDecoration: "none" },
};