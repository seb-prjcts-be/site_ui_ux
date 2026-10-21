// === i18n - tweetalig NL/EN ===
let currentLang = localStorage.getItem('lang') || 'nl';

const i18n = {
    nl: {
        siteTitle: "UI/UX Cursus",
        subtitle: "Ontwerpen voor mensen, van schets tot scherm",
        pageTitle: "UI/UX Cursus - Leer interfaces ontwerpen",
        searchPlaceholder: "Zoek op trefwoord...",
        navHeading: "Onderwerpen",
        noResults: "Geen resultaten gevonden.",
        loading: "Laden...",
        topicNotFound: "Dit onderwerp is niet beschikbaar. Kies een ander onderwerp uit het overzicht.",
        contentNotFound: "De inhoud is niet beschikbaar. Kies een ander onderwerp uit het menu of probeer later opnieuw.",
        loadError: "Er is een fout opgetreden bij het laden van de content.",
        relatedTopics: "Gerelateerde onderwerpen",
        intro: "Intro",
        example: "Voorbeeld",
        section: "Sectie",
        contains: "bevat",
        shared: "gedeeld",
        relatedVia: "verwant via",
        welcomeTitle: "Welkom bij de UI/UX Cursus",
        welcomeText1: "Kies een onderwerp uit het menu om te beginnen, of gebruik de zoekfunctie om specifieke onderwerpen te vinden.",
        welcomeText2: "",
        welcomeQuote: "Onderzoek hoe interfaces ons handelen, waarnemen en ervaren vormen. Psychologie helpt effecten meten; filosofie en kritisch design helpen de betekenis en wenselijkheid ervan bespreken. Twee lessen zijn uitgewerkt; de overige pagina’s vormen een thematisch bronnenarchief.",
        welcomeQuote2: "",
        welcomeAuthor: "Uitgangspunt van dit onderzoekscentrum",
        fontSizeLabel: "Lettergrootte",
        fontSizeSmall: "Kleine letters",
        fontSizeMedium: "Normale letters",
        fontSizeLarge: "Grote letters",
        learningGoals: "Leerdoelen",
        exercises: "Oefeningen",
        hint: "Hint",
        starterCode: "Startpunt",
        niveauLabels: { 1: 'Nabootsen', 2: 'Variëren', 3: 'Creëren' },
        niveauBeschrijvingen: {
            1: 'Pas een bestaand ontwerp aan - verander één element en bekijk het effect.',
            2: 'Breid een voorbeeld uit met eigen keuzes.',
            3: 'Ontwerp iets nieuws met de concepten die je hebt geleerd.'
        },
        prev: "Vorige",
        next: "Volgende",
        categories: {
            "Lessen": "Lessen",
            "Introductie": "Introductie",
            "Thema 1: Werktuig, lichaam en ruimte (1910–1968)": "1. Werktuig, lichaam en ruimte (1910–1968)",
            "Thema 2: Cognitieve modellen en breakdown (1970–1988)": "2. Cognitieve modellen en breakdown (1970–1988)",
            "Thema 3: Hypertext, boom en informatiegeur (1990–1999)": "3. Hypertext, boom en informatiegeur (1990–1999)",
            "Thema 4: Schoonheid, ervaring en kritisch ontwerp (1995–2006)": "4. Schoonheid, ervaring en kritisch ontwerp (1995–2006)",
            "Thema 5: Mediatie, overtuiging en A/B-data (1997–2015)": "5. Mediatie, overtuiging en A/B-data (1997–2015)",
            "Thema 6: Ethiek, duistere patronen en kunstpraktijk (2010–2023)": "6. Ethiek, duistere patronen en kunstpraktijk (2010–2023)",
            "Kennis als UX": "Kennis als UX",
            "Proefschriften": "Proefschriften",
            "Bronnen": "Bronnen",
            "Werkplaats": "Werkplaats",
            "Overzicht": "Overzicht"
        },
        tags: "Tags",
        start: "Start",
        youAreHere: "Je bent hier",
        pageOf: "Pagina {i} van {n} in {cat}",
        stadiumLabel: "Stadium {n}: {naam}",
        nextStadium: "Volgend stadium",
        otherCategory: "in {cat}",
        indexHeading: "Inhoud",
        stadia: ["Tekst", "Lijst", "Navigatie", "Zoeken", "Stijl", "Verwantschap", "Voorkeuren", "Kennis als UX"]
    },
    en: {
        siteTitle: "UI/UX Course",
        subtitle: "Designing for people, from sketch to screen",
        pageTitle: "UI/UX Course - Learn to design interfaces",
        searchPlaceholder: "Search by keyword...",
        navHeading: "Topics",
        noResults: "No results found.",
        loading: "Loading...",
        topicNotFound: "This topic is not available. Choose another topic from the overview.",
        contentNotFound: "The content is unavailable. Choose another topic from the menu or try again later.",
        loadError: "An error occurred while loading the content.",
        relatedTopics: "Related topics",
        intro: "Intro",
        example: "Example",
        section: "Section",
        contains: "contains",
        shared: "shared",
        relatedVia: "related via",
        welcomeTitle: "Welcome to the UI/UX Course",
        welcomeText1: "Pick a topic from the menu to get started, or use the search to find specific subjects.",
        welcomeText2: "",
        welcomeQuote: "Explore how interfaces shape action, perception and experience. Psychology helps measure effects; philosophy and critical design help discuss their meaning and desirability. Two lessons are developed; the other pages form a thematic reference collection. Most articles are currently in Dutch.",
        welcomeQuote2: "",
        welcomeAuthor: "Starting point of this research centre",
        fontSizeLabel: "Font size",
        fontSizeSmall: "Small text",
        fontSizeMedium: "Normal text",
        fontSizeLarge: "Large text",
        learningGoals: "Learning goals",
        exercises: "Exercises",
        hint: "Hint",
        starterCode: "Starting point",
        niveauLabels: { 1: 'Imitate', 2: 'Vary', 3: 'Create' },
        niveauBeschrijvingen: {
            1: 'Modify an existing design - change one element and see the effect.',
            2: 'Extend an example with your own choices.',
            3: 'Design something new with the concepts you have learned.'
        },
        prev: "Previous",
        next: "Next",
        categories: {
            "Lessen": "Lessons",
            "Introductie": "Introduction",
            "Thema 1: Werktuig, lichaam en ruimte (1910–1968)": "1. Tool, body and space (1910–1968)",
            "Thema 2: Cognitieve modellen en breakdown (1970–1988)": "2. Cognitive models and breakdown (1970–1988)",
            "Thema 3: Hypertext, boom en informatiegeur (1990–1999)": "3. Hypertext, tree and information scent (1990–1999)",
            "Thema 4: Schoonheid, ervaring en kritisch ontwerp (1995–2006)": "4. Aesthetics, experience and critical design (1995–2006)",
            "Thema 5: Mediatie, overtuiging en A/B-data (1997–2015)": "5. Mediation, persuasion and A/B data (1997–2015)",
            "Thema 6: Ethiek, duistere patronen en kunstpraktijk (2010–2023)": "6. Ethics, dark patterns and art practice (2010–2023)",
            "Kennis als UX": "Knowledge as UX",
            "Proefschriften": "Dissertations",
            "Bronnen": "Sources",
            "Werkplaats": "Workshop",
            "Overzicht": "Overview"
        },
        tags: "Tags",
        start: "Start",
        youAreHere: "You are here",
        pageOf: "Page {i} of {n} in {cat}",
        stadiumLabel: "Stage {n}: {naam}",
        nextStadium: "Next stage",
        otherCategory: "in {cat}",
        indexHeading: "Contents",
        stadia: ["Text", "List", "Navigation", "Search", "Style", "Relatedness", "Preferences", "Knowledge as UX"]
    }
};

// Tag-vertalingen: NL → EN (tags die al Engels zijn, hoeven hier niet in)
const tagTranslations = {
    "voorbeeld": "example",
    "structuur": "structure",
    "sjabloon": "template",
    "onderzoekscentrum": "research centre",
    "ordening": "ordering",
    "methode": "method",
    "betrouwbaarheid": "reliability",
    "fenomenologie": "phenomenology",
    "psychologie": "psychology",
    "efficiëntie": "efficiency",
    "kritisch design": "critical design",
    "kernlijn": "core line",
    "ecologische psychologie": "ecological psychology",
    "begripsverwarring": "conceptual confusion",
    "postfenomenologie": "postphenomenology",
    "mediatie": "mediation",
    "alteriteit": "alterity",
    "hermeneutisch": "hermeneutic",
    "ethiek": "ethics",
    "mediatheorie": "media theory",
    "esthetiek": "aesthetics",
    "cognitieve belasting": "cognitive load",
    "bewegingstijd": "movement time",
    "keuzetijd": "choice time",
    "muis": "mouse",
    "kortetermijngeheugen": "short-term memory",
    "misbruik": "misuse",
    "bruikbaarheid": "usability",
    "replicatie": "replication",
    "hedonisch": "hedonic",
    "pragmatisch": "pragmatic",
    "ervaring": "experience",
    "betekenis": "meaning",
    "F-patroon": "F-pattern",
    "scepsis": "scepticism",
    "proefschrift": "dissertation",
    "zoekstrategie": "search strategy",
    "anekdote": "anecdote",
    "broncontrole": "source review",
    "augmentatie": "augmentation",
    "geschiedenis": "history",
    "desktopmetafoor": "desktop metaphor",
    "iconen": "icons",
    "kunst": "art",
    "smaak": "taste",
    "kleur": "colour",
    "veiligheid": "safety",
    "foutmeldingen": "error messages",
    "gewenning": "habituation",
    "controlekamer": "control room",
    "toestand": "state",
    "conversie": "conversion",
    "formulieren": "forms",
    "parabel": "parable",
    "deur": "door",
    "internetcultuur": "internet culture",
    "skeuomorfisme": "skeuomorphism",
    "menubalk": "menu bar",
    "schermrand": "screen edge",
    "informatiesoftware": "information software",
    "klassieker": "classic",
    "lesidee": "lesson idea",
    "oefening": "exercise",
    "knop": "button",
    "leeslijst": "reading list",
    "boeken": "books",
    "leesvolgorde": "reading order",
    "zoektermen": "search terms",
    "open vragen": "open questions",
    "verificatie": "verification",
    "te doen": "to do",
    "categorieën": "categories",
    "werkwijze": "working method",
    "kennis als UX": "knowledge as UX",
    "linktekst": "link text",
    "klik hier": "click here",
    "toegankelijkheid": "accessibility",
    "schermlezer": "screen reader",
    "doelgrootte": "target size",
    "afstand": "distance",
    "meting": "measurement",
    "menu": "menu",
    "koppen": "headings",
    "kernpunten": "key points",
    "scannen": "scanning",
    "opdracht": "command",
    "zoekveld": "search field",
    "laadindicator": "loading indicator",
    "ontbrekende content": "missing content",
    "herstel": "recovery",
    "les": "lesson",
    "koppen": "headings",
    "navigatie": "navigation",
    "kruimelpad": "breadcrumb",
    "informatiegeur": "information scent",
    "stapaanduiding": "step indicator",
    "hiërarchie": "hierarchy",
    "schermresolutie": "screen resolution",
    "zoeken": "search",
    "tijdlijn": "timeline",
    "overzicht": "overview",
    "chronologie": "chronology",
    "samenvatting": "summary",
    "icoon": "icon",
    "beeld": "image",
    "referentie": "reference",
    "labyrint": "labyrinth",
    "fragmentatie": "fragmentation",
    "zwerm": "swarm",
    "ruimtelijk": "spatial",
    "besturingssysteem": "operating system",
    "geografie": "geography",
    "uitvouwbare tekst": "expandable text"
};


function t(key) {
    const value = i18n[currentLang][key] ?? i18n['nl'][key];
    return value === undefined ? key : value;
}

function tTag(tag) {
    if (currentLang === 'nl') return tag;
    const lower = tag.toLowerCase();
    if (tagTranslations[lower]) {
        // Behoud hoofdlettergebruik van het origineel
        if (tag[0] === tag[0].toUpperCase() && tag[0] !== tag[0].toLowerCase()) {
            const translated = tagTranslations[lower];
            return translated[0].toUpperCase() + translated.slice(1);
        }
        return tagTranslations[lower];
    }
    return tag;
}

function tCat(categorie) {
    return i18n[currentLang].categories[categorie] || categorie;
}

function topicTitle(onderwerp) {
    if (currentLang !== 'nl' && onderwerp.en && onderwerp.en.titel) {
        return onderwerp.en.titel;
    }
    return onderwerp.titel;
}

function topicSummary(onderwerp) {
    if (currentLang !== 'nl' && onderwerp.en && onderwerp.en.samenvatting) {
        return onderwerp.en.samenvatting;
    }
    return onderwerp.samenvatting;
}

function topicContentFile(onderwerp, lang = currentLang) {
    return `api.php?resource=content&id=${encodeURIComponent(onderwerp.id)}&lang=${lang === 'en' ? 'en' : 'nl'}`;
}


// De PHP-server levert onderwerpen en menuvolgorde uit de actieve SQLite-database.
const onderwerpen = window.COURSE_DATA.topics;
const navCategories = window.COURSE_DATA.categories;

