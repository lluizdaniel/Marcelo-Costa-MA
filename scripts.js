// Music data with placeholder information
const musicData = [
    {
        id: 1,
        title: "Babaçu Livre",
        duration: "4:04",
        file: "babacu_livre.mp3",
        youtube: "https://www.youtube.com/zleD_uqTW74",
        download: "playlist/babacu_livre.mp3"
    },
    {
        id: 2,
        title: "Beleza Rara",
        duration: "3:41",
        file: "beleza_rara.mp3",
        youtube: "",
        download: "playlist/beleza_rara.mp3"
    },
    {
        id: 3,
        title: "Brincando no Arraial",
        duration: "3:30",
        file: "brincando_no_arraial.mp3",
        youtube: "",
        download: "playlist/brincando_no_arraial.mp3"
    },
    {
        id: 4,
        title: "Casório na Roça",
        duration: "3:55",
        file: "casorio_na_roça.mp3",
        youtube: "",
        download: "playlist/casorio_na_roça.mp3"
    },
    {
        id: 5,
        title: "Cheiro de Alegria",
        duration: "2:51",
        file: "cheiro_de_alegria.mp3",
        youtube: "",
        download: "playlist/cheiro_de_alegria.mp3"
    },
    {
        id: 6,
        title: "Dançando Quadrilha",
        duration: "3:04",
        file: "dançando_quadrilha.mp3",
        youtube: "",
        download: "playlist/dançando_quadrilha.mp3"
    },
    {
        id: 7,
        title: "Família Democracia",
        duration: "2:29",
        file: "familia_democracia.mp3",
        youtube: "",
        download: "playlist/familia_democracia.mp3"
    },
    {
        id: 8,
        title: "Farinhada",
        duration: "3:03",
        file: "farinhada.mp3",
        youtube: "",
        download: "playlist/farinhada.mp3"
    },
    {
        id: 9,
        title: "Festança do Povo",
        duration: "3:19",
        file: "festança_do_povo.aac",
        youtube: "",
        download: "playlist/festança_do_povo.aac"
    },
    {
        id: 10,
        title: "Moça Linda",
        duration: "2:44",
        file: "moça_linda.mp3",
        youtube: "",
        download: "playlist/moça_linda.mp3"
    },
    {
        id: 11,
        title: "Mutirão da Alegria",
        duration: "2:12",
        file: "mutirao_da_alegria.mp3",
        youtube: "",
        download: "playlist/mutirao_da_alegria.mp3"
    },
    {
        id: 12,
        title: "Nos Arraiais da Vida",
        duration: "3:35",
        file: "nos_arraiais_da_vida.mp3",
        youtube: "",
        download: "playlist/nos_arraiais_da_vida.mp3"
    },
    {
        id: 13,
        title: "Parabéns Peri-Mirim",
        duration: "4:29",
        file: "parabens_peri_mirim.mp3",
        youtube: "",
        download: "playlist/parabens_peri_mirim.mp3"
    },
    {
        id: 14,
        title: "Quadrilha Maranhense",
        duration: "4:02",
        file: "quadrilha_maranhense.mp3",
        youtube: "",
        download: "playlist/quadrilha_maranhense.mp3"
    },
    {
        id: 15,
        title: "Reconciliação",
        duration: "2:59",
        file: "reconciliaçao.mp3",
        youtube: "",
        download: "playlist/reconciliaçao.mp3"
    },
    {
        id: 16,
        title: "Rosa Vermelha",
        duration: "3:52",
        file: "rosa_vermelha.mp3",
        youtube: "",
        download: "playlist/rosa_vermelha.mp3"
    },
    {
        id: 17,
        title: "São João do Maranhão",
        duration: "3:28",
        file: "sao_joao_do_maranhao.mp3",
        youtube: "",
        download: "playlist/sao_joao_do_maranhao.mp3"
    },
    {
        id: 18,
        title: "São João na Roça",
        duration: "3:12",
        file: "sao_joao_na_roça.mp3",
        youtube: "",
        download: "playlist/sao_joao_na_roça.mp3"
    },
    {
        id: 19,
        title: "Saudade do Sertão",
        duration: "4:25",
        file: "saudade_do_sertao.mp3",
        youtube: "",
        download: "playlist/saudade_do_sertao.mp3"
    },
    {
        id: 20,
        title: "Simpatia",
        duration: "3:29",
        file: "simpatia.mp3",
        youtube: "",
        download: "playlist/simpatia.mp3"
    },
    {
        id: 21,
        title: "Trem da Alegria",
        duration: "3:48",
        file: "trem_da_alegria.mp3",
        youtube: "",
        download: "playlist/trem_da_alegria.mp3"
    },
    {
      id:22,
      title: "Vamos Dançar Quadrilha",
      duration: "3:07",
      file: "vamos_dançar_quadrilha.mp3",
      youtube: "",
      download: "playlist/vamos_dançar_quadrilha.mp3"
    },
    {
      id:23,
      title: "Voltei Para Meu Sertão",
      duration: "2:18",
      file: "voltei_para_meu_sertao.mp3",
      youtube: "",
      download: "playlist/voltei_para_meu_sertao.mp3"
    }
];

