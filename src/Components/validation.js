export function validateEmail(email) {
    if (email.trim().length <= 0) {
        return 0
    } else {
        return /\S+@\S+\.\S+/.test(email);
    }
}

export function validateName(name) {
    if (name.trim().length <= 0) {
        return 0
    } else {
        return /^[A-Za-z]+[A-Za-z0-9. '-_]+$/.test(name);
    }
}

export function validateInput(input) {
    if (input.trim().length <= 0) {
        return false
    } else {
        return true
    }
}

export function validatePassword(input) {
    const validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/
    if (input.trim().length < 7 || !input.match(validRegex)) {
        return false
    } else {
        return true
    }
}

