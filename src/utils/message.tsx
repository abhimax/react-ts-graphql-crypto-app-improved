export const CryptoNotFound = (name: string) => {
    return name ? `${name} is not available.` : "";
};

export const CryptoExists = (name: string) => {
    return name ? `${name} is already exist!` : "";
};