const MAX_IN_PAGE_RELATIONS = 5;
const MAX_RELATED_TAGS = 6;
const MAX_RELATED_TOPICS = 5;
const onderwerpTextCache = new Map();

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeRegExp(text) {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeText(text) {
    return String(text || '').toLowerCase().trim();
}

function textContainsTag(text, tag) {
    const source = String(text || '');
    const query = normalizeText(tag);

    if (!query) {
        return false;
    }

    if (/^[a-z0-9]+$/.test(query) && query.length <= 3) {
        const regex = new RegExp(`(^|[^a-z0-9])${escapeRegExp(query)}([^a-z0-9]|$)`, 'i');
        return regex.test(source);
    }

    return source.toLowerCase().includes(query);
}

function getOnderwerpTags(onderwerp) {
    return Array.isArray(onderwerp.tags) ? onderwerp.tags.filter(Boolean) : [];
}

function extractPlainText(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.textContent || '';
}

function cacheOnderwerpText(onderwerpId, plainText) {
    onderwerpTextCache.set(onderwerpId, Promise.resolve(plainText));
}

function getOnderwerpText(onderwerp) {
    if (onderwerpTextCache.has(onderwerp.id)) {
        return onderwerpTextCache.get(onderwerp.id);
    }

    const fallbackText = `${onderwerp.titel} ${onderwerp.samenvatting} ${getOnderwerpTags(onderwerp).join(' ')}`;
    const textPromise = (async () => {
        const fetchUrl = onderwerp.dataFile || onderwerp.contentFile;
        if (!fetchUrl) {
            return fallbackText;
        }

        try {
            const response = await fetch(fetchUrl, { cache: "no-cache" });
            if (!response.ok) {
                return fallbackText;
            }

            if (onderwerp.dataFile) {
                // JSON: extract plain text from all tekst/code/beschrijving fields
                const topic = await response.json();
                const texts = [];
                for (const sectie of (topic.secties || [])) {
                    if (sectie.titel) texts.push(sectie.titel);
                    if (sectie.beschrijving) texts.push(sectie.beschrijving);
                    if (sectie.code) texts.push(sectie.code);
                    for (const block of (sectie.content || [])) {
                        if (block.tekst) texts.push(block.tekst);
                        if (block.code) texts.push(block.code);
                        if (block.items) texts.push(block.items.join(' '));
                    }
                }
                return texts.join(' ');
            }

            const html = await response.text();
            return extractPlainText(html);
        } catch (error) {
            return fallbackText;
        }
    })();

    onderwerpTextCache.set(onderwerp.id, textPromise);
    return textPromise;
}

function primeRelatedContentCache(huidigOnderwerp) {
    onderwerpen
        .filter(onderwerp =>
            onderwerp.id !== huidigOnderwerp.id &&
            onderwerp.categorie === huidigOnderwerp.categorie
        )
        .forEach(onderwerp => {
            getOnderwerpText(onderwerp).catch(() => {});
        });
}

function ensureContentAnchors(contentRoot, onderwerpId) {
    const relationBlocks = Array.from(contentRoot.querySelectorAll('.intro, section, .voorbeeld'));
    const usedIds = new Set(
        Array.from(contentRoot.querySelectorAll('[id]')).map(element => element.id)
    );

    relationBlocks.forEach((block, index) => {
        if (block.id) {
            usedIds.add(block.id);
            return;
        }

        const heading = block.querySelector('h2, h3');
        const baseLabel = heading ? heading.textContent : `sectie-${index + 1}`;
        const slug = slugify(baseLabel) || `sectie-${index + 1}`;
        const baseId = `${onderwerpId}-${slug}`;
        let candidateId = baseId;
        let suffix = 2;

        while (usedIds.has(candidateId)) {
            candidateId = `${baseId}-${suffix}`;
            suffix += 1;
        }

        block.id = candidateId;
        usedIds.add(candidateId);
    });
}

function getRelationLabel(block, index) {
    const heading = block.querySelector('h2, h3');

    if (heading) {
        return heading.textContent.trim();
    }

    if (block.classList.contains('intro')) {
        return t('intro');
    }

    if (block.classList.contains('voorbeeld')) {
        return `${t('example')} ${index + 1}`;
    }

    return `${t('section')} ${index + 1}`;
}

function getInPageRelations(contentRoot, activeTag) {
    const relationBlocks = Array.from(contentRoot.querySelectorAll('.intro, section, .voorbeeld'));
    const seenIds = new Set();

    return relationBlocks
        .filter(block => textContainsTag(block.textContent, activeTag))
        .map((block, index) => ({
            id: block.id,
            label: getRelationLabel(block, index)
        }))
        .filter(item => {
            if (seenIds.has(item.id)) {
                return false;
            }

            seenIds.add(item.id);
            return true;
        })
        .slice(0, MAX_IN_PAGE_RELATIONS);
}

async function getRelatedTopics(huidigOnderwerp, activeTag) {
    const currentTags = getOnderwerpTags(huidigOnderwerp);
    const currentTagSet = new Set(currentTags.map(normalizeText));
    const activeTagNormalized = normalizeText(activeTag);

    const candidates = onderwerpen.filter(onderwerp => {
        if (onderwerp.id === huidigOnderwerp.id) {
            return false;
        }

        const onderwerpTags = getOnderwerpTags(onderwerp);
        return (
            onderwerp.categorie === huidigOnderwerp.categorie ||
            onderwerpTags.some(tag =>
                currentTagSet.has(normalizeText(tag)) ||
                normalizeText(tag) === activeTagNormalized ||
                textContainsTag(tag, activeTag) ||
                textContainsTag(activeTag, tag)
            ) ||
            textContainsTag(onderwerp.titel, activeTag) ||
            textContainsTag(onderwerp.samenvatting, activeTag)
        );
    });

    const scoredTopics = await Promise.all(
        candidates.map(async onderwerp => {
            const onderwerpTags = getOnderwerpTags(onderwerp);
            const sharedTags = onderwerpTags.filter(tag => currentTagSet.has(normalizeText(tag)));
            const onderwerpText = await getOnderwerpText(onderwerp);
            let score = 0;

            score += sharedTags.length * 4;

            if (onderwerp.categorie === huidigOnderwerp.categorie) {
                score += 2;
            }

            if (onderwerpTags.some(tag => normalizeText(tag) === activeTagNormalized)) {
                score += 10;
            } else if (onderwerpTags.some(tag => textContainsTag(tag, activeTag) || textContainsTag(activeTag, tag))) {
                score += 6;
            }

            if (textContainsTag(onderwerp.titel, activeTag)) {
                score += 7;
            }

            if (textContainsTag(onderwerp.samenvatting, activeTag)) {
                score += 4;
            }

            if (textContainsTag(onderwerpText, activeTag)) {
                score += 5;
            }

            return {
                onderwerp,
                score,
                sharedTags
            };
        })
    );

    return scoredTopics
        .filter(item => item.score > 2)
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            if (b.sharedTags.length !== a.sharedTags.length) {
                return b.sharedTags.length - a.sharedTags.length;
            }

            return a.onderwerp.titel.localeCompare(b.onderwerp.titel, 'nl');
        })
        .slice(0, MAX_RELATED_TOPICS);
}

function getBroaderRelatedTags(huidigOnderwerp, activeTag, relatedTopics) {
    const currentTagSet = new Set(getOnderwerpTags(huidigOnderwerp).map(normalizeText));
    const activeTagNormalized = normalizeText(activeTag);
    const tagWeights = new Map();

    relatedTopics.forEach(item => {
        getOnderwerpTags(item.onderwerp).forEach(tag => {
            const normalizedTag = normalizeText(tag);

            if (!normalizedTag || normalizedTag === activeTagNormalized || currentTagSet.has(normalizedTag)) {
                return;
            }

            const currentWeight = tagWeights.get(tag) || 0;
            tagWeights.set(tag, currentWeight + item.score);
        });
    });

    return Array.from(tagWeights.entries())
        .sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];
            }

            return a[0].localeCompare(b[0], 'nl');
        })
        .slice(0, MAX_RELATED_TAGS)
        .map(([tag]) => tag);
}

function getRelatedTopicReason(item, activeTag) {
    const onderwerpTags = getOnderwerpTags(item.onderwerp);

    if (onderwerpTags.some(tag => normalizeText(tag) === normalizeText(activeTag))) {
        return `${t('contains')} ${tTag(activeTag)}`;
    }

    if (item.sharedTags.length > 0) {
        return `${t('shared')}: ${item.sharedTags.slice(0, 2).map(tTag).join(', ')}`;
    }

    return `${t('relatedVia')} ${tTag(activeTag)}`;
}

function renderTagChipFlow(currentTags, contextData) {
    const { activeTag, inPageRelations, broaderTags } = contextData;
    const activeTagNormalized = normalizeText(activeTag);
    const activeTagIsCurrent = currentTags.some(tag => normalizeText(tag) === activeTagNormalized);
    const staticTagButtons = currentTags.map(tag => `
        <button class="tag-btn" type="button" data-tag="${escapeHtml(tag)}">
            ${escapeHtml(tTag(tag))}
        </button>
    `);
    const activeTagButton = !activeTagIsCurrent ? `
        <button class="tag-btn tag-related-btn" type="button" data-tag="${escapeHtml(activeTag)}">
            ${escapeHtml(tTag(activeTag))}
        </button>
    ` : '';
    const contextButtons = [
        ...inPageRelations.map(item => `
            <button class="tag-page-link" type="button" data-scroll-target="${escapeHtml(item.id)}">
                ${escapeHtml(item.label)}
            </button>
        `),
        ...broaderTags.map(tag => `
            <button class="tag-btn tag-related-btn" type="button" data-tag="${escapeHtml(tag)}">
                ${escapeHtml(tTag(tag))}
            </button>
        `)
    ];

    return `
        ${staticTagButtons.join('')}
        ${activeTagButton}
        ${contextButtons.join('')}
    `;
}

function renderTagContext(contextData) {
    const { activeTag, relatedTopics } = contextData;
    const relatedTopicsSection = relatedTopics.length > 0 ? `
        <p class="tag-context-heading">${t('relatedTopics')}</p>
        <div class="tag-topic-list">
            ${relatedTopics.map(item => `
                <a class="tag-topic-item" href="#${item.onderwerp.id}">
                    <span class="tag-topic-category">${escapeHtml(tCat(item.onderwerp.categorie))}</span>
                    <span class="tag-topic-title">${escapeHtml(topicTitle(item.onderwerp))}</span>
                    <span class="tag-topic-reason">${escapeHtml(getRelatedTopicReason(item, activeTag))}</span>
                </a>
            `).join('')}
        </div>
    ` : '';

    return `
        ${relatedTopicsSection}
    `;
}

// Laat de dynamische tag-resultaten (resultaat-chips + gerelateerde onderwerpen)
// zacht binnenkomen na een tag-klik; de vaste tags van de pagina blijven gewoon staan.
function animateTagResultsIn(sidebar) {
    if (getComputedStyle(document.documentElement).getPropertyValue('--interface-motion').trim() === 'none') return;
    if (typeof gsap === 'undefined') return;
    if (prefersQuietInterface()) return;

    const targets = sidebar.querySelectorAll(
        '.tags-chip-flow .tag-related-btn, .tags-chip-flow .tag-page-link, .tag-context-heading, .tag-topic-item'
    );
    if (!targets.length) return;

    gsap.killTweensOf(targets);
    gsap.from(targets, {
        opacity: 0,
        y: 6,
        duration: 0.25,
        ease: 'power2.out',
        stagger: { amount: 0.2 },
        immediateRender: true,
        overwrite: 'auto',
        clearProps: 'opacity,transform'
    });
}

