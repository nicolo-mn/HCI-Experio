import { reactive } from 'vue'
import duomoImg from '../assets/img-all/duomo-milano.png'
import galleriaImg from '../assets/img-all/galleria-vittorio-emanuele.jpg'
import castelloImg from '../assets/img-all/castello-karlsruhe.jpg'
import muroImg from '../assets/img-all/muro-berlino.jpg'
import paolaIcon from '../assets/icons-all/paola.svg'
import gianniIcon from '../assets/icons-all/gianni.svg'
import ludovicaIcon from '../assets/icons-all/ludovica.svg'
import ernstIcon from '../assets/img-all/ernst.png' // Ernst is png in Profilo, checking usage
import defaultIcon from '../assets/icons-all/person-fill.svg'

const STORE_KEY = 'hci_app_store_v11'

// Initial seed data
const SEED_DATA = {
    users: [
        {
            username: 'Paola',
            name: 'Paola',
            email: 'paola@example.com',
            description: 'Amo viaggiare e scoprire nuovi posti!',
            avatar: 'paola', // referencing local asset name if possible, or we handle avatars later
            zones: ['Milano', 'Roma', 'Karlsruhe']
        },
        {
            username: 'Giovanni',
            name: 'Giovanni',
            email: 'giovanni@example.com',
            description: 'Appassionato di architettura.',
            avatar: 'gianni',
            zones: ['Londra', 'Milano', 'Venezia']
        },
        {
            username: 'Ludovica',
            name: 'Ludovica',
            email: 'ludovica@example.com',
            description: 'Food lover.',
            avatar: 'ludovica',
            zones: ['Copenhagen', 'Stoccolma', 'Oslo']
        },
        {
            username: 'Ernst',
            name: 'Ernst',
            email: 'ernst@example.com',
            description: 'Food lover.',
            avatar: 'ernst',
            zones: ['Karlsruhe', 'Berlino']
        }
    ],
    currentUser: null, // Will be set on login/signup
    advices: [
        {
            id: 1,
            title: 'Duomo di Milano',
            description: 'Una visita imperdibile! Salite sulle terrazze.',
            location: 'Milano',
            sender: 'Giovanni',
            receiver: 'Ludovica', // Received by Ludovica (Trip to Milano)
            image: duomoImg,
            timestamp: Date.now()
        },
        {
            id: 2,
            title: 'Galleria Vittorio Emanuele II',
            description: 'Bellissima galleria dello shopping.',
            location: 'Milano',
            sender: 'Paola',
            receiver: 'Ludovica', // Received by Ludovica (Trip to Milano)
            image: galleriaImg,
            timestamp: Date.now()
        },
        {
            id: 3,
            title: 'Castello di Karlsruhe',
            description: 'Si tratta di un castello molto affascinante con all’interno un museo ed un grande parco attorno, perfetto per te che sei appassionata di passeggiate!!!',
            location: 'Karlsruhe',
            sender: 'Paola', // Sent by Paola (Zone Karlsruhe)
            receiver: 'Giovanni', // Received by Giovanni (Trip to Karlsruhe)
            image: castelloImg,
            timestamp: Date.now()
        },
        {
            id: 4,
            title: 'Muro di Berlino',
            description: 'Pezzo di storia da vedere assolutamente.',
            location: 'Berlino',
            sender: 'Ernst',
            receiver: 'Giovanni', // Received by Giovanni (Trip to Berlin)
            image: muroImg,
            timestamp: Date.now()
        },
        {
            id: 5,
            title: 'Castello di Rosenborg',
            description: 'Super magico!',
            location: 'Copenhagen',
            sender: 'Ernst',
            receiver: 'Paola', // Received by Giovanni (Trip to Berlin)
            image: muroImg,
            timestamp: Date.now()
        },

    ],
    trips: [
        {
            id: 1,
            location: 'Copenhagen',
            arrival: '2023-12-01',
            departure: '2023-12-05',
            user: 'Paola'
        },
        {
            id: 2,
            location: 'Berlino',
            arrival: '2024-01-10',
            departure: '2024-01-15',
            user: 'Giovanni'
        },
        {
            id: 3,
            location: 'Karlsruhe',
            arrival: '2024-02-01',
            departure: '2024-02-05',
            user: 'Giovanni'
        },
        {
            id: 4,
            location: 'Milano',
            arrival: '2024-03-10',
            departure: '2024-03-20',
            user: 'Ludovica'
        }
    ],
    messages: [
        {
            id: 1,
            text: 'Ciao, quanto tempo ci vuole\nper visitare tutto?',
            sender: 'Paola',
            receiver: 'Giovanni',
            isMine: false,
            timestamp: Date.now() - 100000
        },
        {
            id: 2,
            text: 'Circa 2 ore! Secondo me è bellissimo la mattina',
            sender: 'Giovanni',
            receiver: 'Paola',
            isMine: false,
            timestamp: Date.now() - 50000
        },
        {
            id: 3,
            text: 'Grazie mille!',
            sender: 'Paola',
            receiver: 'Giovanni',
            isMine: true,
            timestamp: Date.now()
        }
    ]
}

