// Word list
const words = [
            "abandon", "ability", "absence", "academy", "account", "accuse", "achieve", "acquire", "address", "advance",
        "advice", "affect", "against", "airline", "airport", "alcohol", "allege", "already", "amazing", "analyze",
        "ancient", "anger", "animal", "annual", "answer", "anxiety", "anybody", "apology", "appeal", "appoint",
        "approve", "argue", "arrange", "arrival", "article", "artist", "aspect", "assault", "attempt", "attract",
        "auction", "average", "awesome", "balance", "barrier", "battery", "because", "believe", "benefit", "besides",
        "between", "beyond", "billion", "biology", "blanket", "blessing", "bother", "breathe", "briefly", "brother",
        "builder", "burden", "cabinet", "camera", "capable", "capital", "capture", "careful", "carrier", "carve",
        "casual", "cattle", "ceiling", "central", "ceramic", "chamber", "channel", "chapter", "charity", "chicken",
        "chronic", "circuit", "clarify", "classic", "climate", "closely", "clothes", "collect", "college", "combine",
        "comfort", "command", "comment", "compact", "company", "compare", "compete", "complex", "compose", "concept",
        "concern", "conduct", "confirm", "connect", "consent", "consist", "consult", "consume", "contact", "contain",
        "content", "contest", "context", "control", "convert", "copper", "correct", "council", "counter", "country",
        "courage", "crystal", "culture", "curious", "current", "customs", "damage", "danger", "dealer", "debate",
        "decade", "decide", "declare", "decline", "default", "defense", "deliver", "density", "deposit", "deserve",
        "despite", "destroy", "develop", "diamond", "digital", "dilemma", "disease", "dismiss", "display", "dispute",
        "distance", "diverse", "divorce", "doctrine", "dolphin", "domestic", "donation", "drawing", "driving", "dynamic",
        "economy", "edition", "educate", "elegant", "element", "embrace", "emerge", "emotion", "emperor", "employ",
        "enclose", "endless", "endorse", "engage", "enhance", "enough", "enquiry", "enrich", "enroll", "enroute",
        "episode", "equator", "erosion", "essence", "establish", "eternal", "ethical", "evident", "exactly", "examine",
        "example", "excited", "exclude", "execute", "exhibit", "expense", "explain", "explore", "express", "extreme",
        "factory", "failure", "fantasy", "fashion", "feature", "federal", "feeling", "fiction", "finance", "finding",
        "fitness", "flavor", "flexible", "floating", "foreign", "forever", "formula", "fortune", "forward", "freedom",
        "freight", "frequent", "friction", "gallery", "garbage", "general", "genetic", "genuine", "gesture", "glacier",
        "glimpse", "gravity", "greater", "grocery", "habitat", "harmony", "harvest", "heading", "healthy", "hearing",
        "heavily", "helpful", "heritage", "highway", "history", "holiday", "honesty", "horizon", "hostile", "housing",
        "however", "hundred", "hygiene", "illegal", "illness", "imagine", "impress", "improve", "include", "income",
        "indeed", "indicate", "infant", "inquiry", "insight", "install", "instead", "intense", "interact", "interest",
        "interior", "involve", "isolate", "journal", "journey", "justice", "justify", "kitchen", "kingdom", "knowing",
        "landing", "laptop", "largely", "lasting", "lateral", "laundry", "lawyer", "leading", "leisure", "liberty",
        "library", "license", "limited", "logical", "loyalty", "machine", "manager", "mansion", "massive", "maximum",
        "meaning", "measure", "medical", "mention", "message", "mineral", "minimal", "minimum", "miracle", "mission",
        "mixture", "monitor", "monster", "monthly", "morning", "musical", "mystery", "natural", "neither", "network",
        "neutral", "nominee", "notable", "nothing", "nuclear", "numeric", "obvious", "offense", "officer", "ongoing",
        "opening", "operate", "opinion", "optical", "organic", "outcome", "outdoor", "outline", "outlook", "outside",
        "overall", "package", "painful", "partial", "partner", "passion", "patient", "pattern", "payment", "penalty",
        "pending", "percent", "perfect", "perform", "perhaps", "persist", "physics", "picture", "pioneer", "plastic",
        "pleased", "pocket", "popular", "portion", "poverty", "precise", "predict", "premise", "premium", "prepare",
        "present", "prevent", "primary", "privacy", "problem", "process", "produce", "product", "profile", "program",
        "project", "promise", "promote", "protect", "protein", "protest", "provide", "publish", "purpose", "pursue",
        "qualify", "quality", "quarter", "radical", "rapidly", "rarely", "reality", "realize", "receipt", "receive",
        "recover", "reflect", "reform", "refugee", "regimen", "regular", "related", "release", "removal", "removal",
        "replace", "request", "require", "reserve", "resolve", "respect", "respond", "restore", "retired", "revenue",
        "reverse", "review", "revise", "routine", "satisfy", "science", "section", "segment", "serious", "service",
        "session", "setting", "several", "shortly", "showing", "silence", "similar", "sincere", "society", "soldier",
        "somehow", "someone", "speaker", "special", "species", "sponsor", "stadium", "station", "storage", "strange",
        "stretch", "student", "subject", "success", "suggest", "summary", "support", "suppose", "surface", "surgery",
        "surplus", "survive", "suspect", "sustain", "teacher", "telling", "tension", "theater", "therapy", "thereby",
        "thought", "through", "tonight", "totally", "tourist", "traffic", "tragedy", "trainer", "transit", "trouble",
        "typical", "uniform", "unknown", "upgrade", "utility", "variety", "various", "vehicle", "venture", "version",
        "veteran", "victory", "village", "violent", "virtual", "visible", "visitor", "vitamin", "voltage", "welfare",
        "western", "whereas", "whether", "willing", "winning", "without", "witness", "working", "writing", "yourself",
        "zealous", "abandon", "ability", "absence", "academy", "account", "accuse", "achieve", "acquire", "address",
        "advance", "advice", "affect", "against", "airline", "airport", "alcohol", "allege", "already", "amazing",
        "analyze", "ancient", "anger", "animal", "annual", "answer", "anxiety", "anybody", "apology", "appeal",
        "appoint", "approve", "argue", "arrange", "arrival", "article", "artist", "aspect", "assault", "attempt",
        "attract", "auction", "average", "awesome", "balance", "barrier", "battery", "because", "believe", "benefit",
        "besides", "between", "beyond", "billion", "biology", "blanket", "blessing", "bother", "breathe", "briefly",
        "brother", "builder", "burden", "cabinet", "camera", "capable", "capital", "capture", "careful", "carrier",
        "carve", "casual", "cattle", "ceiling", "central", "ceramic", "chamber", "channel", "chapter", "charity",
        "chicken", "chronic", "circuit", "clarify", "classic", "climate", "closely", "clothes", "collect", "college",
        "combine", "comfort", "command", "comment", "compact", "company", "compare", "compete", "complex", "compose",
        "concept", "concern", "conduct", "confirm", "connect", "consent", "consist", "consult", "consume", "contact",
        "contain", "content", "contest", "context", "control", "convert", "copper", "correct", "council", "counter",
        "country", "courage", "crystal", "culture", "curious", "current", "customs", "damage", "danger", "dealer",
        "debate", "decade", "decide", "declare", "decline", "default", "defense", "deliver", "density", "deposit",
        "deserve", "despite", "destroy", "develop", "diamond", "digital", "dilemma", "disease", "dismiss", "display",
        "dispute", "distance", "diverse", "divorce", "doctrine", "dolphin", "domestic", "donation", "drawing",
        "driving", "dynamic", "economy", "edition", "educate", "elegant", "element", "embrace", "emerge", "emotion",
        "emperor", "employ", "enclose", "endless", "endorse", "engage", "enhance", "enough", "enquiry", "enrich",
        "enroll", "enroute", "episode", "equator", "erosion", "essence", "establish", "eternal", "ethical", "evident",
        "exactly", "examine", "example", "excited", "exclude", "execute", "exhibit", "expense", "explain", "explore",
        "express", "extreme", "factory", "failure", "fantasy", "fashion", "feature", "federal", "feeling", "fiction",
        "finance", "finding", "fitness", "flavor", "flexible", "floating", "foreign", "forever", "formula", "fortune",
        "forward", "freedom", "freight", "frequent", "friction", "gallery", "garbage", "general", "genetic", "genuine",
        "gesture", "glacier", "glimpse", "gravity", "greater", "grocery", "habitat", "harmony", "harvest", "heading",
        "healthy", "hearing", "heavily", "helpful", "heritage", "highway", "history", "holiday", "honesty", "horizon",
        "hostile", "housing", "however", "hundred", "hygiene", "illegal", "illness", "imagine", "impress", "improve",
        "include", "income", "indeed", "indicate", "infant", "inquiry", "insight", "install", "instead", "intense",
        "interact", "interest", "interior", "involve", "isolate", "journal", "journey", "justice", "justify", "kitchen",
        "kingdom", "knowing", "landing", "laptop", "largely", "lasting", "lateral", "laundry", "lawyer", "leading",
        "leisure", "liberty", "library", "license", "limited", "logical", "loyalty", "machine", "manager", "mansion",
        "massive", "maximum", "meaning", "measure", "medical", "mention", "message", "mineral", "minimal", "minimum",
        "miracle", "mission", "mixture", "monitor", "monster", "monthly", "morning", "musical", "mystery", "natural",
        "neither", "network", "neutral", "nominee", "notable", "nothing", "nuclear", "numeric", "obvious", "offense",
        "officer", "ongoing", "opening", "operate", "opinion", "optical", "organic", "outcome", "outdoor", "outline",
        "outlook", "outside", "overall", "package", "painful", "partial", "partner", "passion", "patient", "pattern",
        "payment", "penalty", "pending", "percent", "perfect", "perform", "perhaps", "persist", "physics", "picture",
        "pioneer", "plastic", "pleased", "pocket", "popular", "portion", "poverty", "precise", "predict", "premise",
        "premium", "prepare", "present", "prevent", "primary", "privacy", "problem", "process", "produce", "product",
        "profile", "program", "project", "promise", "promote", "protect", "protein", "protest", "provide", "publish",
        "purpose", "pursue", "qualify", "quality", "quarter", "radical", "rapidly", "rarely", "reality", "realize",
        "receipt", "receive", "recover", "reflect", "reform", "refugee", "regimen", "regular", "related", "release",
        "removal", "replace", "request", "require", "reserve", "resolve", "respect", "respond", "restore", "retired",
        "revenue", "reverse", "review", "revise", "routine", "satisfy", "science", "section", "segment", "serious",
        "service", "session", "setting", "several", "shortly", "showing", "silence", "similar", "sincere", "society",
        "soldier", "somehow", "someone", "speaker", "special", "species", "sponsor", "stadium", "station", "storage",
        "strange", "stretch", "student", "subject", "success", "suggest", "summary", "support", "suppose", "surface",
        "surgery", "surplus", "survive", "suspect", "sustain", "teacher", "telling", "tension", "theater", "therapy",
        "thereby", "thought", "through", "tonight", "totally", "tourist", "traffic", "tragedy", "trainer", "transit",
        "trouble", "typical", "uniform", "unknown", "upgrade", "utility", "variety", "various", "vehicle", "venture",
        "version", "veteran", "victory", "village", "violent", "virtual", "visible", "visitor", "vitamin", "voltage",
        "welfare", "western", "whereas", "whether", "willing", "winning", "without", "witness", "working", "writing",
        "yourself", "zealous", "abandon", "ability", "absence", "academy", "account", "accuse", "achieve", "acquire",
        "address", "advance", "advice", "affect", "against", "airline", "airport", "alcohol", "allege", "already",
        "amazing", "analyze", "ancient", "anger", "animal", "annual", "answer", "anxiety", "anybody", "apology",
        "appeal", "appoint", "approve", "argue", "arrange", "arrival", "article", "artist", "aspect", "assault",
        "attempt", "attract", "auction", "average", "awesome", "balance", "barrier", "battery", "because", "believe",
        "benefit", "besides", "between", "beyond", "billion", "biology", "blanket", "blessing", "bother", "breathe",
        "briefly", "brother", "builder", "burden", "cabinet", "camera", "capable", "capital", "capture", "careful",
        "carrier", "carve", "casual", "cattle", "ceiling", "central", "ceramic", "chamber", "channel", "chapter",
        "charity", "chicken", "chronic", "circuit", "clarify", "classic", "climate", "closely", "clothes", "collect",
        "college", "combine", "comfort", "command", "comment", "compact", "company", "compare", "compete", "complex",
        "compose", "concept", "concern", "conduct", "confirm", "connect", "consent", "consist", "consult", "consume",
        "contact", "contain", "content", "contest", "context", "control", "convert", "copper", "correct", "council",
        "counter", "country", "courage", "crystal", "culture", "curious", "current", "customs", "damage", "danger",
        "dealer", "debate", "decade", "decide", "declare", "decline", "default", "defense", "deliver", "density",
        "deposit", "deserve", "despite", "destroy", "develop", "diamond", "digital", "dilemma", "disease", "dismiss",
        "display", "dispute", "distance", "diverse", "divorce", "doctrine", "dolphin", "domestic", "donation",
        "drawing", "driving", "dynamic", "economy", "edition", "educate", "elegant", "element", "embrace", "emerge",
        "emotion", "emperor", "employ", "enclose", "endless", "endorse", "engage", "enhance", "enough", "enquiry",
        "enrich", "enroll", "enroute", "episode", "equator", "erosion", "essence", "establish", "eternal", "ethical",
        "evident", "exactly", "examine", "example", "excited", "exclude", "execute", "exhibit", "expense", "explain",
        "explore", "express", "extreme", "factory", "failure", "fantasy", "fashion", "feature", "federal", "feeling",
        "fiction", "finance", "finding", "fitness", "flavor", "flexible", "floating", "foreign", "forever", "formula",
        "fortune", "forward", "freedom", "freight", "frequent", "friction", "gallery", "garbage", "general", "genetic",
        "genuine", "gesture", "glacier", "glimpse", "gravity", "greater", "grocery", "habitat", "harmony", "harvest",
        "heading", "healthy", "hearing", "heavily", "helpful", "heritage", "highway", "history", "holiday", "honesty",
        "horizon", "hostile", "housing", "however", "hundred", "hygiene", "illegal", "illness", "imagine", "impress",
        "improve", "include", "income", "indeed", "indicate", "infant", "inquiry", "insight", "install", "instead",
        "intense", "interact", "interest", "interior", "involve", "isolate", "journal", "journey", "justice", "justify",
        "kitchen", "kingdom", "knowing", "landing", "laptop", "largely", "lasting", "lateral", "laundry", "lawyer",
        "leading", "leisure", "liberty", "library", "license", "limited", "logical", "loyalty", "machine", "manager",
        "mansion", "massive", "maximum", "meaning", "measure", "medical", "mention", "message", "mineral", "minimal",
        "minimum", "miracle", "mission", "mixture", "monitor", "monster", "monthly", "morning", "musical", "mystery",
        "natural", "neither", "network", "neutral", "nominee", "notable", "nothing", "nuclear", "numeric", "obvious",
        "offense", "officer", "ongoing", "opening", "operate", "opinion", "optical", "organic", "outcome", "outdoor",
        "outline", "outlook", "outside", "overall", "package", "painful", "partial", "partner", "passion", "patient",
        "pattern", "payment", "penalty", "pending", "percent", "perfect", "perform", "perhaps", "persist", "physics",
        "picture", "pioneer", "plastic", "pleased", "pocket", "popular", "portion", "poverty", "precise", "predict",
        "premise", "premium", "prepare", "present", "prevent", "primary", "privacy", "problem", "process", "produce",
        "product", "profile", "program", "project", "promise", "promote", "protect", "protein", "protest", "provide",
        "publish", "purpose", "pursue", "qualify", "quality", "quarter", "radical", "rapidly", "rarely", "reality",
        "realize", "receipt", "receive", "recover", "reflect", "reform", "refugee", "regimen", "regular", "related",
        "release", "removal", "replace", "request", "require", "reserve", "resolve", "respect", "respond", "restore",
        "retired", "revenue", "reverse", "review", "revise", "routine", "satisfy", "science", "section", "segment",
        "serious", "service", "session", "setting", "several", "shortly", "showing", "silence", "similar", "sincere",
        "society", "soldier", "somehow", "someone", "speaker", "special", "species", "sponsor", "stadium", "station",
        "storage", "strange", "stretch", "student", "subject", "success", "suggest", "summary", "support", "suppose",
        "surface", "surgery", "surplus", "survive", "suspect", "sustain", "teacher", "telling", "tension", "theater",
        "therapy", "thereby", "thought", "through", "tonight", "totally", "tourist", "traffic", "tragedy", "trainer",
        "transit", "trouble", "typical", "uniform", "unknown", "upgrade", "utility", "variety", "various", "vehicle",
        "venture", "version", "veteran", "victory", "village", "violent", "virtual", "visible", "visitor", "vitamin",
        "voltage", "welfare", "western", "whereas", "whether", "willing", "winning", "without", "witness", "working",
        "writing", "yourself", "zealous"];

       