function syncActiveTagButtons(sidebar, activeTag) {
    const activeTagNormalized = normalizeText(activeTag);

    sidebar.querySelectorAll('[data-tag]').forEach(button => {
        const isActive = normalizeText(button.dataset.tag) === activeTagNormalized;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

// === Stadia: een interface per les ===
// Het stadium (0-7) bepaalt welke onderdelen van de interface zichtbaar zijn
// (zie stadia.css) en of de huisstijl geladen is (stadium 4 en hoger).
// - Onderzoeksmodus (geen voortgang in localStorage): alles op stadium 7.
// - Lesmodus (?stadium=n in de URL, of eerder opgeslagen): alleen lessen met
//   stadium <= voortgang zijn zichtbaar; een les met een hoger stadium openen
//   verhoogt de voortgang. ?stadium=alles zet terug naar onderzoeksmodus.
const STADIUM_MAX = 7;
let currentStadium = null; // nog niet toegepast; de eerste applyStadium bouwt altijd het menu

function readStadiumParam() {
    const param = new URLSearchParams(window.location.search).get('stadium');
    if (param === null) return;
    if (param === 'alles' || param === 'all' || param === '') {
        localStorage.removeItem('stadium');
    } else {
        const n = Math.max(0, Math.min(STADIUM_MAX, parseInt(param, 10) || 0));
        localStorage.setItem('stadium', String(n));
    }
}

function getStadiumProgress() {
    const v = localStorage.getItem('stadium');
    return v === null ? null : Math.max(0, Math.min(STADIUM_MAX, parseInt(v, 10) || 0));
}

function inLesmodus() {
    return getStadiumProgress() !== null;
}

function effectiveStadium(onderwerp) {
    if (getJourneyStep() !== null) return getJourneyStep();
    const progress = getStadiumProgress();
    if (progress === null) return STADIUM_MAX;
    if (onderwerp && onderwerp.stadium !== undefined && onderwerp.stadium > progress) {
        localStorage.setItem('stadium', String(onderwerp.stadium));
        return onderwerp.stadium;
    }
    return progress;
}

function applyStadium(n) {
    const changed = currentStadium !== n;
    currentStadium = n;
    document.documentElement.dataset.stadium = n;
    ['style-bootstrap', 'style-icons', 'style-main', 'style-composition', 'style-kolom', 'style-raster', 'style-flexibel'].forEach(id => {
        const link = document.getElementById(id);
        if (link) link.disabled = n < 4;
    });
    return changed;
}

// De pagina's die in het huidige stadium meetellen voor index, menu, zoeken en vorige/volgende.
function visibleOnderwerpen() {
    if (getJourneyStep() !== null) return onderwerpen;
    const progress = getStadiumProgress();
    if (progress === null) return onderwerpen;
    return onderwerpen.filter(o => o.stadium !== undefined && o.stadium <= progress);
}

// De eerste les van het volgende stadium, als er een is.
function nextStadiumOnderwerp() {
    const progress = getStadiumProgress();
    if (progress === null || progress >= STADIUM_MAX) return null;
    return onderwerpen.find(o => o.stadium === progress + 1) || null;
}

function stadiumNaam(n) {
    const namen = t('stadia');
    return Array.isArray(namen) ? namen[n] : '';
}

function fill(template, values) {
    return Object.keys(values).reduce((acc, key) => acc.replace(`{${key}}`, values[key]), template);
}

// Spring naar een sectie op de pagina en licht ze kort op, zodat de sprong zichtbaar is.
// Een smooth scroll wordt in sommige browsers afgebroken door een andere scrollopdracht
// (focus, re-render); daarom instant scrollen en het resultaat tonen met een markering.
function springNaarSectie(target) {
    try {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
    } catch (e) {
        target.scrollIntoView(true);
    }
    target.classList.remove('is-aangesprongen');
    void target.offsetWidth; // herstart de animatie bij een tweede sprong
    target.classList.add('is-aangesprongen');
    target.addEventListener('animationend', () => target.classList.remove('is-aangesprongen'), { once: true });
}

// Browser en hulpmiddelen krijgen de buren van de pagina mee.
function setRelLinks(prev, next) {
    const journey = getJourneyStep();
    document.querySelectorAll('link[rel="prev"], link[rel="next"]').forEach(el => el.remove());
    if (journey !== null) {
        [['prev', journey - 1], ['next', journey + 1]].forEach(([rel, step]) => {
            if (step < 0 || step >= JOURNEY.length) return;
            const link = document.createElement('link'); link.rel = rel; link.href = journeyUrl(step); document.head.appendChild(link);
        });
        return;
    }
    [['prev', prev], ['next', next]].forEach(([rel, onderwerp]) => {
        if (!onderwerp) return;
        const link = document.createElement('link');
        link.rel = rel;
        link.href = `#${onderwerp.id}`;
        document.head.appendChild(link);
    });
}

// Links met data-venster="breedte x hoogte" openen in een apart venster van die
// grootte: de schermresolutie van toen. Valt terug op een gewoon nieuw tabblad
// als de browser geen vensters toelaat.
function initVensterLinks() {
    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[data-venster]');
        if (!link) return;
        const match = /^(\d+)\s*[x×]\s*(\d+)$/.exec(link.dataset.venster.trim());
        if (!match) return;
        const [, breedte, hoogte] = match;
        const venster = window.open(link.href, '_blank', `popup=yes,width=${breedte},height=${hoogte},left=40,top=40`);
        if (venster) event.preventDefault();
    });
}

// Pijltoetsen volgen vorige/volgende, behalve in invoervelden.
function initKeyboardNav() {
    document.addEventListener('keydown', (event) => {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        const tag = (event.target.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select' || event.target.isContentEditable) return;
        const rel = event.key === 'ArrowRight' ? 'next' : event.key === 'ArrowLeft' ? 'prev' : null;
        if (!rel) return;
        const journey = getJourneyStep();
        if (journey !== null) {
            const target = journey + (rel === 'next' ? 1 : -1);
            if (target >= 0 && target < JOURNEY.length) {
                event.preventDefault();
                const anchor = Array.from(document.querySelectorAll('#journey-shell .journey-nav a')).find(a => a.getAttribute('href') === journeyUrl(target));
                if (anchor) anchor.click();
            }
            return;
        }
        const link = document.querySelector(`link[rel="${rel}"]`);
        if (link) window.location.hash = link.getAttribute('href');
    });
}

// Router - Hash-based routing
function initRouter() {
    // PHP links also work without scripts; canonicalise once for hash navigation.
    const initialUrl = new URL(window.location.href);
    const serverTopic = initialUrl.searchParams.get('topic');
    if (serverTopic && onderwerpen.some(topic => topic.id === serverTopic)) {
        if (!initialUrl.hash) initialUrl.hash = serverTopic;
        initialUrl.searchParams.delete('topic');
        history.replaceState(null, '', initialUrl.pathname + initialUrl.search + initialUrl.hash);
    }
    let previousSearch = window.location.search;
    let renderedTopic = null;
    let navigationRequest = 0;
    async function loadOnderwerp(options = {}) {
        const request = ++navigationRequest;
        const hash = window.location.hash.slice(1) || new URLSearchParams(window.location.search).get('topic') || '';
        const onderwerp = hash ? onderwerpen.find(o => o.id === hash) : null;
        const keepPosition = options.preserveReading && renderedTopic === hash;
        const reading = keepPosition ? captureInterfaceReadingPosition() : null;
        document.documentElement.classList.toggle('is-switching-interface', Boolean(keepPosition));
        previousSearch = window.location.search;
        const stadium = effectiveStadium(onderwerp);
        updateJourneyShell(onderwerp);
        if (applyStadium(stadium)) { buildNav(); initNavGroups(); }
        if (!keepPosition) window.scrollTo({ top: 0, behavior: 'instant' });
        if (onderwerp) {
            await renderOnderwerp(onderwerp);
            if (request !== navigationRequest) return;
            updateActiveNav(onderwerp.id);
        } else {
            renderWelcome(); updateActiveNav(null);
            const target = hash ? document.getElementById(hash) : null;
            if (target) springNaarSectie(target);
        }
        renderedTopic = hash;
        if (reading && request === navigationRequest) {
            await document.fonts.ready;
            if (request !== navigationRequest) return;
            restoreInterfaceReadingPosition(reading);
            document.querySelector('#journey-shell > details > summary')?.focus({ preventScroll: true });
        } else if (options.fromAction && request === navigationRequest) {
            const heading = document.querySelector('#content h1, #content h2');
            if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); }
        }
        if (request === navigationRequest) document.documentElement.classList.remove('is-switching-interface');
    }
    window.addEventListener('hashchange', event => {
        if (new URL(event.oldURL).search === new URL(event.newURL).search) loadOnderwerp();
    });
    window.addEventListener('popstate', () => {
        if (previousSearch !== window.location.search) loadOnderwerp({ preserveReading: true });
    });
    document.addEventListener('click', event => {
        if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const link = event.target.closest('a[href]');
        if (!link || link.target || link.hasAttribute('download')) return;
        const url = new URL(link.href, window.location.href);
        const step = url.searchParams.get('reis');
        if (url.origin !== location.origin || url.pathname !== location.pathname || (!/^[0-7]$/.test(step || '') && !link.closest('.composition-controls'))) return;
        event.preventDefault();
        if (url.href === location.href) return;
        history.pushState(null, '', url.pathname + url.search + url.hash);
        loadOnderwerp({ preserveReading: true, fromAction: true });
    });
    loadOnderwerp();
}


// === JSON Topic Renderer ===
// Rendert een topic-JSON naar HTML-fragmenten, identiek aan de hand-geschreven content/*.html structuur.

function renderInlineMarkdown(tekst) {
    // Converteer inline markdown naar HTML: `code`, **bold**, [link](#hash)
    return tekst
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function renderContentBlock(block) {
    switch (block.type) {
        case 'p':
            return `<p>${renderInlineMarkdown(block.tekst)}</p>`;
        case 'code':
            return `<pre><code>${escapeHtml(block.code)}</code></pre>`;
        case 'h3':
            return `<h3>${renderInlineMarkdown(block.tekst)}</h3>`;
        case 'lijst':
            return `<ul>${block.items.map(item => `<li>${renderInlineMarkdown(item)}</li>`).join('\n')}</ul>`;
        case 'afbeelding':
            return `<figure>
    <img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}">
    ${block.caption ? `<figcaption>${renderInlineMarkdown(block.caption)}</figcaption>` : ''}
</figure>`;
        case 'links':
            return `<ul>${block.items.map(item =>
                `<li><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.label)}</a>${item.beschrijving ? ` - ${renderInlineMarkdown(item.beschrijving)}` : ''}</li>`
            ).join('\n')}</ul>`;
        default:
            return '';
    }
}

function renderTopicFromJson(topic) {
    const parts = [];

    for (const sectie of topic.secties) {
        switch (sectie.type) {
            case 'intro':
                parts.push(`<div class="intro">\n${sectie.content.map(renderContentBlock).join('\n')}\n</div>`);
                break;
            case 'sectie':
                parts.push(`<section>\n<h2>${renderInlineMarkdown(sectie.titel)}</h2>\n${sectie.content.map(renderContentBlock).join('\n')}\n</section>`);
                break;
        }
    }

    // Leerdoelen als uitklapbare sectie
    if (topic.leerdoelen && topic.leerdoelen.length > 0) {
        parts.push(`<section class="topic-leerdoelen">
    <details>
        <summary><h2>${t('learningGoals')}</h2></summary>
        <ul>${topic.leerdoelen.map(doel => `\n            <li>${renderInlineMarkdown(doel)}</li>`).join('')}
        </ul>
    </details>
</section>`);
    }

    // Oefeningen als uitklapbare sectie per niveau
    if (topic.oefeningen && topic.oefeningen.length > 0) {
        const niveauLabels = t('niveauLabels');
        const niveauBeschrijvingen = t('niveauBeschrijvingen');

        let oefeningenHtml = '';
        for (const niveau of [1, 2, 3]) {
            const items = topic.oefeningen.filter(o => o.niveau === niveau);
            if (items.length === 0) continue;

            oefeningenHtml += `\n            <div class="oefening-niveau" data-niveau="${niveau}">
                <h3>${niveauLabels[niveau] || 'Niveau ' + niveau}</h3>
                <p class="oefening-niveau-beschrijving">${niveauBeschrijvingen[niveau] || ''}</p>`;

            for (const oef of items) {
                oefeningenHtml += `\n                <div class="oefening-kaart">
                    <h4>${renderInlineMarkdown(oef.titel)}</h4>
                    <p>${renderInlineMarkdown(oef.beschrijving)}</p>`;
                if (oef.hint) {
                    oefeningenHtml += `\n                    <details class="oefening-hint"><summary>${t('hint')}</summary><p>${renderInlineMarkdown(oef.hint)}</p></details>`;
                }
                if (oef.starterCode) {
                    oefeningenHtml += `\n                    <details class="oefening-starter"><summary>${t('starterCode')}</summary><pre><code>${escapeHtml(oef.starterCode)}</code></pre></details>`;
                }
                oefeningenHtml += `\n                </div>`;
            }
            oefeningenHtml += `\n            </div>`;
        }

        parts.push(`<section class="topic-oefeningen">
    <details>
        <summary><h2>${t('exercises')}</h2></summary>${oefeningenHtml}
    </details>
</section>`);
    }

    return parts.join('\n\n');
}


// === Kennis als UX: interactieve demo's ===
// Een contentpagina markeert een blok met data-demo="naam"; na het renderen
// wordt demos[naam](blok, contentRoot) aangeroepen. Zo blijft de content statische HTML
// en staat alle gedrag hier.
// Fisher-Yates, gebruikt door de meetdemo's.
function demoShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const GENERIC_LINK_TEXTS = ['klik hier', 'hier', 'lees meer', 'meer', 'link', 'deze pagina', 'click here', 'here', 'read more', 'more', 'this'];