// Global variables
let currentTrackIndex = 0;
let isPlaying = false;
let audioPlayer = null;
let filteredTracks = [...musicData];

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
    initializeApp();
});

function initializeApp() {
    renderTracks();
    setupEventListeners();
    setupAudioPlayer();
    animateTrackCards();
}

function renderTracks() {
    const musicGrid = document.getElementById("musicGrid");
    musicGrid.innerHTML = "";

    filteredTracks.forEach((track, index) => {
        const trackCard = createTrackCard(track, index);
        musicGrid.appendChild(trackCard);
    });
}

function createTrackCard(track, index) {
    const card = document.createElement("div");
    card.className = "track-card";
    card.style.animationDelay = `${index * 0.3}s`;

    card.innerHTML = `
                <div class="track-info">
                    <div class="track-cover">${track.id}</div>
                    <div class="track-details">
                        <h3>${track.title}</h3>
                        <span class="track-duration">${track.duration}</span>
                    </div>
                </div>
                <div class="track-controls">
                    <button class="btn btn-primary" onclick="playTrack(${
                        track.id - 1
                    })" aria-label="Tocar ${track.title}">
                        ▶ Tocar
                    </button>
                    <a href="${
                        track.download || "#"
                    }" class="btn btn-secondary" ${
                        !track.download ? 'onclick="return false;"' : ""
                    } aria-label="Download ${track.title}">
                        📥 Download
                    </a>
                    <a href="${
                        track.youtube || "#"
                    }" class="btn btn-outline" target="_blank" ${
                        !track.youtube ? 'onclick="return false;"' : ""
                    } aria-label="Ver ${track.title} no YouTube">
                        📺 YouTube
                    </a>
                </div>
            `;

    return card;
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", handleSearch);

    // Keyboard navigation
    document.addEventListener("keydown", handleKeyboardNavigation);

    // Audio player events
    setupAudioEvents();
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();

    if (query === "") {
        filteredTracks = [...musicData];
    } else {
        filteredTracks = musicData.filter(track =>
            track.title.toLowerCase().includes(query)
        );
    }

    renderTracks();
    animateTrackCards();
}

function handleKeyboardNavigation(event) {
    if (event.key === "Escape") {
        closePlayer();
    } else if (
        event.key === " " &&
        document.getElementById("playerModal").classList.contains("active")
    ) {
        event.preventDefault();
        togglePlayPause();
    }
}

function setupAudioPlayer() {
    audioPlayer = document.getElementById("audioPlayer");
}

function setupAudioEvents() {
    if (!audioPlayer) return;

    audioPlayer.addEventListener("loadedmetadata", function () {
        updateTotalTime();
    });

    audioPlayer.addEventListener("timeupdate", function () {
        updateProgress();
    });

    audioPlayer.addEventListener("ended", function () {
        nextTrack();
    });

    audioPlayer.addEventListener("error", function () {
        console.error("Erro ao carregar áudio:", audioPlayer.error);
        showNotification(
            "Erro ao carregar a música. Verifique se o arquivo existe."
        );
    });
}

function playTrack(index) {
    // Stop any currently playing audio
    if (audioPlayer && !audioPlayer.paused) {
        audioPlayer.pause();
    }

    currentTrackIndex = index;
    const track = musicData[currentTrackIndex];

    // Update player UI
    document.getElementById("playerTitle").textContent = track.title;
    document.getElementById("playerCover").textContent = track.id;

    // Update action buttons
    const downloadBtn = document.getElementById("downloadBtn");
    const youtubeBtn = document.getElementById("youtubeBtn");

    downloadBtn.href = track.download || "#";
    youtubeBtn.href = track.youtube || "#";

    if (!track.download) {
        downloadBtn.onclick = () => {
            showNotification("Download não disponível para esta faixa.");
            return false;
        };
    }

    if (!track.youtube) {
        youtubeBtn.onclick = () => {
            showNotification("Link do YouTube não disponível para esta faixa.");
            return false;
        };
    }

    // Lazy load audio
    const audioSrc = `playlist/${track.file}`;
    if (audioPlayer.src !== audioSrc) {
        audioPlayer.src = audioSrc;
    }

    // Show player modal with animation
    const modal = document.getElementById("playerModal");
    modal.classList.remove("closing");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Auto-play
    audioPlayer
        .play()
        .then(() => {
            isPlaying = true;
            updatePlayPauseButton();
        })
        .catch(error => {
            console.error("Erro ao reproduzir:", error);
            showNotification(
                "Erro ao reproduzir a música. Arquivo pode não existir."
            );
        });
}