let score = 0;
let time = 30;
let currentWord = "";
let timerInterval;
let isGameOver = false;

const wordDisplay = document.getElementById("word");
const input = document.querySelector("input");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameOverText = document.getElementById("gameover");
const restartBtn = document.getElementById("restart");

// Function to get a random word
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Function to show new word
function showNewWord() {
    currentWord = getRandomWord();
    wordDisplay.innerText = currentWord;
    input.value = "";
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        time--;
        timerDisplay.innerText = time;
        if (time <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// Function to end the game
function endGame() {
    isGameOver = true;
    input.disabled = true;
    gameOverText.innerText = `Time's up! Your score is ${score}`;
}

// Function to restart game
function restartGame() {
    score = 0;
    time = 30;
    isGameOver = false;
    input.disabled = false;
    gameOverText.innerText = "";
    scoreDisplay.innerText = score;
    timerDisplay.innerText = time;
    showNewWord();
    startTimer();
}

// Input event
input.addEventListener("input", () => {
    if (!isGameOver && input.value.trim().toLowerCase() === currentWord.toLowerCase()) {
        score++;
        scoreDisplay.innerText = score;
        showNewWord();
    }
});

// Button to restart game
restartBtn.addEventListener("click", restartGame);

// Start game initially
window.addEventListener("load", () => {
    showNewWord();
    startTimer();
});