const demos = {
    'pad-en-stap': (block) => {
        const toggle = block.querySelector('[data-demo-toggle]');
        const status = block.querySelector('[data-demo-status]');
        let hidden = false;
        toggle.addEventListener('click', () => {
            hidden = !hidden;
            document.documentElement.classList.toggle('is-parachute', hidden);
            toggle.textContent = hidden ? 'Toon waar je bent' : 'Verberg waar je bent';
            status.textContent = hidden
                ? 'Kruimelpad, stapteller en menu zijn verborgen. Waar ben je, en hoe ga je verder?'
                : 'Kruimelpad, stapteller en menu zijn zichtbaar.';
        });
    },
    'klik-hier': (block, contentRoot) => {
        const toggle = block.querySelector('[data-demo-toggle]');
        const audit = block.querySelector('[data-demo-audit]');
        const originals = new Map();
        let swapped = false;

        const pageLinks = () => Array.from(contentRoot.querySelectorAll('a[href]')).filter(a => !a.closest('.journey-nav'));
        const allLinks = () => pageLinks().concat(Array.from(document.querySelectorAll('#main-nav a[href]')));

        const runAudit = () => {
            const links = allLinks();
            const generic = links.filter(a => GENERIC_LINK_TEXTS.includes(a.textContent.trim().toLowerCase()));
            audit.textContent = `De inhoud en het onderwerpenmenu tellen ${links.length} links. Daarvan hebben ${generic.length} een generieke tekst.`;
            block.classList.toggle('is-failing', generic.length > 0);
        };

        toggle.addEventListener('click', () => {
            if (!swapped) {
                pageLinks().forEach(a => {
                    originals.set(a, a.innerHTML);
                    a.textContent = 'klik hier';
                });
                toggle.textContent = 'Zet de linkteksten terug';
            } else {
                originals.forEach((html, a) => { a.innerHTML = html; });
                originals.clear();
                toggle.textContent = 'Maak van elke link "klik hier"';
            }
            swapped = !swapped;
            runAudit();
        });

        runAudit();
    }    ,

    // Fitts' law: tien doelen van wisselende breedte en afstand, tijd van startknop tot doel.
    'fitts-op-deze-site': (block) => {
        const arena = block.querySelector('[data-demo-arena]');
        const status = block.querySelector('[data-demo-status]');
        const results = block.querySelector('[data-demo-results]');
        const startBtn = block.querySelector('[data-demo-start]');
        const TOTAL = 10;
        const WIDTHS = [24, 48, 72];
        const DISTANCES = [80, 160, 260];

        const home = document.createElement('button');
        home.type = 'button';
        home.className = 'fitts-home';
        home.textContent = 'Start';
        home.hidden = true;

        const target = document.createElement('button');
        target.type = 'button';
        target.className = 'fitts-target';
        target.setAttribute('aria-label', 'Doel');
        target.hidden = true;

        arena.append(home, target);

        let plan = [];
        let trials = [];
        let current = null;
        let startTime = 0;
        let misses = 0;

        const makePlan = () => {
            const combos = [];
            WIDTHS.forEach(w => DISTANCES.forEach(d => combos.push({ w, d })));
            const extra = combos[Math.floor(Math.random() * combos.length)];
            return demoShuffle(combos.concat([extra]));
        };

        // Plaatst het doel op afstand d van het midden, in een willekeurige richting die in het veld past.
        const placeTarget = ({ w, d }) => {
            const cx = arena.clientWidth / 2;
            const cy = arena.clientHeight / 2;
            const margin = w / 2 + 6;
            let best = null;
            for (let i = 0; i < 24; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dx = Math.cos(angle);
                const dy = Math.sin(angle);
                const maxX = dx > 0 ? (arena.clientWidth - margin - cx) / dx : dx < 0 ? (margin - cx) / dx : Infinity;
                const maxY = dy > 0 ? (arena.clientHeight - margin - cy) / dy : dy < 0 ? (margin - cy) / dy : Infinity;
                const fit = Math.min(d, maxX, maxY);
                if (!best || fit > best.fit) best = { angle, fit };
                if (fit >= d) break;
            }
            const dist = Math.max(w, Math.round(best.fit));
            const x = cx + Math.cos(best.angle) * dist;
            const y = cy + Math.sin(best.angle) * dist;
            target.style.width = `${w}px`;
            target.style.height = `${w}px`;
            target.style.left = `${Math.round(x - w / 2)}px`;
            target.style.top = `${Math.round(y - w / 2)}px`;
            return dist;
        };

        const showHome = () => {
            target.hidden = true;
            home.hidden = false;
            status.textContent = `Poging ${trials.length + 1} van ${TOTAL}: klik op Start, en dan zo snel je kunt op het roze doel.`;
        };

        const finish = () => {
            home.hidden = true;
            target.hidden = true;
            arena.hidden = true;
            const ids = trials.map(tr => tr.id);
            const times = trials.map(tr => tr.ms);
            const n = trials.length;
            const meanId = ids.reduce((a, b) => a + b, 0) / n;
            const meanMs = times.reduce((a, b) => a + b, 0) / n;
            let num = 0;
            let den = 0;
            trials.forEach(tr => {
                num += (tr.id - meanId) * (tr.ms - meanMs);
                den += (tr.id - meanId) ** 2;
            });
            const slope = den > 0 ? num / den : 0;
            const intercept = meanMs - slope * meanId;
            const totalMisses = trials.reduce((a, tr) => a + tr.misses, 0);

            const rows = trials.map((tr, i) => `
                <tr>
                    <td>${i + 1}</td>
                    <td>${tr.w}</td>
                    <td>${tr.d}</td>
                    <td>${tr.id.toFixed(2)}</td>
                    <td>${Math.round(tr.ms)}</td>
                    <td>${tr.misses}</td>
                </tr>`).join('');
            results.innerHTML = `
                <table class="demo-tabel">
                    <thead>
                        <tr><th>Nr</th><th>W (px)</th><th>D (px)</th><th>ID (bits)</th><th>Tijd (ms)</th><th>Mis</th></tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
                <p data-demo-audit>Rechte lijn door je punten: tijd ≈ ${Math.round(intercept)} + ${Math.round(slope)} · ID ms. Dat is ${Math.round(slope)} ms per bit. Gemiddeld ${Math.round(meanMs)} ms per klik, ${totalMisses} misklik${totalMisses === 1 ? '' : 'ken'} in totaal.</p>`;
            results.hidden = false;
            status.textContent = 'Klaar. De tabel staat hieronder.';
            startBtn.textContent = 'Meet opnieuw';
            startBtn.hidden = false;
            current = null;
        };

        home.addEventListener('click', () => {
            current = plan[trials.length];
            const d = placeTarget(current);
            current = { ...current, d };
            home.hidden = true;
            target.hidden = false;
            misses = 0;
            startTime = performance.now();
        });

        target.addEventListener('click', (event) => {
            event.stopPropagation();
            if (!current) return;
            const ms = performance.now() - startTime;
            trials.push({ ...current, id: Math.log2(current.d / current.w + 1), ms, misses });
            if (trials.length >= TOTAL) finish();
            else showHome();
        });

        arena.addEventListener('click', (event) => {
            if (current && !target.hidden && event.target !== target && event.target !== home) misses += 1;
        });

        startBtn.addEventListener('click', () => {
            plan = makePlan();
            trials = [];
            results.hidden = true;
            results.innerHTML = '';
            startBtn.hidden = true;
            arena.hidden = false;
            showHome();
        });
    },

    // Hick-Hyman: zoek een pagina in het gewone menu en daarna in een ongesorteerde lijst zonder categorieën.
    'hick-hyman-in-het-menu': (block) => {
        const status = block.querySelector('[data-demo-status]');
        const count = block.querySelector('[data-demo-count]');
        const results = block.querySelector('[data-demo-results]');
        const startBtn = block.querySelector('[data-demo-start]');
        const stopBtn = block.querySelector('[data-demo-stop]');
        const navList = document.getElementById('nav-list');
        const currentId = window.location.hash.slice(1);
        const candidates = onderwerpen.filter(o => o.id !== currentId && o.categorie !== 'Kennis als UX');

        let phase = 'idle'; // idle | sorted | between | flat | done
        let flat = false;
        let target = null;
        let previousTarget = null;
        let startTime = 0;
        let misses = 0;
        let records = [];

        const pickTarget = () => {
            const pool = candidates.filter(o => o !== previousTarget);
            return pool[Math.floor(Math.random() * pool.length)];
        };

        const describeMenu = () => {
            const items = navList.querySelectorAll('a[href]').length;
            const groups = navList.querySelectorAll('.nav-group-toggle').length;
            count.textContent = flat
                ? `Het menu toont nu ${items} pagina's in één ongesorteerde lijst.`
                : `Het menu telt ${items} pagina's in ${groups} categorieën.`;
        };

        const buildFlatNav = () => {
            const items = demoShuffle(onderwerpen.slice());
            navList.innerHTML = `
                <li class="nav-group is-open nav-group--flat">
                    <ul class="nav-sublist">
                        ${items.map(o => `<li><a href="#${o.id}">${escapeHtml(topicTitle(o))}</a></li>`).join('')}
                    </ul>
                </li>`;
            flat = true;
        };

        const restoreNav = () => {
            if (!flat) return;
            buildNav();
            initNavGroups();
            updateActiveNav(window.location.hash.slice(1));
            flat = false;
        };

        const renderResults = () => {
            const rows = records.map(r => `
                <tr>
                    <td>${r.toestand}</td>
                    <td>${escapeHtml(r.doel)}</td>
                    <td>${r.zichtbaar}</td>
                    <td>${Math.round(r.ms)}</td>
                    <td>${r.misses}</td>
                </tr>`).join('');
            results.innerHTML = `
                <table class="demo-tabel">
                    <thead>
                        <tr><th>Menu</th><th>Gezochte pagina</th><th>Te lezen</th><th>Tijd (ms)</th><th>Misklikken</th></tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>`;
            results.hidden = false;
        };

        const setIdle = () => {
            phase = 'idle';
            restoreNav();
            describeMenu();
            status.textContent = 'Druk op de knop om te beginnen.';
            startBtn.textContent = 'Meet met het gewone menu';
            startBtn.hidden = false;
            stopBtn.hidden = true;
        };

        const teardown = () => {
            navList.removeEventListener('click', onNavClick, true);
            window.removeEventListener('hashchange', teardown);
            if (flat) {
                buildNav();
                initNavGroups();
                updateActiveNav(window.location.hash.slice(1));
                flat = false;
            }
        };

        function onNavClick(event) {
            if (!document.body.contains(block)) {
                teardown();
                return;
            }
            if (phase !== 'sorted' && phase !== 'flat') return;
            const link = event.target.closest('a[href]');
            if (!link) return;
            event.preventDefault();
            event.stopPropagation();
            const id = link.getAttribute('href').slice(1);
            if (id !== target.id) {
                misses += 1;
                status.textContent = `Dat is "${link.textContent.trim()}", niet "${topicTitle(target)}". Zoek verder, de klok loopt.`;
                return;
            }
            const ms = performance.now() - startTime;
            const groups = navList.querySelectorAll('.nav-group-toggle').length;
            const inGroup = onderwerpen.filter(o => o.categorie === target.categorie).length;
            records.push({
                toestand: phase === 'sorted' ? 'Met categorieën' : 'Ongesorteerde lijst',
                doel: topicTitle(target),
                zichtbaar: phase === 'sorted' ? `${groups} categorieën, dan ${inGroup} titels` : `${onderwerpen.length} titels`,
                ms,
                misses
            });
            if (phase === 'sorted') {
                phase = 'between';
                status.textContent = `Gevonden in ${Math.round(ms)} ms. Nu hetzelfde zonder categorieën: het menu wordt één ongesorteerde lijst.`;
                startBtn.textContent = 'Meet nu met het ongesorteerde menu';
                startBtn.hidden = false;
            } else {
                phase = 'done';
                restoreNav();
                describeMenu();
                renderResults();
                status.textContent = `Gevonden in ${Math.round(ms)} ms. Het menu heeft zijn categorieën terug; de tabel staat hieronder.`;
                startBtn.textContent = 'Meet opnieuw';
                startBtn.hidden = false;
                stopBtn.hidden = true;
            }
        }

        startBtn.addEventListener('click', () => {
            if (phase === 'idle' || phase === 'done') {
                records = [];
                results.hidden = true;
                results.innerHTML = '';
                previousTarget = null;
                target = pickTarget();
                phase = 'sorted';
                misses = 0;
                startTime = performance.now();
                status.textContent = `Zoek in het menu: "${topicTitle(target)}". De klok loopt.`;
                startBtn.hidden = true;
                stopBtn.hidden = false;
            } else if (phase === 'between') {
                previousTarget = target;
                target = pickTarget();
                buildFlatNav();
                describeMenu();
                phase = 'flat';
                misses = 0;
                startTime = performance.now();
                status.textContent = `Zoek in het menu: "${topicTitle(target)}". De klok loopt.`;
                startBtn.hidden = true;
            }
        });

        stopBtn.addEventListener('click', () => {
            records = [];
            results.hidden = true;
            setIdle();
        });

        navList.addEventListener('click', onNavClick, true);
        window.addEventListener('hashchange', teardown);
        describeMenu();
    },

    // F-patroon: verberg koppen, kernpunten, callout-labels en vet, zodat alleen lopende tekst overblijft.
    'f-patroon-en-koppen': (block, contentRoot) => {
        const toggle = block.querySelector('[data-demo-toggle]');
        const audit = block.querySelector('[data-demo-audit]');
        const ON_LABEL = 'Verberg de koppen en het kernpuntenkader';
        const OFF_LABEL = 'Zet de koppen en het kernpuntenkader terug';

        const countAnchors = () => {
            const headings = contentRoot.querySelectorAll('section > h2, section > h3').length;
            const frames = contentRoot.querySelectorAll('.kernpunten').length;
            const labels = contentRoot.querySelectorAll('.callout-label').length;
            const bold = contentRoot.querySelectorAll('p strong, li strong').length;
            return { headings, frames, labels, bold };
        };

        const report = (hidden) => {
            const c = countAnchors();
            audit.textContent = hidden
                ? `Verborgen: ${c.headings} koppen, ${c.frames} kernpuntenkader, ${c.labels} labels en ${c.bold} vetgedrukte woordgroepen. Zoek nu hoeveel deelnemers Nielsen volgde.`
                : `Deze pagina heeft ${c.headings} koppen, ${c.frames} kernpuntenkader, ${c.labels} labels op kaders en ${c.bold} vetgedrukte woordgroepen. Dat zijn de ankers voor wie scant.`;
        };

        toggle.addEventListener('click', () => {
            const hidden = contentRoot.classList.toggle('demo-zonder-ankers');
            toggle.textContent = hidden ? OFF_LABEL : ON_LABEL;
            report(hidden);
        });

        toggle.textContent = ON_LABEL;
        report(false);
    },

    // Toestand versus opdracht: twee knoppen, een nagebootste server die na 1,5 s antwoordt en elke derde opdracht weigert.
    'toestand-versus-opdracht': (block) => {
        const cmdBtn = block.querySelector('[data-demo-opdracht]');
        const stateBtn = block.querySelector('[data-demo-toestand]');
        const cmdStatus = block.querySelector('[data-demo-opdracht-status]');
        const stateStatus = block.querySelector('[data-demo-toestand-status]');
        const log = block.querySelector('[data-demo-log]');
        const resetBtn = block.querySelector('[data-demo-reset]');
        const DELAY = 1500;
        let requests = 0;
        let timers = [];

        // De nagebootste server: antwoordt na DELAY ms, weigert elke derde opdracht.
        const sendToServer = (onAnswer) => {
            requests += 1;
            const nr = requests;
            const ok = nr % 3 !== 0;
            const timer = setTimeout(() => onAnswer(ok, nr), DELAY);
            timers.push(timer);
        };

        cmdBtn.addEventListener('click', () => {
            cmdBtn.classList.remove('is-failed');
            cmdBtn.classList.add('is-done');
            cmdBtn.textContent = 'Opgeslagen';
            cmdStatus.textContent = 'Veranderde meteen bij de klik. De server is nog niet gehoord.';
            sendToServer((ok, nr) => {
                if (ok) {
                    log.textContent = `Opdracht ${nr}: de server bevestigde na anderhalve seconde. De linkse knop had toevallig gelijk.`;
                    block.classList.remove('is-failing');
                } else {
                    log.textContent = `Opdracht ${nr}: de server weigerde. De linkse knop zegt nog altijd "Opgeslagen". Dat is het lampje van Three Mile Island.`;
                    block.classList.add('is-failing');
                }
            });
        });

        stateBtn.addEventListener('click', () => {
            if (stateBtn.disabled) return;
            stateBtn.classList.remove('is-done', 'is-failed');
            stateBtn.classList.add('is-busy');
            stateBtn.disabled = true;
            stateBtn.textContent = 'Bezig…';
            stateStatus.textContent = 'Wacht op het antwoord van de server.';
            sendToServer((ok, nr) => {
                stateBtn.disabled = false;
                stateBtn.classList.remove('is-busy');
                if (ok) {
                    stateBtn.classList.add('is-done');
                    stateBtn.textContent = 'Opgeslagen';
                    stateStatus.textContent = 'Bevestigd door de server na anderhalve seconde.';
                    log.textContent = `Opdracht ${nr}: de server bevestigde. De rechtse knop wist het pas nu, en zegt het pas nu.`;
                    block.classList.remove('is-failing');
                } else {
                    stateBtn.classList.add('is-failed');
                    stateBtn.textContent = 'Niet opgeslagen';
                    stateStatus.textContent = 'De server weigerde. De knop zegt dat ook.';
                    log.textContent = `Opdracht ${nr}: de server weigerde. De rechtse knop toont de echte toestand.`;
                    block.classList.add('is-failing');
                }
            });
        });

        resetBtn.addEventListener('click', () => {
            timers.forEach(clearTimeout);
            timers = [];
            [cmdBtn, stateBtn].forEach(btn => {
                btn.classList.remove('is-done', 'is-failed', 'is-busy');
                btn.disabled = false;
                btn.textContent = 'Opslaan';
            });
            cmdStatus.textContent = 'Verandert zodra je klikt.';
            stateStatus.textContent = 'Verandert pas na bevestiging.';
            log.textContent = '';
            block.classList.remove('is-failing');
        });
    },

    // Breakdown: toon de melding die de site rendert bij ontbrekende content of een laadfout, en toets ze.
    'breakdown-bij-ontbrekende-content': (block) => {
        const frame = block.querySelector('[data-demo-frame]');
        const audit = block.querySelector('[data-demo-audit]');
        const missingBtn = block.querySelector('[data-demo-missing]');
        const errorBtn = block.querySelector('[data-demo-error]');
        const FAKE_TITLE = 'Een pagina die nog niet bestaat';

        const show = (key) => {
            const message = t(key);
            // Dezelfde opbouw als renderOnderwerp bij een fout: titel, dan één regel tekst.
            frame.innerHTML = `
                <p class="breakdown-titel">${escapeHtml(FAKE_TITLE)}</p>
                <p>${escapeHtml(message)}</p>`;
            frame.hidden = false;

            const words = message.trim().split(/\s+/).length;
            const hasLink = /<a\s/i.test(message);
            const mentionsFiles = /content\/|\.html|bestand|file|folder|map\b/i.test(message);
            const saysWhat = /niet gevonden|not found|fout|error/i.test(message);
            const parts = [
                `De melding telt ${words} woorden en ${hasLink ? 'bevat een link' : 'bevat geen link'}.`,
                saysWhat ? 'Ze zegt dat er iets mis is.' : 'Ze zegt niet wat er mis is.',
                mentionsFiles ? 'Ze noemt een bestand of map: die handeling is voor de beheerder, niet voor de lezer.' : 'Ze zegt niet wat je kunt doen.',
                hasLink ? 'Ze biedt een weg terug.' : 'Ze biedt geen weg terug.'
            ];
            audit.textContent = parts.join(' ');
            block.classList.toggle('is-failing', !hasLink || mentionsFiles);
        };

        missingBtn.addEventListener('click', () => show('contentNotFound'));
        errorBtn.addEventListener('click', () => show('loadError'));
    }
};