function togglePlayPause() {
    if (!audioPlayer) return;

    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioPlayer
            .play()
            .then(() => {
                isPlaying = true;
            })
            .catch(error => {
                console.error("Erro ao reproduzir:", error);
                showNotification("Erro ao reproduzir a música.");
            });
    }

    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    const btn = document.getElementById("playPauseBtn");
    btn.textContent = isPlaying ? "⏸" : "▶";
    btn.setAttribute("aria-label", isPlaying ? "Pausar" : "Tocar");
}

function previousTrack() {
    currentTrackIndex =
        currentTrackIndex > 0 ? currentTrackIndex - 1 : musicData.length - 1;
    playTrack(currentTrackIndex);
}

function nextTrack() {
    currentTrackIndex =
        currentTrackIndex < musicData.length - 1 ? currentTrackIndex + 1 : 0;
    playTrack(currentTrackIndex);
}

function closePlayer() {
    const modal = document.getElementById("playerModal");

    // Add closing animation
    modal.classList.add("closing");

    // Wait for animation to complete before hiding
    setTimeout(() => {
        if (audioPlayer && !audioPlayer.paused) {
            audioPlayer.pause();
            isPlaying = false;
            updatePlayPauseButton();
        }

        modal.classList.remove("active", "closing");
        document.body.style.overflow = "auto";
    }, 300);
}

function seekTo(event) {
    if (!audioPlayer || !audioPlayer.duration) return;

    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * audioPlayer.duration;

    audioPlayer.currentTime = newTime;
}

function updateProgress() {
    if (!audioPlayer || !audioPlayer.duration) return;

    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    document.getElementById("progressFill").style.width = `${percentage}%`;

    document.getElementById("currentTime").textContent = formatTime(
        audioPlayer.currentTime
    );
}

function updateTotalTime() {
    if (!audioPlayer || !audioPlayer.duration) return;

    document.getElementById("totalTime").textContent = formatTime(
        audioPlayer.duration
    );
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function animateTrackCards() {
    const cards = document.querySelectorAll(".track-card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.animationDelay = `${index * 0.1}s`;

        setTimeout(() => {
            card.style.animation = "fadeInUp 0.6s ease forwards";
        }, index * 100);
    });
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        body.setAttribute("data-theme", "dark");
        themeIcon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
}

function showNotification(message) {
    // Simple notification system
    const notification = document.createElement("div");
    notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--primary-color);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: var(--shadow-lg);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
            `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = "slideOutRight 0.3s ease";
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Load saved theme
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        document.getElementById("theme-icon").textContent = "☀️";
    }
});

// Add slide animations for notifications
const style = document.createElement("style");
style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
document.head.appendChild(style);

// Service Worker registration for PWA capabilities (optional)
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        // Service worker can be implemented later for offline functionality
    });
}

/*
        INSTRUÇÕES PARA IMPLEMENTAÇÃO:

        1. ARQUIVOS DE ÁUDIO:
           - Coloque os arquivos MP3 na pasta: ./assets/audio/
           - Nomeie como: track01.mp3, track02.mp3, ..., track21.mp3
           - Formatos suportados: MP3, WAV, OGG

        2. LINKS DO YOUTUBE:
           - Edite o array 'musicData' no início do JavaScript
           - Substitua as strings vazias em 'youtube' pelos links reais
           - Exemplo: youtube: "https://www.youtube.com/watch?v=VIDEO_ID"

        3. LINKS DE DOWNLOAD:
           - Edite o array 'musicData' no início do JavaScript  
           - Substitua as strings vazias em 'download' pelos links diretos
           - Exemplo: download: "./assets/audio/track01.mp3"

        4. IMAGENS:
           - Pasta sugerida: ./assets/images/
           - Substitua os placeholders SVG por imagens reais se desejar
           - Atualize as meta tags og:image com URLs reais

        5. SEO:
           - Atualize as URLs canônicas no <head>
           - Substitua "marcelocostama.com.br" pelo domínio real
           - Atualize as informações de contato no footer

        6. DEPLOY:
           - Hospede em qualquer servidor web (Apache, Nginx, etc.)
           - Certifique-se de que os arquivos de áudio estão acessíveis
           - Configure HTTPS para melhor SEO e funcionalidades web
        */