export const store = reactive({
    state: {
        users: [],
        currentUser: null,
        currentUser: null,
        advices: [],
        trips: [],
        advices: [],
        trips: [],
        messages: [],
        currentNotification: null
    },

    init() {
        const data = localStorage.getItem(STORE_KEY)
        if (data) {
            try {
                const parsed = JSON.parse(data)
                this.state.users = parsed.users || []
                this.state.currentUser = parsed.currentUser || null
                this.state.advices = parsed.advices || []
                this.state.advices = parsed.advices || []
                this.state.trips = parsed.trips || []
                this.state.messages = parsed.messages || []
            } catch (e) {
                console.error('Failed to parse store data', e)
                this.seed()
            }
        } else {
            this.seed()
        }

    },

    seed() {
        this.state.users = [...SEED_DATA.users]
        this.state.advices = [...SEED_DATA.advices]
        this.state.advices = [...SEED_DATA.advices]
        this.state.trips = [...SEED_DATA.trips]
        this.state.messages = [...SEED_DATA.messages]
        // Default no current user on first seed, or we can default to Paola
        // this.state.currentUser = this.state.users[0]
        this.save()
    },

    save() {
        localStorage.setItem(STORE_KEY, JSON.stringify(this.state))
    },

    // User Methods
    signup(userData) {
        // Check if username exists
        const existing = this.state.users.find(u => u.username === userData.username)
        if (existing) {
            throw new Error('Username already taken')
        }

        const newUser = {
            username: userData.username,
            name: userData.name,
            email: userData.email,
            description: userData.description,
            avatar: userData.avatar || 'person-fill', // Can be 'person-fill' or base64 string
            zones: []
        }
        console.log("Signup New User Avatar Length:", newUser.avatar ? newUser.avatar.length : 0);

        this.state.users.push(newUser)
        this.state.currentUser = newUser

        // Initialize extended user props if not present (backward compatibility)
        if (!this.state.currentUser.unlockedBadges) {
            this.state.currentUser.unlockedBadges = []
            this.state.currentUser.hasUnreadBadges = false
        }

        this.save()
        return newUser
    },

    login(username) {
        const user = this.state.users.find(u => u.username === username)
        if (user) {
            this.state.currentUser = user
            // Initialize extended user props if not present
            if (!this.state.currentUser.unlockedBadges) {
                this.state.currentUser.unlockedBadges = []
                this.state.currentUser.hasUnreadBadges = false
            }
            if (!this.state.currentUser.zones) {
                this.state.currentUser.zones = []
            }
            this.save()
            this.checkUnreadBadges()
            return true
        }
        return false
    },

    logout() {
        this.state.currentUser = null
        this.save()
    },

    updateUserZones(zones) {
        if (this.state.currentUser) {
            this.state.currentUser.zones = zones
            this.save()
        }
    },

    // Advice Methods
    createAdvice(adviceData) {
        if (!this.state.currentUser) throw new Error('Must be logged in')

        const newAdvice = {
            id: Date.now(),
            title: adviceData.title,
            description: adviceData.description,
            location: adviceData.location || 'Sconosciuto', // We might need a field for this in the UI
            sender: this.state.currentUser.username,
            receiver: adviceData.receiver, // Target user
            image: adviceData.image || '',
            timestamp: Date.now()
        }

        this.state.advices.push(newAdvice)
        this.save()

        // Check Gamification for Sender
        this.checkGamification(this.state.currentUser, 'given')

        // Check Gamification for Receiver
        // Find the receiver user object
        const receiverUser = this.state.users.find(u => u.username === adviceData.receiver)
        if (receiverUser) {
            this.checkGamification(receiverUser, 'received')
        }

        return newAdvice
    },

    // Gamification Logic
    checkGamification(user, type) {
        if (!user) return

        const sentCount = this.getSentAdvices(user.username).length
        const receivedCount = this.getReceivedAdvices(user.username).length

        // Helper to unlock
        const unlock = (badgeId, title) => {
            if (!user.unlockedBadges) user.unlockedBadges = []

            if (!user.unlockedBadges.includes(badgeId)) {
                user.unlockedBadges.push(badgeId)
                user.hasUnreadBadges = true
                // Only show notification if this is the current user
                if (this.state.currentUser && user.username === this.state.currentUser.username) {
                    if (this.state.currentNotification) {
                        this.state.currentNotification.message += `\n🏆 Nuova Medaglia: ${title}!`
                    } else {
                        this.state.currentNotification = {
                            message: `🏆 Nuova Medaglia: ${title}!`
                        }
                    }

                    // Auto clear notification after 6s
                    setTimeout(() => {
                        this.state.currentNotification = null
                    }, 6000)
                }
                this.save()
            }
        }

        if (type === 'given') {
            if (sentCount >= 1) unlock('first-given', 'Primo Consiglio Dato')
            if (sentCount >= 50) unlock('50-given', '50 Consigli Dati')
        }

        if (type === 'received') {
            if (receivedCount >= 1) unlock('first-received', 'Primo Consiglio Ricevuto')
            if (receivedCount >= 50) unlock('50-received', '50 Consigli Ricevuti')
        }
    },

    checkUnreadBadges() {
        if (!this.state.currentUser) return
        if (this.state.currentUser.hasUnreadBadges) {
            // Logic to show "You have new badges!" or replay specific ones
            // For simplicity, just a generic message or checking the last one?
            // User requirement: "B ... should receive the notification ... IF it was the first ever received"
            // We can just show a "New Badges" notification
            this.state.currentNotification = {
                message: `🏆 Hai nuove medaglie non lette! Controlla il tuo profilo.`
            }
            setTimeout(() => {
                this.state.currentNotification = null
            }, 6000)
        }
    },

    markBadgesAsRead() {
        if (this.state.currentUser) {
            this.state.currentUser.hasUnreadBadges = false
            this.save()
        }
    },

    getReceivedAdvices(username) {
        return this.state.advices
            .filter(a => a.receiver === username)
            .sort((a, b) => b.timestamp - a.timestamp)
    },

    getSentAdvices(username) {
        return this.state.advices
            .filter(a => a.sender === username)
            .sort((a, b) => b.timestamp - a.timestamp)
    },

    // Trip Methods
    createTrip(tripData) {
        if (!this.state.currentUser) throw new Error('Must be logged in')

        const newTrip = {
            id: Date.now(),
            location: tripData.location,
            arrival: tripData.arrival,
            departure: tripData.departure,
            user: this.state.currentUser.username
        }

        this.state.trips.push(newTrip)
        this.save()
        return newTrip
    },

    getUserTrips(username) {
        return this.state.trips.filter(t => t.user === username)
    },

    getAdvicesByLocation(location) {
        // Case insensitive match
        const loc = location.toLowerCase()
        return this.state.advices.filter(a => a.location.toLowerCase() === loc)
    },

    // Message Methods
    sendMessage(text, receiver) {
        if (!this.state.currentUser) throw new Error('Must be logged in')

        const newMessage = {
            id: Date.now(),
            text: text,
            sender: this.state.currentUser.username,
            receiver: receiver,
            timestamp: Date.now()
        }

        this.state.messages.push(newMessage)
        this.save()
        return newMessage
    },

    getMessages(otherUser) {
        if (!this.state.currentUser) return []
        const myName = this.state.currentUser.username

        return this.state.messages.filter(m =>
            (m.sender === myName && m.receiver === otherUser) ||
            (m.sender === otherUser && m.receiver === myName)
        ).sort((a, b) => a.timestamp - b.timestamp)
    },

    getChatUsers() {
        if (!this.state.currentUser) return []
        const myName = this.state.currentUser.username
        const chatUsers = new Set()

        this.state.messages.forEach(m => {
            if (m.sender === myName) chatUsers.add(m.receiver)
            if (m.receiver === myName) chatUsers.add(m.sender)
        })

        return Array.from(chatUsers)
    },

    resolveAvatar(username) {
        const user = this.state.users.find(u => u.username === username)
        // console.log("resolveAvatar for", username, "found:", !!user, "avatar:", user ? user.avatar : 'N/A');
        if (!user) return defaultIcon

        // If avatar is one of the known keys, return that asset
        if (user.avatar === 'paola') return paolaIcon
        if (user.avatar === 'gianni') return gianniIcon
        if (user.avatar === 'ludovica') return ludovicaIcon
        if (user.avatar === 'ernst') return ernstIcon

        // If avatar looks like a data URL (uploaded image), return it directly
        if (user.avatar && user.avatar.startsWith('data:image')) {
            return user.avatar
        }

        // Default fallback
        return defaultIcon
    },

    deleteAdvice(id) {
        if (!this.state.currentUser) return
        this.state.advices = this.state.advices.filter(a => a.id !== id)
        this.save()
    },

    deleteChat(otherUser) {
        if (!this.state.currentUser) return
        const myName = this.state.currentUser.username

        // Filter out messages between current user and otherUser
        this.state.messages = this.state.messages.filter(m =>
            !((m.sender === myName && m.receiver === otherUser) ||
                (m.sender === otherUser && m.receiver === myName))
        )
        this.save()
    }
})