function initDemos(contentRoot) {
    if (currentStadium < STADIUM_MAX) return;
    contentRoot.querySelectorAll('[data-demo]').forEach(block => {
        const demo = demos[block.dataset.demo];
        if (demo) demo(block, contentRoot);
    });
}

// Render functie voor onderwerp pagina
let courseRenderRequest = 0;
async function renderOnderwerp(onderwerp) {
    const request = ++courseRenderRequest;
    const content = document.getElementById('content');
    
    // Toon laadindicator
    content.innerHTML = `
        <div class="onderwerp-page">
            ${renderPageHeading(onderwerp)}
            <p>${t('loading')}</p>
        </div>
    `;
    
    try {
        // Laad content: JSON (nieuw) of HTML (legacy)
        let htmlContent = '';
        if (onderwerp.dataFile) {
            // JSON-pad: fetch JSON, render naar HTML
            const response = await fetch(onderwerp.dataFile);
            if (response.ok) {
                const topic = await response.json();
                htmlContent = renderTopicFromJson(topic);
                cacheOnderwerpText(onderwerp.id, extractPlainText(htmlContent));
            } else {
                htmlContent = `<p>${t('topicNotFound')}</p>`;
            }
        } else if (onderwerp.contentFile) {
            const fetchPath = topicContentFile(onderwerp);
            let response = await fetch(fetchPath, { cache: "no-cache" });
            // Fallback naar NL als EN-bestand niet bestaat
            if (!response.ok && currentLang !== 'nl') {
                response = await fetch(topicContentFile(onderwerp, 'nl'), { cache: "no-cache" });
                if (response.ok) {
                    htmlContent = '<p lang="en">This article is currently available in Dutch only.</p><div lang="nl">' + await response.text() + '</div>';
                }
            }
            if (response.ok) {
                if (!htmlContent) htmlContent = await response.text();
                cacheOnderwerpText(onderwerp.id, extractPlainText(htmlContent));
            } else {
                htmlContent = `<p>${t('contentNotFound')}</p>`;
            }
        } else if (onderwerp.inhoudHtml) {
            // Fallback naar oude inline HTML
            htmlContent = onderwerp.inhoudHtml;
            cacheOnderwerpText(onderwerp.id, extractPlainText(htmlContent));
        }
        
        if (request !== courseRenderRequest) return;
        // Render content
        const tags = getOnderwerpTags(onderwerp);
        const tagsSidebarHtml = tags.length > 0 && currentStadium >= 5 ? `
            <aside class="tags-sidebar">
                <div id="tags-chip-flow" class="tags-chip-flow">
                    ${tags.map(tag => `<button class="tag-btn" type="button" data-tag="${escapeHtml(tag)}">${escapeHtml(tTag(tag))}</button>`).join('')}
                </div>
                <div id="tag-context" class="tag-context" aria-live="polite"></div>
            </aside>` : '';

        // Vorige/volgende binnen de zichtbare pagina's; aan het eind van een
        // stadium leidt "volgende" naar de eerste les van het volgende stadium.
        const lijst = visibleOnderwerpen();
        const idx = lijst.indexOf(onderwerp);
        const prev = idx > 0 ? lijst[idx - 1] : null;
        let next = idx >= 0 && idx < lijst.length - 1 ? lijst[idx + 1] : null;
        let nextLabel = t('next');
        if (!next && inLesmodus()) {
            next = nextStadiumOnderwerp();
            if (next) nextLabel = t('nextStadium');
        }
        const buurLabel = (buur, label) => {
            const andereCategorie = buur.categorie !== onderwerp.categorie
                ? ` ${fill(t('otherCategory'), { cat: tCat(buur.categorie) })}`
                : '';
            return `${label}${andereCategorie}`;
        };
        const prevHtml = prev
            ? `<a class="page-nav-link page-nav-prev" href="#${prev.id}" title="${escapeHtml(topicSummary(prev))}" aria-label="${t('prev')}: ${escapeHtml(topicTitle(prev))}"><i class="bi bi-chevron-left"></i><span class="page-nav-label">${escapeHtml(buurLabel(prev, t('prev')))}</span><span class="page-nav-title">${escapeHtml(topicTitle(prev))}</span></a>`
            : '<span class="page-nav-spacer"></span>';
        const nextHtml = next
            ? `<a class="page-nav-link page-nav-next" href="#${next.id}" title="${escapeHtml(topicSummary(next))}" aria-label="${nextLabel}: ${escapeHtml(topicTitle(next))}"><span class="page-nav-title">${escapeHtml(topicTitle(next))}</span><span class="page-nav-label">${escapeHtml(buurLabel(next, nextLabel))}</span><i class="bi bi-chevron-right"></i></a>`
            : '<span class="page-nav-spacer"></span>';

        // Kruimelpad (hiërarchie, niet geschiedenis) en stapteller binnen de categorie
        const categorieItems = lijst.filter(o => o.categorie === onderwerp.categorie);
        const positie = categorieItems.indexOf(onderwerp) + 1;
        const kruimelpadHtml = `
            <nav class="kruimelpad" aria-label="${t('youAreHere')}">
                <a href="#">${t('start')}</a>
                <span class="kruimelpad-scheider" aria-hidden="true">›</span>
                <a href="#index-${slugify(onderwerp.categorie)}">${escapeHtml(tCat(onderwerp.categorie))}</a>
                <span class="kruimelpad-scheider" aria-hidden="true">›</span>
                <span aria-current="page">${escapeHtml(topicTitle(onderwerp))}</span>
            </nav>`;
        const stadiumHtml = inLesmodus()
            ? ` <span class="stapteller-stadium">· ${escapeHtml(fill(t('stadiumLabel'), { n: currentStadium, naam: stadiumNaam(currentStadium) }))}</span>`
            : '';
        const staptellerHtml = positie > 0
            ? `<p class="stapteller">${escapeHtml(fill(t('pageOf'), { i: positie, n: categorieItems.length, cat: tCat(onderwerp.categorie) }))}${stadiumHtml}</p>`
            : '';

        content.innerHTML = `
            <div class="onderwerp-page">
                ${kruimelpadHtml}
                ${renderPageHeading(onderwerp)}
                ${staptellerHtml}
                <div class="onderwerp-layout">
                    <div class="onderwerp-content">
                        ${htmlContent}
                        <nav class="page-nav" aria-label="${t('prev')} / ${t('next')}">
                            ${prevHtml}
                            ${nextHtml}
                        </nav>
                    </div>
                    ${tagsSidebarHtml}
                </div>
            </div>
        `;

        const contentRoot = content.querySelector('.onderwerp-content');
        const sidebar = content.querySelector('.tags-sidebar');


        animatePageIn(content);
        ensureContentAnchors(contentRoot, onderwerp.id);
        initCourseExperiments(contentRoot);
        initJourneyActivity(contentRoot, onderwerp);
        appendInterfaceReferences(contentRoot, onderwerp);
        if (getJourneyStep() !== null) contentRoot.insertAdjacentHTML('beforeend', journeyNav(true));
        initDemos(contentRoot);
        initCompositionComparison(contentRoot);
        appendReviewStatus(contentRoot, onderwerp);
        setRelLinks(prev, next);
        document.title = `${topicTitle(onderwerp)} – ${tCat(onderwerp.categorie)} – ${t('siteTitle')}`;
        primeRelatedContentCache(onderwerp);

        if (sidebar) {
            const chipFlowEl = sidebar.querySelector('#tags-chip-flow');
            const tagContextEl = sidebar.querySelector('#tag-context');
            let activeTag = tags[0];
            let requestId = 0;

            const updateTagContext = async (tag, options = {}) => {
                const normalizedTag = normalizeText(tag);
                const currentActiveTag = normalizeText(activeTag);

                if (!options.force && normalizedTag && normalizedTag === currentActiveTag && tagContextEl.innerHTML.trim()) {
                    return;
                }

                activeTag = tag;
                requestId += 1;
                const currentRequestId = requestId;

                syncActiveTagButtons(sidebar, activeTag);
                tagContextEl.classList.add('is-loading');
                tagContextEl.setAttribute('aria-busy', 'true');

                const inPageRelations = getInPageRelations(contentRoot, activeTag);
                const relatedTopics = await getRelatedTopics(onderwerp, activeTag);
                const broaderTags = getBroaderRelatedTags(onderwerp, activeTag, relatedTopics);

                if (currentRequestId !== requestId) {
                    return;
                }

                chipFlowEl.innerHTML = renderTagChipFlow(tags, {
                    activeTag,
                    inPageRelations,
                    broaderTags
                });
                tagContextEl.innerHTML = renderTagContext({
                    activeTag,
                    relatedTopics
                });
                tagContextEl.classList.remove('is-loading');
                tagContextEl.setAttribute('aria-busy', 'false');
                syncActiveTagButtons(sidebar, activeTag);
                animateTagResultsIn(sidebar);
            };

            sidebar.addEventListener('click', (event) => {
                const tagButton = event.target.closest('[data-tag]');
                if (tagButton) {
                    updateTagContext(tagButton.dataset.tag);
                    return;
                }

                const scrollButton = event.target.closest('[data-scroll-target]');
                if (scrollButton) {
                    const target = contentRoot.querySelector(`#${scrollButton.dataset.scrollTarget}`);
                    if (target) {
                        springNaarSectie(target);
                    }
                }
            });

            if (activeTag) {
                updateTagContext(activeTag, { force: true });
            }
        }

    } catch (error) {
        if (request !== courseRenderRequest) return;
        console.error('Error loading content:', error);
        content.innerHTML = `
            <div class="onderwerp-page">
                ${renderPageHeading(onderwerp)}
                <p>${t('loadError')}</p>
            </div>
        `;
    }
}


