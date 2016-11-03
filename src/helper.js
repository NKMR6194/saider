import crypto from 'crypto';

export function escapeHTML(str) {
    str = str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    return str;
}

export function cspParams(host) {
    'default-src "self" ' + host + ' ws://' + host + '; img-src "self" *';
}

const seed = Date.now() * Math.random();
let serial = 1;

export function generateId() {
    const data = seed + ':' + serial++;
    return crypto.createHash('sha1').update(data).digest('hex');
}

export function passwordToHash(password) {
    let sha512 = crypto.createHash('sha512');
    sha512.update(password);
    return sha512.digest('hex');
}

export default {
    escapeHTML,
    cspParams,
    generateId,
    passwordToHash
};