// Laat de blokken van een vers geladen pagina zacht na elkaar verschijnen (GSAP).
// Valt stil terug op direct tonen als GSAP ontbreekt of de gebruiker minder beweging wil.
function animatePageIn(content) {
    if (getComputedStyle(document.documentElement).getPropertyValue('--interface-motion').trim() === 'none') return;
    if (document.documentElement.classList.contains('is-switching-interface')) return;
    if (typeof gsap === 'undefined') return;
    if (currentStadium < 6) return;
    if (prefersQuietInterface()) return;

    const contentRoot = content.querySelector('.onderwerp-content');
    const targets = contentRoot
        ? [content.querySelector('.onderwerp-page > h1'), ...contentRoot.children]
        : Array.from(content.querySelectorAll('.welcome > *'));
    const sidebar = content.querySelector('.tags-sidebar');
    if (sidebar) targets.push(sidebar);

    const blocks = targets.filter(Boolean);
    if (!blocks.length) return;

    gsap.from(blocks, {
        opacity: 0,
        y: 14,
        duration: 0.45,
        ease: 'power2.out',
        // amount verdeelt de totale vertraging over alle blokken,
        // zodat lange pagina's niet seconden blijven nadruppelen
        stagger: { amount: 0.45 },
        clearProps: 'opacity,transform'
    });
}

// Render welcome pagina
function renderWelcome() {
    courseRenderRequest += 1;
    const content = document.getElementById('content');
    const lijst = visibleOnderwerpen();
    const groepen = navCategories
        .map(categorie => ({ categorie, items: lijst.filter(o => o.categorie === categorie) }))
        .filter(groep => groep.items.length > 0);

    // De inhoud: een indexpagina zoals de eerste webpagina, elke link met een regel uitleg.
    const indexHtml = `
        <section class="welcome-index">
            <h2>${t('indexHeading')}</h2>
            ${groepen.map(groep => `
                <h3 id="index-${slugify(groep.categorie)}">${escapeHtml(tCat(groep.categorie))}</h3>
                <ul>
                    ${groep.items.map(o => `<li><a href="#${o.id}">${escapeHtml(topicTitle(o))}</a><br><span class="welcome-index-samenvatting">${escapeHtml(topicSummary(o))}</span></li>`).join('')}
                </ul>`).join('')}
        </section>`;

    const volgendStadium = nextStadiumOnderwerp();
    const volgendHtml = volgendStadium
        ? `<p class="welcome-volgend-stadium">${t('nextStadium')}: <a href="#${volgendStadium.id}" title="${escapeHtml(topicSummary(volgendStadium))}">${escapeHtml(topicTitle(volgendStadium))}</a></p>`
        : '';

    content.innerHTML = `
        <div class="welcome">
            <blockquote class="welcome-quote">
                <p>${t('welcomeQuote')}</p>
                ${t('welcomeQuote2') ? `<p>${t('welcomeQuote2')}</p>` : ''}
                <footer><cite>${t('welcomeAuthor')}</cite></footer>
            </blockquote>
            ${getJourneyStep() === null ? journeyInvitation() : ''}
            ${indexHtml}
            ${getJourneyStep() !== null ? journeyNav(true) : ''}
            ${volgendHtml}
        </div>
    `;
    initCourseExperiments(content);
    setRelLinks(null, lijst[0] || volgendStadium);
    document.title = t('pageTitle');
    animatePageIn(content);
}

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function setGroupOpen(group, isOpen) {
    const wasOpen = group.classList.contains('is-open');
    group.classList.toggle('is-open', isOpen);
    const toggle = group.querySelector('.nav-group-toggle');
    if (toggle) {
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
    if (isOpen && !wasOpen) {
        animateNavGroupItems(group);
    }
}

// Laat de menu-items van een net geopende navigatiegroep trapsgewijs binnenglijden (GSAP).
// De hoogte-animatie zelf blijft bij de bestaande CSS-transition op .nav-sublist.
function animateNavGroupItems(group) {
    if (getComputedStyle(document.documentElement).getPropertyValue('--interface-motion').trim() === 'none') return;
    if (typeof gsap === 'undefined') return;
    if (prefersQuietInterface()) return;

    const items = group.querySelectorAll('.nav-sublist > li');
    if (!items.length) return;

    gsap.killTweensOf(items);
    gsap.from(items, {
        opacity: 0,
        x: -10,
        duration: 0.3,
        ease: 'power2.out',
        stagger: 0.035,
        // alle items meteen verbergen bij de klik; zonder dit wachten
        // gestaggerde items met hun startwaarde tot hun beurt (flits)
        immediateRender: true,
        clearProps: 'opacity,transform'
    });
}

// Update actieve navigatie item
function updateActiveNav(activeId) {
    const navLinks = document.querySelectorAll('#nav-list a');
    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${activeId}`;
        if (isActive) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });

    const navGroups = document.querySelectorAll('.nav-group');
    navGroups.forEach(group => {
        const hasActive = group.querySelector('a.active');
        group.classList.toggle('is-active-group', Boolean(hasActive));
        setGroupOpen(group, Boolean(hasActive));
    });
}

// Bouw navigatie menu
function buildNav() {
    const navList = document.getElementById('nav-list');
    const groups = navCategories.map(categorie => ({
        categorie,
        items: visibleOnderwerpen().filter(onderwerp => onderwerp.categorie === categorie)
    })).filter(group => group.items.length > 0);

    navList.innerHTML = groups.map(group => {
        const groupId = `nav-group-${slugify(group.categorie)}`;
        const itemsMarkup = group.items.map(onderwerp => `
            <li><a href="#${onderwerp.id}">${topicTitle(onderwerp)}</a></li>
        `).join('');

        return `
            <li class="nav-group" data-category="${group.categorie}">
                <button class="nav-group-toggle" type="button" aria-expanded="false" aria-controls="${groupId}">
                    <span class="nav-group-text">${tCat(group.categorie)}</span>
                    <span class="nav-group-meta">
                        <span class="nav-group-icon" aria-hidden="true"></span>
                    </span>
                </button>
                <ul class="nav-sublist" id="${groupId}">
                    ${itemsMarkup}
                </ul>
            </li>
        `;
    }).join('');
}

function closeOtherNavGroups(currentGroup) {
    const navGroups = document.querySelectorAll('.nav-group');
    navGroups.forEach(group => {
        if (group !== currentGroup) {
            setGroupOpen(group, false);
        }
    });
}

function initNavGroups() {
    const navGroups = document.querySelectorAll('.nav-group');
    navGroups.forEach(group => {
        const toggle = group.querySelector('.nav-group-toggle');
        if (!toggle) {
            return;
        }

        toggle.addEventListener('click', () => {
            const shouldOpen = !group.classList.contains('is-open');
            closeOtherNavGroups(group);
            setGroupOpen(group, shouldOpen);
        });
    });
}

// Zoekfunctie
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }
        
        // Zoek in titels, samenvattingen en tags (beide talen)
        const results = visibleOnderwerpen().filter(onderwerp => {
            const titel = topicTitle(onderwerp);
            const samenvatting = topicSummary(onderwerp);
            const titelMatch = titel.toLowerCase().includes(query);
            const samenvattingMatch = samenvatting.toLowerCase().includes(query);
            const tagsMatch = onderwerp.tags.some(tag => tag.toLowerCase().includes(query));
            // Ook zoeken in NL-titel als we in EN zitten
            const nlTitelMatch = onderwerp.titel.toLowerCase().includes(query);
            const nlSamenvattingMatch = onderwerp.samenvatting.toLowerCase().includes(query);

            return titelMatch || samenvattingMatch || tagsMatch || nlTitelMatch || nlSamenvattingMatch;
        });

        if (results.length > 0) {
            searchResults.classList.add('active');
            searchResults.innerHTML = results.map(onderwerp => `
                <a class="search-result-item" href="#${onderwerp.id}">
                    <h3>${highlightMatch(topicTitle(onderwerp), query)}</h3>
                    <p>${highlightMatch(topicSummary(onderwerp), query)}</p>
                    <p><small>${t('tags')}: ${escapeHtml(onderwerp.tags.map(tTag).join(', '))}</small></p>
                </a>
            `).join('');
            animateSearchResultsIn(searchResults);
        } else {
            searchResults.classList.add('active');
            searchResults.innerHTML = `<p>${t('noResults')}</p>`;
        }
    });
    searchInput.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
    });
    searchResults.addEventListener('click', event => {
        if (!event.target.closest('a.search-result-item')) return;
        searchResults.classList.remove('active');
    });
}

// Laat zoekresultaten zacht binnenkomen tijdens het typen (GSAP micro-interactie).
function animateSearchResultsIn(searchResults) {
    if (getComputedStyle(document.documentElement).getPropertyValue('--interface-motion').trim() === 'none') return;
    if (typeof gsap === 'undefined') return;
    if (prefersQuietInterface()) return;

    const items = searchResults.querySelectorAll('.search-result-item');
    if (!items.length) return;

    gsap.killTweensOf(items);
    gsap.from(items, {
        opacity: 0,
        y: 12,
        duration: 0.3,
        ease: 'power2.out',
        stagger: { amount: 0.2 },
        immediateRender: true,
        overwrite: 'auto',
        clearProps: 'opacity,transform'
    });
}

// Highlight zoekterm in tekst
function highlightMatch(text, query) {
    const literal = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = String(text).split(new RegExp(`(${literal})`, 'gi'));
    return parts.map((part, i) => i % 2
        ? `<span class="highlight">${escapeHtml(part)}</span>`
        : escapeHtml(part)).join('');
}


// Lettergrootte instelling
function initFontSize() {
    const sizes = ['klein', 'medium', 'groot'];
    const saved = localStorage.getItem('fontsize') || 'medium';
    function setSize(size) {
        document.documentElement.setAttribute('data-fontsize', size);
        localStorage.setItem('fontsize', size);
        document.querySelectorAll('.font-size-btn').forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.size === size);
        });
    }

    setSize(saved);

    document.querySelectorAll('.font-size-btn').forEach(btn => {
        btn.addEventListener('click', () => setSize(btn.dataset.size));
    });
}

// Taalwissel
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Update taalknop actieve staat
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    // Update statische UI-elementen
    document.title = t('pageTitle');
    const siteTitle = document.querySelector('header h1');
    if (siteTitle) siteTitle.textContent = t('siteTitle');
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.textContent = t('subtitle');
    const navHeading = document.querySelector('#main-nav h2');
    if (navHeading) navHeading.textContent = t('navHeading');
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
    const fontControls = document.querySelector('.font-size-controls');
    if (fontControls) fontControls.setAttribute('aria-label', t('fontSizeLabel'));
    const fontBtns = document.querySelectorAll('.font-size-btn');
    const fontTitles = [t('fontSizeSmall'), t('fontSizeMedium'), t('fontSizeLarge')];
    fontBtns.forEach((btn, i) => { btn.title = fontTitles[i]; });

    // Herbouw navigatie
    buildNav();
    initNavGroups();

    // Herlaad huidig topic of welcome
    onderwerpTextCache.clear();
    const hash = window.location.hash.slice(1);
    const onderwerp = hash ? onderwerpen.find(o => o.id === hash) : null;
    if (onderwerp) {
        renderOnderwerp(onderwerp);
        updateActiveNav(onderwerp.id);
    } else {
        renderWelcome();
        updateActiveNav(null);
    }
}

function initLang() {
    const saved = localStorage.getItem('lang') || 'nl';
    currentLang = saved;
    document.documentElement.setAttribute('lang', saved);
    document.documentElement.setAttribute('data-lang', saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.lang === saved);
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Stel statische elementen in bij eerste load
    document.title = t('pageTitle');
    const siteTitle = document.querySelector('header h1');
    if (siteTitle) siteTitle.textContent = t('siteTitle');
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.textContent = t('subtitle');
    const navHeading = document.querySelector('#main-nav h2');
    if (navHeading) navHeading.textContent = t('navHeading');
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
}

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    readStadiumParam(); // voor buildNav, zodat het menu het juiste stadium kent
    initLang();
    restoreQuietInterface();
    buildNav();
    initNavGroups();
    initRouter();
    initSearch();
    initFontSize();
    initKeyboardNav();
    initVensterLinks();
});


// Eén inhoudsverzameling, acht expliciete interfacecondities. De URL draagt de reis.
const JOURNEY = [
    { name: 'Tekst en links', topic: 'les-de-link' },
    { name: 'Koppen en lijsten', topic: 'les-de-lijst' },
    { name: 'Navigatie', topic: 'navigatie-en-wayfinding' },
    { name: 'Zoeken', topic: 'yahoo-en-google' },
    { name: 'Vormgeving', topic: 'esthetiek-en-bruikbaarheid' },
    { name: 'Verwantschap', topic: 'ongebruikelijke-interfaces' },
    { name: 'Voorkeuren', topic: 'hedonisch-en-pragmatisch' },
    { name: 'Kennis als UX', topic: 'klik-hier' }
];

function getJourneyStep() {
    const value = new URLSearchParams(window.location.search).get('reis');
    return value !== null && /^[0-7]$/.test(value) ? Number(value) : null;
}

function journeyUrl(step, topic = JOURNEY[step].topic) {
    const url = new URL(window.location.href);
    url.searchParams.delete('stadium');
    url.searchParams.set('reis', String(step));
    url.hash = topic;
    return url.pathname + url.search + url.hash;
}

function journeyExitUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete('reis'); url.searchParams.set('stadium', 'alles');
    return url.pathname + url.search + url.hash;
}

function journeyInvitation() {
    return `<section class="journey-invitation"><h2>Lessen</h2><p>Begin met de link en onderzoek daarna hoe ordening je weg bepaalt. Je hebt een browser en een notitieblad nodig; programmeerkennis is voor deze twee lessen niet vereist.</p><p><a href="${journeyUrl(0)}">Les 1: De link</a></p><p><a href="${journeyUrl(1)}">Les 2: Koppen en de lijst</a></p></section>`;
}

function journeyNav(bottom = false) {
    const step = getJourneyStep();
    if (step === null) return '';
    const previous = step > 0 ? `Vorige: ${JOURNEY[step - 1].name}` : '';
    const next = step < JOURNEY.length - 1 ? `Volgende: ${JOURNEY[step + 1].name}` : 'Verder in de volledige cursus';
    return `<nav class="journey-nav" aria-label="Vorige en volgende">
        ${step > 0 ? `<a href="${journeyUrl(step - 1)}" aria-label="${escapeHtml(previous)}" title="${escapeHtml(previous)}">${bottom ? `← ${escapeHtml(previous)}` : '← Vorige'}</a>` : '<span></span>'}
        <a href="${journeyUrl(step)}">${bottom ? 'Terug naar het onderwerp' : 'Onderwerp'}</a>
        <a href="${step < JOURNEY.length - 1 ? journeyUrl(step + 1) : journeyExitUrl()}" aria-label="${escapeHtml(next)}" title="${escapeHtml(next)}">${bottom ? `${escapeHtml(next)} →` : step < JOURNEY.length - 1 ? 'Volgende →' : 'Overzicht →'}</a>
    </nav>`;
}

function updateJourneyShell(topic) {
    const step = getJourneyStep();
    document.documentElement.classList.toggle('is-journey', step !== null);
    let shell = document.getElementById('journey-shell');
    syncJourneyMenu(step !== null);
    if (step === null) { if (shell) shell.remove(); return; }
    if (!shell) {
        shell = document.createElement('aside'); shell.id = 'journey-shell';
        shell.setAttribute('aria-label', 'Lesnavigatie');
        document.querySelector('header').after(shell);
    }
    document.documentElement.classList.remove('journey-no-landmarks', 'journey-plain', 'is-parachute');
    const world = JOURNEY[step];
    shell.innerHTML = `<details class="journey-map"><summary>${escapeHtml(world.name)} (${step + 1}/${JOURNEY.length})</summary>
        <ol>${JOURNEY.map((item, i) => `<li><a href="${journeyUrl(i)}" ${i === step ? 'aria-current="step"' : ''}>${escapeHtml(item.name)}</a></li>`).join('')}</ol>
        <a href="${journeyExitUrl()}">Volledige inhoudsopgave</a></details>
        ${journeyNav()}
        ${topic ? `<details class="interface-views"><summary>Dezelfde pagina, andere weergave</summary><ul>${JOURNEY.map((item, i) => `<li><a href="${journeyUrl(i, topic.id)}" ${i === step ? 'aria-current="page"' : ''}>${escapeHtml(item.name)}</a></li>`).join('')}</ul></details>` : ''}`;


}

const COURSE_INDEX_IDS = ['norman-door', 'ethiek-van-design', 'affordances-en-signifiers', 'geheugen-en-cognitieve-belasting', 'navigatie-en-wayfinding', 'esthetiek-en-bruikbaarheid', 'uitvinding-van-undo', 'ongebruikelijke-interfaces'];
const INDEX_GROUPS = {
    theme: [['Waarnemen en begrijpen', [0, 2, 3, 5]], ['Handelen en oriënteren', [4, 6]], ['Waarden en experiment', [1, 7]]],
    question: [['Waarom gaat het mis?', [0, 2, 3]], ['Hoe vind ik mijn weg terug?', [4, 6]], ['Welke ervaring wil ik mogelijk maken?', [1, 5, 7]]]
};

function courseIndexMarkup(mode) {
    const items = COURSE_INDEX_IDS.map(id => onderwerpen.find(item => item.id === id));
    const list = indexes => `<ul>${indexes.map(i => `<li><a href="#${items[i].id}">${escapeHtml(topicTitle(items[i]))}</a></li>`).join('')}</ul>`;
    if (mode === 'flat') return list(items.map((_, i) => i));
    return INDEX_GROUPS[mode].map(([name, indexes]) => `<h3>${escapeHtml(name)}</h3>${list(indexes)}`).join('');
}

function initCourseExperiments(root) {
    root.querySelectorAll('[data-course-experiment="links"]').forEach(block => {
        // Het zijn de echte bronverwijzingen van deze les, geen apart speelvenster.
        const links = Array.from(root.querySelectorAll('a[href^="#"]')).filter(a => !a.closest('[data-course-experiment], nav'));
        const originals = links.map(a => a.textContent);
        const select = block.querySelector('select');
        const input = block.querySelector('input');
        const status = block.querySelector('[role="status"]');
        const source = block.querySelector('pre code');
        links.forEach((a, i) => { const option = document.createElement('option'); option.value = i; option.textContent = originals[i]; select.appendChild(option); });
        if (!links.length) return;
        const showSource = () => {
            const i = Number(select.value); input.value = links[i].textContent;
            source.textContent = `<a href="${links[i].getAttribute('href')}">${links[i].textContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</a>`;
        };
        const save = mode => saveCourseExperiment('links', {
            mode, selected: select.value, labels: links.map(a => a.textContent)
        });
        const setMode = value => {
            links.forEach((a, i) => { a.textContent = value === 'vague' ? 'Klik hier' : value === 'curious' ? `Verwijzing ${i + 1}` : originals[i]; });
            block.querySelectorAll('[data-link-mode]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.linkMode === value)));
            status.textContent = value === 'original' ? 'De oorspronkelijke linkteksten zijn terug.' : 'Linkteksten gewijzigd. Bestemmingen ongewijzigd.';
            showSource(); save(value);
        };
        block.querySelectorAll('[data-link-mode]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.linkMode)));
        select.addEventListener('change', () => { showSource(); save('custom'); });
        block.querySelector('[data-apply-link]').addEventListener('click', () => {
            const value = input.value.trim();
            if (!value) { status.textContent = 'Geef de link een zichtbare tekst.'; input.focus(); return; }
            links[Number(select.value)].textContent = value;
            block.querySelectorAll('[data-link-mode]').forEach(button => button.setAttribute('aria-pressed', 'false'));
            showSource(); save('custom'); status.textContent = 'Linktekst gewijzigd.';
        });
        const saved = readCourseExperiment('links');
        if (saved && Array.isArray(saved.labels) && saved.labels.length === links.length) {
            links.forEach((a, i) => { if (typeof saved.labels[i] === 'string') a.textContent = saved.labels[i]; });
            select.value = String(Math.max(0, Math.min(links.length - 1, Number(saved.selected) || 0)));
            block.querySelectorAll('[data-link-mode]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.linkMode === saved.mode)));
            status.textContent = 'Eerdere linkteksten hersteld.';
        }
        showSource();
    });
    root.querySelectorAll('[data-course-experiment="index"]').forEach(block => {
        const output = block.querySelector('[data-course-index]');
        const source = block.querySelector('pre code');
        const status = block.querySelector('[role="status"]');
        block.querySelectorAll('[data-index-mode]').forEach(button => button.addEventListener('click', () => {
            const mode = button.dataset.indexMode;
            output.innerHTML = courseIndexMarkup(mode);
            source.textContent = output.innerHTML.replace(/<\/ul>/g, '</ul>\n').replace(/<li>/g, '\n  <li>').replace(/<h3>/g, '\n<h3>');
            block.querySelectorAll('[data-index-mode]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
            status.textContent = mode === 'flat' ? 'Acht onderwerpen.' : 'Dezelfde acht onderwerpen, anders geordend.';
            saveCourseExperiment('index', { mode });
        }));
        const mode = readCourseExperiment('index')?.mode;
        block.querySelector(`[data-index-mode="${['flat', 'theme', 'question'].includes(mode) ? mode : 'flat'}"]`).click();
    });
    // De echte startindex wordt in wereld 0 vlak en vanaf wereld 1 gegroepeerd.
    if (getJourneyStep() === 0) root.querySelectorAll('.welcome-index h3').forEach(heading => heading.hidden = true);
}

// Alleen proefkeuzes, tijdelijk in dit tabblad. Geen antwoorden of leerlinggegevens.
function readCourseExperiment(kind) {
    try { return JSON.parse(sessionStorage.getItem(`cursus-ux:${location.pathname}${location.hash}:${kind}`) || sessionStorage.getItem(`cursus-ux:${location.pathname}${location.search}${location.hash}:${kind}`) || 'null'); }
    catch (error) { return null; }
}
function saveCourseExperiment(kind, value) {
    try { sessionStorage.setItem(`cursus-ux:${location.pathname}${location.hash}:${kind}`, JSON.stringify(value)); }
    catch (error) { /* De proef blijft werken wanneer browseropslag geblokkeerd is. */ }
}
function prefersQuietInterface() {
    return document.documentElement.classList.contains('journey-still') || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
function restoreQuietInterface() {
    try { document.documentElement.classList.toggle('journey-still', sessionStorage.getItem('cursus-ux:quiet') === 'true'); }
    catch (error) { /* Systeemvoorkeur blijft gelden zonder browseropslag. */ }
}

const JOURNEY_ACTIVITIES = {
    2: { action: 'landmarks', code: '<nav aria-label="Je bent hier">\n  <a href="#">Start</a>\n  <span aria-current="page">Deze pagina</span>\n</nav>' },
    3: { action: 'search', code: '<label for="vraag">Zoek in de cursus</label>\n<input id="vraag" type="search">' },
    4: { action: 'appearance', code: '<h2>Een kop met dezelfde woorden</h2>\n<p>Een alinea met dezelfde inhoud.</p>' },
    5: { action: 'relations', code: '<aside aria-label="Verwante onderwerpen">\n  <a href="#ethiek-van-design">Ethiek van design</a>\n</aside>' },
    6: { action: 'quiet', code: '<button type="button" aria-pressed="true">\n  Rustige interface\n</button>' },
    7: { action: 'audit', code: '<a href="#norman-door">De Norman door</a>' }
};

function initJourneyActivity(root, topic) {
    const step = getJourneyStep();
    const activity = JOURNEY_ACTIVITIES[step];
    if (!activity || topic.id !== JOURNEY[step].topic) return;
    const section = document.createElement('section');
    section.className = 'journey-activity';
    section.setAttribute('aria-labelledby', 'journey-activity-heading');
    const labels = { landmarks: 'Plaatsaanduiding verbergen', search: 'Zoekveld', appearance: 'Vormgeving uit', relations: 'Trefwoorden', quiet: 'Minder beweging', audit: 'Linkteksten' };
    section.removeAttribute('aria-labelledby');
    section.innerHTML = `<details><summary>Weergave</summary>
        <button type="button" data-journey-action="${activity.action}" ${['landmarks', 'appearance', 'quiet'].includes(activity.action) ? 'aria-pressed="false"' : ''}>${labels[activity.action]}</button>
        <p role="status" aria-live="polite"></p>
        <details><summary>HTML</summary><pre><code>${escapeHtml(activity.code)}</code></pre></details></details>`;
    root.append(section);
    const button = section.querySelector('button');
    const status = section.querySelector('[role="status"]');
    let changed = false;
    if (activity.action === 'quiet') {
        changed = document.documentElement.classList.contains('journey-still');
        button.setAttribute('aria-pressed', String(changed));
        button.textContent = changed ? 'Systeemvoorkeur' : labels[activity.action];
    }
    button.addEventListener('click', () => {
        const html = document.documentElement;
        const focusElement = element => {
            if (!element) { status.textContent = 'De bediening is niet beschikbaar.'; return; }
            element.scrollIntoView({ block: 'center', behavior: 'instant' }); element.focus({ preventScroll: true });
        };
        if (activity.action === 'landmarks') {
            changed = !changed; html.classList.toggle('journey-no-landmarks', changed);
            button.textContent = changed ? 'Plaatsaanduiding tonen' : labels[activity.action];
            status.textContent = changed ? 'Kruimelpad en stapteller zijn tijdelijk verborgen. Menu en paginatitel blijven zichtbaar.' : 'De plaatsaanwijzingen zijn terug.';
        } else if (activity.action === 'appearance') {
            changed = !changed; html.classList.toggle('journey-plain', changed);
            ['style-bootstrap', 'style-icons', 'style-main', 'style-composition', 'style-kolom', 'style-raster', 'style-flexibel'].forEach(id => { document.getElementById(id).disabled = changed; });
            button.textContent = changed ? 'Vormgeving aan' : labels[activity.action];
            status.textContent = changed ? 'De stijllagen zijn uitgeschakeld. Je leest dezelfde pagina zonder de huisstijl.' : 'Dezelfde inhoud heeft weer de oorspronkelijke vormgeving.';
        } else if (activity.action === 'search') {
            focusElement(document.getElementById('search-input'));
            status.textContent = 'Het zoekveld heeft focus.';
        } else if (activity.action === 'relations') {
            focusElement(document.querySelector('.tags-sidebar .tag-btn'));
            status.textContent = 'De trefwoorden hebben focus.';
        } else if (activity.action === 'quiet') {
            changed = !changed; html.classList.toggle('journey-still', changed);
            try { sessionStorage.setItem('cursus-ux:quiet', String(changed)); } catch (error) { /* Niet nodig voor de werking. */ }
            button.textContent = changed ? 'Systeemvoorkeur' : labels[activity.action];
            if (changed && typeof gsap !== 'undefined') {
                const targets = document.querySelectorAll('.onderwerp-content > *, .nav-sublist > li, .search-result-item, .tag-context > *');
                gsap.killTweensOf(targets); gsap.set(targets, { clearProps: 'opacity,transform' });
            }
            status.textContent = changed ? 'Extra beweging staat uit in dit tabblad. Je browservoorkeur blijft altijd gelden.' : 'De interface volgt opnieuw de bewegingsvoorkeur van je browser.';
        } else if (activity.action === 'audit') {
            focusElement(root.querySelector('[data-demo="klik-hier"] button'));
            status.textContent = 'De knop voor linkteksten heeft focus.';
        }
        if (button.hasAttribute('aria-pressed')) button.setAttribute('aria-pressed', String(changed));
    });
}


// Op een smal scherm mag het volledige onderwerpenmenu de halte niet wegdrukken.
function syncJourneyMenu(active) {
    let wrapper = document.getElementById('journey-menu');
    const list = document.getElementById('nav-list');
    if (!active) {
        if (wrapper) { wrapper.before(list); wrapper.remove(); }
        return;
    }
    if (wrapper || !list) return;
    wrapper = document.createElement('details'); wrapper.id = 'journey-menu';
    const summary = document.createElement('summary'); summary.textContent = 'Onderwerpen: open het menu';
    list.before(wrapper); wrapper.append(summary, list);
    const narrow = window.matchMedia('(max-width: 768px)');
    wrapper.open = !narrow.matches;
    // De listener bestaat zolang deze pagina bestaat; slechts één wrapper per pagina.
    narrow.addEventListener('change', event => { wrapper.open = !event.matches; });
    wrapper.addEventListener('click', event => {
        if (narrow.matches && event.target.closest('a[href]')) wrapper.open = false;
    });
}

function captureInterfaceReadingPosition() {
    const root = document.querySelector('.onderwerp-content');
    if (!root) return null;
    const blocks = Array.from(root.querySelectorAll(':scope > [id]'));
    const anchor = blocks.filter(block => block.getBoundingClientRect().top <= 100).pop() || blocks[0];
    return {
        atTop: window.scrollY < 24,
        id: anchor?.id,
        offset: anchor?.getBoundingClientRect().top || 0,
        scroll: window.scrollY,
        details: Array.from(root.querySelectorAll('details')).map(detail => detail.open),
        shellDetails: Array.from(document.querySelectorAll('#journey-shell > details')).map(detail => detail.open)
    };
}
function restoreInterfaceReadingPosition(reading) {
    if (!reading) return;
    document.querySelectorAll('.onderwerp-content details').forEach((detail, i) => {
        if (typeof reading.details[i] === 'boolean') detail.open = reading.details[i];
    });
    document.querySelectorAll('#journey-shell > details').forEach((detail, i) => {
        if (typeof reading.shellDetails[i] === 'boolean') detail.open = reading.shellDetails[i];
    });
    if (reading.atTop) { window.scrollTo({ top: 0, behavior: 'instant' }); return; }
    const target = reading.id ? document.getElementById(reading.id) : null;
    if (target) window.scrollBy({ top: target.getBoundingClientRect().top - reading.offset, behavior: 'instant' });
    else window.scrollTo({ top: reading.scroll, behavior: 'instant' });
}

// Bestaande opnamen uit het referentieoverzicht; titels en bronnen blijven gelijk.
const INTERFACE_REFERENCES = [
    { title: 'My Boyfriend Came Back from the War', maker: 'Olia Lialina, 1996', image: 'lialina-war.jpg', height: 906, alt: 'Zwart-witte beelden en tekst verdeeld over drie verticale frames.', url: 'https://sites.rhizome.org/anthology/lialina.html' },
    { title: 'wwwwwwwww.jodi.org', maker: 'JODI, Joan Heemskerk en Dirk Paesmans', image: 'jodi.jpg', height: 500, alt: 'Groene tekens op een zwarte achtergrond, met een scrollbar binnen het beeld.', url: 'https://wwwwwwwww.jodi.org/' },
    { title: 'Nutshell', maker: 'Nicky Case', image: 'nutshell.jpg', height: 906, alt: 'Een uitleg die zich binnen de oorspronkelijke pagina openvouwt.', url: 'https://ncase.me/nutshell/' }
];
function appendInterfaceReferences(root, topic) {
    if (getJourneyStep() === null || topic.id === 'ongebruikelijke-interfaces') return;
    const section = document.createElement('section');
    section.className = 'interface-references'; section.id = 'interface-references';
    section.innerHTML = `<h2>Referenties</h2><ul>${INTERFACE_REFERENCES.map(item => `<li><a href="${item.url}" target="_blank" rel="noopener">${currentStadium >= 4 ? `<img src="assets/referentie/${item.image}" width="800" height="${item.height}" alt="${escapeHtml(item.alt)}" loading="lazy">` : ''}<span>${escapeHtml(item.title)}</span></a><small>${escapeHtml(item.maker)}</small></li>`).join('')}</ul>
        <p class="interface-reference-source"><a href="#ongebruikelijke-interfaces">Overzicht van de referenties</a>. Schermafbeeldingen uit de bestaande verzameling, 21 oktober 2026.</p>`;
    root.append(section);
}


function renderPageHeading(onderwerp) {
    const title = topicTitle(onderwerp);
    const separator = /[:;]\s+/.exec(title);
    const parts = separator ? [title.slice(0, separator.index), title.slice(separator.index + separator[0].length)] : [title];
    return `<h1>${escapeHtml(parts[0])}</h1>${parts.length > 1 ? `<h2>${escapeHtml(parts[1])}</h2>` : ''}`;
}

function compositionUrl(mode, variant = 0) {
    const url = new URL(window.location.href);
    url.searchParams.set('compositie', mode);
    if (mode === 'flexibel' && variant === 1) url.searchParams.set('verdeling', '2');
    else url.searchParams.delete('verdeling');
    return url.pathname + url.search + url.hash;
}

function initCompositionComparison(root) {
    if (currentStadium < 4) return;
    const modes = ['kolom', 'raster', 'flexibel'];
    const params = new URLSearchParams(window.location.search);
    const mode = modes.includes(params.get('compositie')) ? params.get('compositie') : 'kolom';
    const variant = params.get('verdeling') === '2' ? 1 : 0;
    root.dataset.composition = mode;
    root.toggleAttribute('data-composition-active', modes.includes(params.get('compositie')));
    root.dataset.compositionVariant = String(variant);
    // Dezelfde blokken, in dezelfde volgorde. Alleen hun breedte verandert.
    const sections = Array.from(root.children).filter(el => el.tagName === 'SECTION' && !el.matches('.interface-references, .journey-activity'));
    sections.forEach((section, i) => {
        section.dataset.compositionItem = '';
        const sequence = variant ? [2, 4, 4, 2] : [4, 2, 2, 4];
        const span = sections.length % 2 === 1 && i === sections.length - 1 ? 6 : sequence[i % sequence.length];
        section.style.setProperty('--composition-span', String(span));
    });
    const controls = document.createElement('div');
    controls.className = 'composition-controls';
    controls.id = 'composition-controls';
    controls.innerHTML = `<nav aria-label="Compositie">
        ${modes.map(value => `<a href="${compositionUrl(value, variant)}" ${value === mode ? 'aria-current="true"' : ''}>${value === 'kolom' ? 'Kolom' : value === 'raster' ? 'Raster' : 'Flexibel'}</a>`).join('')}
        </nav>
        ${mode === 'flexibel' ? `<nav aria-label="Verdeling"><a href="${compositionUrl(mode, 0)}" ${variant === 0 ? 'aria-current="true"' : ''}>Verdeling 1</a><a href="${compositionUrl(mode, 1)}" ${variant === 1 ? 'aria-current="true"' : ''}>Verdeling 2</a></nav>` : ''}
        <label class="composition-guide"><input type="checkbox"> Raster tonen</label>
        <details><summary>Regels</summary><p>De tekst, beelden en leesvolgorde blijven gelijk.</p><p>Raster gebruikt CSS Grid met zes kolommen; tekstblokken nemen er drie in. Flexibel gebruikt CSS Flexbox met afwisselend brede en smalle blokken in een verhouding van vier tot twee. De tweede verdeling keert die verhouding om. Op een smal scherm staan de blokken onder elkaar.</p><p>De inhoud en DOM-volgorde blijven gelijk. Alleen de afzonderlijke CSS-regels voor Kolom, Raster of Flexibel bepalen de indeling.</p><p><a href="https://niggli.ch/en/products/rastersysteme-fur-die-visuelle-gestaltung" target="_blank" rel="noopener">Grid Systems in Graphic Design, Josef Müller-Brockmann</a><br><a href="https://www.slanted.de/product/flexible-visual-systems/" target="_blank" rel="noopener">Flexible Visual Systems, Martin Lorenz</a></p></details>`;
    root.prepend(controls);
    const checkbox = controls.querySelector('input');
    const saved = readCourseExperiment('composition-guide');
    checkbox.checked = saved === true;
    root.classList.toggle('composition-grid-visible', checkbox.checked);
    checkbox.addEventListener('change', () => {
        root.classList.toggle('composition-grid-visible', checkbox.checked);
        saveCourseExperiment('composition-guide', checkbox.checked);
    });
}


async function appendReviewStatus(root, topic) {
    const note = document.createElement('aside');
    note.className = 'course-review-status';
    note.setAttribute('aria-label', 'Bron- en kwaliteitscontrole');
    const link = document.createElement('a');
    link.href = `checks.php?topic=${encodeURIComponent(topic.id)}`;
    link.textContent = currentLang === 'en' ? 'Source checks and review dates' : 'Broncontroles en controledatums';
    note.append(link);
    root.append(note);
    try {
        const response = await fetch(`api.php?resource=review&id=${encodeURIComponent(topic.id)}`, {cache: 'no-cache'});
        if (!response.ok) return;
        const review = await response.json();
        if (!root.isConnected) return;
        const date = document.createElement('p');
        date.textContent = currentLang === 'en'
            ? `Last review of the Dutch source: ${review.last_checked_at || 'not recorded'}. ${review.needs_content_review ? 'Content changed since this review.' : 'The content matches the reviewed version.'}`
            : `Laatste paginareview (NL): ${review.last_checked_at || 'niet vastgelegd'}. ${review.needs_content_review ? 'Inhoud gewijzigd sinds deze controle: hercontrole nodig.' : 'De inhoud komt overeen met de beoordeelde versie.'}`;
        note.append(date);
    } catch (_) {
        // The check overview remains reachable if the small status request fails.
    }
}
